<template>
  <div class="submit">
    <button class="submit__btn" v-if="!isPending">{{ text }}</button>
    <button
      class="submit__btn submit__btn--isPending"
      v-if="isPending"
      disabled
    >
      {{ text }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Submit Button",

  props: {
    text: {
      required: true,
      type: String,
    },

    isPending: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
$color-black: #000;
$color-white: #fff;
$color-text: #e9ecef;

$color-main-1: #d84f2a;
$color-main-2: #f9744b;

$color-gray-1: #212529;
$color-gray-2: #495057;
$color-gray-3: #868e96;

.submit {
  &__btn {
    padding: 1rem 1.6rem;
    color: $color-text;
    background-color: $color-main-1;
    display: inline-block;
    justify-self: start;

    transition: 0.2s cubic-bezier(0.83, 0, 0.17, 1);
    &:hover {
      background-color: rgba($color-main-1, 0.8);
    }

    &:active {
      transform: translateY(4px) scale(0.98);
    }
    &--isPending {
      background-color: rgba($color-gray-3, 0.5);
      color: rgba($color-text, 0.5);

      &:hover {
        background-color: rgba($color-gray-3, 0.4);
      }
    }
  }
}
</style>