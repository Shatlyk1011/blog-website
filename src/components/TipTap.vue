<template>
  <button @click="getJson">GET JSON TO CONSOLE</button>
  <button @click="convertJson">CONVERT JSON TO CONSOLE</button>
  <editor-content :editor="editor" />

  <button
    :class="[
      'something',
      { 'is-active': editor ? editor.isActive('bold') : null },
    ]"
    @click="editor.chain().focus().toggleBold().run()"
  >
    Bold
  </button>
</template>

<script>
import { ref } from "vue";
import { useEditor, EditorContent } from "@tiptap/vue-3";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Heading from "@tiptap/extension-heading";
import StarterKit from "@tiptap/starter-kit";
import Strike from "@tiptap/extension-strike";

export default {
  components: {
    EditorContent,
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

    const getJson = () => {
      return editor.value.getJSON();
    };

    const convertJson = () => {
      return console.dir(JSON.stringify(getJson()));
    };

    return { editor, getJson, convertJson };
  },
};
</script>

<style>
.is-active {
  color: red;
}

.ProseMirror {
  width: 100%;
  height: 300px;
}

.custom-p {
  font-size: 2.4rem;
}
</style>