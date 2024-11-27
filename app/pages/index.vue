<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  titleTemplate: '',
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})

// Mouse tracking logic
const mouseX = ref(0)
const mouseY = ref(0)

onMounted(() => {
  const handleMouseMove = (event: MouseEvent) => {
    mouseX.value = event.clientX
    mouseY.value = event.clientY
  }
  window.addEventListener('mousemove', handleMouseMove)
  onUnmounted(() => window.removeEventListener('mousemove', handleMouseMove))
})
</script>

<template>
  <div v-if="page">
    <!-- Apply mouse tracking shadow effect -->
    <div
      class="tracking-shadow"
      :style="{ '--mouse-x': `${mouseX}px`, '--mouse-y': `${mouseY}px` }"
    ></div>

    <ULandingHero
      :title="page.hero.title"
      :description="page.hero.description"
      :links="page.hero.links"
    >
      <div class="absolute inset-0 landing-grid z-[-1] [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" />

      <template #headline>
        <UBadge
          v-if="page.hero.headline"
          variant="subtle"
          size="lg"
          class="relative rounded-full font-semibold"
        >
          <NuxtLink
            :to="page.hero.headline.to"
            target="_blank"
            class="focus:outline-none hover:button-glow"
            tabindex="-1"
          >
            <span
              class="absolute inset-0"
              aria-hidden="true"
            />
          </NuxtLink>

          {{ page.hero.headline.label }}

          <UIcon
            v-if="page.hero.headline.icon"
            :name="page.hero.headline.icon"
            class="ml-1 w-4 h-4 pointer-events-none"
          />
        </UBadge>
      </template>
    </ULandingHero>

    <ULandingSection class="!pt-0">
      <ImagePlaceholder />
    </ULandingSection>

    <ULandingSection
      v-for="(section, index) in page.sections"
      :key="index"
      :title="section.title"
      :description="section.description"
      :align="section.align"
      :features="section.features"
    >
      <ImagePlaceholder />
    </ULandingSection>

    <ULandingSection
      :title="page.features.title"
      :description="page.features.description"
    >
      <UPageGrid>
        <ULandingCard
          v-for="(item, index) in page.features.items"
          :key="index"
          v-bind="item"
          class="hover:button-glow"
        />
      </UPageGrid>
    </ULandingSection>

    <ULandingSection
      :headline="page.testimonials.headline"
      :title="page.testimonials.title"
      :description="page.testimonials.description"
    >
      <UPageColumns class="xl:columns-4">
        <div
          v-for="(testimonial, index) in page.testimonials.items"
          :key="index"
          class="break-inside-avoid"
        >
          <ULandingTestimonial
            v-bind="testimonial"
            class="bg-gray-100/50 dark:bg-gray-800/50"
          />
        </div>
      </UPageColumns>
    </ULandingSection>

    <ULandingSection>
      <ULandingCTA
        v-bind="page.cta"
        class="bg-gray-100/50 dark:bg-gray-800/50"
      />
    </ULandingSection>
  </div>
</template>

<style scoped>
/* Mouse shadow tracking effect */
.tracking-shadow {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  background: radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(0, 120, 255, 0.3), transparent 60%);
  z-index: 9999;
}

/* Landing grid styling */
.landing-grid {
  background-size: 100px 100px;
  background-image:
    linear-gradient(to right, rgb(var(--color-gray-200)) 1px, transparent 1px),
    linear-gradient(to bottom, rgb(var(--color-gray-200)) 1px, transparent 1px);
}
.dark {
  .landing-grid {
    background-image:
      linear-gradient(to right, rgb(var(--color-gray-800)) 1px, transparent 1px),
      linear-gradient(to bottom, rgb(var(--color-gray-800)) 1px, transparent 1px);
  }
}

/* Button hover electric blue underglow */
.button-glow {
  position: relative;
  transition: color 0.3s ease, background-color 0.3s ease;
}

.button-glow::after {
  content: '';
  position: absolute;
  z-index: -1;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, rgba(0, 120, 255, 0.7), rgba(0, 240, 255, 0.7));
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.button-glow:hover::after {
  opacity: 1;
  transform: translateX(-50%) scaleX(1.2);
}

.button-glow:hover {
  color: rgb(0, 120, 255);
}
</style>
