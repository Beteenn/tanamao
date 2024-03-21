import type Topic from '@/interfaces/Topic'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { useNoteStore } from './noteStore'
import type Note from '@/interfaces/Note'

export const useTopicsStore = defineStore('topics', {
  state() {
    return { topics: JSON.parse(localStorage.getItem('topics')) || ([] as Topic[]) }
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

      topicsToImport.forEach(x => this.importTopic(x.id, x.name))
      
      const notesStore = useNoteStore()
      const notesToImport = data.notes as Note[]

      notesToImport.forEach(x => notesStore.addNote(x.title, x.text, x.parentId))
    },

    importOverrideJson(data: any) {}
  }
})
