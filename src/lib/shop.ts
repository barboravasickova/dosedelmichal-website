import type { Locale } from './i18n';
import type { ProductCard } from './placeholders';
import { contactEmail } from './site';

export function shopListHero(locale: Locale) {
	return { title: 'Shop' };
}

export function shopMetaDescription(locale: Locale) {
	if (locale === 'cs') {
		return `Veškerá díla je možno objednat přes e-mail ${contactEmail}`;
	}
	return `All works can be ordered via email at ${contactEmail}`;
}

export function shopOrderNotice(locale: Locale) {
	return locale === 'cs'
		? 'Veškerá díla je možno objednat přes e-mail'
		: 'All works can be ordered via email';
}

type ShopProductCopy = { title: string; price: string; spec: string };

type ShopProductDefinition = {
	year: number;
	copy: Record<Locale, ShopProductCopy>;
	image?: string;
};

const shopProductDefinitions: ShopProductDefinition[] = [
	{
		year: 2026,
		copy: {
			cs: {
				title: 'Somnia',
				price: 'Na dotaz',
				spec: '130 × 50 cm · akryl na plátně · 2026',
			},
			en: {
				title: 'Somnia',
				price: 'Price on request',
				spec: '130 × 50 cm · acrylic on canvas · 2026',
			},
		},
	},
	{
		year: 2026,
		copy: {
			cs: {
				title: 'PAVOUR NOCTURNUS',
				price: 'Na dotaz',
				spec: '70 × 50 cm · akryl na plátně · 2026',
			},
			en: {
				title: 'PAVOUR NOCTURNUS',
				price: 'Price on request',
				spec: '70 × 50 cm · acrylic on canvas · 2026',
			},
		},
	},
	{
		year: 2026,
		copy: {
			cs: {
				title: 'Vášeň (Atrophaneura semperi / Black Ballerina)',
				price: 'Na dotaz',
				spec: '25 × 25 cm · akryl, kombinovaná technika · 2026',
			},
			en: {
				title: 'Passion (Atrophaneura semperi / Black Ballerina)',
				price: 'Price on request',
				spec: '25 × 25 cm · acrylic, mixed media · 2026',
			},
		},
	},
	{
		year: 2026,
		copy: {
			cs: {
				title: 'Smrt (Acherontia / Deaths-head)',
				price: 'Na dotaz',
				spec: '25 × 25 cm · akryl, kombinovaná technika · 2026',
			},
			en: {
				title: 'Death (Acherontia / Deaths-head)',
				price: 'Price on request',
				spec: '25 × 25 cm · acrylic, mixed media · 2026',
			},
		},
	},
	{
		year: 2026,
		copy: {
			cs: {
				title: 'Euforie (Blue Birdwing)',
				price: 'Na dotaz',
				spec: '25 × 25 cm · akryl, kombinovaná technika · 2026',
			},
			en: {
				title: 'Euphoria (Blue Birdwing)',
				price: 'Price on request',
				spec: '25 × 25 cm · acrylic, mixed media · 2026',
			},
		},
	},
	{
		year: 2025,
		image: '/images/shop/obraz-02.jpg',
		copy: {
			cs: {
				title: 'Studie tvaru',
				price: '10 000 Kč',
				spec: '30 × 60 cm · akryl na plátně · 2025',
			},
			en: {
				title: 'Shape study',
				price: '10,000 CZK',
				spec: '30 × 60 cm · acrylic on canvas · 2025',
			},
		},
	},
	{
		year: 2023,
		image: '/images/shop/obraz-01.jpg',
		copy: {
			cs: {
				title: 'Studie tvaru',
				price: '8 000 Kč',
				spec: '20 × 50 cm · akryl na plátně · 2023',
			},
			en: {
				title: 'Shape study',
				price: '8,000 CZK',
				spec: '20 × 50 cm · acrylic on canvas · 2023',
			},
		},
	},
];

export function shopProducts(locale: Locale): ProductCard[] {
	return [...shopProductDefinitions]
		.sort((a, b) => b.year - a.year)
		.map(({ copy, image }) => ({
			...copy[locale],
			image,
		}));
}
