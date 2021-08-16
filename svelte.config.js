import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

export default {
  preprocess: [
    preprocess({ postcss: true }),
    mdsvex({
      extensions: ['.md'],
      layout: {},
    }),
  ],
  extensions: ['.svelte', '.md'],
  kit: {
    target: '#svelte',
    adapter: adapter({ fallback: 'index.html' }),
    vite: {
      resolve: {
        alias: { './runtimeConfig': './runtimeConfig.browser' },
      },
    },
  },
};
