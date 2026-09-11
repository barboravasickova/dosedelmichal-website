# Nasazení na dosedelmichal.com (GitHub Pages)

Workflow **Deploy to GitHub Pages** po každém pushi na `main` spustí `npm run build` a obsah složky `dist/` nahraje do větve **`gh-pages`**.

## Nastavení repozitáře (jednou)

1. GitHub → **Settings** → **Pages**
2. **Build and deployment** → **Source:** **Deploy from a branch**
3. **Branch:** **`gh-pages`** / **`/ (root)`** → Save  
   (Nepoužívejte větev `main` — v ní je zdroják Astro, ne hotový web.)
4. V **Custom domain** nechte **`dosedelmichal.com`** (soubor `public/CNAME` je součást buildu).

Po uložení a úspěšném běhu Actions (zelený workflow) počkejte 1–5 minut na propagaci CDN.

## Kontrola

- Actions → **Deploy to GitHub Pages** musí skončit zeleně.
- Otevřete https://dosedelmichal.com/ — mělo by přesměrovat na `/cs/`.
