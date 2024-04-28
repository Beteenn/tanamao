<script lang="ts">
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import router from '@/router'
import BaseIcon from './shared/icons/BaseIcon.vue'

export default {
  emits: ['delete-note'],

  methods: {
    copyToClipBoard() {
      navigator.clipboard.writeText(this.text!)
      toast.success('Nota copiada!')
    },

    triggerEventDeleteNote() {
      this.$emit('delete-note', this.id)
    }
  },

  props: {
    id: {
      type: String
    },
    title: {
      type: String
    },
    text: {
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
  <div class="card">
    <div class="title-row">
      <p class="title" @click="copyToClipBoard">{{ title }}</p>
      <div class="icon-row">
        <BaseIcon @click="triggerEventDeleteNote" name="trash" />
        <BaseIcon @click="router.push(`/note/edit/${id}`)" name="edit" />
        <BaseIcon @click="copyToClipBoard" name="copy" />
      </div>
    </div>
    <p class="text" @click="copyToClipBoard">{{ text }}</p>
  </div>
</template>

<style scoped>
.text {
  cursor: pointer;
  font-size: 1rem;
}

.title {
  cursor: pointer;
  font-weight: bold;
}

.card {
  display: flex;
  flex-direction: column;
  font-weight: bold;
  background-color: #292929;
  font-size: 1.2rem;
  padding: 0.5rem 0.6rem 1rem 1.2rem;
  border-radius: 0.3rem;
  margin: 1rem 0;
  word-wrap: break-word;
}

.title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
}
</style>
