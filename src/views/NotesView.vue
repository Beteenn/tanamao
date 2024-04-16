<script lang="ts">
import HeaderApp from '@/components/shared/HeaderApp.vue'
import NoteCard from '@/components/NoteCard.vue'
import PrimaryButton from '@/components/button/PrimaryButton.vue'
import type Note from '@/interfaces/Note'
import { useNoteStore } from '@/stores/noteStore'
import router from '@/router'
import draggable from 'vuedraggable'
import { toast } from 'vue3-toastify'

export default {
  components: {
    PrimaryButton,
    HeaderApp,
    NoteCard,
    draggable
  },

  data() {
    return {
      notes: [] as Note[],
      router: router,
      topicId: '',
      showSnackbar: false
    }
  },

  methods: {
    onDragEnd(event: DragEvent) {
      useNoteStore().setNotes(this.notes)
    },

    getNotes() {
      let notesStore = useNoteStore()

      this.topicId = this.$route.params.topicId.toString()
      this.notes = notesStore.getNotesByParentId(this.topicId)
    },

    deleteNote(id: string) {
      this.showSnackbar = true
      useNoteStore().deleteNote(id)

      this.getNotes()
    },

    undoDeleteNote() {
      this.showSnackbar = false
      useNoteStore().undoDeletedNote()

      toast.info('Nota Recuperada!', { autoClose: 500 })
      this.getNotes()
    }
  },

  mounted() {
    this.getNotes()
  }
}
</script>

<template>
  <main>
    <HeaderApp :showBackButton="true" />

    <div class="notes-list">
      <p class="empty-list-warning" v-if="notes.length < 1">Ainda não existem Notas</p>

      <draggable v-model="notes" @end="onDragEnd">
        <template #item="{ element: note }">
          <NoteCard
            v-bind:key="note.title"
            :id="note.id"
            :title="note.title"
            :text="note.text"
            @delete-note="deleteNote"
          />
        </template>
      </draggable>
    </div>

    <PrimaryButton text="Adicionar Nota" @click="router.push(`/note/new/${topicId}`)" />
  </main>

  <v-snackbar v-model="showSnackbar" :timeout="2000">
    Nota excluida!

    <template v-slot:actions>
      <v-btn color="red" variant="text" @click="undoDeleteNote"> Desfazer </v-btn>
    </template>
  </v-snackbar>
</template>

<style scoped>
.notes-list {
  height: 77vh;
  overflow: auto;
}

.empty-list-warning {
  font-weight: bold;
  text-align: center;
  font-size: 1.5rem;
}
</style>
