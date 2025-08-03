// Simple script to generate PWA icons using Node.js
// This creates basic SVG-based icons for the PWA

const fs = require('fs');
const path = require('path');

// Create a simple SVG icon
const createSVGIcon = (size) => `
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#D97706;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#92400E;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${size * 0.2}" fill="url(#grad)"/>
  <text x="50%" y="50%" text-anchor="middle" dy="0.35em" 
        fill="white" font-family="system-ui, -apple-system, sans-serif" 
        font-size="${size * 0.6}" font-weight="bold">M</text>
</svg>`;

// Icon sizes needed for PWA
const iconSizes = [72, 96, 128, 144, 152, 192, 384, 512];

// Create icons directory
const iconsDir = path.join(__dirname, '../public/icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Generate SVG icons
iconSizes.forEach(size => {
  const svgContent = createSVGIcon(size);
  const filename = `icon-${size}x${size}.svg`;
  fs.writeFileSync(path.join(iconsDir, filename), svgContent);
  console.log(`Generated ${filename}`);
});

// Create favicon.ico placeholder
const faviconSVG = createSVGIcon(32);
fs.writeFileSync(path.join(__dirname, '../public/favicon.svg'), faviconSVG);

console.log('All icons generated successfully!');
console.log('Note: For production, convert SVG icons to PNG using a tool like sharp or imagemagick');