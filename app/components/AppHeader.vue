<script setup lang="ts">
// Combine manually mapped content navigation with static links
const links = [
  {
    label: 'Docs',
    to: '/docs',
    icon: 'i-heroicons-book-open-20-solid',
    children: [
      {
        label: 'Getting Started',
        to: '/docs/getting-started',
        icon: 'i-heroicons-play-20-solid', 
        children: [
          { label: 'Introduction', to: '/docs/getting-started/introduction', icon: 'i-heroicons-light-bulb-20-solid' },
          { label: 'Installation', to: '/docs/getting-started/installation', icon: 'i-heroicons-download-20-solid' }
        ]
      },
      {
        label: 'Features Overview',
        to: '/docs/features-overview',
        icon: 'i-heroicons-chart-pie-20-solid', 
        children: [
          { label: 'Features', to: '/docs/features-overview/features', icon: 'i-heroicons-star-20-solid' },
          { label: 'Readme Scanner', to: '/docs/features-overview/readme-scanner', icon: 'i-heroicons-document-text-20-solid' },
          { label: 'SEO Analysis', to: '/docs/features-overview/seo-analysis', icon: 'i-heroicons-search-circle-20-solid' },
          { label: 'Social Integration', to: '/docs/features-overview/social-integration', icon: 'i-heroicons-share-20-solid' },
          { label: 'Star Growth', to: '/docs/features-overview/star-growth', icon: 'i-heroicons-arrow-up-20-solid' },
          { label: 'Traffic Insights', to: '/docs/features-overview/traffic-insights', icon: 'i-heroicons-chart-bar-20-solid' }
        ]
      }
    ]
  },
  {
    label: 'Blog',
    to: '/blog',
    icon: 'i-heroicons-newspaper-20-solid', 
    children: [
      { label: 'Exploring the Culinary Wonders of Asia', to: '/blog/asian-cuisine', icon: 'i-heroicons-globe-20-solid' },
      { label: 'Discovering the Majestic Peaks', to: '/blog/pyrenees', icon: 'i-heroicons-mountain-20-solid' },
      { label: 'Unveiling the Marvel', to: '/blog/james-webb', icon: 'i-heroicons-sparkles-20-solid' },
      { label: 'The Benefits of Meditation', to: '/blog/meditation', icon: 'i-heroicons-heart-20-solid' },
      { label: 'The 10 Most Dangerous Creatures on Earth', to: '/blog/animals', icon: 'i-heroicons-shield-exclamation-20-solid' },
      { label: 'The Rise of Cryptocurrencies', to: '/blog/cryptocurrencies', icon: 'i-heroicons-currency-dollar-20-solid' },
      { label: 'I tested Nuxt UI', to: '/blog/nuxt-ui', icon: 'i-heroicons-adjustments-horizontal-20-solid' }
    ]
  },
  {
    label: 'Pricing',
    to: '/pricing',
    icon: 'i-heroicons-currency-dollar-20-solid' 
  }
]
</script>

<template>
  <UHeader :links="links">
    <!-- Logo -->
    <template #logo>
      Repo-Booster
      <UBadge label="Go Pro" variant="subtle" class="mb-0.5" />
    </template>

    <!-- Right Section: Buttons -->
    <template #right>
      <UButton
        label="Sign in"
        icon="i-heroicons-user-20-solid"
        color="gray"
        to="/login"
      />
      <UButton
        label="Sign up"
        icon="i-heroicons-arrow-right-20-solid"
        trailing
        color="black"
        to="/signup"
        class="hidden lg:flex"
      />
    </template>

    <!-- Panel Section -->
    <template #panel>
      <UNavigationTree :links="links" default-open>
        <template #link="{ link }">
          <!-- Render icon if available -->
          <span v-if="link.icon" :class="link.icon" class="mr-2"></span>
          {{ link.label }}
        </template>
      </UNavigationTree>
    </template>
  </UHeader>
</template>
