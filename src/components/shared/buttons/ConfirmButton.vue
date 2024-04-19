<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <div class="confirm-button">{{ text }}</div>
</template>

<style scoped>
.confirm-button {
  cursor: pointer;
  color: var(--color-background);
  display: flex;
  width: 10.5rem;
  height: 3rem;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background-color: var(--color-primary-items);
  font-size: 1.2rem;
  border-radius: 0.3rem;
  margin: 0.1rem;
}
</style>
