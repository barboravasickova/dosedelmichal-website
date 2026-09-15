# Nasazení (GitHub Pages)

Po pushi na `main` workflow **Deploy to GitHub Pages** sestaví `dist/` a nasadí ho přes **GitHub Actions** (Pages artifact).

## Domény a jazyky

| Doména | Výchozí web |
|--------|-------------|
| **dosedelmichal.cz** (a www) | čeština → `/cs/` |
| **dosedelmichal.com** (a www) | angličtina → `/en/` |

Přepínač **CZ | EN** v menu vede na druhou doménu se stejnou stránkou.

## GitHub Pages (jednou)

1. **Settings** → **Pages**
2. **Build and deployment → Source:** **GitHub Actions** (ne „Deploy from a branch“)
3. **Custom domains:** **`dosedelmichal.com`** (Save, ověření, **Enforce HTTPS**)
4. Po pushi na `main` nebo po **Run workflow** v **Actions** zkontroluj, že job **Deploy to GitHub Pages** doběhl zeleně

## DNS (Webglobe)

**dosedelmichal.com** — apex `@` (A záznamy jako u GitHub Pages). Kořen `/` je **anglická homepage** (bez redirect stránky); `/en/` je stejný obsah s kanonickou URL.

**dosedelmichal.cz** — jen **přesměrování domény (URL forward)**, ne stejné A záznamy jako .com (viz níže).

### Webglobe: `.cz` → česká verze na `.com`

1. Přihlášení → **Moje domény** → **dosedelmichal.cz** → **DNS / Přesměrování** (nebo **Správa domény**).
2. Zapni **Přesměrování domény** / **URL redirect** (HTTP 301).
3. **Cílová adresa musí být celá URL včetně cesty**, ne jen doména:
   - správně: `https://dosedelmichal.com/cs/` (nebo `https://dosedelmichal.com/cs`)
   - špatně: `https://dosedelmichal.com` nebo `dosedelmichal.com` → skončíš na anglické homepage.
4. Stejné přesměrování nastav i pro **www.dosedelmichal.cz** (pokud Webglobe řeší www zvlášť).
5. U `.cz` **smaž nebo nepoužívej** A záznamy na GitHub, pokud má běžet jen forward — jinak může DNS obcházet přesměrování.

GitHub Pages má v repu v `CNAME` jen **dosedelmichal.com**; `.cz` na web nemusíš přidávat do GitHub Custom domains.

**dosedelmichal.com** — A záznamy na GitHub (ne forward na `/cs/`):

Stejné **A** záznamy pro `@` u **.com**:

`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`

**CNAME** pro `www` u obou domén: `barboravasickova.github.io`

## Kontrola

- https://dosedelmichal.cz/ → `/cs/`
- https://dosedelmichal.com/ → `/en/`
- Actions → workflow zelený
