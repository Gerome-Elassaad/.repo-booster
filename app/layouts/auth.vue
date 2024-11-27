<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'dark:bg-gray-950'
  }
})
</script>

<template>
  <div class="h-screen flex items-center justify-center overlay">
    <div class="gradient" />

    <UButton
      icon="i-heroicons-home"
      label="Home"
      to="/"
      color="black"
      class="absolute top-4"
    />

    <slot />
  </div>
</template>

<style scoped>
.gradient {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(50% 50% at 50% 50%, rgb(var(--color-primary-500) / 0.25) 0, #FFF 100%);
}

.dark {
  .gradient {
    background: radial-gradient(50% 50% at 50% 50%, rgb(var(--color-primary-400) / 0.1) 0, rgb(var(--color-gray-950)) 100%);
  }
}

/* Overlay styling */
.overlay {
  background-size: 100px 100px;
  background-image:
    linear-gradient(to right, rgb(var(--color-gray-200)) 0.5px, transparent 0.5px),
    linear-gradient(to bottom, rgb(var(--color-gray-200)) 0.5px, transparent 0.5px);
  transition: background 0.3s ease;
}

.overlay-hover {
  background-image:
    linear-gradient(to right, rgb(var(--color-gray-300)) 0.5px, transparent 0.5px),
    linear-gradient(to bottom, rgb(var(--color-gray-300)) 0.5px, transparent 0.5px);
}

.dark {
  .overlay {
    background-image:
      linear-gradient(to right, rgb(var(--color-gray-900)) 0.5px, transparent 0.5px),
      linear-gradient(to bottom, rgb(var(--color-gray-900)) 0.5px, transparent 0.5px);
  }
  .overlay-hover {
    background-image:
      linear-gradient(to right, rgb(var(--color-gray-800)) 0.5px, transparent 0.5px),
      linear-gradient(to bottom, rgb(var(--color-gray-800)) 0.5px, transparent 0.5px);
  }
}

/* Button styling */
.ubutton {
  position: relative;
  z-index: 1;
  transition: color 0.3s ease, background-color 0.3s ease;
}

.ubutton::after {
  content: '';
  position: absolute;
  z-index: -1;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 5px;
  background: rgb(var(--color-primary-500));
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.ubutton-hover::after {
  opacity: 1;
  transform: translateX(-50%) scaleX(1.2);
}

.ubutton:hover {
  color: rgb(var(--color-primary-500));
}
</style>
