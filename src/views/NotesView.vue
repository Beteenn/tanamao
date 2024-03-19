<script setup lang="ts">
import HeaderApp from '@/components/HeaderApp.vue';
import NoteCard from '@/components/NoteCard.vue'
import PrimaryButton from '@/components/button/PrimaryButton.vue'

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
    <HeaderApp :showBackButton="true" />

    <div>
      <NoteCard v-bind:key="note.title" v-for="note in notes" :title="note.title" :text="note.text" />
    </div>

    <PrimaryButton text="Adicionar Nota" />
  </main>
</template>

<style scoped>
</style>
