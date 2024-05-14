<script lang="ts">
import HeaderApp from '@/components/shared/HeaderApp.vue'
import PrimaryButton from '@/components/shared/buttons/PrimaryButton.vue'
import { useTopicsStore } from '@/stores/topicStore'
import { toast, type ToastOptions } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import router from '@/router'

export default {
  components: {
    HeaderApp,
    PrimaryButton
  },

  data() {
    return {
      selectedOption: '',
      selectedFile: false,
      selectedFileName: '',
      textToImport: ''
    }
  },

  methods: {
    onFileChanged($event: Event) {
      const inputFile = $event.target as HTMLInputElement

      if (inputFile && inputFile.files) {
        const fileValue = inputFile.files[0]

        const reader = new FileReader()

        reader.onload = (event) => {
          if (event.target && event.target.result) {
            try {
              this.textToImport = JSON.parse(event.target.result.toString())
              this.selectedFile = true
              this.selectedFileName = fileValue.name
            } catch (error) {
              console.error('Error parsing JSON:', error)
            }
          }
        }

        reader.readAsText(fileValue)
      }
    },

    importFile() {
      if (!this.selectedFile || this.selectedOption == '') {
        toast.error('Complete as informações para importação.')
        return
      }

      const topicsStore = useTopicsStore()

      const toastOptions = {
        onClose: () => router.push('/'),
        autoClose: 3000
      } as ToastOptions

      var toastSuccess = toast.success('Notas importadas!', toastOptions)

      if (this.selectedOption == '1') {
        topicsStore.importOverrideJson(this.textToImport)
        toastSuccess

        return
      }

      topicsStore.importAddJson(this.textToImport)
      toastSuccess
    }
  },

  mounted() {}
}
</script>

<template>
  <HeaderApp :showBackButton="true" titlePage="Importar Arquivos" />

  <div class="container">
    <label for="fileInput" class="file-input-label">
      <input
        type="file"
        id="fileInput"
        class="hidden"
        accept="application/json"
        @change="onFileChanged($event)"
      />
      <span v-if="!selectedFile" class="file-input-text">Selecione um arquivo</span>
      <span v-else class="file-input-text">{{ selectedFileName }}</span>
    </label>

    <div class="radio-container">
      <input type="radio" id="override" class="hidden" v-model="selectedOption" value="1" />
      <label for="override" class="radio-label">Sobreescrever</label>

      <input type="radio" id="add" class="hidden" v-model="selectedOption" value="2" />
      <label for="add" class="radio-label">Acrescentar aos existentes</label>
    </div>
  </div>
  <PrimaryButton text="Adicionar Tópico" @click="importFile" />
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: 1rem;
  height: 75vh;
}

.radio-container {
  display: flex;
  justify-content: space-between;
  padding: 2rem;
}

.hidden {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.radio-label {
  padding: 10px 15px;
  margin-right: 10px;
  cursor: pointer;
  background-color: var(--color-background-soft);
  border: 1px solid var(--color-background-soft);
  border-radius: 5px;
  transition: all 0.3s ease;
}

input[type='radio']:checked + .radio-label {
  border: 1px solid var(--color-primary-items);
  color: var(--color-heading);
}

.file-input-label {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 15rem;
  min-height: 15rem;
  padding: 10px 15px;
  background-color: var(--color-background-soft);
  color: var(--color-text);
  border-radius: 5px;
  cursor: pointer;
}

.radio-label:hover,
.file-input-label:hover {
  background-color: var(--color-background-mute);
}

.hidden {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.file-input-text {
  margin-left: 5px;
}
</style>
