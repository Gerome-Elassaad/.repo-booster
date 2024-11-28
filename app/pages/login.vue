<script setup lang="ts">
definePageMeta({
  layout: 'auth'
});

useSeoMeta({
  title: 'Login'
});

// Form fields
const fields = [
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'Enter your email'
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password'
  }
];

// Validation function
const validate = (state: any) => {
  const errors = [];
  if (!state.email) errors.push({ path: 'email', message: 'Email is required' });
  if (!state.password) errors.push({ path: 'password', message: 'Password is required' });
  return errors;
};

// OAuth providers
const providers = [
  {
    label: 'Continue with GitHub',
    icon: 'i-simple-icons-github',
    color: 'white' as const,
    click: () => {
      console.log('Redirect to GitHub');
    }
  },
  {
    label: 'Continue with GitLab',
    icon: 'i-simple-icons-gitlab',
    color: 'white' as const,
    click: () => {
      console.log('Redirect to GitLab');
    }
  },
  {
    label: 'Continue with Bitbucket',
    icon: 'i-simple-icons-bitbucket',
    color: 'white' as const,
    click: () => {
      console.log('Redirect to Dev.to');
    }
  }
];

// Form submission handler
function onSubmit(data: any) {
  console.log('Submitted', data);
}
</script>

<template>
  <UCard class="max-w-sm w-full bg-white/75 dark:bg-white/5 backdrop-blur">
    <UAuthForm
      :fields="fields"
      :validate="validate"
      :providers="providers"
      title="Welcome back"
      align="top"
      icon="i-heroicons-lock-closed"
      :ui="{ base: 'text-center', footer: 'text-center' }"
      :submit-button="{ trailingIcon: 'i-heroicons-arrow-right-20-solid' }"
      @submit="onSubmit"
    >
      <!-- Description Slot -->
      <template #description>
        Don't have an account? 
        <NuxtLink to="/signup" class="text-primary font-medium">
          Sign up
        </NuxtLink>.
      </template>

      <!-- Password Hint Slot -->
      <template #password-hint>
        <NuxtLink to="/" class="text-primary font-medium">
          Forgot password?
        </NuxtLink>
      </template>

      <!-- Footer Slot -->
      <template #footer>
        By signing in, you agree to our 
        <NuxtLink to="/" class="text-primary font-medium">
          Terms of Service
        </NuxtLink>.
      </template>
    </UAuthForm>
  </UCard>
</template>
