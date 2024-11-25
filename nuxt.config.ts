// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Extend Nuxt UI Pro
  extends: ['@nuxt/ui-pro'],

  // Modules configuration
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxthq/studio',
    '@vueuse/nuxt',
    'nuxt-og-image'
  ],

  // Add metadata for SEO and global defaults using `head`
  app: {
    head: {
      meta: [
        { name: 'release-date', content: '2024-07-11' } // Replace with actual use case
      ]
    }
  },

  // Runtime configuration
  runtimeConfig: {
    public: {
      siteUrl: 'https://example.com' // Replace with your site URL
    }
  },

  // Nitro configuration
  nitro: {
    prerender: {
      routes: [
        '/', // Prerender the home page
        '/docs' // Prerender the docs page
      ],
      crawlLinks: true // Crawl links for additional routes
    },
    routeRules: {
      '/api/search.json': { prerender: true }, // Valid rule
      '/docs': { prerender: true } // Cleaned invalid properties
    }
  },

  hooks: {
    // Define global components for use in `.md` files
    'components:extend': (components: any[]) => {
      const globals = components.filter(c => ['UButton'].includes(c.pascalName))
      globals.forEach(c => (c.global = true))
    }
  },

  eslint: {
    // Placeholder for ESLint options (if needed)
  }
})
