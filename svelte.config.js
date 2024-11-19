import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
		fallback: 'index.html'
	}),
    prerender: {
      entries: ['/', '/women'],  // Add all your routes here
    },
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/your-repo-name' : ''
    }
  }
};