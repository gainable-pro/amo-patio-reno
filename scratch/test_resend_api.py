import urllib.request
import json

url = "https://www.amopatioreno.fr/api/contact"
payload = {
    "fullName": "Test Client Marion",
    "email": "beaupuy.marion@outlook.fr",
    "phone": "0784429198",
    "audienceLabel": "Particulier",
    "domainTitle": "Rénovation Énergétique",
    "cityName": "Aix-en-Provence",
    "projectNotes": "Test d'envoi automatique via le site web"
}

data = json.dumps(payload).encode('utf-8')
req = urllib.request.Request(url, data=data, headers={'Content-Type': 'application/json'})

try:
    with urllib.request.urlopen(req) as response:
        res_body = response.read().decode('utf-8')
        print("Status Code:", response.status)
        print("Response Body:", res_body)
except urllib.error.HTTPError as e:
    print("HTTP Error Code:", e.code)
    print("Error Body:", e.read().decode('utf-8'))
except Exception as e:
    print("Error:", e)
