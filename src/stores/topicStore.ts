import type Topic from '@/interfaces/Topic';
import { defineStore } from 'pinia';

export const useTopicsStore = defineStore('topics', {
  state() {
    return { topics: JSON.parse(localStorage.getItem('topics')) || [] as Topic[] }
  },

  actions: {
    addTopic(topic: Topic) {
      this.topics.push(topic);
      this.saveTopics();
    },

    removeTopic(topic: Topic) {
      this.topics = this.topics.filter((t) => t !== topic);
      this.saveTopics();
    },

    saveTopics() {
      localStorage.setItem('topics', JSON.stringify(this.topics));
    },

    setTopics(topics: Topic[]) {
      this.topics = topics;
      this.saveTopics();
    }
  }

});
