<script lang="ts">
import router from '@/router'
import BaseIcon from '@/components/shared/icons/BaseIcon.vue'

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
  },

  components: {
    BaseIcon
  }
}
</script>

<template>
  <div class="topic-card" @click="openNotes">
    <p class="text">{{ name }}</p>
    <div class="icon-row">
      <BaseIcon name="trash" />
      <BaseIcon name="edit" />
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
  background-color: var(--color-background-soft);
  font-size: 1.2rem;
  height: 7vh;
  border-radius: 0.3rem;
  margin: 1rem 0rem 1.5rem 0rem;
  padding: 0rem 1rem;
}

.topic-card:hover {
  transition-duration: 0.3s;
  background-color: var(--color-background-mute);
}
</style>
