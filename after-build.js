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

// 4. Define page metadata for localized titles and descriptions to help SEO and crawlers
const pageMetadata = {
  fr: {
    home: {
      title: "Grill Lounge - Steakhouse & Grillades à Narbonne",
      description: "Découvrez nos viandes halal premium saisies à la pierre de lave, nos burgers maison et nos tapas à partager dans une ambiance chaleureuse."
    },
    menu: {
      title: "Notre Menu - Grill Lounge Narbonne",
      description: "Consultez notre carte de viandes grillées, burgers maison, entrées à partager, salades fraîches et desserts."
    },
    'menu-moment': {
      title: "Menu du Moment - Grill Lounge Narbonne",
      description: "Découvrez nos suggestions et plats du moment à Narbonne. Formules midi et suggestions du chef renouvelées régulièrement."
    },
    contact: {
      title: "Contact & Réservation - Grill Lounge Narbonne",
      description: "Réservez votre table au Grill Lounge à Narbonne. Retrouvez notre adresse, numéro de téléphone, horaires et formulaire de contact."
    },
    'mentions-legales': {
      title: "Mentions Légales - Grill Lounge",
      description: "Mentions légales et informations éditeur pour le site web officiel du restaurant Grill Lounge à Narbonne."
    },
    'politique-confidentialite': {
      title: "Politique de Confidentialité - Grill Lounge",
      description: "Politique de confidentialité et de protection des données personnelles pour le site du restaurant Grill Lounge."
    },
    'politique-cookies': {
      title: "Politique de Cookies - Grill Lounge",
      description: "Informations sur l'utilisation et la gestion des cookies sur le site du restaurant Grill Lounge à Narbonne."
    }
  },
  en: {
    home: {
      title: "Grill Lounge - Steakhouse & Grills in Narbonne",
      description: "Discover our premium halal meats seared on lava stone, our homemade burgers and our tapas to share in a warm atmosphere."
    },
    menu: {
      title: "Our Menu - Grill Lounge Narbonne",
      description: "Browse our menu featuring grilled meats, homemade burgers, shared appetizers, fresh salads, and delicious desserts."
    },
    'menu-moment': {
      title: "Seasonal Menu - Grill Lounge Narbonne",
      description: "Discover our latest seasonal suggestions and chef specials in Narbonne. Lunch deals and special menus updated regularly."
    },
    contact: {
      title: "Contact & Booking - Grill Lounge Narbonne",
      description: "Book a table at Grill Lounge in Narbonne. Find our address, phone number, opening hours, and contact form."
    },
    'mentions-legales': {
      title: "Legal Notice - Grill Lounge",
      description: "Legal notice and publisher information for the official website of the Grill Lounge restaurant in Narbonne."
    },
    'politique-confidentialite': {
      title: "Privacy Policy - Grill Lounge",
      description: "Privacy policy and personal data protection information for the Grill Lounge restaurant website."
    },
    'politique-cookies': {
      title: "Cookie Policy - Grill Lounge",
      description: "Information about the use and management of cookies on the Grill Lounge restaurant website in Narbonne."
    }
  },
  es: {
    home: {
      title: "Grill Lounge - Steakhouse y Parrillada en Narbona",
      description: "Descubra nuestras carnes halal premium hechas a la piedra de lava, nuestras hamburguesas caseras y nuestras tapas para compartir en un ambiente cálido."
    },
    menu: {
      title: "Nuestro Menú - Grill Lounge Narbona",
      description: "Explore nuestra variada carta de carnes a la parrilla, hamburguesas caseras, entrantes para compartir, ensaladas y postres."
    },
    'menu-moment': {
      title: "Menú del Momento - Grill Lounge Narbona",
      description: "Descubra nuestras sugerencias de temporada y platos especiales en Narbona. Menús de mediodía actualizados periódicamente."
    },
    contact: {
      title: "Contacto y Reservas - Grill Lounge Narbona",
      description: "Reserve su mesa en el Grill Lounge de Narbona. Encuentre nuestra dirección, teléfono, horarios y formulario de contacto."
    },
    'mentions-legales': {
      title: "Aviso Legal - Grill Lounge",
      description: "Aviso legal e información del editor para el sitio web officiel del restaurante Grill Lounge en Narbona."
    },
    'politique-confidentialite': {
      title: "Política de Privacidad - Grill Lounge",
      description: "Política de privacidad e información sobre protección de datos personnelles del sitio web del restaurante Grill Lounge."
    },
    'politique-cookies': {
      title: "Política de Cookies - Grill Lounge",
      description: "Información sobre el uso y gestión de cookies en el sitio web del restaurante Grill Lounge en Narbona."
    }
  }
};

// Helper to detect language from cleanPath
function getLanguageFromPath(cleanPath) {
  if (cleanPath.startsWith('en/') || cleanPath === 'en') {
    return 'en';
  }
  if (cleanPath.startsWith('es/') || cleanPath === 'es') {
    return 'es';
  }
  return 'fr'; // default
}

// Helper to detect base route from cleanPath (removes language prefix)
function getBaseRouteFromPath(cleanPath) {
  const parts = cleanPath.split('/');
  if (['fr', 'en', 'es'].includes(parts[0])) {
    parts.shift();
  }
  return parts.join('/') || 'home';
}

// Helper to customize HTML template with correct lang and metadata tags
function localizeHtml(htmlString, lang, routeKey) {
  const langMeta = pageMetadata[lang] || pageMetadata.fr;
  const routeMeta = langMeta[routeKey] || langMeta.home;
  
  let customized = htmlString;
  
  // 1. Replace <html lang="..."> attribute
  customized = customized.replace(/<html\s+lang="[^"]*"/i, `<html lang="${lang}"`);
  
  // 2. Replace <title>...</title> tag
  customized = customized.replace(/<title>[^<]*<\/title>/i, `<title>${routeMeta.title}</title>`);
  
  // 3. Replace <meta name="description" content="..." /> tag
  const descriptionRegex = /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i;
  if (descriptionRegex.test(customized)) {
    customized = customized.replace(
      descriptionRegex,
      `<meta name="description" content="${routeMeta.description}"/>`
    );
  } else {
    // If not found (unlikely), inject it before the title tag
    customized = customized.replace(
      /<title>/i,
      `<meta name="description" content="${routeMeta.description}"/><title>`
    );
  }
  
  return customized;
}

// 5. Define static redirect mapping for legacy/root-level paths to their correct canonical targets
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

// Load base index.html template content
const baseHtmlContent = fs.readFileSync(indexPath, 'utf8');

// 6. Generate HTML files and directories for each unique route path
console.log(`Generating static files for ${paths.size} routes...`);

for (const cleanPath of paths) {
  const ext = path.extname(cleanPath);
  const redirectTarget = redirectMap[cleanPath];
  const lang = getLanguageFromPath(cleanPath);
  const routeKey = getBaseRouteFromPath(cleanPath);
  
  if (redirectTarget) {
    // Generate permanent SEO-friendly redirect HTML using 0-second meta-refresh and JS fallback
    const redirectHtmlContent = `<!DOCTYPE html>
<html lang="${lang}">
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
    // Standard path that actually hosts a site page (localize and write to target path)
    const customizedHtml = localizeHtml(baseHtmlContent, lang, routeKey);

    if (ext) {
      // Path has a file extension (e.g. .pdf), so we create directory/index.html
      // to leverage GitHub Pages folder redirect without corrupting the file MIME type
      const targetIndexFile = path.join(outDir, cleanPath, 'index.html');
      try {
        fs.mkdirSync(path.dirname(targetIndexFile), { recursive: true });
        fs.writeFileSync(targetIndexFile, customizedHtml);
        console.log(`Generated: ${targetIndexFile} (lang=${lang}, route=${routeKey})`);
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
        fs.writeFileSync(targetHtmlFile, customizedHtml);
        
        // 2. Generate slash URL file (path/index.html)
        fs.mkdirSync(path.dirname(targetIndexFile), { recursive: true });
        fs.writeFileSync(targetIndexFile, customizedHtml);
        
        console.log(`Generated: ${targetHtmlFile} & ${targetIndexFile} (lang=${lang}, route=${routeKey})`);
      } catch (error) {
        console.error(`Error generating static routes for ${cleanPath}:`, error);
      }
    }
  }
}

console.log('Post-build routing configuration complete!');
