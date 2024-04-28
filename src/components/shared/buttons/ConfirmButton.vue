<script lang="ts">
export default {
  props: {
    text: {
      type: String
    },
    isModalButton: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      widthObject: {
        width: this.isModalButton ? '10.5rem' : '12rem'
      }
    }
  }
}
</script>

<template>
  <div class="confirm-button" v-bind:style="widthObject">{{ text }}</div>
</template>

<style scoped>
.confirm-button {
  cursor: pointer;
  display: flex;
  height: 3rem;
  justify-content: center;
  align-items: center;

  background-color: var(--color-primary-items);
  font-size: 1.2rem;
  border-radius: 0.3rem;
  margin: 0.1rem;
}
</style>
