import type { Locale } from './i18n';
import type { ProductCard } from './placeholders';

export function shopOrderNotice(locale: Locale) {
	return locale === 'cs'
		? 'Veškerá díla je možno objednat přes e-mail'
		: 'All works can be ordered via email';
}

const shopProductCopy: Record<
	Locale,
	{ title: string; price: string; spec: string }[]
> = {
	cs: [
		{
			price: 'Cena na dotaz',
			title: 'Obraz 01',
			spec: 'Sprej na plátně - 90 x 50 cm',
		},
		{
			price: 'Cena na dotaz',
			title: 'Obraz 02',
			spec: 'Sprej na plátně - 90 x 50 cm',
		},
	],
	en: [
		{
			price: 'Price on request',
			title: 'Painting 01',
			spec: 'Spray paint on canvas - 90 x 50 cm',
		},
		{
			price: 'Price on request',
			title: 'Painting 02',
			spec: 'Spray paint on canvas - 90 x 50 cm',
		},
	],
};

const shopProductImages = ['/images/shop/obraz-01.jpg', '/images/shop/obraz-02.jpg'];

export function shopProducts(locale: Locale): ProductCard[] {
	return shopProductCopy[locale].map((copy, index) => ({
		...copy,
		image: shopProductImages[index],
	}));
}
