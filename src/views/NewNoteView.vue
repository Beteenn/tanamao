<script lang="ts">
import HeaderApp from '@/components/shared/HeaderApp.vue'
import PrimaryButton from '@/components/button/PrimaryButton.vue'
import router from '@/router'
import { toast, type ToastOptions } from 'vue3-toastify'
import { useNoteStore } from '@/stores/noteStore'

export default {
  components: {
    HeaderApp,
    PrimaryButton
  },

  data() {
    return {
      router: router,
      title: '',
      text: '',
      topicId: ''
    }
  },

  mounted() {
    this.topicId = this.$route.params.topicId.toString()
  },

  methods: {
    addTopic() {
      if (this.title == '') {
        toast.error('Digite o título da nota.')
        return
      }

      if (this.text == '') {
        toast.error('Digite o texto da nota.')
        return
      }

      useNoteStore().addNote(this.title, this.text, this.topicId)

      const toastOptions = {
        onClose: () => router.push(`/notes/${this.topicId}`),
        autoClose: 500
      } as ToastOptions

      toast.success('Nota Criada!', toastOptions)
    }
  }
}
</script>

<template>
  <main>
    <HeaderApp :showBackButton="true" />

    <div class="note-body">
      <div class="row">
        <input class="input" type="text" v-model="title" />
      </div>

      <div class="row">
        <textarea class="text-area" type="text" v-model="text"></textarea>
      </div>
    </div>

    <PrimaryButton text="Nova Nota" @click="addTopic()" />
  </main>
</template>

<style>
.note-body {
  height: 77vh;
}
</style>
