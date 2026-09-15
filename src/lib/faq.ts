import type { Locale } from './i18n';

export type FaqBullet =
	| string
	| {
			label: string;
			text: string;
	  };

export type FaqItem = {
	question: string;
	paragraphs: string[];
	bullets?: FaqBullet[];
	afterParagraphs?: string[];
};

export type FaqSection = {
	title: string;
	items: FaqItem[];
};

const faqCs: FaqSection[] = [
	{
		title: 'Poptávka, realizace a průběh spolupráce',
		items: [
			{
				question: 'Jak probíhá zakázková malba od prvního kontaktu po dokončení?',
				paragraphs: [],
				bullets: [
					{
						label: 'Poptávka',
						text: 'Pošlete mi přibližné rozměry stěny, fotku místa a vaši představu (případně téma či styl).',
					},
					{
						label: 'Konzultace a kalkulace',
						text: 'Na základě vašich podkladů připravím odhad ceny a časový rámec.',
					},
					{
						label: 'Grafický návrh',
						text: 'Vypracuji vizuální návrh přímo na míru danému prostoru ke schválení.',
					},
					{
						label: 'Realizace',
						text: 'V domluveném termínu stěnu připravím a namaluji.',
					},
				],
			},
			{
				question: 'Děláte návrh na míru, nebo musím mít vlastní předlohu?',
				paragraphs: [
					'Obojí je možné. Pokud máte přesnou vizuální představu, fotku či firemní identitu, navážu na ni. Pokud konkrétní představu nemáte, vymyslím a navrhnu originální koncept na míru vašemu prostoru a vkusu.',
				],
			},
			{
				question: 'Jak dlouho trvá realizace jedné malby?',
				paragraphs: [
					'Záleží na velikosti a detailnosti motivu. Menší stěna v interiéru nebo vnější fasáda rodinného domu zabere zpravidla 1 až 3 dny. Velkoplošné realizace a veřejné zakázky (jako jsou podchody, podjezdy či dlouhé zdi) trvají podle rozsahu několik dní až týdnů.',
				],
			},
		],
	},
	{
		title: 'Technické dotazy, trvanlivost a podklad',
		items: [
			{
				question: 'Na jaké povrchy je možné malovat?',
				paragraphs: [
					'Malovat lze na téměř jakýkoliv podklad – běžnou omítku, beton, cihlu, dřevo i plech. Důležité je pouze to, aby byl podklad přídržný, čistý a drolil se co nejméně.',
				],
			},
			{
				question: 'Jaká je životnost sprejérské/streetartové malby v exteriéru?',
				paragraphs: [
					'Při použití profesionálních outdoorových barev a sprejů je životnost malby mnohaletá. Barvy jsou vysoce odolné vůči UV záření i nepřízni počasí, takže neztrácejí svou sytost ani po letech na dešti a slunci.',
				],
			},
			{
				question: 'Je možné malbu zabezpečit proti vandalismu a nežádoucímu tagování?',
				paragraphs: [
					'Ano, zejména u veřejně přístupných zakázek (podchody, mosty, opěrné zdi) lze hotovou malbu opatřit speciálním antigraffiti nátěrem. Pokud by ji někdo v budoucnu posprejoval, nečistoty se jednoduše smyjí vodou bez poškození původního díla.',
				],
			},
		],
	},
	{
		title: 'Cena a legislativa',
		items: [
			{
				question: 'Jak se počítá cena zakázkové malby?',
				paragraphs: [
					'Cena je vždy individuální a odvíjí se od tří hlavních faktorů:',
				],
				bullets: [
					'Rozsah/plocha (v m²).',
					'Složitost a detailnost motivu.',
					'Náročnost přípravy a přístupu (stav podkladu, potřeba lešení či plošiny u výškových prací).',
				],
				afterParagraphs: [
					'Přesnou cenovou nabídku vám rád připravím po zaslání fotky a rozměrů stěny.',
				],
			},
			{
				question: 'Máte zkušenosti s malbou ve veřejném prostoru a pro obce či developery?',
				paragraphs: [
					'Ano, mám za sebou řadu rozsáhlých realizací ve veřejném sektoru i pro soukromé developery – od výmalby podchodů u nádraží a podjezdů vlakových mostů až po designové stěny u nových bytových komplexů. Zvládám kompletní koordinaci, dodržování bezpečnostních předpisů i práci ve specifikovaných technických podmínkách.',
				],
			},
			{
				question: 'Je taková malba legální?',
				paragraphs: [
					'Všechny zakázky realizuji výhradně na základě dohody s majitelem nemovitosti, investorem nebo příslušným městským úřadem. Zákazník se nemusí obávat žádných právních komplikací.',
				],
			},
		],
	},
];

const faqEn: FaqSection[] = [
	{
		title: 'Inquiry, process and collaboration',
		items: [
			{
				question: 'How does a commission go from first contact to completion?',
				paragraphs: [],
				bullets: [
					{
						label: 'Inquiry',
						text: 'Send approximate wall dimensions, a photo of the site, and your idea (theme or style if you have one).',
					},
					{
						label: 'Consultation and quote',
						text: 'Based on your inputs I prepare a price estimate and timeline.',
					},
					{
						label: 'Design',
						text: 'I create a visual proposal tailored to the space for your approval.',
					},
					{
						label: 'Execution',
						text: 'On the agreed date I prepare the wall and paint the mural.',
					},
				],
			},
			{
				question: 'Do you create custom designs, or do I need my own artwork?',
				paragraphs: [
					'Both work. If you have a clear visual idea, photo, or brand identity, I build on that. If not, I develop an original concept suited to your space and taste.',
				],
			},
			{
				question: 'How long does one mural take to paint?',
				paragraphs: [
					'It depends on size and detail. A smaller interior wall or exterior facade of a family home usually takes about 1–3 days. Large-scale and public projects (underpasses, bridge tunnels, long walls) can take from several days to weeks depending on scope.',
				],
			},
		],
	},
	{
		title: 'Technical questions, durability and substrate',
		items: [
			{
				question: 'Which surfaces can be painted?',
				paragraphs: [
					'Almost any stable substrate — plaster, concrete, brick, wood, or metal. The surface must be sound, clean, and not flaking excessively.',
				],
			},
			{
				question: 'How long does spray/street art last outdoors?',
				paragraphs: [
					'With professional outdoor paints and sprays, murals last for many years. They resist UV and weather well and keep their colour even after years of rain and sun.',
				],
			},
			{
				question: 'Can the mural be protected against vandalism and tagging?',
				paragraphs: [
					'Yes. Especially on publicly accessible sites (underpasses, bridges, retaining walls) the finished work can be coated with a special anti-graffiti finish. If someone tags it later, the dirt can usually be washed off with water without damaging the original piece.',
				],
			},
		],
	},
	{
		title: 'Pricing and legal',
		items: [
			{
				question: 'How is the price of a commission calculated?',
				paragraphs: ['Every quote is individual and based on three main factors:'],
				bullets: [
					'Area (m²).',
					'Complexity and level of detail.',
					'Preparation and access (substrate condition, need for scaffolding or lifts for height work).',
				],
				afterParagraphs: [
					'I am happy to prepare an exact quote once you send photos and wall dimensions.',
				],
			},
			{
				question: 'Do you have experience with public-space work for municipalities or developers?',
				paragraphs: [
					'Yes — from station underpasses and railway bridge tunnels to feature walls at new residential developments. I handle coordination, safety requirements, and work within specified technical conditions.',
				],
			},
			{
				question: 'Is this kind of mural legal?',
				paragraphs: [
					'I only work with agreement from the property owner, investor, or relevant municipal authority. Clients do not need to worry about legal issues when the commission is arranged properly.',
				],
			},
		],
	},
];

const faq: Record<Locale, FaqSection[]> = {
	cs: faqCs,
	en: faqEn,
};

export function faqListHero(locale: Locale) {
	if (locale === 'cs') {
		return {
			title: 'FAQ',
			subtitle: 'Odpovědi na nejčastější dotazy k zakázkové malbě a autorské tvorbě.',
		};
	}
	return {
		title: 'FAQ',
		subtitle:
			'Answers to the most common questions about commission painting and authorial work.',
	};
}

export function faqSections(locale: Locale) {
	return faq[locale];
}
