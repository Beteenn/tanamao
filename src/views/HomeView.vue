<script setup lang="ts">
import TopicCard from '@/components/TopicCard.vue'
import NoteCard from '@/components/NoteCard.vue'

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

    <div class="primary-button">Novo Tópico</div>
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
  position: fixed;
  bottom: 1rem;
  width: 85vw;
}

.primary-button:hover {
  background-color: #6f00df;
  transition-duration: 0.3s;
}
</style>
