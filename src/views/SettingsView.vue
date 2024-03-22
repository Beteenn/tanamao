<script lang="ts">
import HeaderApp from '@/components/HeaderApp.vue'
import { useTopicsStore } from '@/stores/topicStore'
import router from '@/router'
import { toast, type ToastOptions } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default {
  components: {
    HeaderApp
  },

  methods: {
    exportJson() {
      let topicsStore = useTopicsStore()
      topicsStore.exportJson()

      const toastOptions = {
        onClose: () => router.push('/'),
        autoClose: 3000
      } as ToastOptions

      toast.success('Notas Exportadas!', toastOptions)
    },

    goToImport() {
      router.push('/import')
    }
  },

  mounted() {}
}
</script>

<template>
  <main>
    <HeaderApp :showBackButton="true" />

    <div class="setting-card" @click="goToImport">Importar Topicos e Notas</div>
    <div class="setting-card" @click="exportJson">Exportar Topicos e Notas</div>
  </main>
</template>

<style scoped>
.setting-card {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #cfcfcf;
  background-color: #292929;
  border: 0.15rem solid #a5a5a5;
  font-size: 1.2rem;
  height: 7vh;
  border-radius: 0.3rem;
  margin: 1rem 0;
}

.setting-card:hover {
  transition-duration: 0.3s;
  color: white;
  border-color: #464646;
  background-color: #888888;
}
</style>
