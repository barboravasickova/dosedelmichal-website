import type { SitemapItem } from '@astrojs/sitemap';

import { alternateLocaleUrl, absolutePageUrl } from './domains';
import type { Locale } from './i18n';

function localeFromPathname(pathname: string): Locale | undefined {
	if (pathname === '/cs' || pathname.startsWith('/cs/')) return 'cs';
	if (pathname === '/en' || pathname.startsWith('/en/')) return 'en';
	return undefined;
}

function normalizePathname(pathname: string): string {
	if (!pathname || pathname === '/') return '/';
	const trimmed = pathname.replace(/\/+$/, '');
	return trimmed || '/';
}

/** Map built URLs to locale domains and hreflang alternates for Google. */
export function serializeSitemapItem(item: SitemapItem): SitemapItem | undefined {
	const { pathname } = new URL(item.url);
	const locale = localeFromPathname(pathname);

	// Root `/` is a duplicate of `/en/`; keep only locale-prefixed routes.
	if (!locale) return undefined;

	const path = normalizePathname(pathname);
	const csUrl = alternateLocaleUrl(path, 'cs');
	const enUrl = alternateLocaleUrl(path, 'en');
	const pageUrl = absolutePageUrl(locale, path.endsWith('/') ? path : `${path}/`);

	return {
		...item,
		url: pageUrl,
		links: [
			{ lang: 'cs-CZ', url: csUrl },
			{ lang: 'en', url: enUrl },
			{ lang: 'x-default', url: csUrl },
		],
	};
}
