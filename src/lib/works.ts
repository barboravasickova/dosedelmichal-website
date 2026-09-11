import type { Locale } from './i18n';

export type WorkPhoto = {
	/** Cesta k souboru v `public/`; prázdné = šedý placeholder */
	image?: string;
	caption: string;
	/** Šířka : výška — podíl šířky v řádku při společné výšce */
	ratio: [number, number];
};

export type WorksRow = {
	photos: WorkPhoto[];
};

/** Pořadí řádků: 2 nebo 3 fotky, každý řádek přes celou šířku kontejneru */
const rowLayouts: [number, number][][] = [
	[[3, 2], [4, 5]],
	[[1, 1], [16, 10], [3, 4]],
	[[5, 4], [7, 5]],
	[[4, 3], [3, 2]],
	[[2, 3], [5, 4], [3, 2]],
	[[16, 10], [1, 1]],
];

function workPhoto(locale: Locale, ratio: [number, number]): WorkPhoto {
	const caption =
		locale === 'cs' ? 'Město, Česká republika – 2026' : 'City, Czech Republic – 2026';

	return {
		caption,
		ratio,
	};
}

export function worksGalleryRows(locale: Locale): WorksRow[] {
	return rowLayouts.map((ratios) => ({
		photos: ratios.map((ratio) => workPhoto(locale, ratio)),
	}));
}
