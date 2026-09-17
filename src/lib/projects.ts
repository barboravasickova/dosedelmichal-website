import type { Locale } from './i18n';

export type CommissionProject = {
	slug: string;
	title: string;
	meta: string;
	subtitle: string;
	body: string[];
	/** Cesta k souboru v `public/`; chybí-li, zobrazí se šedý placeholder */
	heroImage?: string;
	gallery: string[];
};

type CommissionProjectCopy = Omit<CommissionProject, 'slug' | 'heroImage' | 'gallery'>;

type CommissionProjectDefinition = {
	slug: string;
	heroImage?: string;
	gallery: string[];
	copy: Record<Locale, CommissionProjectCopy>;
};

const commissionProjectDefinitions: CommissionProjectDefinition[] = [
	{
		slug: 'podchod-kralovo-pole',
		gallery: [],
		copy: {
			cs: {
				title: 'Podchod a tunel u nádraží Královo Pole',
				meta: 'Brno, Královo Pole – 2026',
				subtitle: 'Brno, Královo Pole – 2026',
				body: [
					'Grafická výzdoba podchodu a tunelu u nádraží Královo Pole v souvislosti s mostem (TÚ 2031). Realizace probíhá pod hlavičkou spolku Barvou proti šedi; zadavatelem je Správa železnic.',
					'Cílem je proměnit technický průchod v srozumitelné, vizuálně silné místo: kompozice musí fungovat v pohybu, při rychlém průchodu i při zastavení, a zároveň vydržet provoz ve veřejném prostoru.',
					'Fotodokumentace doplníme po dokončení realizace.',
				],
			},
			en: {
				title: 'Underpass and tunnel at Královo Pole station',
				meta: 'Brno, Královo Pole – 2026',
				subtitle: 'Brno, Královo Pole – 2026',
				body: [
					'Graphic design for the underpass and tunnel at Královo Pole station, tied to the bridge (TÚ 2031). The project runs under the civic association Barvou proti šedi, with Správa železnic as the client.',
					'The aim is to turn a technical corridor into a clear, visually strong place: the composition has to work in motion, at a glance, and on pause, while standing up to daily public use.',
					'Photo documentation will be added once the work is complete.',
				],
			},
		},
	},
	{
		slug: 'podchod-zlate-jablko',
		gallery: [],
		copy: {
			cs: {
				title: 'Podchod Zlaté jablko',
				meta: 'Zlín, Dlouhá – 2026',
				subtitle: 'Zlín, Dlouhá – 2026',
				body: [
					'Projekt sjednocuje podchod pod parkovištěm obchodního domu Zlaté jablko v ulici Dlouhá ve Zlíně. Autorem konceptu je Michal „SKRE“ Štejdíř; na realizaci se podílí Michal „DOSE“ Doseděl, Petr Send „Tufoe“, Eicul, Repas a Jazzy Stoklas.',
					'Jde o proměnu frekventovaného průchodu v autorskou, ale čitelnou galerii ve veřejném prostoru — propojení jednotlivých stylů do jednoho urbanistického celku, který funguje den i večer.',
					'Fotodokumentace doplníme po dokončení realizace.',
				],
			},
			en: {
				title: 'Zlaté jablko underpass',
				meta: 'Zlín, Dlouhá – 2026',
				subtitle: 'Zlín, Dlouhá – 2026',
				body: [
					'The project unifies the underpass beneath the Zlaté jablko department store parking on Dlouhá Street in Zlín. Michal “SKRE” Štejdíř authored the concept; Michal “DOSE” Doseděl, Petr Send “Tufoe”, Eicul, Repas, and Jazzy Stoklas contribute to the execution.',
					'The goal is to turn a busy passage into an authorial yet readable gallery in public space—linking individual styles into one urban whole that works by day and at night.',
					'Photo documentation will be added once the work is complete.',
				],
			},
		},
	},
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
				title: 'Rezidence Rybářka',
				meta: 'Brno, Poříčí × Rybářská – 2025',
				subtitle: 'Brno, Poříčí × Rybářská – 2025',
				body: [
					'Realizace zakázkové malby v rámci první etapy výstavby bytového komplexu Rybářka skupiny IMPERA Develop, s.r.o. Dílo je situováno v blízkosti křižovatky ulic Poříčí a Rybářská, vedle Mendlova náměstí.',
					'Kompozice propojuje portrét, typografii a grafické prvky do jednoho celku na betonové stěně ve veřejném prostoru. Motiv rybářky a stylizované ryby vychází z názvu rezidence i z charakteru místa, kde se nová zástavba potkává s historickou strukturou Brna.',
					'Malba vznikala přímo na místě — od přípravy plochy a barevných pásů až po detailní práci ve výškách. V galerii je zachycen průběh realizace i dokončený stav.',
				],
			},
			en: {
				title: 'Rybářka Residence',
				meta: 'Brno, Poříčí × Rybářská – 2025',
				subtitle: 'Brno, Poříčí × Rybářská – 2025',
				body: [
					'A commissioned mural for phase I of the Rybářka residential complex by IMPERA Develop, s.r.o. The work sits near the intersection of Poříčí and Rybářská streets, beside Mendlovo náměstí.',
					'The composition combines portraiture, typography, and graphic elements on a concrete wall in public space. The fisherwoman motif and stylized fish draw on the development’s name and on a place where new building meets Brno’s older urban fabric.',
					'The mural was painted on site—from surface prep and color bands to detailed work at height. The gallery documents the process and the finished piece.',
				],
			},
		},
	},
	{
		slug: 'galerie-street-art-dornych',
		gallery: [],
		copy: {
			cs: {
				title: 'Galerie „street art Dornych“',
				meta: 'Brno, Dornych – 2025',
				subtitle: 'Brno, Dornych – 2025',
				body: [
					'Moje malba je součástí projektu „street art Dornych“ — výsledku spolupráce spolku Panto Graff se společnostmi Crestyl a Gemo. Na oplocení areálu stavby na místě bývalého hypermarketu Tesco Dornych vznikla otevřená galerie pro třicet pozvaných umělců z Česka i zahraničí.',
					'Každý autor pracuje s vlastním rukopisem, ale společným cílem je proměnit dočasné oplocení v živou, veřejně přístupnou výstavu street artu uprostřed rozvíjející se čtvrti.',
					'Fotodokumentace doplníme po zveřejnění finálních snímků z galerie.',
				],
			},
			en: {
				title: '“street art Dornych” gallery',
				meta: 'Brno, Dornych – 2025',
				subtitle: 'Brno, Dornych – 2025',
				body: [
					'My mural is part of the “street art Dornych” project—a collaboration between the Panto Graff association and Crestyl and Gemo. On the fence around the former Tesco Dornych site, an open gallery was created for thirty invited artists from the Czech Republic and abroad.',
					'Each author keeps their own hand, but the shared goal is to turn temporary hoarding into a lively, publicly accessible street-art exhibition in a developing district.',
					'Photo documentation will be added when final gallery images are available.',
				],
			},
		},
	},
	{
		slug: 'urban-art-jam-olomouc',
		gallery: [],
		copy: {
			cs: {
				title: 'Urban Art jam',
				meta: 'Olomouc, Černá cesta – 2025',
				subtitle: 'Olomouc, Černá cesta – 2025',
				body: [
					'Realizace vznikla v rámci Dnů evropského dědictví jako společný projekt umělců Michal „DOSE“ Doseděl, Vincent Chignier a Jiří „Dosy Doss“ Dosoudil pod záštitou Chaos company.',
					'Místo na hřišti Orlák v ulici Černá cesta propojuje sportovní areál s autorskou malbou ve veřejném prostoru — dialog tří různých stylů v jedné kompozici, viditelné z blízka i z dálky.',
					'Fotodokumentace doplníme po zveřejnění finálních snímků.',
				],
			},
			en: {
				title: 'Urban Art jam',
				meta: 'Olomouc, Černá cesta – 2025',
				subtitle: 'Olomouc, Černá cesta – 2025',
				body: [
					'The piece was created for European Heritage Days as a joint project by Michal “DOSE” Doseděl, Vincent Chignier, and Jiří “Dosy Doss” Dosoudil, under the umbrella of Chaos company.',
					'The site at the Orlák playground on Černá cesta links a sports area with authorial mural work in public space—a dialogue of three distinct styles in one composition, readable up close and from a distance.',
					'Photo documentation will be added when final images are available.',
				],
			},
		},
	},
	{
		slug: 'ponavka-graff-session',
		gallery: [],
		copy: {
			cs: {
				title: 'Ponávka Graff session',
				meta: 'Brno, Ponávka – 2025',
				subtitle: 'Brno, Ponávka – 2025',
				body: [
					'Malba vznikla v rámci akce pod hlavičkou spolku Panto Graff a společnosti CTP. Nachází se na nové cyklostezce mezi Vlněnou a Ponávkou, v koridoru mezi ulicemi Dornych a Škrobárenská.',
					'Projekt propojuje rozvoj městské infrastruktury s vizuální kulturou — autorská práce na ploše, kterou denně využívají cyklisté i chodci, a která je součástí proměny brněnské průmyslové zóny.',
					'Fotodokumentace doplníme po zveřejnění finálních snímků.',
				],
			},
			en: {
				title: 'Ponávka Graff session',
				meta: 'Brno, Ponávka – 2025',
				subtitle: 'Brno, Ponávka – 2025',
				body: [
					'The mural was painted as part of an event led by the Panto Graff association and CTP. It sits on a new cycle route between Vlněna and Ponávka, in the corridor between Dornych and Škrobárenská streets.',
					'The project links urban infrastructure with visual culture—authorial work on a surface used daily by cyclists and pedestrians, as part of the transformation of Brno’s industrial zone.',
					'Photo documentation will be added when final images are available.',
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
				meta: 'Prostějov, Tyršova – 2025',
				subtitle: 'Prostějov, Tyršova – 2025',
				body: [
					'Šestý ročník akce Graffiti jam Prostějov spojil více než deset tvůrců, kteří svými díly nově vyzdobili betonovou zeď podél cyklostezky za dopravním hřištěm nedaleko Tyršovy ulice.',
					'Můj úsek na zdi propojuje realistický portrét s abstraktními tvary, květinami a autorskou typografií v růžovo-fialové paletě — v dialogu se sousedy na stejné stěně.',
					'Fotografie v galerii ukazují průběh malby i dokončený celek na modulárním betonovém oplocení v exteriéru.',
				],
			},
			en: {
				title: 'Graffiti jam Prostějov',
				meta: 'Prostějov, Tyršova – 2025',
				subtitle: 'Prostějov, Tyršova – 2025',
				body: [
					'The sixth Graffiti jam Prostějov brought together more than ten artists who freshly decorated a concrete wall along the cycle path behind the traffic playground near Tyršova Street.',
					'My section of the wall combines a realistic portrait with abstract shapes, flowers, and author typography in a pink-and-violet palette—in dialogue with neighboring pieces on the same stretch.',
					'Gallery images show the painting in progress and the finished run on modular concrete fencing outdoors.',
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
				meta: 'Brno, Černovická – 2024',
				subtitle: 'Brno, Černovická – 2024',
				body: [
					'Grafická výzdoba železničního mostu přes ulici Černovická (TÚ 2301) — realizace pod hlavičkou spolku Barvou proti šedi, zadavatel Správa železnic.',
					'Malba pokrývá betonové opěrné zdi a pilíře mostu. Kompozice reaguje na skloněné plochy, výšku konstrukce a pohyb kolemjdoucích i aut pod mostem; prolínají se realistické detaily, abstraktní geometrie, vlnové linie a autorská typografie.',
					'Dílo je čitelné z vozovky, chodníku i svahu u kolejí a je navržené pro dlouhodobý provoz ve veřejném prostoru.',
				],
			},
			en: {
				title: 'Černovická railway bridge',
				meta: 'Brno, Černovická – 2024',
				subtitle: 'Brno, Černovická – 2024',
				body: [
					'Graphic design for the railway bridge over Černovická Street (TÚ 2301)—delivered under the civic association Barvou proti šedi, client Správa železnic.',
					'The mural covers concrete retaining walls and bridge pillars. The composition responds to sloped surfaces, structure height, and movement below; realistic detail, abstract geometry, flowing lines, and author typography interweave.',
					'The work reads from the road, sidewalk, and trackside embankment and is built for long-term use in public space.',
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

export function commissionListHero(locale: Locale) {
	if (locale === 'cs') {
		return {
			title: 'Zakázková malba',
			subtitle:
				'Autorské realizace velkoplošných maleb, fasád a projektů ve veřejném prostoru.',
		};
	}
	return {
		title: 'Commissions',
		subtitle:
			'Authorial large-scale paintings, facades, and projects in public space.',
	};
}
