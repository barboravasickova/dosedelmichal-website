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

const bodyCs = [
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
];

const bodyEn = [
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
];

function buildCommissionProjects(locale: Locale): CommissionProject[] {
	const title = locale === 'cs' ? 'Název projektu' : 'Project name';
	const meta =
		locale === 'cs' ? 'Město, Česká republika – 2026' : 'City, Czech Republic – 2026';
	const subtitle = locale === 'cs' ? 'Podnadpis' : 'Subtitle';
	const body = locale === 'cs' ? bodyCs : bodyEn;

	const gallery = [
		'/images/main-img.jpg',
		'/images/main-img.jpg',
		'/images/main-img.jpg',
	];

	return ['projekt-1', 'projekt-2', 'projekt-3', 'projekt-4'].map((slug) => ({
		slug,
		title,
		meta,
		subtitle,
		body,
		heroImage: '/images/main-img.jpg',
		gallery,
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
