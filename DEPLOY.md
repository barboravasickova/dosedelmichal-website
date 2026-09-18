# Nasazení (GitHub Pages)

Po pushi na `main` workflow **Deploy to GitHub Pages** sestaví `dist/` a nahraje ho do větve **`gh-pages`**.

## Důležité: nepřepínej zdroj Pages

V repozitáři je **jeden** způsob nasazení: workflow zapisuje do větve **`gh-pages`**.

| Nastavení v Settings → Pages | Musí být |
|------------------------------|----------|
| **Source** | **Deploy from a branch** |
| **Branch** | **`gh-pages`** / **/ (root)** |

**Nepoužívej** „GitHub Actions“ jako Source — to je **jiný** typ deploye. Když se Source a workflow neshodují, web se buď neaktualizuje, nebo zůstane stará verze. Není potřeba nic přepínat po každém pushi; stačí nastavit **gh-pages** jednou a nechat.

Po deployi v **Actions** zkontroluj, že workflow doběhl zeleně. V repu na větvi `gh-pages` by měl být čerstvý commit (např. dnes).

## Domény a jazyky

| Doména | Výchozí web |
|--------|-------------|
| **dosedelmichal.cz** (a www) | čeština → `/cs/` |
| **dosedelmichal.com** (a www) | angličtina → `/en/` |

Přepínač **CZ | EN** v menu vede na druhou doménu se stejnou stránkou.

## GitHub Pages (jednou)

1. **Settings** → **Pages**
2. **Source:** **Deploy from a branch** → **`gh-pages`** / **`/ (root)`**
3. **Custom domains:** **`dosedelmichal.com`** (Save, ověření, **Enforce HTTPS**)
4. **Actions** → **Deploy to GitHub Pages** → při potřebě **Run workflow**

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

## SEO (Google v ČR — „doseděl michal“)

Web už posílá pro češtinu kanonické URL na **dosedelmichal.cz**, `hreflang="cs-CZ"`, **`x-default` → česká homepage** a JSON-LD typu **Person**. Sitemap obsahuje stejné jazykové alternativy.

**Doporučené kroky mimo kód (Google Search Console):**

1. Přidej **dvě nemovitosti**: `https://dosedelmichal.cz` a `https://dosedelmichal.com` (prefix URL).
2. Odešli sitemapu: `https://dosedelmichal.cz/sitemap-index.xml` (a stejně pro .com).
3. U hlavní české stránky (`https://dosedelmichal.cz/cs/`) použij **Kontrola URL → Požádat o indexaci**.
4. **DNS u .cz:** ideálně stejné **A záznamy na GitHub Pages** jako u `.com` (viz výše), aby `.cz` **nepřesměrovávala** na `dosedelmichal.com/cs/`. Kanonické URL v HTML jsou `dosedelmichal.cz`; pokud `.cz` jen forwarduje na `.com`, Google může v SERPu častěji ukazovat `.com/cs/`. Forward nech jen jako dočasné řešení, ne jako cílový stav pro SEO.

Pořadí ve vyhledávání nejde „zapnout“ na 100 % — záleží na indexaci, odkazech a konkurenci; výše uvedené sladí signály pro českou verzi.
