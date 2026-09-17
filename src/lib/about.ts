import type { Locale } from './i18n';

export type AboutExhibition = {
	year: string;
	title: string;
	detail: string;
	href?: string;
	linkAriaLabel?: string;
};

export type AboutContent = {
	title: string;
	paragraphs: string[];
	exhibitionsHeading: string;
	exhibitions: AboutExhibition[];
	portraitAlt: string;
};

const aboutPortraitSrc = '/images/about-portrait.jpg';

export { aboutPortraitSrc };

const aboutCs: AboutContent = {
	title: 'DOSE (Michal Doseděl)',
	portraitAlt: 'Michal Doseděl (DOSE)',
	paragraphs: [
		'Tvořím autorský street art, muraly a velkoformátové malby na zakázku pro veřejný i soukromý prostor.',
		'Vycházím z kořenů klasického graffiti, které posouvám směrem k současné dekonstrukci znaku. Tradiční strukturu rozkládám do vrstev, rytmu, geometrie a optického glitchu. Na stěnách hledám napětí mezi řádem a nahodilostí, přesnou konstrukcí a křehkostí detailu. Ostré linie a architektonické prvky kombinuji s organickými tvary a fragmenty lidských tváří. Geometrie pro mě představuje systém a pevný řád, zatímco organické motivy do něj vnášejí živost, emoci a určitou míru neklidu.',
		'Každou realizaci stavím v dialogu s konkrétním místem. Zajímá mě jeho atmosféra, měřítko i kontext a hledám způsob, jak je přetavit do osobitého vizuálního zážitku. Baví mě spolupracovat s architekty, městy, firmami i soukromými investory a proměňovat jejich prostory výrazným autorským gestem.',
		'Od prvního skicování až po poslední vrstvu barvy propojuji řemeslnou preciznost s kreativní svobodou. Výsledkem má být dílo, které obstojí samo o sobě, ale zároveň přirozeně komunikuje s architekturou, prostorem i lidmi, kteří se s ním každý den setkávají.',
	],
	exhibitionsHeading: 'Výstavy',
	exhibitions: [
		{
			year: '2026',
			title: 'Za zdí',
			detail: 'kolektivní výstava, Studio G21, Olomouc',
			href: 'https://chaoscompany.art/blog/9zidp82okqoaiprndfczenkok9d4kz',
			linkAriaLabel: 'Za zdí — článek na blogu Chaos company',
		},
	],
};

const aboutEn: AboutContent = {
	title: 'DOSE (Michal Doseděl)',
	portraitAlt: 'Michal Doseděl (DOSE)',
	paragraphs: [
		'I create original street art, murals, and large-format commission paintings for public and private spaces.',
		'My work grows out of classic graffiti, which I push toward contemporary deconstruction of the sign. I break traditional structure down into layers, rhythm, geometry, and optical glitch. On walls I look for tension between order and chance, precise construction and fragile detail. I combine sharp lines and architectural elements with organic shapes and fragments of human faces. Geometry stands for system and solid order; organic motifs bring it vitality, emotion, and a measure of unrest.',
		'Every project is a dialogue with a specific place. I care about its atmosphere, scale, and context, and I look for ways to turn them into a distinctive visual experience. I enjoy collaborating with architects, cities, companies, and private investors to transform their spaces with a strong authorial gesture.',
		'From the first sketch to the final layer of paint, I connect craft precision with creative freedom. The result should be a work that holds on its own while naturally speaking to the architecture, the space, and the people who encounter it every day.',
	],
	exhibitionsHeading: 'Exhibitions',
	exhibitions: [
		{
			year: '2026',
			title: 'Za zdí',
			detail: 'group exhibition, Studio G21, Olomouc',
			href: 'https://chaoscompany.art/blog/9zidp82okqoaiprndfczenkok9d4kz',
			linkAriaLabel: 'Za zdí — blog post on Chaos company',
		},
	],
};

const about: Record<Locale, AboutContent> = {
	cs: aboutCs,
	en: aboutEn,
};

export function aboutContent(locale: Locale) {
	return about[locale];
}
