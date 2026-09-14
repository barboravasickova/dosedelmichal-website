import type { Locale } from './i18n';

export type CommissionProject = {
	slug: string;
	title: string;
	meta: string;
	subtitle: string;
	body: string[];
	heroImage: string;
	gallery: string[];
};

type CommissionProjectCopy = Omit<CommissionProject, 'slug' | 'heroImage' | 'gallery'>;

type CommissionProjectDefinition = {
	slug: string;
	heroImage: string;
	gallery: string[];
	copy: Record<Locale, CommissionProjectCopy>;
};

const commissionProjectDefinitions: CommissionProjectDefinition[] = [
	{
		slug: 'rybarka',
		heroImage: '/images/commissions/rybarka/05.webp',
		gallery: [
			'/images/commissions/rybarka/01.webp',
			'/images/commissions/rybarka/02.webp',
			'/images/commissions/rybarka/03.webp',
			'/images/commissions/rybarka/04.webp',
		],
		copy: {
			cs: {
				title: 'Rybářka',
				meta: 'Brno, Česká republika – 2026',
				subtitle: 'Velkoformátová malba pod mostem',
				body: [
					'Realizace spojuje portrét, typografii a grafické prvky do jednoho celku na betonové stěně ve veřejném prostoru. Motiv rybářky a stylizované ryby vychází z místního kontextu a názvu díla.',
					'Malba vznikala přímo na místě v podjezdu — od přípravy plochy a nástřiku barevných pásů až po detailní práci na tváři a nápisu. V galerii je vidět průběh i dokončený stav včetně práce ve výškách na plošině.',
					'Projekt je ukázkou zakázkové malby pro veřejný prostor: respekt k architektuře, čitelnost z dálky i zblízka a autorský rukopis v kombinaci realismu a streetartových prvků.',
				],
			},
			en: {
				title: 'Rybářka',
				meta: 'Brno, Czech Republic – 2026',
				subtitle: 'Large-scale mural under a bridge',
				body: [
					'The piece combines portraiture, typography, and graphic elements into one composition on a concrete wall in public space. The fisherwoman motif and stylized fish grow from the local context and the work’s title.',
					'The mural was painted on site in an underpass—from surface prep and color bands to the detailed face and lettering. The gallery shows both work in progress and the finished wall, including work at height on the platform.',
					'The project illustrates commission work for public space: respect for the architecture, readability from near and far, and an authorial hand mixing realism with street-art elements.',
				],
			},
		},
	},
	{
		slug: 'zeleznicni-most-cernovicka',
		heroImage: '/images/commissions/cernovicka-most/02.jpg',
		gallery: [
			'/images/commissions/cernovicka-most/01.jpg',
			'/images/commissions/cernovicka-most/03.jpg',
		],
		copy: {
			cs: {
				title: 'Železniční most Černovická',
				meta: 'Brno, Česká republika',
				subtitle: 'Malba na opěrných zdech mostu',
				body: [
					'Realizace pokrývá betonové opěrné zdi a pilíře železničního mostu v ulici Černovická. Kompozice reaguje na skloněné plochy, výšku konstrukce a pohyb kolemjdoucích i aut pod mostem.',
					'Na stěnách se prolínají realistické detaily tváře, abstraktní geometrie, vlnové linie a autorská typografie v modro-růžové paletě. Malba je čitelná z různých úhlů — z vozovky, chodníku i svahu u kolejí.',
					'Jde o typickou zakázku pro veřejný prostor: náročné technické podmínky, práce v exteriéru a dílo, které má obstát v každodenním provozu městské čtvrti.',
				],
			},
			en: {
				title: 'Černovická railway bridge',
				meta: 'Brno, Czech Republic',
				subtitle: 'Mural on bridge retaining walls',
				body: [
					'The work covers the concrete retaining walls and pillars of a railway bridge on Černovická Street. The composition responds to sloped surfaces, the height of the structure, and the movement of pedestrians and traffic below.',
					'Realistic facial details merge with abstract geometry, flowing lines, and author typography in a blue-and-pink palette. The mural reads from multiple viewpoints—from the road, the sidewalk, and the embankment by the tracks.',
					'This is typical public-space commission work: demanding technical conditions, outdoor production, and a piece built to hold up in the everyday life of an urban neighborhood.',
				],
			},
		},
	},
	{
		slug: 'graffiti-jam-prostejov',
		heroImage: '/images/commissions/graffiti-jam-prostejov/03.jpg',
		gallery: [
			'/images/commissions/graffiti-jam-prostejov/01.jpg',
			'/images/commissions/graffiti-jam-prostejov/02.webp',
		],
		copy: {
			cs: {
				title: 'Graffiti jam Prostějov',
				meta: 'Prostějov, Česká republika – 6. ročník',
				subtitle: 'Společná malba podél cyklostezky',
				body: [
					'Šestý ročník akce Graffiti jam Prostějov spojil více než deset tvůrců, kteří svými díly nově vyzdobili betonovou zeď podél cyklostezky za dopravním hřištěm nedaleko Tyršovy ulice.',
					'Můj úsek na zdi propojuje realistický portrét s abstraktními tvary, květinami a autorskou typografií v růžovo-fialové paletě — v dialogu se sousedy na stejné stěně.',
					'Fotografie v galerii ukazují průběh malby i dokončený celek na modulárním betonovém oplocení v exteriéru.',
				],
			},
			en: {
				title: 'Graffiti jam Prostějov',
				meta: 'Prostějov, Czech Republic – 6th edition',
				subtitle: 'Collaborative mural along the bike path',
				body: [
					'The sixth Graffiti jam Prostějov brought together more than ten artists who freshly decorated a concrete wall along the cycle path behind the traffic playground near Tyršova Street.',
					'My section of the wall combines a realistic portrait with abstract shapes, flowers, and author typography in a pink-and-violet palette—in dialogue with neighboring pieces on the same stretch.',
					'Gallery images show the painting in progress and the finished run on modular concrete fencing outdoors.',
				],
			},
		},
	},
];

function buildCommissionProjects(locale: Locale): CommissionProject[] {
	return commissionProjectDefinitions.map(({ slug, heroImage, gallery, copy }) => ({
		slug,
		heroImage,
		gallery,
		...copy[locale],
	}));
}

export function commissionProjects(locale: Locale) {
	return buildCommissionProjects(locale);
}

export function getCommissionProject(locale: Locale, slug: string) {
	return commissionProjects(locale).find((p) => p.slug === slug);
}

export function getNextCommissionProject(locale: Locale, slug: string) {
	const list = commissionProjects(locale);
	if (list.length <= 1) return undefined;
	const index = list.findIndex((p) => p.slug === slug);
	if (index === -1) return undefined;
	return list[(index + 1) % list.length];
}

export function commissionListPath(locale: Locale) {
	return locale === 'cs' ? '/cs/zakazkova-malba' : '/en/commissions';
}

export function commissionDetailPath(locale: Locale, slug: string) {
	return `${commissionListPath(locale)}/${slug}`;
}

export function nextProjectLabel(locale: Locale) {
	return locale === 'cs' ? 'Další projekt' : 'Next project';
}

export function projectGalleryHeading(locale: Locale) {
	return locale === 'cs' ? 'Galerie' : 'Gallery';
}
