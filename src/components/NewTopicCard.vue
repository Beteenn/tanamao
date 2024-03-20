<script lang="ts">
import CancelButton from '@/components/button/CancelButton.vue'
import ConfirmButton from '@/components/button/ConfirmButton.vue'
import router from '@/router'
import { useTopicsStore } from '@/stores/topicStore'

export default {
  components: {
    CancelButton,
    ConfirmButton
  },
  data() {
    return {
      router: router,
      topicName: ''
    }
  },
  methods: {
    addNewTopic() {
      if (this.topicName != '') {
        let topicsStore = useTopicsStore()
        topicsStore.addTopic(this.topicName)
        this.$emit('toggle-visibility')
      }
    },

    closeModal() {
      this.$emit('toggle-visibility')
    }
  }
}
</script>

<template>
  <main class="modal">
    <div class="itens">
      <header>
        <h2 class="title">Novo Tópico</h2>
      </header>
      <input type="text" placeholder="Titulo" v-model="topicName" class="input-text" autofocus />
      <div class="footer">
        <CancelButton text="Não" @click="closeModal()" />
        <ConfirmButton text="Sim" @click="addNewTopic()" />
      </div>
    </div>
  </main>
</template>

<style scoped>
.modal {
  position: fixed;
  width: 40vh;
  height: 32vh;
  top: 25vh;

  border-radius: 8px;
  color: #cfcfcf;
  background: #292929;
  z-index: 2;
}

.itens {
  padding: 2vh 4vh 3vh;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.input-text {
  width: 100%;
  height: 5vh;
  border-radius: 0.5rem;
  font-size: 1rem;
}

input[type='text'] {
  padding-left: 0.8rem;
}

.footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
