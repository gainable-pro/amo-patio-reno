import fs from 'fs';

let content = fs.readFileSync('src/data/blogArticles.ts', 'utf8');

// Fix specific unescaped quotes in keyTakeaways
content = content.replace("l'air est mise", "l\\'air est mise");
content = content.replace("l'humidité ambiante", "l\\'humidité ambiante");
content = content.replace("d'artisans", "d\\'artisans");
content = content.replace("d'eau", "d\\'eau");
content = content.replace("d'isolation", "d\\'isolation");

fs.writeFileSync('src/data/blogArticles.ts', content, 'utf8');
console.log('Quotes replaced successfully!');
