import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		browser: {
			hydrate: false,
		},
		...(process.env.DEPLOY_ID ? {version: {name: process.env.DEPLOY_ID}} : {}),
	},
};

export default config;
