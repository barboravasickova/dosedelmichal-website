# Nasazení na dosedelmichal.com (GitHub Pages)

Po pushi na `main` workflow **Deploy to GitHub Pages** spustí `npm run build` a nahraje složku `dist/` na GitHub Pages (včetně souboru `CNAME` z `public/CNAME`).

## Nastavení repozitáře (jednou)

1. GitHub → repozitář **dosedelmichal-website** → **Settings** → **Pages**
2. **Build and deployment** → **Source:** **GitHub Actions** (ne „Deploy from a branch“ a ne větev `main`)
3. V **Custom domain** zadej **`dosedelmichal.com`** → Save  
   (DNS už směřuje na GitHub; apex A záznamy `185.199.108.153`, `185.199.110.153`, `185.199.111.153`, www CNAME na `barboravasickova.github.io`.)
4. Po prvním deployi zapni **Enforce HTTPS**, až GitHub doménu ověří.

## Kontrola

- **Actions** → **Deploy to GitHub Pages** musí skončit zeleně (build + deploy).
- https://dosedelmichal.com/ → přesměrování na `/cs/`.
- Pokud vidíte starou stránku „Na novém webu právě pracuji…“, zkontrolujte bod 2 (Source = GitHub Actions) a počkejte pár minut na CDN.
