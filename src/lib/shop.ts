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
			title: 'Studie tvaru 2023',
			price: '8 000 Kč',
			spec: '20 × 50 cm · akryl na plátně',
		},
		{
			title: 'Studie tvaru 2025',
			price: '10 000 Kč',
			spec: '30 × 60 cm · akryl na plátně',
		},
	],
	en: [
		{
			title: 'Shape study 2023',
			price: '8,000 CZK',
			spec: '20 × 50 cm · acrylic on canvas',
		},
		{
			title: 'Shape study 2025',
			price: '10,000 CZK',
			spec: '30 × 60 cm · acrylic on canvas',
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
