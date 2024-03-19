<script lang="ts">
import router from '@/router'

export default {
  methods: {
    goBack() {
      router.push('/');
    }
  },

  props: {
    showBackButton: {
      type: Boolean,
      default: false,
    },
  },
};

</script>

<template>
    <header>
    <div class="container">
      <span v-if="showBackButton" class="icon-back">
        <i class="icon-item" @click="goBack">back</i>
      </span>
      <span><h1 class="title">TaNaMao</h1></span>
    </div>
  </header>
</template>

<style scoped>
.title {
  color: black;
}

.container {
  position: relative;
}

.icon-back {
  position: absolute;
  padding-top: 1rem;
}
</style>