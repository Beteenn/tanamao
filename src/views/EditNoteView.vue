<script lang="ts">
import PrimaryButton from '@/components/shared/buttons/PrimaryButton.vue'
import HeaderApp from '@/components/shared/HeaderApp.vue'
import router from '@/router'
import { toast, type ToastOptions } from 'vue3-toastify'
import { useNoteStore } from '@/stores/noteStore'
import type Note from '@/interfaces/Note'

export default {
  components: {
    HeaderApp,
    PrimaryButton
  },
  data() {
    return {
      router: router,
      note: {} as Note,
      noteId: ''
    }
  },
  mounted() {
    this.noteId = this.$route.params.noteId.toString()

    this.note = useNoteStore().getNoteById(this.noteId)
  },
  methods: {
    editTopic() {
      if (this.note.title == '') {
        toast.error('Digite o título da nota.')
        return
      }

      if (this.note.text == '') {
        toast.error('Digite o texto da nota.')
        return
      }

      useNoteStore().updateNote(this.note)

      const toastOptions = {
        onClose: () => router.push(`/notes/${this.note.parentId}`),
        autoClose: 500
      } as ToastOptions

      toast.success('Nota Atualizada!', toastOptions)
    }
  }
}
</script>

<template>
  <main>
    <HeaderApp :showBackButton="true" title-page="Editar Nota" />

    <div class="note-body">
      <div class="row">
        <input class="input" type="text" v-model="note.title" />
      </div>

      <div class="row">
        <textarea class="text-area" type="text" v-model="note.text"></textarea>
      </div>
    </div>

    <PrimaryButton text="Atualizar Nota" @click="editTopic()" />
  </main>
</template>

<style>
.note-body {
  height: 77vh;
}
</style>
