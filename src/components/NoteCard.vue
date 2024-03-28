<script lang="ts">
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import router from '@/router'

export default {
  methods: {
    copyToClipBoard() {
      navigator.clipboard.writeText(this.text!)
      toast.success('Nota copiada!')
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
  }
}
</script>

<template>
  <div class="card">
    <p class="title" @click="copyToClipBoard">{{ title }}</p>
    <p class="text" @click="copyToClipBoard">{{ text }}</p>
    <div class="icon-row">
      <i class="icon-item">delete</i>
      <i class="icon-item" @click="router.push(`/note/edit/${id}`)">edit</i>
      <i class="icon-item" @click="copyToClipBoard">copy</i>
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
  color: #cfcfcf;
  background-color: #292929;
  border: 0.15rem solid #a5a5a5;
  font-size: 1.2rem;
  padding: 1rem;
  border-radius: 0.3rem;
  margin: 1rem 0;
}
</style>
