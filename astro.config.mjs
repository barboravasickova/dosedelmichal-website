// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import { serializeSitemapItem } from './src/lib/sitemap-seo.ts';

// https://astro.build/config
export default defineConfig({
	site: 'https://dosedelmichal.com',
	integrations: [
		sitemap({
			serialize: serializeSitemapItem,
		}),
	],
});
