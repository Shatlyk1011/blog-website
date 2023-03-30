<template>
  <button class="btn">
    <font-awesome-icon
      v-if="faIcon"
      class="faIcon"
      :icon="faIcon"
      :size="size"
    />
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    faIcon: {
      type: String,
      required: false,
    },
    size: {
      type: String,
      required: false,
      default: "sm",
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

$color-main-1: #d84f2a;

.btn {
  color: $color-gray-2;

  &:disabled {
    color: $color-gray-3;
    cursor: not-allowed;
  }
}

.isActive {
  color: $color-main-1;
}
</style>