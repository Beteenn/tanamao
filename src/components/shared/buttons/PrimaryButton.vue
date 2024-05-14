<script setup lang="ts">
import BaseIcon from '@/components/shared/icons/BaseIcon.vue'

defineProps<{
  text: string
}>()
</script>

<template>
  <div class="primary-button"><BaseIcon class="icon" name="add" /> {{ text }}</div>
</template>

<style scoped>
.icon {
  margin-right: 1rem;
}

.primary-button {
  cursor: pointer;
  display: flex;
  color: var(--color-heading);
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background-color: var(--color-primary-items);
  font-size: 1.2rem;
  min-height: 7vh;
  border-radius: 0.3rem;
  flex-basis: 100%;
}

.primary-button:hover {
  transition-duration: 0.3s;
}
</style>
