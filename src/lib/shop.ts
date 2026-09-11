import type { Locale } from './i18n';

export function shopOrderNotice(locale: Locale) {
	return locale === 'cs'
		? 'Veškerá díla je možno objednat přes e-mail'
		: 'All works can be ordered via email';
}
