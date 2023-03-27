<template>
  <div class="toolbar">
    <BaseToolsVue :editor="editor" />
  </div>

  <editor-content class="editor" :editor="editor" />
</template>

<script>
import { useEditor, EditorContent } from "@tiptap/vue-3";
import Paragraph from "@tiptap/extension-paragraph";
import StarterKit from "@tiptap/starter-kit";
import Strike from "@tiptap/extension-strike";

import BaseToolsVue from "@/components/TipTap/BaseTools.vue";

export default {
  components: {
    EditorContent,
    BaseToolsVue,
  },

  setup() {
    const editor = useEditor({
      content: "<p>Example Text</p>",
      autofocus: true,
      extensions: [
        StarterKit,
        Strike,
        Paragraph.configure({
          HTMLAttributes: {
            class: "custom-p",
          },
        }),
      ],
    });

    return { editor };
  },
};
</script>

<style lang="scss">
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
.ProseMirror {
  height: 80rem;
  outline: none;
}
.is-active {
  color: red;
}

.ProseMirror {
  width: 100%;
  height: 300px;
}

pre {
  background-color: $color-gray-1;
  border-radius: 6px;
  color: $color-text;
  padding: 1rem;

  code {
    color: inherit;
    padding: 0;
    background: none;
    font-size: 1.4rem;
  }
}
</style>