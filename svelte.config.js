import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
//modificada, instalar con npm i -D @sveltejs/adapter-static
import adapter from '@sveltejs/adapter-static';
// Markdown y svelte
import { mdsvex } from "mdsvex";
import remarkMath from "remark-math"
import rehypeMathjax from "rehype-mathjax"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess()],

	extensions: [".svelte", ".svx", ".md"],

	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		})
	}
};


export default config;
