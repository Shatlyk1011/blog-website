<template>
  <ul class="tags">
    <li :class="['tag', white ? 'white' : null]" v-for="tag in tags" :key="tag">
      <span>{{ hash }}{{ tag }}</span>
      <slot :tag="tag" />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Tags",
  props: {
    tags: {
      required: true,
      type: Array<string>,
    },
    hash: {
      required: false,
      type: String,
      default: "",
    },
    white: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/globals";
.tags {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.4rem;
  list-style: none;
  padding: 0;
  width: 100%;

  .tag {
    font-weight: 500;
    display: flex;
    color: $color-main-2;
    background-color: $color-gray-1;
    padding: 4px 1rem;
    border-radius: 4px;

    &.white {
      color: $color-text;
    }
  }
}
</style>