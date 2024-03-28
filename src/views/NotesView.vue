<script lang="ts">
import HeaderApp from '@/components/HeaderApp.vue'
import NoteCard from '@/components/NoteCard.vue'
import PrimaryButton from '@/components/button/PrimaryButton.vue'
import type Note from '@/interfaces/Note'
import { useNoteStore } from '@/stores/noteStore'
import router from '@/router'
import { toast } from 'vue3-toastify'
import draggable from 'vuedraggable'

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
      topicId: ''
    }
  },

  methods: {
    onDragEnd(event: DragEvent) {
      useNoteStore().setNotes(this.notes)
    }
  },

  mounted() {
    let notesStore = useNoteStore()

    this.topicId = this.$route.params.topicId.toString()
    this.notes = notesStore.getNotesByParentId(this.topicId)
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
          />
        </template>
      </draggable>
    </div>

    <PrimaryButton text="Adicionar Nota" @click="router.push(`/note/new/${topicId}`)" />
  </main>
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
