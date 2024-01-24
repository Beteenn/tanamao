<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <div class="topic-card">{{ name }}</div>
</template>

<style scoped>
.topic-card {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #cfcfcf;
  background-color: #292929;
  border: 0.15rem solid #a5a5a5;
  font-size: 1.2rem;
  height: 7vh;
  border-radius: 0.3rem;
  margin: 1rem 0;
}

.topic-card:hover {
  transition-duration: 0.3s;
  color: white;
  border-color: #464646;
  background-color: #888888;
}
</style>
