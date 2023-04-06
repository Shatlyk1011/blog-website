<template>
  <form @submit.prevent="createPost">
    <div id="base">
      <label id="coverSelect" for="image" v-if="!imagePreviewUrl">
        <span>Выберите обложку</span>
        <Input @input="handleImage" id="image" type="file" required />
      </label>

      <Input
        v-model="title"
        placeholder="Загаловок вашего поста..."
        id="title"
        required
      />
      <div class="toolbar">
        <Tools :editor="editor" />
      </div>
      <div class="imagePreview" v-if="imagePreviewUrl">
        <img :src="imagePreviewUrl" alt="" />
        <div class="options">
          <label
            id="changeLabel"
            for="image"
            class="options__btn options--change"
            @input="handleImage"
          >
            <span>Изменить</span>
            <Input @input="handleImage" id="image" type="file" />
          </label>
          <button
            class="options__btn options--delete"
            @click="clearImageValues"
          >
            Удалить
          </button>
        </div>
      </div>
      <div class="error" v-if="imageTypeError">{{ imageTypeError }}</div>
    </div>

    <button style="color: red" @click="showHtml">SHOW HTML</button>
    <!-- Editor -->
    <editor-content class="editor" :editor="editor" />

    <button style="color: red">create post</button>
  </form>
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
import Input from "@/components/Shared/Input.vue";

export default defineComponent({
  components: {
    EditorContent,
    Tools,
    Input,
  },

  setup() {
    const { addDocument } = useDocument();

    const title = ref("");
    const imageTypeError = ref<string>("");
    let imagePreviewUrl = ref("");
    let image = ref();

    // editor configuration
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

    const allowedImageTypes = ["image/png", "image/jpeg", "image/gif"];
    const handleImage = (e: Event) => {
      let selected = e.target as HTMLInputElement;
      if (
        selected.files?.length &&
        allowedImageTypes.includes(selected.files[0].type)
      ) {
        let img = selected.files[0];
        image.value = img;
        imagePreviewUrl.value = URL.createObjectURL(img);
      } else {
        imageTypeError.value = "Только png/jpen/gif форматы";
        setTimeout(() => {
          imageTypeError.value = "";
        }, 3000);
      }
    };

    const clearImageValues = () => {
      image.value = null;
      imagePreviewUrl.value = "";
    };

    const showHtml = () => {
      console.log(editor.value?.getHTML());
    };

    const createPost = () => {
      if (editor.value) {
        const html = editor.value.getHTML();
        addDocument("posts", { html, title: title.value });
      }
    };

    return {
      editor,
      createPost,
      title,
      handleImage,
      showHtml,
      image,
      imageTypeError,
      imagePreviewUrl,
      clearImageValues,
    };
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

form {
  #base {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    #coverSelect {
      position: relative;
      align-self: flex-start;
      padding: 1rem 1.6rem;
      border-radius: 4px;
      text-align: center;
      font-weight: 600;
      font-size: 1.4rem;
      cursor: pointer;
      color: $color-black;
      background-color: $color-main-2;

      transition: 0.4s cubic-bezier(0.83, 0, 0.17, 1);

      &:hover {
        background-color: $color-main-1;
      }

      span {
        z-index: 10;
        width: 100%;
      }
      #image {
        cursor: pointer;
        opacity: 0;
        z-index: -1;
        position: absolute;
        top: 50%;
        left: 90%;
        transform: translate(-50%, -50%);
      }
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

    .toolbar {
      margin-top: 1.6rem;
    }

    .imagePreview {
      max-width: 20%;
      max-height: 100%;
      display: flex;
      align-items: center;
      gap: 6.1rem;

      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }

      .options {
        color: $color-gray-1;
        display: flex;
        gap: 2rem;

        #changeLabel {
          z-index: 10;
          #image {
            opacity: 0;
            top: -100px;
            left: 0;
            position: absolute;
            z-index: -2;
          }
        }

        &__btn {
          transition: 0.2s cubic-bezier(0.83, 0, 0.17, 1);
          padding: 1rem;
          cursor: pointer;
          user-select: none;
        }

        &--change {
          border: 1px solid $color-gray-1;
        }

        &--delete {
          color: $color-main-1;
          border-radius: 2px;

          &:hover {
            background-color: $color-main-1;
            color: $color-white;
            box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.22);
          }
          &:active {
            transform: translateY(4px) scale(0.98);
          }
        }
      }
    }
  }
}
</style>