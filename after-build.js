const fs = require('fs');
const path = require('path');

const outDir = 'docs';
const indexPath = path.join(outDir, 'index.html');
const sitemapPath = path.join(outDir, 'sitemap.xml');
const errorPath = path.join(outDir, '404.html');
const noJekyllPath = path.join(outDir, '.nojekyll');

// Ensure the index.html exists
if (!fs.existsSync(indexPath)) {
  console.error(`Error: ${indexPath} does not exist. Make sure to run the build first.`);
  process.exit(1);
}

// 1. Copy index.html to 404.html for client-side routing fallback
try {
  fs.copyFileSync(indexPath, errorPath);
  console.log('Successfully copied index.html to 404.html');
} catch (error) {
  console.error('Error copying index.html to 404.html:', error);
}

// 2. Create .nojekyll to disable Jekyll on GitHub Pages
try {
  fs.writeFileSync(noJekyllPath, '');
  console.log('Successfully created .nojekyll');
} catch (error) {
  console.error('Error creating .nojekyll:', error);
}

// Define the set of unique paths to pre-generate
const paths = new Set([
  // Root-level paths for language redirects
  'menu',
  'menu-moment',
  'contact',
  'mentions-legales',
  'politique-confidentialite',
  'politique-cookies',
  // Legacy PDF redirect paths
  'resources/Menu.pdf',
  'resources/menu.pdf',
]);

// 3. Extract paths dynamically from sitemap.xml
if (fs.existsSync(sitemapPath)) {
  try {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    const locRegex = /<loc>(https?:\/\/[^<]+)<\/loc>/gi;
    let match;
    while ((match = locRegex.exec(sitemapContent)) !== null) {
      try {
        const urlObj = new URL(match[1].trim());
        const cleanPath = urlObj.pathname.replace(/^\/+/, '').replace(/\/+$/, '');
        if (cleanPath) {
          paths.add(cleanPath);
        }
      } catch (e) {
        console.error(`Error parsing URL from sitemap: ${match[1]}`, e);
      }
    }
  } catch (error) {
    console.error('Error reading or parsing sitemap.xml:', error);
  }
} else {
  console.warn('Warning: sitemap.xml not found in output directory. Skipping dynamic route extraction.');
}

// 4. Generate HTML files and directories for each unique route path
console.log(`Generating static files for ${paths.size} routes...`);

for (const cleanPath of paths) {
  const ext = path.extname(cleanPath);
  
  if (ext) {
    // Path has a file extension (e.g. .pdf), so we create directory/index.html
    // to leverage GitHub Pages folder redirect without corrupting the file MIME type
    const targetIndexFile = path.join(outDir, cleanPath, 'index.html');
    try {
      fs.mkdirSync(path.dirname(targetIndexFile), { recursive: true });
      fs.copyFileSync(indexPath, targetIndexFile);
      console.log(`Generated: ${targetIndexFile}`);
    } catch (error) {
      console.error(`Error generating folder route for ${cleanPath}:`, error);
    }
  } else {
    // Standard path without extension, generate both files to guarantee 200 OK for both slash and no-slash
    const targetHtmlFile = path.join(outDir, `${cleanPath}.html`);
    const targetIndexFile = path.join(outDir, cleanPath, 'index.html');
    
    try {
      // 1. Generate clean URL file (path.html)
      fs.mkdirSync(path.dirname(targetHtmlFile), { recursive: true });
      fs.copyFileSync(indexPath, targetHtmlFile);
      
      // 2. Generate slash URL file (path/index.html)
      fs.mkdirSync(path.dirname(targetIndexFile), { recursive: true });
      fs.copyFileSync(indexPath, targetIndexFile);
      
      console.log(`Generated: ${targetHtmlFile} & ${targetIndexFile}`);
    } catch (error) {
      console.error(`Error generating static routes for ${cleanPath}:`, error);
    }
  }
}

console.log('Post-build routing configuration complete!');
