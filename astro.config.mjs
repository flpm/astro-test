// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'All Contributors',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/all-contributors/all-contributors' }],
			sidebar: [
				{
					label: 'Specification',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'overview', slug: 'overview' },
						{ label: 'specification', slug: 'specification' },
						{ label: 'emoji-key', slug: 'emoji-key' },
						{ label: 'repository-maintainers', slug: 'repository-maintainers' },
						{ label: 'tooling', slug: 'tooling' }
					],
				},
				{
					label: '@all-contributors Bot 🤖',
					items: [
						{ label: 'overview', slug: 'bot/overview' },
						{ label: 'installation', slug: 'bot/installation' },
						{ label: 'usage', slug: 'bot/usage' },
						{ label: 'configuration', slug: 'bot/configuration' },
						{ label: 'faq', slug: 'bot/faq' }
					],
				},
				{
					label: 'CLI',
					items: [
						{ label: 'overview', slug: 'cli/overview' },
						{ label: 'installation', slug: 'cli/installation' },
						{ label: 'usage', slug: 'cli/usage' },
						{ label: 'configuration', slug: 'cli/configuration' }
					],
				},
				{
					label: 'Project',
					items: [
						{ label: 'contribute', slug: 'project/contribute' },
						{ label: 'code-of-conduct', slug: 'project/code-of-conduct' },
						{ label: 'implementations', slug: 'project/implementations' }
					],
				},
			],
		}),
	],
});
