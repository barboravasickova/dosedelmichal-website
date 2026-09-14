import { alternateLocalePath, homePath, type Locale } from './i18n';

export const localeOrigins: Record<Locale, string> = {
	cs: 'https://dosedelmichal.cz',
	en: 'https://dosedelmichal.com',
};

const czechHostnames = new Set(['dosedelmichal.cz', 'www.dosedelmichal.cz']);
const englishHostnames = new Set(['dosedelmichal.com', 'www.dosedelmichal.com']);
const localDevHostnames = new Set(['localhost', '127.0.0.1']);

function normalizeHostname(hostname: string): string {
	return hostname.toLowerCase();
}

/** Doména → výchozí locale (kořen `/`, localhost / preview). */
export function localeFromHostname(hostname: string): Locale {
	const host = normalizeHostname(hostname);
	if (czechHostnames.has(host)) return 'cs';
	if (englishHostnames.has(host)) return 'en';
	if (localDevHostnames.has(host)) return 'cs';
	return 'en';
}

/** Cíl přesměrování z kořene `/` (statický hosting). */
export function homePathForHostname(hostname: string): string {
	return homePath(localeFromHostname(hostname));
}

/** Jednotný inline skript pro `src/pages/index.astro`. */
export function rootRedirectInlineScript(): string {
	return `(function(){var h=location.hostname.toLowerCase();var en=h==='dosedelmichal.com'||h==='www.dosedelmichal.com';var cs=h==='dosedelmichal.cz'||h==='www.dosedelmichal.cz';var local=h==='localhost'||h==='127.0.0.1';location.replace(local?'/cs/':en?'/en/':cs?'/cs/':'/en/');})();`;
}

export function localeOrigin(locale: Locale): string {
	return localeOrigins[locale];
}

export function homePathForLocale(locale: Locale): string {
	return homePath(locale);
}

export function homeUrl(locale: Locale): string {
	return `${localeOrigin(locale)}${homePath(locale)}`;
}

/** Stejná stránka v druhém jazyce na správné doméně (.cz / .com). */
export function alternateLocaleUrl(pathname: string, target: Locale): string {
	return `${localeOrigin(target)}${alternateLocalePath(pathname, target)}`;
}

export function absolutePageUrl(locale: Locale, pathname: string): string {
	return `${localeOrigin(locale)}${pathname}`;
}
