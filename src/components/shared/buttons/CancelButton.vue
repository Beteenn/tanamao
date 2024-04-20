<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <div class="cancel-button">{{ text }}</div>
</template>

<style scoped>
.cancel-button {
  cursor: pointer;
  display: flex;
  width: 10.5rem;
  height: 3rem;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background-color: var(--color-background);
  border: 0.15rem solid var(--color-primary-items);
  font-size: 1.2rem;
  border-radius: 0.3rem;
  margin: 0.1rem;
}
</style>
