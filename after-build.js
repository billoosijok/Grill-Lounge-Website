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
const languages = ['fr', 'es', 'en'];
const basePaths = [
  'menu',
  'menu-moment',
  'contact',
  'mentions-legales',
  'politique-confidentialite',
  'politique-cookies',
];

const paths = new Set();

// 1. Add language root paths (fr, es, en)
languages.forEach(lang => {
  paths.add(lang);
});

// 2. Add root-level paths (without language prefix)
basePaths.forEach(p => {
  paths.add(p);
});

// 3. Add localized sub-paths (e.g. fr/menu, es/menu, en/menu)
languages.forEach(lang => {
  basePaths.forEach(p => {
    paths.add(`${lang}/${p}`);
  });
});

// 4. Add legacy/redirect paths
paths.add('reservez');
paths.add('resources/Menu.pdf');
paths.add('resources/menu.pdf');

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

// 4. Define static redirect mapping for legacy/root-level paths to their correct canonical targets
const redirectMap = {
  'reservez': '/fr/contact',
  'menu': '/fr/menu',
  'menu-moment': '/fr/menu-moment',
  'contact': '/fr/contact',
  'mentions-legales': '/fr/mentions-legales',
  'politique-confidentialite': '/fr/politique-confidentialite',
  'politique-cookies': '/fr/politique-cookies',
  'resources/Menu.pdf': '/fr/menu',
  'resources/menu.pdf': '/fr/menu',
};

// 5. Generate HTML files and directories for each unique route path
console.log(`Generating static files for ${paths.size} routes...`);

for (const cleanPath of paths) {
  const ext = path.extname(cleanPath);
  const redirectTarget = redirectMap[cleanPath];
  
  if (redirectTarget) {
    // Generate permanent SEO-friendly redirect HTML using 0-second meta-refresh and JS fallback
    const redirectHtmlContent = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <link rel="canonical" href="https://grilllounge.fr${redirectTarget}">
    <meta http-equiv="refresh" content="0; url=${redirectTarget}">
  </head>
  <body>
    <p>Redirecting to <a href="${redirectTarget}">${redirectTarget}</a>...</p>
    <script>
      window.location.replace("${redirectTarget}");
    </script>
  </body>
</html>`;

    if (ext) {
      const targetIndexFile = path.join(outDir, cleanPath, 'index.html');
      try {
        fs.mkdirSync(path.dirname(targetIndexFile), { recursive: true });
        fs.writeFileSync(targetIndexFile, redirectHtmlContent);
        console.log(`Generated permanent redirect: ${targetIndexFile} -> ${redirectTarget}`);
      } catch (error) {
        console.error(`Error generating redirect for ${cleanPath}:`, error);
      }
    } else {
      const targetHtmlFile = path.join(outDir, `${cleanPath}.html`);
      const targetIndexFile = path.join(outDir, cleanPath, 'index.html');
      
      try {
        // 1. Generate clean URL file (path.html)
        fs.mkdirSync(path.dirname(targetHtmlFile), { recursive: true });
        fs.writeFileSync(targetHtmlFile, redirectHtmlContent);
        
        // 2. Generate slash URL file (path/index.html)
        fs.mkdirSync(path.dirname(targetIndexFile), { recursive: true });
        fs.writeFileSync(targetIndexFile, redirectHtmlContent);
        
        console.log(`Generated permanent redirect: ${targetHtmlFile} & ${targetIndexFile} -> ${redirectTarget}`);
      } catch (error) {
        console.error(`Error generating redirect for ${cleanPath}:`, error);
      }
    }
  } else {
    // Standard path that actually hosts a site page (copy index.html to allow SPA routing)
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
}

console.log('Post-build routing configuration complete!');
