<template>
  <VCard elevation="10" border class="rounded-lg pa-10">
    <div class="w-full text-center">
      <div class="flex flex-col">
        <div v-if="title || subtitle" class="flex h-full flex-col">
          <TitleSubtitle v-bind="{ title, subtitle }" />
        </div>
        <slot />
        <div class="mt-5">
          <slot name="actions" />
        </div>
      </div>
    </div>
  </VCard>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  }
})
</script>
