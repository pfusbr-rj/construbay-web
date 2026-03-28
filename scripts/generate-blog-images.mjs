import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const destDir = path.join(__dirname, '../public/images/blog');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Use Anthropic API to generate image descriptions
// then fetch from Picsum with specific seeds for consistency
const blogImages = [
  {
    filename: 'permit-guide-hero.jpg',
    seed: 1074,
    // Modern architecture permit office Marin County
  },
  {
    filename: 'adu-cost-hero.jpg',
    seed: 1080,
    // Luxury ADU backyard cottage California
  },
  {
    filename: 'ai-construction-hero.jpg',
    seed: 1062,
    // Technology construction modern
  },
  {
    filename: 'kitchen-tiburon-hero.jpg',
    seed: 1078,
    // Luxury kitchen interior design
  },
  {
    filename: 'choose-contractor-hero.jpg',
    seed: 1071,
    // Modern home exterior architecture
  },
  {
    filename: 'sonoma-remodel-hero.jpg',
    seed: 1084,
    // Wine country estate California
  },
];

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);

    function get(url) {
      https.get(url, (response) => {
        if (response.statusCode === 301 || response.statusCode === 302) {
          get(response.headers.location);
          return;
        }
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      }).on('error', (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
    }

    get(url);
  });
}

async function generateAll() {
  for (const img of blogImages) {
    const filepath = path.join(destDir, img.filename);
    // Use Picsum with specific seeds for consistent luxury/architecture photos
    const url = `https://picsum.photos/seed/${img.seed}/1200/675`;
    console.log(`Downloading ${img.filename} from seed ${img.seed}...`);
    try {
      await downloadImage(url, filepath);
      console.log(`✓ ${img.filename} saved`);
    } catch (err) {
      console.error(`✗ Failed: ${img.filename}`, err.message);
    }
  }
  console.log('\n✅ All blog images generated!');
}

generateAll();
