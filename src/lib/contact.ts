import type { Locale } from './i18n';

export type ContactCopy = {
	quick: {
		heading: string;
		body: string;
	};
	inquiry: {
		heading: string;
		body: string;
		fields: {
			name: string;
			email: string;
			location: string;
			locationPlaceholder: string;
			description: string;
			attachment: string;
			attachmentHint: string;
		};
		submit: string;
	};
	sentMessage: string;
	formSubject: string;
	imageAlt: string;
	formPrivacy: {
		lead: string;
		linkLabel: string;
	};
	billing: {
		heading: string;
		nameLabel: string;
		addressSrLabel: string;
		icoSrLabel: string;
		legalStatus: string;
	};
};

const contactPaths: Record<Locale, string> = {
	cs: '/cs/kontakt',
	en: '/en/contact',
};

export function contactPath(locale: Locale) {
	return contactPaths[locale];
}

export function contactMetaDescription(locale: Locale) {
	const copy = contactStrings(locale);
	if (locale === 'cs') {
		return `${copy.quick.body} dosedelmichal@gmail.com`;
	}
	return `${copy.quick.body} at dosedelmichal@gmail.com`;
}

export function contactStrings(locale: Locale): ContactCopy {
	if (locale === 'cs') {
		return {
			quick: {
				heading: 'Kontakt',
				body: 'Máte dotaz nebo chcete konzultaci? Napište mi na email',
			},
			inquiry: {
				heading: 'Poptávka projektu',
				body: 'Chcete realizovat mural, velkoplošnou malbu nebo autorský projekt? Popište mi svou představu ve formuláři níže, ozvu se vám zpět a probereme možnosti.',
				fields: {
					name: 'Jméno a příjmení / firma',
					email: 'E-mail',
					location: 'Lokalita & orientační rozměry plochy',
					locationPlaceholder: 'např. interiér / fasáda, Brno, cca 4 × 3 m',
					description: 'Detailní popis projektu / vaše představa',
					attachment: 'Příloha / foto stěny',
					attachmentHint: 'Nepovinné, ale pomůže rychle pochopit podklad.',
				},
				submit: 'Odeslat poptávku',
			},
			sentMessage: 'Děkuji — poptávka byla odeslána. Ozvu se co nejdříve.',
			formSubject: 'Poptávka projektu — dosedelmichal.com',
			imageAlt: 'Realizace muralu — detail malby ve veřejném prostoru',
			formPrivacy: {
				lead: 'Odesláním formuláře berete na vědomí zpracování osobních údajů pro účely vyřízení poptávky.',
				linkLabel: 'Více informací o GDPR',
			},
			billing: {
				heading: 'Fakturační údaje',
				nameLabel: 'Jméno a příjmení',
				addressSrLabel: 'Adresa',
				icoSrLabel: 'IČO',
				legalStatus: 'Fyzická osoba zapsaná v živnostenském rejstříku, neplátce DPH.',
			},
		};
	}

	return {
		quick: {
			heading: 'Contact',
			body: 'Have a question or want a consultation? Send me an email',
		},
		inquiry: {
			heading: 'Project inquiry',
			body: 'Want a mural, large-scale painting, or a custom piece? Describe your idea in the form below — I will get back to you and we can talk through the options.',
			fields: {
				name: 'Full name / company',
				email: 'Email',
				location: 'Location & approximate wall size',
				locationPlaceholder: 'e.g. interior / facade, Brno, approx. 4 × 3 m',
				description: 'Project details / your idea',
				attachment: 'Attachment / photo of the wall',
				attachmentHint: 'Optional, but helpful to understand the surface.',
			},
			submit: 'Send inquiry',
		},
		sentMessage: 'Thank you — your inquiry was sent. I will reply as soon as I can.',
		formSubject: 'Project inquiry — dosedelmichal.com',
		imageAlt: 'Mural in progress — detail of a painting in public space',
		formPrivacy: {
			lead: 'By submitting the form you acknowledge the processing of personal data for the purpose of handling your inquiry.',
			linkLabel: 'More about GDPR',
		},
		billing: {
			heading: 'Billing details',
			nameLabel: 'Full name',
			addressSrLabel: 'Address',
			icoSrLabel: 'Business ID',
			legalStatus: 'Sole proprietor registered in the Trade Register, non-VAT payer.',
		},
	};
}
