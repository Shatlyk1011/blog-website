<template>
  <!-- <button @click="html">SHOW HTML</button> -->
  <form @submit.prevent="createPost">
    <div id="base">
      <!-- Cover Image -->
      <label id="coverSelect" for="image" v-if="!imagePreviewUrl">
        <span>Выберите обложку</span>
        <Input @input="handleImage" id="image" type="file" required />
      </label>
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

      <!-- Title of the Post -->
      <Input
        v-model="title"
        id="Ititle"
        placeholder="Загаловок вашего поста..."
        autocomplete="off"
        required
      />

      <!-- Tags -->
      <Input
        @keydown.enter.prevent="addTag($event)"
        id="Itag"
        placeholder="Добавьте теги (max 3)"
      />
      <div class="tags" v-if="tags.length">
        <ul class="tag" v-for="t in tags" :key="t">
          <li>#{{ t }}</li>
          <font-awesome-icon
            @click="removeTag(t)"
            title="Удалить тег"
            class="icon"
            icon="fa-solid fa-x"
            size="xs"
          />
        </ul>
      </div>

      <div class="toolbar">
        <Tools :editor="editor" />
      </div>
    </div>

    <!-- Editor -->
    <editor-content class="editor" :editor="editor" />

    <button class="btn submit" v-if="!isPending">Опубликовать</button>
    <button class="btn submit isPending" v-if="isPending" disabled>
      Опубликовать
    </button>
  </form>
</template>

<script lang="ts">
import { ref, defineComponent, onBeforeUnmount, onUpdated } from "vue";
import router from "@/router";
import { EditorContent } from "@tiptap/vue-3";

import { Timestamp } from "firebase/firestore";

import Tools from "@/components/TipTap/TipTapTools/Tools.vue";
import Input from "@/components/Shared/Input.vue";

import getUser from "@/composables/auth/getUser";
import useTiptapEditor from "@/composables/useTiptapEditor";
import useDocument from "@/composables/firestore/useDocument";
import getInputImage from "@/composables/getInputImage";
import useStorage from "@/composables/storage/useStorage";
import useTags from "@/composables/useTags";
import getAvgTimeToRead from "@/composables/getAvgTimeToRead";
import getDocument from "@/composables/firestore/getDocument";

export default defineComponent({
  name: "TipTapMain",

  components: {
    EditorContent,
    Tools,
    Input,
  },

  setup() {
    const isPending = ref(false);

    const { user } = getUser();
    const { addDocument, updateDocument } = useDocument();
    const {
      handleImage,
      image: coverImage,
      imageTypeError,
      imagePreviewUrl,
    } = getInputImage();
    const { error, imageRef, imageUrl, uploadImage } = useStorage();
    const { addTag, removeTag } = useTags();

    const { editor, title, tags } = useTiptapEditor();

    const clearImageValues = () => {
      coverImage.value = null;
      imagePreviewUrl.value = "";
    };

    const getInnerHTML = () => {
      const proseMirror = document.querySelector(".ProseMirror") as HTMLElement;
      let html = proseMirror.innerHTML;
      return html;
    };

    const createPost = async () => {
      const html = await getInnerHTML();

      if (editor.value && user.value) {
        isPending.value = true;
        await uploadImage("covers", coverImage.value);
        const { avgTimeToRead } = getAvgTimeToRead(html);

        let newPost = {
          html,
          title: title.value,
          imageUrl: imageUrl.value,
          imageRef: imageRef.value,
          comments: [],
          tags: tags.value,
          timeToRead: avgTimeToRead.value,
          userInfo: {
            author: user.value.displayName!,
            userUid: user.value.uid,
          },
          createdAt: Timestamp.fromDate(new Date()),
        };
        await addDocument("posts", newPost);
        if (!error.value) {
          router.push("/all-posts");
          isPending.value = false;
        }
      }
    };

    onUpdated(async () => {
      if (user.value && (title.value.length || tags.value.length)) {
        const html = editor.value!.getHTML();
        await updateDocument("drafts", user.value.uid, {
          html,
          title: title.value,
          tags: tags.value,
          userInfo: {
            author: user.value.displayName!,
            userUid: user.value.uid,
          },
          createdAt: Timestamp.fromDate(new Date()),
        });
      }
    });

    onBeforeUnmount(() => {
      editor.value?.destroy();
      tags.value = [];
      imagePreviewUrl.value = "";
    });

    return {
      editor,
      createPost,
      title,
      tags,
      isPending,
      handleImage,
      coverImage,
      imageTypeError,
      imagePreviewUrl,
      clearImageValues,
      addTag,
      removeTag,
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
  color: $color-text;
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
      background-color: $color-gray-3;

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

    #Ititle,
    #Itag {
      padding: 1rem;
      font-size: 2rem;
      background-color: transparent;
      border: 1px solid $color-gray-1;
      color: $color-text;

      &:focus {
        border: 1px solid $color-white;
        outline: none;
      }

      &::placeholder {
        font-family: $ff-mserrat;
        color: rgba($color-text, 0.6);
        font-weight: 500;
      }
    }

    #Itag {
      padding: 6px;
      background-color: transparent;
      font-size: 1.28rem;
    }

    .tags {
      display: flex;
      gap: 1rem;

      .tag {
        list-style: none;
        padding: 3px 6px;
        background-color: $color-gray-3;
        border-radius: 3px;
        display: flex;
        gap: 8px;
        align-items: center;
        justify-content: center;

        .icon {
          color: $color-gray-1;
          cursor: pointer;

          &:hover {
            color: $color-main-2;
          }
        }
      }
    }

    .toolbar {
      margin-bottom: 1.6rem;
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
        display: flex;
        gap: 2rem;

        #changeLabel {
          z-index: 10;
          border: 1px solid -gray-3;
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
          border: 1px solid -gray-1;
        }

        &--delete {
          color: $color-main-1;
          border-radius: 2px;

          &:hover {
            background-color: $color-main-1;
            color: $color-white;
            box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
          }
          &:active {
            transform: translateY(4px) scale(0.98);
          }
        }
      }
    }
  }

  .submit {
    padding: 1rem 1.6rem;
    color: $color-text;
    background-color: $color-main-1;
    margin-top: 1.6rem;
    font-family: $ff-mserrat;
    font-weight: 500;

    transition: 0.2s cubic-bezier(0.83, 0, 0.17, 1);

    &:hover {
      background-color: rgba($color-main-1, 0.8);
    }

    &:active {
      transform: translateY(4px) scale(0.98);
    }
  }

  .isPending {
    background-color: rgba($color-gray-3, 0.5);
    color: rgba($color-text, 0.5);

    &:hover {
      background-color: rgba($color-gray-3, 0.4);
    }
  }
}
</style>