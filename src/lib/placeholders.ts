import type { Locale } from './i18n';

export type ProductCard = {
	title: string;
	price: string;
	image?: string;
};

export function placeholderProducts(locale: Locale, count = 3): ProductCard[] {
	const title = locale === 'cs' ? 'Název produktu' : 'Product name';
	const price = locale === 'cs' ? '1 200 Kč' : '1 200 CZK';
	return Array.from({ length: count }, () => ({
		title,
		price,
		image: '/images/main-img.jpg',
	}));
}
