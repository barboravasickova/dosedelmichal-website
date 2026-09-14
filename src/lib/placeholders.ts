import type { Locale } from './i18n';

export type ProductCard = {
	title: string;
	price: string;
	/** Materiál a rozměry, např. „Sprej na plátně – 90 × 50 cm“ */
	spec: string;
	image?: string;
};

export function placeholderProducts(locale: Locale, count = 3): ProductCard[] {
	const title = locale === 'cs' ? 'Název produktu' : 'Product name';
	const price = locale === 'cs' ? '1 200 Kč' : '1 200 CZK';
	const spec =
		locale === 'cs' ? 'Sprej na plátně – 90 × 50 cm' : 'Spray paint on canvas – 90 × 50 cm';

	return Array.from({ length: count }, () => ({
		title,
		price,
		spec,
		image: '/images/main-img.jpg',
	}));
}
