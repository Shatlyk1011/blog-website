<template>
  <div class="toolbar">
    <Tools :editor="editor" />
  </div>
  <div id="base">
    <input
      id="title"
      v-model="title"
      type="text"
      required
      placeholder="Загаловок вашего поста..."
    />
    <label for="image">Выберите обложку (рекомендуем 5:2)</label>
    <input id="image" type="file" required @input="handleImage" />
  </div>

  <button @click="showHtml">SHOW HTML</button>
  <!-- Editor -->
  <editor-content class="editor" :editor="editor" />

  <button style="color: red" @click="createPost">create post</button>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { useEditor, EditorContent } from "@tiptap/vue-3";
import Paragraph from "@tiptap/extension-paragraph";
import StarterKit from "@tiptap/starter-kit";
import Strike from "@tiptap/extension-strike";
import Underline from "@tiptap/extension-underline";
import Image from "@tiptap/extension-image";

import { Post } from "@/assets/types/Post.ts";
import useDocument from "@/composables/useDocument.ts";
import Tools from "@/components/TipTap/Tools.vue";

export default defineComponent({
  components: {
    EditorContent,
    Tools,
  },

  setup() {
    const { addDocument } = useDocument();
    const title = ref("");

    const editor = useEditor({
      content: "<p>Example Text</p>",
      autofocus: true,
      extensions: [
        StarterKit.configure({
          bulletList: {
            itemTypeName: "listItem",
            keepMarks: true,
            keepAttributes: true,
          },
        }),
        Strike,
        Image,
        Paragraph.configure({
          HTMLAttributes: {
            class: "custom-p",
          },
        }),
        Underline.configure({
          HTMLAttributes: {
            class: "custom-underline2",
          },
        }),
      ],
    });

    const handleImage = () => {};

    const showHtml = () => {
      console.log(editor.value?.getHTML());
    };

    const createPost = () => {
      if (editor.value) {
        const html = editor.value.getHTML();
        addDocument("posts", { html, title: title.value });
      }
    };

    return { editor, createPost, title, handleImage, showHtml };
  },
});
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

.toolbar {
  margin-bottom: 2.4rem;
}

#base {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;

  input {
    // all: unset;
  }

  #title {
    padding: 1rem;
    font-size: 2rem;
    background-color: transparent;

    &::placeholder {
      font-family: $ff-mserrat;

      font-weight: 500;
    }
  }

  label {
    color: $color-black;
    background-color: $color-main-2;
    padding: 6px 12px;
    border-radius: 6px;
    text-align: center;
    font-weight: 600;
    font-size: 1.28rem;
    cursor: pointer;

    transition: 0.4s cubic-bezier(0.83, 0, 0.17, 1);

    &:hover {
      background-color: $color-main-1;
    }
  }

  #image {
    opacity: 0;
    transform: translate(-100%);
    position: absolute;
  }
}

/* .editor {
  color: $color-gray-1;
  .ProseMirror {
    outline: none;
    min-height: 60vh;
    border: 1px solid rgba($color-black, 0.2);
    border-radius: 2px;
    padding: 1.6rem;
    font-family: $ff-roboto;
    font-size: 2rem;

    p {
      margin: 6px 0;
      line-height: 1.3;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
      font-family: $ff-mserrat;
      line-height: 1.1;
    }
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

  img {
    max-width: 100%;
    max-height: 100%;

    object-fit: contain;
  }
}

ul,
ol {
  padding: 0 2rem;
} */
</style>