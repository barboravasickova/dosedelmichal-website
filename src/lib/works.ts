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

/** Panoramatické záběry muralů (~1024×460); 08 je 4:3 */
const wide: [number, number] = [256, 115];
const standard: [number, number] = [4, 3];

const worksRowImages: { image: string; ratio: [number, number] }[][] = [
	[
		{ image: '/images/works/01.jpg', ratio: wide },
		{ image: '/images/works/02.jpg', ratio: wide },
	],
	[
		{ image: '/images/works/03.jpg', ratio: wide },
		{ image: '/images/works/04.jpg', ratio: wide },
		{ image: '/images/works/05.jpg', ratio: wide },
	],
	[
		{ image: '/images/works/06.jpg', ratio: wide },
		{ image: '/images/works/07.jpg', ratio: wide },
	],
	[
		{ image: '/images/works/08.jpg', ratio: standard },
		{ image: '/images/works/09.jpg', ratio: wide },
	],
	[
		{ image: '/images/works/10.jpg', ratio: wide },
		{ image: '/images/works/11.jpg', ratio: wide },
		{ image: '/images/works/12.jpg', ratio: wide },
	],
	[
		{ image: '/images/works/13.jpg', ratio: wide },
		{ image: '/images/works/14.jpg', ratio: wide },
	],
];

function worksPhotoCaption(locale: Locale) {
	return locale === 'cs'
		? 'Graffiti Jam, Brno ČR 2026'
		: 'Graffiti Jam, Brno, Czech Republic 2026';
}

export function worksGalleryRows(locale: Locale): WorksRow[] {
	const caption = worksPhotoCaption(locale);

	return worksRowImages.map((photos) => ({
		photos: photos.map(({ image, ratio }) => ({
			image,
			caption,
			ratio,
		})),
	}));
}
