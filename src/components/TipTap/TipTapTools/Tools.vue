<template>
  <div class="base-tools">
    <MarkTools :editor="editor" />
    <TextTools :editor="editor" />
    <ImageTool :editor="editor" />
    <RedoUndoTool :editor="editor" />
  </div>
</template>

<script lang="ts">
import { Editor } from "@tiptap/vue-3";

import MarkTools from "@/components/TipTap/TipTapTools/MarkTools.vue";
import TextTools from "@/components/TipTap/TipTapTools/TextTools.vue";
import ImageTool from "@/components/TipTap/TipTapTools/ImageTool.vue";
import RedoUndoTool from "@/components/TipTap/TipTapTools/RedoUndoTools.vue";

import { defineComponent, ref } from "vue";

export default defineComponent({
  components: { TextTools, MarkTools, ImageTool, RedoUndoTool },
  props: {
    editor: {
      required: true,
      type: Editor,
      default: Editor,
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
  position: sticky;
  position: -webkit-sticky;
  top: 0;

  &:focus {
    box-shadow: 0 0 0 0.4rem rgba(#000, 0.7);
    outline: none;
  }
}
</style>