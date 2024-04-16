<script lang="ts">
import TopicCard from '@/components/TopicCard.vue'
import PrimaryButton from '@/components/button/PrimaryButton.vue'
import type Topic from '@/interfaces/Topic'
import NewTopicCard from '@/components/NewTopicCard.vue'
import HeaderApp from '@/components/shared/HeaderApp.vue'
import { useTopicsStore } from '@/stores/topicStore'
import draggable from 'vuedraggable'
import { toast } from 'vue3-toastify'

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
      showSnackbar: false
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
    },

    getTopics() {
      let topicsStore = useTopicsStore()
      this.topics = topicsStore.topics
    },

    deleteTopic(id: string) {
      this.showSnackbar = true
      useTopicsStore().deleteTopic(id)

      this.getTopics()
    },

    undoDeleteTopic() {
      this.showSnackbar = false
      useTopicsStore().undoDeletedTopic()

      toast.info('Tópico Recuperado!', { autoClose: 500 })
      this.getTopics()
    }
  },

  mounted() {
    this.getTopics()
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
            :id="topic.id"
            :name="topic.name"
            @delete-topic="deleteTopic"
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

  <v-snackbar v-model="showSnackbar" :timeout="2000">
    Tópico excluido!

    <template v-slot:actions>
      <v-btn color="red" variant="text" @click="undoDeleteTopic"> Desfazer </v-btn>
    </template>
  </v-snackbar>
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
