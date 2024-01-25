<script setup lang="ts">
import TopicCard from '@/components/TopicCard.vue';
import PrimaryButton from '@/components/button/PrimaryButton.vue';

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
      <TopicCard v-for="topic in topics" :name="topic.name" />
    </div>

    <PrimaryButton text="Adicionar Tópico"/>

  </main>
</template>

<style scoped>
.title {
  color: white;
  text-align: center;
  font-weight: bold;
}

.topics-list {
  height: 77vh;
  overflow: auto;
}
</style>
