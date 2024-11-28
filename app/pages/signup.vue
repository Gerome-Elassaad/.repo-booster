<script setup lang="ts">
definePageMeta({
  layout: 'auth'
});

useSeoMeta({
  title: 'Sign up'
});

// Form fields
const fields = [
  {
    name: 'name',
    type: 'text',
    label: 'Name',
    placeholder: 'Enter your name'
  },
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
  if (!state.name) errors.push({ path: 'name', message: 'Name is required' });
  if (!state.email) errors.push({ path: 'email', message: 'Email is required' });
  if (!state.password) errors.push({ path: 'password', message: 'Password is required' });
  return errors;
};

// OAuth providers
const providers = [
  {
    label: 'Sign up with GitHub',
    icon: 'i-simple-icons-github',
    color: 'gray' as const,
    click: () => {
      console.log('Redirect to GitHub');
    }
  },
  {
    label: 'Sign up with GitLab',
    icon: 'i-simple-icons-gitlab',
    color: 'gray' as const,
    click: () => {
      console.log('Redirect to GitLab');
    }
  },
  {
    label: 'Sign up with Bitbucket',
    icon: 'i-simple-icons-bitbucket',
    color: 'gray' as const,
    click: () => {
      console.log('Redirect to Bitbucket');
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
      align="top"
      title="Create an account"
      :ui="{ base: 'text-center', footer: 'text-center' }"
      :submit-button="{ label: 'Create account', trailingIcon: 'i-heroicons-arrow-right-20-solid' }"
      @submit="onSubmit"
    >
      <!-- Description Slot -->
      <template #description>
        Already have an account? 
        <NuxtLink to="/login" class="text-primary font-medium">
          Login
        </NuxtLink>.
      </template>

      <!-- Footer Slot -->
      <template #footer>
        By signing up, you agree to our 
        <NuxtLink to="/" class="text-primary font-medium">
          Terms of Service
        </NuxtLink>.
      </template>
    </UAuthForm>
  </UCard>
</template>
