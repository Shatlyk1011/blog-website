<template>
  <div class="tools">
    <MarkTools class="marks" :editor="editor" />
    <TextTools :editor="editor" />
    <ImageTool :editor="editor" />
    <RedoUndoTool :editor="editor" />
  </div>
</template>

<script lang="ts" setup>
import { Editor } from "@tiptap/vue-3";

import MarkTools from "@/components/TipTap/TipTapTools/MarkTools.vue";
import TextTools from "@/components/TipTap/TipTapTools/TextTools.vue";
import ImageTool from "@/components/TipTap/TipTapTools/ImageTool.vue";
import RedoUndoTool from "@/components/TipTap/TipTapTools/RedoUndoTools.vue";

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
.tools {
  display: flex;
  column-gap: 5rem;
  padding: 6px 3rem;
  background-color: $color-gray-3;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 1000;

  &:focus {
    box-shadow: 0 0 0 0.4rem rgba(#000, 0.7);
    outline: none;
  }

  @include respond(tab-port) {
    column-gap: 1rem;
    row-gap: 4px;
    padding: 6px 1.6rem;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  @include respond(phone) {
    padding: 4px 1rem;
    box-sizing: content-box;
  }

}

</style>