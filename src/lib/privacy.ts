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
};

export type PrivacyPageContent = {
	title: string;
	intro: string;
	sections: PrivacySection[];
};

export function privacyPageContent(locale: Locale): PrivacyPageContent {
	if (locale === 'cs') {
		return {
			title: 'Zpracování osobních údajů',
			intro:
				'Tento text popisuje, jak jsou zpracovávány osobní údaje zaslané prostřednictvím kontaktního formuláře na webu dosedelmichal.com.',
			sections: [
				{
					heading: 'Správce osobních údajů',
					paragraphs: [
						`Správcem je ${businessInfo.fullName}, IČO ${businessInfo.ico}, ${businessInfo.address}. Kontakt: ${contactEmail}.`,
					],
				},
				{
					heading: 'Jaké údaje zpracováváme',
					paragraphs: [
						'Prostřednictvím formuláře poptávky zpracováváme zejména jméno a příjmení (nebo název firmy), e-mailovou adresu, údaje o lokalitě a rozměrech plochy, popis projektu a případnou přílohu (fotografii).',
						'Technické údaje o návštěvě webu (cookies, logy) tento web v rozsahu formuláře nevyužívá; hosting může uchovávat standardní serverové záznamy nezávisle na správci.',
					],
				},
				{
					heading: 'Účel a právní základ',
					paragraphs: [
						'Údaje zpracováváme za účelem vyřízení vaší poptávky, domluvy konzultace a následné komunikace o projektu. Právním základem je jednání o smlouvě nebo plnění smlouvy (čl. 6 odst. 1 písm. b) GDPR) a oprávněný zájem správce na odpovědi na dotaz (čl. 6 odst. 1 písm. f) GDPR).',
					],
				},
				{
					heading: 'Doba uchovávání',
					paragraphs: [
						'Údaje z poptávky uchováváme po dobu nezbytnou k vyřízení komunikace a případné realizaci zakázky, nejdéle však 3 roky od posledního kontaktu, pokud zákon nevyžaduje delší dobu (např. účetní doklady).',
					],
				},
				{
					heading: 'Příjemci a předání',
					paragraphs: [
						'Údaje neprodáváme třetím stranám. Formulář využívá službu FormSubmit pro doručení zprávy e-mailem správci; tato služba může údaje zpracovávat jako zpracovatel podle svých podmínek.',
					],
				},
				{
					heading: 'Vaše práva',
					paragraphs: [
						'Máte právo požádat o přístup ke svým údajům, jejich opravu nebo výmaz, omezení zpracování, vznést námitku a požádat o přenositelnost údajů, pokud to GDPR připouští.',
						'Práva uplatníte e-mailem na adresu správce. Máte také právo podat stížnost u Úřadu pro ochranu osobních údajů (www.uoou.cz), domníváte-li se, že zpracování porušuje nařízení GDPR.',
					],
				},
			],
		};
	}

	return {
		title: 'Personal data processing',
		intro:
			'This page describes how personal data submitted through the contact form on dosedelmichal.com is processed.',
		sections: [
			{
				heading: 'Data controller',
				paragraphs: [
					`The controller is ${businessInfo.fullName}, Business ID (IČO) ${businessInfo.ico}, ${businessInfo.address}. Contact: ${contactEmail}.`,
				],
			},
			{
				heading: 'What data we collect',
				paragraphs: [
					'Through the project inquiry form we mainly process your name (or company name), email address, location and approximate wall size, project description, and an optional attachment (photo).',
					'This form does not use tracking cookies; the hosting provider may keep standard server logs independently of the controller.',
				],
			},
			{
				heading: 'Purpose and legal basis',
				paragraphs: [
					'We process data to handle your inquiry, arrange a consultation, and communicate about the project. The legal bases are steps prior to a contract or performance of a contract (Art. 6(1)(b) GDPR) and the controller’s legitimate interest in responding to inquiries (Art. 6(1)(f) GDPR).',
				],
			},
			{
				heading: 'Retention period',
				paragraphs: [
					'We keep inquiry data for as long as needed to handle communication and any commission, for up to 3 years from the last contact unless a longer period is required by law (e.g. accounting records).',
				],
			},
			{
				heading: 'Recipients and transfers',
				paragraphs: [
					'We do not sell data to third parties. The form uses FormSubmit to deliver messages by email to the controller; that service may process data as a processor under its own terms.',
				],
			},
			{
				heading: 'Your rights',
				paragraphs: [
					'You may request access, rectification, erasure, restriction of processing, object to processing, and data portability where GDPR applies.',
					'Contact the controller by email to exercise your rights. You may also lodge a complaint with your supervisory authority if you believe processing violates GDPR.',
				],
			},
		],
	};
}
