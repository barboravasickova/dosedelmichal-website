import type { Locale } from './i18n';
import { businessInfo, contactEmail } from './site';

const privacyPaths: Record<Locale, string> = {
	cs: '/cs/zpracovani-osobnich-udaju',
	en: '/en/privacy-policy',
};

export function privacyPath(locale: Locale): string {
	return privacyPaths[locale];
}

export type PrivacySection = {
	heading: string;
	paragraphs: string[];
	bullets?: string[];
	paragraphsAfter?: string[];
};

export type PrivacyPageContent = {
	title: string;
	intro: string;
	sections: PrivacySection[];
};

export function privacyPageContent(locale: Locale): PrivacyPageContent {
	if (locale === 'cs') {
		return {
			title: 'Zpracování osobních údajů (GDPR)',
			intro:
				'Tento text popisuje, jak nakládám s osobními údaji, které mi zasíláte prostřednictvím kontaktního formuláře nebo e-mailu na webu dosedelmichal.com.',
			sections: [
				{
					heading: '1. Správce osobních údajů',
					paragraphs: ['Správcem osobních údajů je:'],
					bullets: [
						businessInfo.fullName,
						`IČO: ${businessInfo.ico}`,
						`Sídlo: ${businessInfo.address}`,
						`E-mail: ${contactEmail}`,
					],
				},
				{
					heading: '2. Jaké údaje zpracovávám',
					paragraphs: [
						'Prostřednictvím poptávkového formuláře zpracovávám pouze údaje nezbytné k přípravě nabídky:',
					],
					bullets: [
						'Jméno a příjmení (případně název firmy)',
						'E-mailovou adresu',
						'Údaje o lokalitě a orientačních rozměrech plochy',
						'Popis vaší představy / projektu a případné přiložené fotografie',
					],
					paragraphsAfter: [
						'Web nevyužívá analytické ani marketingové soubory cookies. Webový hosting může uchovávat pouze standardní technické serverové logy nezbytné pro provoz serveru.',
					],
				},
				{
					heading: '3. Účel a právní základ zpracování',
					paragraphs: [
						'Vaše údaje zpracovávám výhradně za účelem vyřízení poptávky, domluvy konzultace a navazující komunikace o realizaci projektu.',
						'Právním základem je:',
					],
					bullets: [
						'Jednání o smlouvě nebo plnění smlouvy (čl. 6 odst. 1 písm. b) GDPR)',
						'Oprávněný zájem správce na odpovědi na vámi zaslaný dotaz (čl. 6 odst. 1 písm. f) GDPR)',
					],
				},
				{
					heading: '4. Doba uchovávání údajů',
					paragraphs: [
						'Údaje z poptávek uchovávám po dobu nezbytnou k vyřízení komunikace a případné realizaci zakázky, nejdéle však 3 roky od posledního kontaktu (pokud navazující zákonné povinnosti, např. účetnictví, nevyžadují delší dobu).',
					],
				},
				{
					heading: '5. Předávání údajů třetím stranám',
					paragraphs: [
						'Vaše údaje nikdy neprodávám ani nepředávám třetím stranám pro marketingové účely.',
						'Pro doručení zpráv z formuláře využívám službu FormSubmit, která funguje jako zpracovatel a data technicky zprostředkovává přímo na můj e-mail v souladu se svými bezpečnostními podmínkami.',
					],
				},
				{
					heading: '6. Vaše práva',
					paragraphs: ['Podle nařízení GDPR máte právo:'],
					bullets: [
						'Požadovat přístup ke svým osobním údajům a informace o jejich zpracování',
						'Požádat o opravu, doplnění nebo kompletní výmaz údajů',
						'Požádat o omezení zpracování nebo vznést námitku proti zpracování',
						'Požádat o přenositelnost údajů',
					],
					paragraphsAfter: [
						`Všechna tato práva můžete kdykoliv uplatnit jednoduchým zasláním e-mailu na ${contactEmail}. Pokud se domníváte, že s vašimi údaji nenakládám v souladu se zákonem, máte právo podat stížnost u Úřadu pro ochranu osobních údajů (www.uoou.gov.cz).`,
					],
				},
			],
		};
	}

	return {
		title: 'Personal data processing (GDPR)',
		intro:
			'This page describes how I handle personal data you send through the contact form or by email on dosedelmichal.com.',
		sections: [
			{
				heading: '1. Data controller',
				paragraphs: ['The controller of personal data is:'],
				bullets: [
					businessInfo.fullName,
					`Business ID (IČO): ${businessInfo.ico}`,
					`Registered office: ${businessInfo.address}`,
					`Email: ${contactEmail}`,
				],
			},
			{
				heading: '2. What data I process',
				paragraphs: ['Through the inquiry form I process only data necessary to prepare an offer:'],
				bullets: [
					'Full name (or company name)',
					'Email address',
					'Location and approximate dimensions of the surface',
					'Description of your idea / project and any attached photos',
				],
				paragraphsAfter: [
					'This website does not use analytics or marketing cookies. Hosting may keep standard technical server logs required to run the server.',
				],
			},
			{
				heading: '3. Purpose and legal basis',
				paragraphs: [
					'I process your data solely to handle your inquiry, arrange a consultation, and follow-up communication about the project.',
					'The legal bases are:',
				],
				bullets: [
					'Steps prior to a contract or performance of a contract (Art. 6(1)(b) GDPR)',
					'The controller’s legitimate interest in responding to your inquiry (Art. 6(1)(f) GDPR)',
				],
			},
			{
				heading: '4. Retention period',
				paragraphs: [
					'I keep inquiry data for as long as needed to handle communication and any commission, for up to 3 years from the last contact (unless further legal obligations, e.g. accounting, require a longer period).',
				],
			},
			{
				heading: '5. Sharing data with third parties',
				paragraphs: [
					'I never sell your data or share it with third parties for marketing purposes.',
					'To deliver form messages I use FormSubmit, which acts as a processor and technically forwards data directly to my email in line with its security terms.',
				],
			},
			{
				heading: '6. Your rights',
				paragraphs: ['Under the GDPR you have the right to:'],
				bullets: [
					'Request access to your personal data and information about how it is processed',
					'Request rectification, completion, or erasure of your data',
					'Request restriction of processing or object to processing',
					'Request data portability',
				],
				paragraphsAfter: [
					`You can exercise these rights at any time by emailing ${contactEmail}. If you believe your data is not handled lawfully, you may lodge a complaint with the Office for Personal Data Protection (www.uoou.gov.cz).`,
				],
			},
		],
	};
}
