<script setup lang="ts">
import TopicCard from '@/components/TopicCard.vue'
import router from '@/router';

const topics = [
  { name: 'Tomadores' },
  { name: 'Corretoras' },
  { name: 'Segurados' },
  { name: 'Assessorias' },
  { name: 'Emails' },
  { name: 'Endereços' },
  { name: 'Segurados' },
  { name: 'Corretoras' },
  { name: 'Assessorias' }
]
</script>

<template>
  <main>
    <header>
      <h1 class="title">TaNaMao</h1>
    </header>

    <div class="topics-list">
      <TopicCard v-for="topic in topics" :name="topic.name" @click="router.push('/notes')" />
    </div>

    <div class="primary-button">Novo Tópico</div>
  </main>
</template>

<style scoped>
.topics-list {
  height: 77vh;
  overflow: auto;
}
</style>
