<script setup lang="ts">
import SettingIcon from '@/components/shared/icons/SettingIcon.vue';
import TrashIcon from '@/components/shared/icons/TrashIcon.vue';
import EditIcon from '@/components/shared/icons/EditIcon.vue'
import CopyIcon from '@/components/shared/icons/CopyIcon.vue'
import BackIcon from '@/components/shared/icons/BackIcon.vue'
import AddIcon from '@/components/shared/icons/AddIcon.vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  }
});

const iconLookup: Record<string, any> = {
  settings: SettingIcon,
  trash: TrashIcon,
  edit: EditIcon,
  copy: CopyIcon,
  back: BackIcon,
  add: AddIcon
};

const iconComponent = iconLookup[props.name];

</script>

<template>
  <div class="icon-item">
    <component :is="iconComponent" />
  </div>

</template>

<style scoped>
.icon-item {
  cursor: pointers;
}
</style>
