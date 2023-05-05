<template>
  <div class="btn" role="button" tabindex="0">
    <font-awesome-icon class="faIcon" :icon="faIcon" :size="size" />
    <slot />
    <div class="tooltip" v-if="tooltip">
      {{ tooltip }} <br />
      <span>
        {{ command }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
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
  command: {
    required: false,
    type: String,
  },
});
</script>

<style lang="scss" scoped>
@import "@/globals";

.btn {
  color: $color-white;
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
  display: block;
  z-index: 1000;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -8px);
  padding: 4px 8px;
  border-radius: 4px;
  background-color: #000;
  color: $color-text;
  font-size: 1.28rem;
  font-weight: 400;
  min-width: 3rem;
  max-width: 6.7rem;
  height: auto;
  text-align: center;
  overflow-wrap: break-word;
  letter-spacing: -0.4px;

  transition: all 0.4s cubic-bezier(0.83, 0, 0.17, 1);
  span {
    font-family: $ff-mserrat;
    font-size: 1rem;
    font-weight: 500;
    color: rgba($color-text, 0.7);
  }
}
</style>