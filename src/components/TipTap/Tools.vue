<template>
  <div class="base-tools">
    <MarkTools :editor="editor" />
    <TextTools :editor="editor" />
    <ImageTool :editor="editor" />
    <RedoUndoTool :editor="editor" />
    <!-- options? -->
  </div>
</template>

<script lang="ts">
import MarkTools from "@/components/TipTap/MarkTools.vue";
import TextTools from "@/components/TipTap/TextTools.vue";
import ImageTool from "@/components/TipTap/ImageTool.vue";
import RedoUndoTool from "@/components/TipTap/RedoUndoTool.vue";

import { defineComponent, ref } from "vue";

export default defineComponent({
  components: { TextTools, MarkTools, ImageTool, RedoUndoTool },
  props: {
    editor: {
      required: true,
      type: Object,
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

$ff-roboto: "Roboto", sans-serif;
$ff-mserrat: "Montserrat", sans-serif;

.base-tools {
  background-color: $color-text;
  border-radius: 4px;
  display: flex;
  gap: 5rem;
  padding: 1rem;
}

/* p {
  // font-family: $ff-mserrat;
  font-weight: 500;
  color: $color-main-1;
  font-size: 1.28rem;
  align-self: center;
  margin-left: auto;

  span {
    color: $color-gray-1;
    font-weight: 700;
  }
} */
</style>