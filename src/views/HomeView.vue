<script lang="ts">
import TopicCard from '@/components/TopicCard.vue'
import PrimaryButton from '@/components/button/PrimaryButton.vue'
import router from '@/router'
import type Topic from '@/interfaces/Topic'
import NewTopicCard from '@/components/NewTopicCard.vue'
import HeaderApp from '@/components/HeaderApp.vue'
import { useTopicsStore } from '@/stores/topicStore'
import draggable from 'vuedraggable'

export default {
  components: {
    TopicCard,
    PrimaryButton,
    NewTopicCard,
    HeaderApp,
    draggable
  },

  data() {
    return {
      showTopicCard: false,
      topics: [] as Topic[],
      router: router
    }
  },

  methods: {
    showAddNewTopic() {
      this.showTopicCard = true
    },

    handleModal() {
      this.showTopicCard = false
    },

    onDragEnd(event: DragEvent) {
      useTopicsStore().setTopics(this.topics)
    }
  },

  mounted() {
    let topicsStore = useTopicsStore()
    this.topics = topicsStore.topics
  }
}
</script>

<template>
  <main>
    <HeaderApp />

    <div class="topics-list">
      <p class="empty-list-warning" v-if="topics.length < 1">Ainda não existem Tópicos</p>

      <draggable v-model="topics" @end="onDragEnd">
        <template #item="{ element: topic }">
          <TopicCard
            v-bind:key="topic.id"
            :name="topic.name"
            @click="router.push(`/notes/${topic.id}`)"
          />
        </template>
      </draggable>
    </div>

    <div class="new-topic" v-if="showTopicCard">
      <NewTopicCard @toggle-visibility="handleModal()" />
    </div>

    <PrimaryButton text="Adicionar Tópico" @click="showAddNewTopic()" />

    <div class="overlay" v-if="showTopicCard"></div>
  </main>
</template>

<style scoped>
.topics-list {
  height: 77vh;
  overflow: auto;
}

.new-topic {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.empty-list-warning {
  font-weight: bold;
  text-align: center;
  font-size: 1.5rem;
}
</style>
