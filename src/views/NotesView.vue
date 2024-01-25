<script setup lang="ts">
import NoteCard from '@/components/NoteCard.vue'

const notes = [
    { title: 'Teste 1', text: "Testando a exibição do texto!" },
    { title: 'Teste 2', text: "Testando a exibição do texto!" },
    { title: 'Teste 3', text: "Testando a exibição do texto!" },
    { title: 'Teste 4', text: "Testando a exibição do texto!" },
    { title: 'Teste 5', text: "Testando a exibição do texto!" },
]
</script>

<template>
    <main>
        <header>
            <h1 class="title">TaNaMao</h1>
        </header>

        <div>
            <NoteCard v-for="note in notes" :title="note.title" :text="note.text"/>
        </div>

        <div class="primary-button">Nova Nota</div>
    </main>
</template>

<style scoped>

</style>