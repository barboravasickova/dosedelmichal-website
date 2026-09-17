import type { Locale } from './i18n';
import type { CommissionProject } from './projects';

export function homeMetaDescription(locale: Locale) {
	if (locale === 'cs') {
		return 'Michal Doseděl (DOSE) — velkoformátové malby, muraly a street art. Zakázková malba, volná tvorba a obrazy na míru.';
	}
	return 'Michal Doseděl (DOSE) — large-scale murals, street art and commission painting. Public art, personal works and canvas pieces.';
}

export function projectMetaDescription(project: CommissionProject) {
	const excerpt = project.body[0]?.replace(/\s+/g, ' ').trim();
	if (!excerpt) return project.meta;
	const combined = `${project.meta}. ${excerpt}`;
	return combined.length > 160 ? `${combined.slice(0, 157)}…` : combined;
}
