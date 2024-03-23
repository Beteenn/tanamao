<script lang="ts">
import PrimaryButton from '@/components/button/PrimaryButton.vue'
import HeaderApp from '@/components/HeaderApp.vue'

export default {
  props: {
    title: String,
    text: String
  },
  components: {
      HeaderApp,
      PrimaryButton
  }
}
</script>

<template>
  <main>
    <HeaderApp :showBackButton="true"/>

    <div class="row">
      <input class="input" type="text" value="title" />
    </div>

    <div class="row">
      <textarea class="text-area" type="text" value="text"></textarea>
    </div>

    <PrimaryButton text="Atualizar Nota" />
  </main>
</template>