<script lang="ts">
import router from '@/router'

export default {
  emits: ['delete-topic'],

  methods: {
    triggerEventDeleteTopic() {
      this.$emit('delete-topic', this.id)
    },

    openNotes() {
      this.router.push(`/notes/${this.id}`)
    }
  },

  props: {
    id: {
      type: String
    },
    name: {
      type: String
    }
  },

  data() {
    return {
      router: router
    }
  }
}
</script>

<template>
  <div class="topic-card">
    <p class="text">{{ name }}</p>
    <div class="icon-row">
      <i class="icon-item" @click="triggerEventDeleteTopic">delete</i>
      <i class="icon-item" @click="openNotes">open</i>
    </div>
  </div>
</template>

<style scoped>
.topic-card {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  color: #cfcfcf;
  background-color: #292929;
  border: 0.15rem solid #a5a5a5;
  font-size: 1.2rem;
  height: 7vh;
  border-radius: 0.3rem;
  margin: 1rem 0;
  padding: 0rem 1rem;
}

.topic-card:hover {
  transition-duration: 0.3s;
  color: white;
  border-color: #464646;
  background-color: #888888;
}
</style>
