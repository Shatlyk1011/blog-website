<template>
  <div class="base-tools">
    <div class="tools">
      <MarkTools :editor="editor" />
      <TextTools :editor="editor" />
      <ImageTool :editor="editor" />
      <RedoUndoTool :editor="editor" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Editor } from "@tiptap/vue-3";

import MarkTools from "@/components/TipTap/TipTapTools/MarkTools.vue";
import TextTools from "@/components/TipTap/TipTapTools/TextTools.vue";
import ImageTool from "@/components/TipTap/TipTapTools/ImageTool.vue";
import RedoUndoTool from "@/components/TipTap/TipTapTools/RedoUndoTools.vue";

import { defineProps, ref } from "vue";

defineProps({
  editor: {
    required: true,
    type: Editor,
    default: Editor,
  },
});
</script>

<style lang="scss" scoped>
@import "@/globals";
.base-tools {
  background-color: $color-gray-3;

  padding: 1rem;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 1000;

  &:focus {
    box-shadow: 0 0 0 0.4rem rgba(#000, 0.7);
    outline: none;
  }

  .tools {
    padding: 0 2rem;
    display: flex;
    gap: 5rem;
  }
}
</style>