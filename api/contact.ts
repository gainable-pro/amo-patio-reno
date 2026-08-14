import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY || '';
const resend = new Resend(resendApiKey);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée. Utilisez POST.' });
  }

  try {
    const {
      fullName = 'Prospect anonyme',
      email = 'Non renseigné',
      phone = 'Non renseigné',
      audienceLabel = 'Non précisé',
      domainTitle = 'Non précisé',
      cityName = 'Non précisé',
      projectNotes = 'Aucune note complémentaire',
    } = req.body || {};

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; color: #2C2621; max-width: 600px; margin: 0 auto; border: 1px solid #e5e5e5; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #1C0E00; color: #ffffff; padding: 24px; text-align: center;">
          <h2 style="margin: 0; font-size: 22px;">AMO Patio Réno — Demande de Contact</h2>
          <p style="margin: 5px 0 0 0; color: #83ae42; font-size: 14px;">Marion BEAUPUY — Du montage à la performance</p>
        </div>
        
        <div style="padding: 24px; background-color: #FAF9F6;">
          <h3 style="color: #361B00; border-bottom: 2px solid #83ae42; padding-bottom: 8px; margin-top: 0;">Information du Lead</h3>
          
          <table style="width: 100%; text-align: left; font-size: 14px; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 40%;">Nom & Prénom :</td>
              <td style="padding: 8px 0;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Adresse Email :</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #4d843d;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Téléphone :</td>
              <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #4d843d;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Profil / Enjeu :</td>
              <td style="padding: 8px 0;"><span style="background-color: #e2e8f0; padding: 4px 8px; border-radius: 4px;">${audienceLabel}</span></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Domaine d'intervention :</td>
              <td style="padding: 8px 0;">${domainTitle}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Commune / Secteur :</td>
              <td style="padding: 8px 0;">${cityName}</td>
            </tr>
          </table>

          <h3 style="color: #361B00; border-bottom: 2px solid #83ae42; padding-bottom: 8px; margin-top: 24px;">Détails du Projet</h3>
          <div style="background-color: #ffffff; padding: 16px; border-radius: 6px; border: 1px solid #e2e8f0; font-size: 14px; white-space: pre-wrap; line-height: 1.6;">
            ${projectNotes}
          </div>
        </div>

        <div style="background-color: #f1f5f9; padding: 16px; text-align: center; font-size: 12px; color: #64748b;">
          Message envoyé depuis le formulaire officiel de <a href="https://www.amopatioreno.fr" style="color: #361B00; text-decoration: underline;">amopatioreno.fr</a>
        </div>
      </div>
    `;

    // Attempt 1: Send to official company emails
    let response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['contact@amopatioreno.fr', 'beaupuy.marion@outlook.fr', 'beaupuy.marion86@gmail.com'],
      subject: `Nouveau Message Client — ${fullName} (${cityName})`,
      html: htmlContent,
    });

    // Attempt 2: If Resend restricts to account owner in testing mode, send exclusively to registered account owner
    if (response.error) {
      console.warn('Attempt 1 error, fallback to registered account owner email:', response.error);
      response = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: ['beaupuy.marion86@gmail.com'],
        subject: `[PROSPECT WEB] Nouveau Message Client — ${fullName} (${cityName})`,
        html: htmlContent,
      });
    }

    if (response.error) {
      return res.status(400).json({ error: response.error.message });
    }

    return res.status(200).json({ success: true, data: response.data });
  } catch (error: any) {
    console.error('Error sending email via Resend:', error);
    return res.status(500).json({ error: error.message || 'Erreur lors de l\'envoi de l\'email.' });
  }
}
