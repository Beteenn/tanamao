<script setup lang="ts">
defineProps<{
  title: string
  text: string
}>()
</script>

<template>
  <div class="card">
    <p class="title">{{ title }}</p>
    <p class="text">{{ text }}</p>
    <div class="icon-row">
      <i class="icon-item">icon</i>
      <i class="icon-item">icon</i>
      <i class="icon-item">icon</i>
    </div>
  </div>
</template>

<style scoped>
.icon-item {
  padding-left: 0.8rem;
  cursor: pointer;
}

.icon-row {
  display: flex;
  justify-content: end;
}

.text {
  font-size: 1rem;
}

.title {
  font-weight: bold;
}

.card {
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: #cfcfcf;
  background-color: #292929;
  border: 0.15rem solid #a5a5a5;
  font-size: 1.2rem;
  padding: 1rem;
  border-radius: 0.3rem;
  margin: 1rem 0;
}
</style>
