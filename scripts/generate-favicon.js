const sharp = require('sharp');
const path = require('path');

sharp(path.resolve('C:/Users/paulo/Documents/Logo/Logo-20240901T232708Z-001/Logo/Final File - 01/Final File - 01/Social Media Assets/Favicon/favicon_symbol-02.jpg'))
  .resize(32, 32)
  .png()
  .toFile('public/favicon.png', (err, info) => {
    if (err) console.error(err);
    else console.log('favicon.png created:', info);
  });

sharp(path.resolve('C:/Users/paulo/Documents/Logo/Logo-20240901T232708Z-001/Logo/Final File - 01/Final File - 01/Social Media Assets/Favicon/favicon_symbol-02.jpg'))
  .resize(180, 180)
  .png()
  .toFile('public/apple-touch-icon.png', (err, info) => {
    if (err) console.error(err);
    else console.log('apple-touch-icon.png created:', info);
  });
