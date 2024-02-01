<script setup lang="ts">
import NoteCard from '@/components/NoteCard.vue'
import PrimaryButton from '@/components/button/PrimaryButton.vue'
import router from '@/router'

const notes = [
  { title: 'CNPJ', text: 'Testando a exibição do texto!' },
  { title: 'CPF', text: 'Testando a exibição do texto!' },
  { title: 'Login', text: 'Testando a exibição do texto!' },
  { title: 'Token', text: 'Testando a exibição do texto!' },
  { title: 'Container', text: 'Testando a exibição do texto!' }
]
</script>

<template>
  <main>
    <header>
      <div class="container">
        <span class="icon-back"><i class="icon-item" @click="router.push('/')">back</i></span>
        <span><h1 class="title">TaNaMao</h1></span>
      </div>
    </header>

    <div>
      <NoteCard v-for="note in notes" :title="note.title" :text="note.text" />
    </div>

    <PrimaryButton text="Adicionar Nota" />
  </main>
</template>

<style scoped>
.container {
  position: relative;
}

.icon-back {
  position: absolute;
  padding-top: 1rem;
}
</style>
