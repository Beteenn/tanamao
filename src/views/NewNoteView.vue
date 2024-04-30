<script lang="ts">
import HeaderApp from '@/components/shared/HeaderApp.vue'
import router from '@/router'
import { toast, type ToastOptions } from 'vue3-toastify'
import { useNoteStore } from '@/stores/noteStore'
import ConfirmButton from '@/components/shared/buttons/ConfirmButton.vue'
import CancelButton from '@/components/shared/buttons/CancelButton.vue'

export default {
  components: {
    HeaderApp,
    ConfirmButton,
    CancelButton
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
    },

    goBack() {
      router.back()
    }
  }
}
</script>

<template>
  <main>
    <HeaderApp :showBackButton="true" titlePage="Nova Nota" />

    <div class="note-body">
      <p class="label-text">Título:</p>
      <div class="row">
        <input class="input" type="text" v-model="title" />
      </div>

      <p class="label-text">Descrição:</p>
      <div class="row">
        <textarea class="text-area" type="text" v-model="text"></textarea>
      </div>

      <div class="buttons-row">
        <ConfirmButton text="Salvar Nota" @click="addTopic()" />
        <CancelButton text="Cancelar" @click="goBack" />
      </div>
    </div>
  </main>
</template>

<style>
.note-body {
  height: 77vh;
}
</style>
