<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <div class="primary-button">{{ text }}</div>
</template>

<style scoped>
.primary-button {
  cursor: pointer;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background-color: #8000ff;
  border: 0.15rem solid #5f02bd;
  font-size: 1.2rem;
  height: 7vh;
  border-radius: 0.3rem;
  flex-basis: 100%;
}

.primary-button:hover {
  background-color: #6f00df;
  transition-duration: 0.3s;
}
</style>
