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
    },
    titlePage: {
      type: String 
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
      <span class="header-center">
        <span class="application-icon">
          <Icon class="icon" name="application" />
        </span>
        <h1 class="title">TaNa<span class="highlighted-title">Mão</span></h1>
      </span>
      <span class="icon-settings">
        <Icon name="settings" @click="goToSettings" />
      </span>
    </div>
    <div class="container-page">
      <span v-if="showBackButton">
        <Icon name="back" @click="goBack" />
      </span>
      <span v-if="!showBackButton">
        <i class="icon-item"></i>
      </span>
      <span class="title-page"><p>{{ titlePage }}</p></span>
    </div>
  </header>
</template>

<style scoped>
.container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.icon-item {
  cursor: pointers;
  padding-left: 0;
}

.header-center {
  display: flex;
  flex-direction: row;
  margin: auto;
}

.title {
  margin: auto;
  font-family: 'Paprika';
}

.highlighted-title {
  color: var(--color-primary-items);
}

.application-icon {
  padding-right: 1rem;
  display: flex;
  justify-items: center;
  align-items: center;
  padding-top: 0.5rem;
}

.container-page {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem 0 0.8rem 0;
}

.title-page {
  font-size: 1.2rem;
  color: var(--color-heading);
  margin: auto;
}
</style>
