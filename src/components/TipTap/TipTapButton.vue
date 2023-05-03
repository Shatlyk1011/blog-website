<template>
  <div class="btn" role="button" tabindex="0">
    <font-awesome-icon class="faIcon" :icon="faIcon" :size="size" />
    <slot />
    <div class="tooltip" v-if="tooltip">{{ tooltip }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    faIcon: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: false,
      default: "sm",
    },
    tooltip: {
      required: false,
      type: String,
    },
  },
});
</script>

<style lang="scss" scoped>
$color-text: #e9ecef;

$color-gray-1: #212529;
$color-gray-2: #495057;
$color-gray-3: #868e96;

$color-main-1: #d84f2a;

$ff-mserrat: "Montserrat", sans-serif;

.btn {
  color: $color-gray-2;
  position: relative;
  padding: 2px;
  user-select: none;

  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(#000, 0.7);
    outline: none;
  }

  &:disabled {
    color: $color-gray-3;
    cursor: not-allowed;
  }
  &:hover > .tooltip,
  &:focus > .tooltip {
    opacity: 1;
    user-select: auto;
    visibility: visible;
    transform: translate(-50%, 6px);
  }
}

.isActive {
  color: $color-main-1;
}

.tooltip {
  opacity: 0;
  user-select: none;
  visibility: hidden;
  z-index: 10000;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -8px);
  padding: 4px 8px;
  border-radius: 4px;
  background-color: $color-gray-1;
  color: $color-text;
  font-size: 1.28rem;
  font-weight: 400;
  min-width: 3rem;
  max-width: 6.7rem;
  height: auto;
  text-align: center;
  overflow-wrap: break-word;
  letter-spacing: -0.4px;

  transition: 0.4s cubic-bezier(0.83, 0, 0.17, 1);
}
</style>