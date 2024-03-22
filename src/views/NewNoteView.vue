<script lang="ts">
import HeaderApp from '@/components/HeaderApp.vue'
import PrimaryButton from '@/components/button/PrimaryButton.vue'
import router from '@/router'
import { toast } from 'vue3-toastify'
import { useNoteStore } from '@/stores/noteStore'

export default {
    props: {
        topicId: String
    },
    components: {
        HeaderApp,
        PrimaryButton
    },
    data() {
        return {
            router: router,
            noteTitle: '',
            noteText: '',
            topicId: ''
        }
    },
    mounted() {
        this.topicId = this.$route.params.topicId.toString()
    },
    methods: {
        addTopic() {
            if (this.noteTitle == '') {
                toast.error('Digite o título da nota.')
                return;
            }

            if (this.noteText == '') {
                toast.error('Digite o texto da nota.')
                return;
            }

            let noteStore = useNoteStore()
            noteStore.addNote(this.noteTitle, this.noteText, this.topicId)

            router.push(`/notes/${this.topicId}`)
        }
    }
}

</script>
<template>
    <main>
        <HeaderApp :showBackButton="true"/>

        <div class="row">
            <input class="input" v-model="noteTitle" />
        </div>

        <div class="row">
            <textarea class="text-area" type="text" v-model="noteText"></textarea>
        </div>

        <PrimaryButton text="Nova Nota" @click="addTopic()" />
    </main>
</template>