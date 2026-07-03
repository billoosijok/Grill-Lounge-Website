# Grill Lounge — grilllounge.fr

Static website for **Grill Lounge**, a steakhouse in Narbonne, built with
[Jekyll](https://jekyllrb.com/). The site is trilingual (French, English,
Spanish) and is served from GitHub Pages.

This project was previously a Create React App single‑page app; it has been
fully re‑implemented in Jekyll while keeping the **exact same design,
animations and interactions**.

## Project structure

```
_config.yml            Site configuration, language list, social links, contact
Gemfile                Uses the github-pages gem (matches GitHub Pages)
_data/
  translations.yml     All UI strings, keyed by language (fr / en / es)
  meta.yml             Per-page <title> and <meta description> per language
  menu/{fr,en,es}.json Full food menu (with pre-computed category anchor ids)
  menu_moment/*.json   "Menu du Moment" (chef's suggestions) per language
_layouts/
  default.html         <head>, analytics, fonts, cookie banner, scripts
  home.html            Home page (hero, features, about, reviews, CTA, map, FAQ)
  menu.html            Collapsible menu page
  menu-moment.html     Seasonal / weekend formula page
  contact.html         Contact + map page
  legal.html           Legal notice / privacy / cookies (French content)
  redirect.html        Meta-refresh redirect used by legacy URLs
_includes/             header, footer, cookie-consent + each home section
assets/
  css/style.css        All styles (original index.css + HomeLayout.css + cookie)
  js/main.js           All interactions (menu toggle, lang picker, carousel,
                       FAQ accordion, collapsible menu + hash scroll, cookies)
  img/, resources/     Images, flags and menu PDFs
fr/ en/ es/            One folder per language with the 7 pages each
menu/ contact/ …       Root-level redirect stubs → default language
CNAME, robots.txt, sitemap.xml
```

### URLs

Every page exists under a language prefix, e.g. `/fr/`, `/en/menu/`,
`/es/contact/`. Requests without a language prefix (`/menu`, `/contact`, …)
and legacy paths (`/reservez`, `/24`, `/valentin`, `/avis`, old PDF links)
redirect to their French equivalents, matching the behaviour of the old app.

## Local development

Requires Ruby and Bundler.

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000/fr/>.

## Deployment (GitHub Pages)

The site is a standard Jekyll project built from the repository **root**.

In the repository settings → **Pages**, set the source to
**Deploy from a branch**, branch `main`, folder **`/ (root)`**. GitHub Pages
will run Jekyll automatically (the `CNAME` file keeps the `grilllounge.fr`
custom domain).

> Note: the site previously deployed from the `/docs` folder. That folder and
> the old React build have been removed, so the Pages source must point to the
> repository root instead of `/docs`.

## Editing content

- **Text / translations:** `_data/translations.yml`
- **Menu items:** `_data/menu/<lang>.json`
- **Menu du Moment:** `_data/menu_moment/<lang>.json`
- **Page titles & SEO descriptions:** `_data/meta.yml`
- **Styles:** `assets/css/style.css`
- **Behaviour:** `assets/js/main.js`
