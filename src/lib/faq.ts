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
						text: 'Pošlete mi přibližné rozměry stěny, fotografii prostoru a vaši představu o motivu, tématu nebo stylu.',
					},
					{
						label: 'Konzultace a cenová nabídka',
						text: 'Společně upřesníme zadání. Na základě dodaných podkladů připravím cenovou nabídku a domluvíme se na termínu realizace.',
					},
					{
						label: 'Grafický návrh',
						text: 'Připravím návrh malby na míru vašemu prostoru, který před samotnou realizací společně odsouhlasíme.',
					},
					{
						label: 'Realizace',
						text: 'V domluveném termínu stěnu připravím a pustím se do samotné malby.',
					},
				],
			},
			{
				question: 'Děláte návrh na míru, nebo musím mít vlastní předlohu?',
				paragraphs: [
					'<strong>Vlastní předlohu mít nemusíte.</strong> Stačí mi říct, jaké téma nebo motiv si přejete. Na základě vašeho zadání vytvořím vlastní originální návrh, který přizpůsobím konkrétnímu prostoru. Každá malba tak vzniká jako autorské dílo přímo pro dané místo.',
				],
			},
			{
				question: 'Jak dlouho trvá realizace jedné malby?',
				paragraphs: [
					'Záleží na velikosti a náročnosti motivu. Menší realizace obvykle trvají <strong>1 až 3 dny</strong>. Velkoplošné realizace a veřejné zakázky, jako jsou podchody, podjezdy či dlouhé zdi, trvají podle rozsahu <strong>několik dní až týdnů</strong>.',
				],
			},
			{
				question: 'Kde všude malby realizujete a jak je to s dopravou?',
				paragraphs: [
					'Sídlím v Brně, ale za zakázkami cestuji po celé České republice i do zahraničí.',
					'Ceník dopravy:',
				],
				bullets: [
					{
						label: 'Brno a blízké okolí',
						text: '<strong>Doprava zdarma</strong>',
					},
					{
						label: 'Mimo Brno',
						text: '<strong>10 Kč/km</strong>',
					},
					{
						label: 'Vzdálenější a velké zakázky',
						text: 'Cenu dopravy sjednáme individuálně tak, aby pro vás byla co nejvýhodnější.',
					},
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
					'Malovat lze na řadu povrchů, například na omítku, beton, cihlu, dřevo nebo plech. Základem je, aby byl podklad <strong>pevný, čistý</strong> a bez výrazného drolení nebo odlupování. V případě specifického povrchu je vhodnost možné posoudit předem podle fotografií nebo přímo na místě.',
				],
			},
			{
				question: 'Je potřeba povrch před malbou nějak připravit?',
				paragraphs: [
					'Ano, podklad by měl být před realizací především pevný, čistý a bez odlupujících se nebo nesoudržných částí. Rozsah přípravy závisí na stavu konkrétního povrchu. Pokud je potřeba povrch před malbou očistit, opravit nebo jinak připravit, domluvíme se na konkrétním postupu podle dané zakázky.',
				],
			},
			{
				question: 'Jaká je životnost malby v exteriéru?',
				paragraphs: [
					'Kvalitně provedená exteriérová malba vydrží v perfektním stavu <strong>5–10 let</strong>. Používám speciální barvy odolné vůči dešti, mrazu i UV záření. Pokud se malba nachází blízko silnice, může docházet k běžnému provoznímu znečištění (prach, odstřikující voda v zimě). V takových případech doporučuji aplikaci ochranného laku, ze kterého lze usazený prach a nečistoty snadno omýt, aniž by se poškodila samotná malba.',
				],
			},
			{
				question: 'Je možné malbu zabezpečit proti vandalismu a nežádoucímu tagování?',
				paragraphs: [
					'Ano, zejména u veřejně přístupných zakázek (podchody, mosty, opěrné zdi) lze hotovou malbu opatřit <strong>antigraffiti nátěrem</strong>. Pokud by ji někdo v budoucnu posprejoval, nečistoty se jednoduše smyjí vodou bez poškození původního díla.',
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
					'<strong>Rozsah/plocha (v m²)</strong>',
					'<strong>Složitost a detailnost motivu</strong>',
					'<strong>Náročnost přípravy a přístupu</strong> (stav podkladu, potřeba lešení či plošiny u výškových prací)',
				],
				afterParagraphs: [
					'Přesnou cenovou nabídku vám rád připravím po zaslání fotky a rozměrů stěny',
				],
			},
			{
				question: 'Co všechno je zahrnuto v ceně realizace?',
				paragraphs: [
					'Cena standardně zahrnuje <strong>přípravu návrhu, potřebný materiál a samotnou realizaci malby</strong>. Doprava mimo Brno a případné další práce spojené s přípravou nebo specifickými podmínkami realizace se řeší individuálně a vždy je upřesníme předem.',
				],
			},
			{
				question: 'Máte zkušenosti s malbou ve veřejném prostoru a pro obce či developery?',
				paragraphs: [
					'Ano. Mám zkušenosti s realizacemi ve veřejném prostoru i se zakázkami pro obce a soukromé developery. Realizoval jsem například malby v podchodech, podjezdech vlakových mostů nebo na stěnách v okolí nových bytových komplexů. U větších realizací počítám s koordinací zakázky, dodržením bezpečnostních požadavků a respektováním technických podmínek konkrétního místa.',
				],
			},
			{
				question: 'Je taková malba legální?',
				paragraphs: [
					'Všechny zakázky realizuji výhradně na základě <strong>dohody s majitelem nemovitosti, investorem nebo příslušným městským úřadem</strong>. Zákazník se nemusí obávat žádných právních komplikací.',
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
						text: 'Send approximate wall dimensions, a photo of the space, and your idea for the motif, theme, or style.',
					},
					{
						label: 'Consultation and quote',
						text: 'We refine the brief together. From your materials I prepare a quote and we agree on a schedule for the work.',
					},
					{
						label: 'Design',
						text: 'I prepare a mural proposal tailored to your space, which we approve together before painting begins.',
					},
					{
						label: 'Execution',
						text: 'On the agreed date I prepare the wall and start painting.',
					},
				],
			},
			{
				question: 'Do you create custom designs, or do I need my own artwork?',
				paragraphs: [
					'<strong>You do not need your own artwork.</strong> Just tell me what theme or motif you have in mind. From your brief I create an original design tailored to the specific space. Each mural is thus an authorial work made for that place.',
				],
			},
			{
				question: 'How long does one mural take to paint?',
				paragraphs: [
					'It depends on size and how complex the motif is. Smaller projects usually take <strong>1 to 3 days</strong>. Large-scale and public commissions — underpasses, bridge tunnels, long walls — typically take <strong>from several days to weeks</strong>, depending on scope.',
				],
			},
			{
				question: 'Where do you paint, and how does travel work?',
				paragraphs: [
					'I am based in Brno but travel for commissions across the Czech Republic and abroad.',
					'Transport rates:',
				],
				bullets: [
					{
						label: 'Brno and nearby',
						text: '<strong>No travel charge</strong>',
					},
					{
						label: 'Outside Brno',
						text: '<strong>10 CZK/km</strong>',
					},
					{
						label: 'More distant and large projects',
						text: 'We agree on transport individually so the cost works best for you.',
					},
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
					'You can paint many surfaces — for example plaster, concrete, brick, wood, or metal. The substrate should be <strong>solid and clean</strong>, without significant crumbling or peeling. For unusual surfaces, suitability can be assessed in advance from photos or on site.',
				],
			},
			{
				question: 'Does the surface need to be prepared before painting?',
				paragraphs: [
					'Yes. Before work begins, the substrate should be solid, clean, and free of peeling or loose areas. How much preparation is needed depends on the condition of the surface. If cleaning, repairs, or other prep is required, we agree on the exact steps for your project.',
				],
			},
			{
				question: 'How long does an exterior mural last?',
				paragraphs: [
					'A well-executed exterior mural stays in excellent condition for <strong>5–10 years</strong>. I use paints formulated to resist rain, frost, and UV exposure. If the wall is close to a road, everyday soiling can occur (dust, spray from winter gritting). In those cases I recommend a protective clear coat so settled dust and dirt can be washed off without damaging the mural itself.',
				],
			},
			{
				question: 'Can the mural be protected against vandalism and tagging?',
				paragraphs: [
					'Yes. Especially on publicly accessible sites (underpasses, bridges, retaining walls) the finished work can be coated with a <strong>special anti-graffiti finish</strong>. If someone tags it later, the dirt can usually be washed off with water without damaging the original piece.',
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
					'<strong>Area (m²)</strong>',
					'<strong>Complexity and level of detail</strong>',
					'<strong>Preparation and access</strong> (substrate condition, need for scaffolding or lifts for height work)',
				],
				afterParagraphs: [
					'I am happy to prepare an exact quote once you send photos and wall dimensions',
				],
			},
			{
				question: 'What is included in the price?',
				paragraphs: [
					'The quote typically includes <strong>design development, materials, and painting the mural</strong>. Travel outside Brno and any additional work linked to preparation or site-specific conditions are agreed individually and clarified in advance.',
				],
			},
			{
				question: 'Do you have experience with public-space work for municipalities or developers?',
				paragraphs: [
					'Yes. I have experience with murals in public space and with commissions for municipalities and private developers — for example underpasses, railway bridge tunnels, and walls at new residential complexes. On larger projects I coordinate the work, meet safety requirements, and respect the technical conditions of each site.',
				],
			},
			{
				question: 'Is this kind of mural legal?',
				paragraphs: [
					'I only work with <strong>agreement from the property owner, investor, or relevant municipal authority</strong>. Clients do not need to worry about legal issues when the commission is arranged properly.',
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
