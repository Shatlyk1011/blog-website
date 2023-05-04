<template>
  <div class="form-submit" v-if="editor">
    <form>
      <div class="head">
        <!-- Cover Image Preview -->
        <div class="wrap" v-if="!imagePreviewUrl">
          <label tabindex="0" id="coverSelect" for="image">
            <span>Выберите обложку</span>
            <Input
              @input="handleImage"
              id="image"
              type="file"
              required
              tabindex="-1"
            />
          </label>
          <div
            type="button"
            @click="setFormerImage"
            v-if="postToUpdate"
            class="old-cover"
          >
            Вставить прежнее фото
          </div>
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
          @keydown.enter="addTag($event)"
          id="Itag"
          placeholder="Добавьте теги (max 3)"
        />

        <ul class="tags" v-if="tags.length">
          <li class="tag" v-for="tag in tags" :key="tag">
            <span>#{{ tag }}</span>
            <font-awesome-icon
              @click="removeTag(tag)"
              title="Удалить тег"
              class="icon"
              icon="fa-solid fa-x"
              size="xs"
            />
          </li>
        </ul>
      </div>
      <!-- Editor -->

      <div class="toolbar">
        <Tools :editor="editor" tabindex="0" />
        <editor-content class="editor" :editor="editor" />
      </div>
    </form>
    <button @click="handleSubmit">xaoaxoaxo</button>
  </div>
</template>

<script lang="ts" setup>
import {
  ref,
  defineComponent,
  PropType,
  watch,
  onActivated,
  onDeactivated,
  computed,
} from "vue";
import { useRoute, useRouter } from "vue-router";
import { EditorContent } from "@tiptap/vue-3";

import { Timestamp } from "firebase/firestore";

import { useUserStore } from "@/stores/user";

import Tools from "@/components/TipTap/TipTapTools/Tools.vue";
import Input from "@/components/Shared/Input.vue";

import useTipTap from "@/composables/useTipTap";
import useDocument from "@/composables/firestore/useDocument";
import getInputImage from "@/composables/getInputImage";
import useStorage from "@/composables/storage/useStorage";
import getAvgTimeToRead from "@/composables/getAvgTimeToRead";

import { Post, PostDraft } from "@/assets/Types";

const emit = defineEmits(["update:draft", "update:updateDraft"]);

const props = defineProps({
  setDraft: {
    required: false,
    type: Boolean,
    default: false,
  },
  postToUpdate: {
    required: false,
    type: Object as PropType<Post> | null | undefined,
  },
  postToSetDraft: {
    required: false,
    type: Object as PropType<PostDraft> | null,
  },
  btnText: {
    required: true,
    type: String,
  },
  id: {
    type: String,
  },
});

const isPending = ref(false);
const postUpdated = ref(false);

const userStore = useUserStore();
const user = computed(() => userStore.user);

const route = useRoute();
const router = useRouter();

const {
  addDocument,
  error: docError,
  deleteDocument,
  setDocument,
  updateDocument,
} = useDocument();
const {
  handleImage,
  image: coverImage,
  imageTypeError,
  imagePreviewUrl,
} = getInputImage();
const { error, imageRef, imageUrl, uploadImage, deleteImage } = useStorage();

const { editor, title, tags, addTag, removeTag } = useTipTap();

const clearImageValues = () => {
  coverImage.value = null;
  imagePreviewUrl.value = "";
};

const getInnerHTML = () => {
  const proseMirror = document.querySelector(".ProseMirror") as HTMLElement;
  let html = proseMirror.innerHTML;
  return html;
};

const setFormerImage = () => {
  if (props.postToUpdate) {
    let post = props.postToUpdate;
    imagePreviewUrl.value = post.imageUrl;
  }
};

const handleSubmit = async () => {
  const html = await getInnerHTML();

  //update post
  if (props.postToUpdate) {
    console.log("UPDATING YOUR POST");
    let postId = route.params.id as string;
    let postToUpdate = props.postToUpdate;
    isPending.value = true;
    if (coverImage.value) {
      await deleteImage(props.postToUpdate.imageRef);
      await uploadImage("covers", coverImage.value);
    }
    const { avgTimeToRead } = getAvgTimeToRead(html);
    let updatePost = {
      html,
      title: title.value,
      imageUrl: imageUrl.value ? imageUrl.value : postToUpdate.imageUrl,
      imageRef: imageRef.value ? imageRef.value : postToUpdate.imageRef,
      comments: [],
      tags: tags.value,
      timeToRead: avgTimeToRead.value,
      userInfo: {
        author: user.value!.displayName!,
        userUid: user.value!.uid,
      },
      editedAt: Timestamp.fromDate(new Date()),
    };
    await updateDocument("posts", postId, updatePost);
    //delete updateDraft
    await deleteDocument("updateDraft", user.value!.uid);
    isPending.value = false;
    if (!error.value) {
      editor.value?.destroy();
      coverImage.value = undefined;
      imagePreviewUrl.value = "";
      tags.value = [];

      router.push("/all-posts");
      isPending.value = false;
    }
  }

  //create post
  if (!props.postToUpdate && route.path === "/create-post") {
    isPending.value = true;
    postUpdated.value = true;
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
        author: user.value!.displayName!,
        userUid: user.value!.uid,
      },
      createdAt: Timestamp.fromDate(new Date()),
    };
    await addDocument("posts", newPost);
    //delete createDraft
    await deleteDocument("createDraft", user.value!.uid);

    isPending.value = false;
    if (!error.value) {
      editor.value?.destroy();
      coverImage.value = undefined;
      imagePreviewUrl.value = "";
      tags.value = [];

      router.push("/all-posts");
      isPending.value = false;
    }
  }
};

watch(props, () => {
  let count = 0;
  // set drafts once when data is available
  if (props.postToSetDraft && count < 1) {
    count++;
    console.log("postToSetDraft available");
    let post = props.postToSetDraft;
    title.value = post.title;
    tags.value = post.tags;
    editor.value?.commands.setContent(post.html);
  }
  // set post to update once when data is available
  if (props.postToUpdate && count < 1) {
    count++;
    console.log("postToUpdate available");
    let post = props.postToUpdate;
    title.value = post.title;
    tags.value = post.tags;
    editor.value?.commands.setContent(post.html);
    imagePreviewUrl.value = post.imageUrl;
  }
});

onActivated(() => {
  console.log("onActivated");
  if (props.postToUpdate && !imagePreviewUrl.value) {
    imagePreviewUrl.value = props.postToUpdate.imageUrl;
  }
});
onDeactivated(async () => {
  console.log("ondeactivate run");
  let html = editor.value!.getHTML();
  let { avgTimeToRead } = getAvgTimeToRead(html);

  //save as draft in create-post
  if (props.setDraft && !postUpdated.value) {
    emit("update:draft");
    console.log("sending draft to fs");

    await setDocument("createDraft", user.value!.uid, {
      html,
      title: title.value,
      tags: tags.value,
      timeToRead: avgTimeToRead.value,
      userInfo: {
        author: user.value!.displayName!,
        userUid: user.value!.uid,
      },
    });
  }
  imagePreviewUrl.value = "";
  //save as draft in update-post
  if (props.postToUpdate) {
    emit("update:updateDraft");
    console.log("sending edit draft to fs");

    await setDocument("updateDraft", user.value!.uid, {
      html,
      title: title.value,
      imageUrl: props.postToUpdate.imageUrl,
      imageRef: props.postToUpdate.imageRef,
      comments: [],
      tags: tags.value,
      timeToRead: avgTimeToRead.value,
      userInfo: {
        author: user.value!.displayName!,
        userUid: user.value!.uid,
      },
      createdAt: Timestamp.fromDate(new Date()),
    });
  }
  imagePreviewUrl.value = "";
});
</script>

<style lang="scss">
@import "@/globals";
.form-submit {
  margin: 0 auto;
  background-color: $color-gray-2;

  & *:focus {
    box-shadow: 0 0 0 0.3rem rgba($color-text, 0.4);
    outline: none;
  }
  form {
    color: $color-text;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;

    .head {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 2rem 2rem 0;

      .wrap {
        display: flex;
        align-items: center;
        gap: 1rem;

        label {
          &:focus {
            box-shadow: 0 0 0 0.3rem rgba($color-black, 0.6);
          }
        }

        .old-cover {
          background-color: $color-main-2;
          color: $color-text;
          padding: 1rem 1.6rem;
          border-radius: 4px;
          cursor: pointer;
        }
      }

      #coverSelect {
        position: relative;
        align-self: flex-start;
        padding: 1rem 1.6rem;
        border-radius: 4px;
        // text-align: center;
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
    .toolbar {
    }
    .E-paragraph {
      font-size: 1.6rem;
      line-height: 1.4;
    }
  }
}
</style>