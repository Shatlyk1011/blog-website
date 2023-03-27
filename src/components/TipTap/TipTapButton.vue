<template>
  <button class="btn">
    <font-awesome-icon class="faIcon" :icon="faIcon" size="xs" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    faIcon: {
      type: String,
      required: true,
    },
  },

  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
$color-gray-1: #212529;
$color-gray-2: #495057;
$color-gray-3: #868e96;

.btn {
  padding: 4px 6px;
  color: $color-gray-2;

  &:disabled {
    color: $color-gray-3;
    cursor: not-allowed;
  }
}
</style>