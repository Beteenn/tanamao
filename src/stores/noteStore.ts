import type Note from '@/interfaces/Note'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export const useNoteStore = defineStore('notes', {
  state() {
    return { notes: JSON.parse(localStorage.getItem('notes')) || ([] as Note[]) }
  },

  actions: {
    addNote(noteTitle: string, note: string, parentId: string) {
      const newNote: Note = {
        id: uuidv4(),
        title: noteTitle,
        text: note,
        parentId: parentId
      }

      this.notes.push(newNote)
      this.saveNotes()
    },

    importNotes(notes: Note[]) {
      this.notes = notes
      this.saveNotes()
    },

    removeNote(note: Note) {
      this.notes = this.notes.filter((t: Note) => t !== note)
      this.saveNotes()
    },

    saveNotes() {
      localStorage.setItem('notes', JSON.stringify(this.notes))
    },

    setNotes(notes: Note[]) {
      this.notes = notes
      this.saveNotes()
    },

    getNotesByParentId(parentId: string): Note[] {
      return this.notes.filter((n: Note) => n.parentId == parentId)
    }
  }
})
