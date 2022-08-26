import { adapter } from 'sveltekit-adapter-aws';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: preprocess(),

	kit: {
		adapter: adapter({ autoDeploy: true })
	}
};
