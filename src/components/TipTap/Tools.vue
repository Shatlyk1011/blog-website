<template>
  <div class="base-tools">
    <MarkTools :editor="editor" />
    <TextTools :editor="editor" />
  </div>
</template>

<script lang="ts">
import MarkTools from "@/components/TipTap/MarkTools.vue";
import TextTools from "@/components/TipTap/TextTools.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { TextTools, MarkTools },
  props: {
    editor: {
      required: true,
      type: Object,
    },
  },
  setup() {
    return {};
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

$ff-roboto: "Roboto", sans-serif;
$ff-mserrat: "Montserrat", sans-serif;

.base-tools {
  background-color: $color-text;
  border-radius: 4px;
  display: flex;
  gap: 5rem;
  padding: 1rem;
}
</style>