const https = require('https');
const fs = require('fs');
const path = require('path');

// Image prompts for each blog post — luxury construction photography style
const blogImages = [
  {
    filename: 'permit-guide-hero.jpg',
    prompt: 'Luxury modern home in Marin County California, architectural photography, warm golden hour lighting, glass walls, wood and steel construction, professional real estate photography, ultra high quality, 16:9 ratio'
  },
  {
    filename: 'adu-cost-hero.jpg',
    prompt: 'Beautiful accessory dwelling unit ADU backyard cottage in California, luxury landscaping, modern architecture, warm evening lighting, professional architectural photography, high end finishes, 16:9 ratio'
  },
  {
    filename: 'ai-construction-hero.jpg',
    prompt: 'Modern construction site with digital blueprint hologram overlay, AI technology in construction, futuristic building process, professional photography, blue and gold color tones, 16:9 ratio'
  },
  {
    filename: 'kitchen-tiburon-hero.jpg',
    prompt: 'Ultra luxury kitchen remodel Tiburon California, custom white oak cabinetry, Calacatta marble countertops, Sub-Zero appliances, bay water view through window, professional interior photography, 16:9 ratio'
  },
  {
    filename: 'choose-contractor-hero.jpg',
    prompt: 'Professional general contractor meeting with luxury homeowner in beautiful Marin County California home, architectural plans on table, warm natural light, professional photography, 16:9 ratio'
  },
  {
    filename: 'sonoma-remodel-hero.jpg',
    prompt: 'Luxury wine country estate home remodel Sonoma County California, vineyard views, outdoor living space, warm golden sunset, professional architectural photography, high end finishes, 16:9 ratio'
  },
];

console.log('Blog image prompts ready. Using Unsplash for high quality construction photos...');

// Use Unsplash API for professional construction/luxury home photos
const unsplashQueries = [
  { filename: 'permit-guide-hero.jpg', query: 'luxury+home+modern+architecture' },
  { filename: 'adu-cost-hero.jpg', query: 'backyard+cottage+modern+house' },
  { filename: 'ai-construction-hero.jpg', query: 'construction+technology+blueprint' },
  { filename: 'kitchen-tiburon-hero.jpg', query: 'luxury+kitchen+interior+design' },
  { filename: 'choose-contractor-hero.jpg', query: 'modern+home+exterior+architecture' },
  { filename: 'sonoma-remodel-hero.jpg', query: 'wine+country+estate+california' },
];

const destDir = path.join(__dirname, '../public/images/blog');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        https.get(response.headers.location, (res) => {
          res.pipe(file);
          file.on('finish', () => { file.close(); resolve(); });
        }).on('error', reject);
      } else {
        response.pipe(file);
        file.on('finish', () => { file.close(); resolve(); });
      }
    }).on('error', reject);
  });
}

async function downloadAll() {
  for (const img of unsplashQueries) {
    const filepath = path.join(destDir, img.filename);
    const url = `https://source.unsplash.com/1200x675/?${img.query}`;
    console.log(`Downloading ${img.filename}...`);
    try {
      await downloadImage(url, filepath);
      console.log(`✓ ${img.filename} saved`);
    } catch (err) {
      console.error(`✗ Failed: ${img.filename}`, err.message);
    }
  }
  console.log('All blog images downloaded!');
}

downloadAll();
