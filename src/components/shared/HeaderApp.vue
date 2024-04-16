<script lang="ts">
import router from '@/router'
import Icon from '@/components/shared/icons/Icon.vue'

export default {
  methods: {
    goBack() {
      router.back()
    },

    goToSettings() {
      router.push('/settings')
    }
  },

  props: {
    showBackButton: {
      type: Boolean,
      default: false
    }
  },

  components: {
    Icon
  }
}
</script>

<template>
  <header>
    <div class="container">
      <span v-if="showBackButton">
        <Icon name="back" @click="goBack" />
      </span>
      <span v-if="!showBackButton">
        <i class="icon-item"></i>
      </span>
      <span><h1 class="title">TaNaMao</h1></span>
      <span class="icon-settings">
        <Icon name="settings" @click="goToSettings" />
      </span>
    </div>
  </header>
</template>

<style scoped>
.title {
  color: black;
}

.container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.icon-item {
  cursor: pointers;
}
</style>
