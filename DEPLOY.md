# Nasazení (GitHub Pages)

Po pushi na `main` workflow **Deploy to GitHub Pages** nahraje build z `dist/` do větve **`gh-pages`**.

## Domény a jazyky

| Doména | Výchozí web |
|--------|-------------|
| **dosedelmichal.cz** (a www) | čeština → `/cs/` |
| **dosedelmichal.com** (a www) | angličtina → `/en/` |

Přepínač **CZ | EN** v menu vede na druhou doménu se stejnou stránkou.

## GitHub Pages (jednou)

1. **Settings** → **Pages**
2. **Source:** **Deploy from a branch** → **`gh-pages`** / **`/ (root)`**
3. **Custom domains:** přidej **`dosedelmichal.com`** i **`dosedelmichal.cz`** (Save, ověření, **Enforce HTTPS** u obou)

## DNS (Webglobe)

**dosedelmichal.com** — apex `@` (A záznamy jako u GitHub Pages). Kořen `/` je **anglická homepage** (bez redirect stránky); `/en/` je stejný obsah s kanonickou URL.

**dosedelmichal.cz** — ideálně **přesměrování (URL forward)** na `https://dosedelmichal.com/cs/` (GitHub Pages u repa podporuje jen jednu custom doménu v `CNAME`; obě domény na stejný build tedy často řešíš forwardem u registrátora).

Stejné **A** záznamy pro `@`, pokud místo forwardu míříš DNS přímo na GitHub:

`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`

**CNAME** pro `www` u obou domén: `barboravasickova.github.io`

## Kontrola

- https://dosedelmichal.cz/ → `/cs/`
- https://dosedelmichal.com/ → `/en/`
- Actions → workflow zelený
