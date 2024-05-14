<script lang="ts">
import HeaderApp from '@/components/shared/HeaderApp.vue'
import { useTopicsStore } from '@/stores/topicStore'
import router from '@/router'
import { toast, type ToastOptions } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import BaseIcon from '@/components/shared/icons/BaseIcon.vue'

export default {
  components: {
    HeaderApp,
    BaseIcon
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
    <HeaderApp :showBackButton="true" title-page="Configurações" />

    <div class="setting-card" @click="goToImport">Importar Topicos e Notas
      <BaseIcon name="upload" />
    </div>
    <div class="setting-card" @click="exportJson">Exportar Topicos e Notas
      <BaseIcon name="download" />
    </div>
  </main>
</template>

<style scoped>
.setting-card {
  cursor: pointer;
  justify-content: space-between;
  display: flex;
  align-items: center;
  color: var(--color-heading);
  background-color: var(--color-background-soft);
  font-size: 1rem;
  height: 5vh;
  border-radius: 0.3rem;
  margin: 1rem 0;
  padding: 1rem;
}

.setting-card:hover {
  transition-duration: 0.3s;
  background-color: var(--color-background-mute);
}
</style>
