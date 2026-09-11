export type Locale = 'cs' | 'en';

export type NavKey =
	| 'commissions'
	| 'works'
	| 'shop'
	| 'about'
	| 'faq'
	| 'contact';

const routes: Record<Locale, Record<NavKey, string>> = {
	cs: {
		commissions: '/cs/zakazkova-malba',
		works: '/cs/volna-tvorba',
		shop: '/cs/shop',
		about: '/cs/o-mne',
		faq: '/cs/faq',
		contact: '/cs/kontakt',
	},
	en: {
		commissions: '/en/commissions',
		works: '/en/works',
		shop: '/en/shop',
		about: '/en/about',
		faq: '/en/faq',
		contact: '/en/contact',
	},
};

const labels: Record<Locale, Record<NavKey, string>> = {
	cs: {
		commissions: 'Zakázková malba',
		works: 'Volná tvorba',
		shop: 'Shop',
		about: 'O mně',
		faq: 'FAQ',
		contact: 'Kontakt',
	},
	en: {
		commissions: 'Commissions',
		works: 'Works',
		shop: 'Shop',
		about: 'About',
		faq: 'FAQ',
		contact: 'Contact',
	},
};

const navOrder: NavKey[] = ['commissions', 'works', 'shop', 'about', 'faq', 'contact'];

export function homePath(locale: Locale) {
	return locale === 'cs' ? '/cs/' : '/en/';
}

export function navItems(locale: Locale) {
	return navOrder.map((key) => ({
		key,
		href: routes[locale][key],
		label: labels[locale][key],
	}));
}

const pathToKey = new Map<string, { locale: Locale; key: NavKey | 'home' }>();

for (const locale of ['cs', 'en'] as const) {
	const home = homePath(locale);
	pathToKey.set(home, { locale, key: 'home' });
	pathToKey.set(home.replace(/\/$/, ''), { locale, key: 'home' });
	for (const key of navOrder) {
		pathToKey.set(routes[locale][key], { locale, key });
	}
}

function normalizePath(pathname: string) {
	if (!pathname || pathname === '/') return '/';
	return pathname.replace(/\/+$/, '') || '/';
}

/** Alternate locale URL for the same page (falls back to home). */
export function alternateLocalePath(pathname: string, target: Locale): string {
	const normalized = normalizePath(pathname);
	const csCommissionDetail = normalized.match(/^\/cs\/zakazkova-malba\/([^/]+)$/);
	const enCommissionDetail = normalized.match(/^\/en\/commissions\/([^/]+)$/);
	if (csCommissionDetail || enCommissionDetail) {
		const slug = csCommissionDetail?.[1] ?? enCommissionDetail?.[1] ?? '';
		return target === 'cs' ? `/cs/zakazkova-malba/${slug}` : `/en/commissions/${slug}`;
	}
	const entry = pathToKey.get(normalized) ?? pathToKey.get(pathname);
	if (!entry) return homePath(target);
	if (entry.key === 'home') return homePath(target);
	return routes[target][entry.key];
}

export function footerText(locale: Locale) {
	const year = new Date().getFullYear();
	if (locale === 'cs') {
		return `© ${year} MICHALDOSEDEL.COM — VŠECHNA PRÁVA VYHRAZENA`;
	}
	return `© ${year} MICHALDOSEDEL.COM — ALL RIGHTS RESERVED`;
}

export function pageTitle(locale: Locale, section?: string) {
	const base = 'DOSE — Michal Doseděl';
	if (!section) return base;
	return `${section} — ${base}`;
}

export type FooterNavKey = NavKey | 'home';

const footerNavOrder: FooterNavKey[] = [
	'home',
	'commissions',
	'works',
	'shop',
	'about',
	'faq',
	'contact',
];

const footerLabels: Record<Locale, Record<FooterNavKey, string>> = {
	cs: {
		home: 'Homepage',
		commissions: 'Zakázková malba',
		works: 'Volná tvorba',
		shop: 'Shop',
		about: 'O mně',
		faq: 'FAQ',
		contact: 'Kontakt',
	},
	en: {
		home: 'Homepage',
		commissions: 'Commissions',
		works: 'Works',
		shop: 'Shop',
		about: 'About',
		faq: 'FAQ',
		contact: 'Contact',
	},
};

export function footerNavItems(locale: Locale) {
	return footerNavOrder.map((key) => {
		const href = key === 'home' ? homePath(locale) : routes[locale][key];
		return { key, href, label: footerLabels[locale][key] };
	});
}

/** Max. 2 odkazy pod sebou v každém sloupci navigace ve footeru */
const footerNavStackKeys: FooterNavKey[][] = [
	['home', 'commissions'],
	['works', 'shop'],
	['about', 'faq'],
	['contact'],
];

function footerNavByKeys(locale: Locale, keys: FooterNavKey[]) {
	const items = footerNavItems(locale);
	const byKey = new Map(items.map((item) => [item.key, item]));
	return keys.map((key) => byKey.get(key)!);
}

export function footerNavStacks(locale: Locale) {
	return footerNavStackKeys.map((keys) => footerNavByKeys(locale, keys));
}

export function uiStrings(locale: Locale) {
	if (locale === 'cs') {
		return {
			footerNavHeading: 'Navigace',
			footerContactHeading: 'Kontakt',
			footerFollow: 'Follow',
			location: 'Brno, ČR',
		};
	}
	return {
		footerNavHeading: 'Navigation',
		footerContactHeading: 'Contact',
		footerFollow: 'Follow',
		location: 'Brno, CZ',
	};
}
