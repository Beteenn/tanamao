<script setup lang="ts">
import PrimaryButton from '@/components/button/PrimaryButton.vue';
</script>

<template>
  <main>
    <header>
      <h1 class="title">TaNaMao</h1>
    </header>

    <div class="row">
      <input class="input" type="text" value="Titulo">
    </div>

    <div class="row">
      <textarea class="text-area" type="text"></textarea>
    </div>

    <PrimaryButton text="Atualizar Nota"/>

  </main>
</template>

<style scoped>
.text-area {
  flex-basis: 100%;
  box-sizing: content-box;
  padding: 0.5rem 1rem;
  color: #cfcfcf;
  background-color: #292929;
  border: 0.15rem solid #a5a5a5;
  font-size: 1rem;
  margin: 1rem 0;
  height: 40vh;
  border-radius: 0.3rem;
}

.input {
  flex-basis: 100%;
  display: flex;
  padding: 0 1rem;
  font-weight: bold;
  color: #cfcfcf;
  background-color: #292929;
  border: 0.15rem solid #a5a5a5;
  font-size: 1.2rem;
  height: 7vh;
  border-radius: 0.3rem;
  margin: 1rem 0;
}
</style>
