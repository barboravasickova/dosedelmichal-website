# Nasazení na dosedelmichal.com (GitHub Pages)

Po pushi na `main` workflow **Deploy to GitHub Pages** spustí `npm run build` a obsah `dist/` nahraje do větve **`gh-pages`**.

## Nastavení repozitáře (důležité)

1. GitHub → **dosedelmichal-website** → **Settings** → **Pages**
2. **Build and deployment** → **Source:** **Deploy from a branch**
3. **Branch:** **`gh-pages`** / **`/ (root)`** → **Save**  
   **Nepoužívejte větev `main`** — na ní je zdroják Astro, ne hotový web. Stará úvodní stránka „Na novém webu právě pracuji…“ pochází právě z nasazení `main`.
4. **Custom domain:** `dosedelmichal.com` → Save, pak **Enforce HTTPS**.

## DNS (Webglobe)

- **A** záznamy pro `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- **CNAME** pro `www`: `barboravasickova.github.io`

## Kontrola

- Actions → workflow zelený
- https://dosedelmichal.com/ → přesměrování na `/cs/`
- Tvrdý refresh: Ctrl+F5, případně anonymní okno
