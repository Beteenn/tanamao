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
  width: 4.2rem;
  height: 2rem;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background-color: #df1824;
  border: 0.15rem solid #df1824;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  margin: 0.1rem;
}
</style>
