import type Topic from '@/interfaces/Topic'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { useNoteStore } from './noteStore'
import type Note from '@/interfaces/Note'

export const useTopicsStore = defineStore('topics', {
  state() {
    let topicsDeleted: Topic[] = []
    let indexTopicDeleted: number = 0

    var topicsLocalStorage = localStorage.getItem('topics')
    var initialTopics = topicsLocalStorage ? JSON.parse(topicsLocalStorage) : [] as Topic[]

    return {
      topics: initialTopics,
      topicsDeleted,
      indexTopicDeleted
    }
  },

  actions: {
    addTopic(topicName: string) {
      const newTopic: Topic = { id: uuidv4(), name: topicName }
      this.topics.push(newTopic)
      this.saveTopics()
    },

    importTopic(id: string, topicName: string) {
      const newTopic: Topic = { id: id, name: topicName }
      this.topics.push(newTopic)
      this.saveTopics()
    },

    importTopics(topics: Topic[]) {
      this.topics = topics
      this.saveTopics()
    },

    removeTopic(topic: Topic) {
      this.topics = this.topics.filter((t: Topic) => t !== topic)
      this.saveTopics()
    },

    saveTopics() {
      localStorage.setItem('topics', JSON.stringify(this.topics))
    },

    setTopics(topics: Topic[]) {
      this.topics = topics
      this.saveTopics()
    },

    deleteTopic(id: string) {
      const index = this.topics.findIndex((x: Topic) => x.id == id)

      if (index == -1) return

      this.topicsDeleted = this.topics.splice(index, 1)
      this.indexTopicDeleted = index
      this.saveTopics()
    },

    undoDeletedTopic() {
      this.topics.splice(this.indexTopicDeleted, 0, ...this.topicsDeleted)
      this.saveTopics()
    },

    exportJson() {
      const blob = new Blob([this.crateJsonExport()], { type: 'text/plain' })
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = 'topics.json'
      link.click()
      URL.revokeObjectURL(link.href)
    },

    crateJsonExport() {
      const notesStore = useNoteStore()

      const data = {
        topics: this.topics,
        notes: notesStore.notes
      }

      return JSON.stringify(data)
    },

    importAddJson(data: any) {
      const topicsToImport = data.topics as Topic[]

      topicsToImport.forEach((newTopic) => this.importTopic(newTopic.id, newTopic.name))

      const notesStore = useNoteStore()
      const notesToImport = data.notes as Note[]

      notesToImport.forEach((newNote) =>
        notesStore.addNote(newNote.title, newNote.text, newNote.parentId)
      )
    },

    importOverrideJson(data: any) {
      const notesStore = useNoteStore()

      const topicsToImport = data.topics as Topic[]

      this.importTopics(topicsToImport)

      const notesToImport = data.notes as Note[]

      notesStore.importNotes(notesToImport)
    }
  }
})
