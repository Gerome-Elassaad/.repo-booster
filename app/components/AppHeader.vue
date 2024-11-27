<template>
  <header :class="ui.wrapper" v-bind="attrs">
    <!-- Top slot -->
    <slot name="top" />

    <!-- Main container for header -->
    <UContainer :class="ui.container">
      <!-- Left Section: Logo -->
      <div :class="ui.left">
        <slot name="left">
          <NuxtLink :to="to" :aria-label="ariaLabel" :class="ui.logo">
            <slot name="logo">
              {{ title || 'Repo-Booster' }}
            </slot>
          </NuxtLink>
        </slot>
      </div>

      <!-- Center Section: Navigation Links -->
      <slot name="center">
        <nav :class="ui.center">
          <ul class="flex space-x-8">
            <!-- Loop through navigation links -->
            <li v-for="link in links" :key="link.label" class="relative group">
              <!-- Top-level Link -->
              <NuxtLink
                :to="link.to"
                class="flex items-center space-x-2 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                <i :class="link.icon" class="w-5 h-5"></i>
                <span>{{ link.label }}</span>
              </NuxtLink>

              <!-- Dropdown Menu -->
              <ul
                v-if="link.children"
                class="absolute left-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 shadow-md rounded-lg hidden group-hover:block"
              >
                <li
                  v-for="child in link.children"
                  :key="child.label"
                  class="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <NuxtLink
                    :to="child.to"
                    class="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                  >
                    <i :class="child.icon" class="w-4 h-4"></i>
                    <span>{{ child.label }}</span>
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </slot>

      <!-- Right Section: Buttons -->
      <div :class="ui.right">
        <slot name="right">
          <UButton
            label="Sign in"
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
        </slot>
      </div>
    </UContainer>

    <!-- Bottom slot -->
    <slot name="bottom" />
  </header>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { HeaderLink } from '#ui-pro/types'
import type { DeepPartial } from '#ui/types'

const config = computed(() => ({
  wrapper: 'bg-background/75 backdrop-blur border-b border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50',
  container: 'flex items-center justify-between gap-3 h-[--header-height]',
  left: 'lg:flex-1 flex items-center gap-1.5',
  center: 'hidden lg:flex',
  right: 'flex items-center justify-end lg:flex-1 gap-1.5',
  logo: 'flex-shrink-0 font-bold text-xl text-gray-900 dark:text-white flex items-end gap-1.5'
}))

const links = [
  {
    label: 'Docs',
    to: '/docs',
    icon: 'i-heroicons-book-open-20-solid',
    children: [
      { label: 'Introduction', to: '/docs/introduction', icon: 'i-heroicons-light-bulb-20-solid' },
      { label: 'Installation', to: '/docs/installation', icon: 'i-heroicons-cog-20-solid' }
    ]
  },
  {
    label: 'Blog',
    to: '/blog',
    icon: 'i-heroicons-newspaper-20-solid',
    children: [
      { label: 'Example 1', to: '/blog/example-1', icon: 'i-heroicons-document-text-20-solid' },
      { label: 'Example 2', to: '/blog/example-2', icon: 'i-heroicons-document-text-20-solid' },
      { label: 'Example 3', to: '/blog/example-3', icon: 'i-heroicons-document-text-20-solid' }
    ]
  },
  { label: 'Pricing', to: '/pricing', icon: 'i-heroicons-currency-dollar-20-solid' }
]

const props = defineProps({
  to: {
    type: String,
    default: '/'
  },
  title: {
    type: String,
    default: undefined
  },
  links: {
    type: Array as PropType<HeaderLink[]>,
    default: () => []
  },
  class: {
    type: [String, Object, Array] as PropType<any>,
    default: undefined
  },
  ui: {
    type: Object as PropType<DeepPartial<typeof config.value>>,
    default: () => ({})
  }
})

const ariaLabel = computed(() => props.title || 'Logo')
const { ui, attrs } = useUI('header', toRef(props, 'ui'), config, toRef(props, 'class'), true)
</script>

<style scoped>
/* Dropdown Styles */
.group:hover .dropdown-menu {
  display: block;
}

.dropdown-menu {
  display: none;
  z-index: 1000;
}

.dropdown-menu li:hover {
  cursor: pointer;
}
</style>
