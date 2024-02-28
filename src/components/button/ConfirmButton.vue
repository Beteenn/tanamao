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
  color: #000;
  display: flex;
  width: 4.2rem;
  height: 2rem;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background-color: #FFFF00;
  border: 0.15rem solid #FFFF00;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  margin: 0.1rem;
}
</style>
