<template>
  <div class="grid">
    <img src="@/assets/images/image-template.jpg" alt="" />
    <textarea
      v-if="!isPending"
      @keydown.enter.prevent="addComment"
      v-model.trim="comment"
      placeholder="Добавить комментарий..."
      maxlength="200"
    />
    <textarea v-if="isPending" placeholder="Отправляем..." disabled />
    <button class="btn" v-if="!isPending" @click="addComment">
      Опубликовать
    </button>
    <button class="btn" v-if="isPending" disabled>Опубликовать</button>
    <div class="comments">
      <Comment
        :comment="comment"
        :comments = "comments"
        :postId="postId"
        v-for="(comment, index) in comments"
        :key="index"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType, ref, computed } from "vue";
import { useRoute } from "vue-router";
import { nanoid } from "nanoid";

import { useUserStore } from "@/stores/user";
import Comment from "@/components/Comments/Comment.vue";

import { arrayUnion } from "firebase/firestore";
import { Comment as IComment } from "@/assets/Types";
import { Timestamp } from "firebase/firestore";

import useDocument from "@/composables/firestore/useDocument";

const props = defineProps({
  comments: {
    type: Array as PropType<IComment[]>,
  },
});

const route = useRoute();
let postId = route.params.id as string;

const comment = ref("");
let isPending = ref(false);

const userStore = useUserStore();
const user = computed(() => userStore.user);

const { updateDocument } = useDocument();

const addComment = async () => {
  let id = nanoid(5);
  isPending.value = true;
  let newComment: IComment = {
    author: user.value!.displayName!,
    text: comment.value.trim(),
    createdAt: Timestamp.fromDate(new Date()),
    likedBy: [] ,
    reply: [],
    id,
  };
  if (comment.value !== "") {
    await updateDocument("posts", postId, {
      comments: arrayUnion(newComment),
    });
    isPending.value = false;
  }
  isPending.value = false;
  comment.value = "";
};

//payload id, payload text

</script>

<style lang='scss' scoped>
@import "@/globals";
.grid {
  display: grid;
  grid-template-columns: 4rem 1fr;
  gap: 1rem;

  img {
    border-radius: 100%;
    width: 4rem;
    height: 4rem;
    object-fit: cover;
  }

  textarea {
    padding: 1.5rem;
    flex: 1;
    border-radius: 4px;
    min-height: 3.2rem;
    background-color: transparent;
    color: $color-white;
    resize: none;
    border: none;
    outline: 1px solid $color-gray-3;
    font-size: 1.6rem;

    transition: all 0.2s cubic-bezier(0.83, 0, 0.17, 1);

    &::placeholder {
      color: $color-white;
      font-family: inherit;
      color: rgba($color-text, 0.6);
    }
  }

  .btn {
    grid-column: 2 /-1;
    padding: 1rem 1.6rem;
    background-color: $color-main-1;
    justify-self: start;
    font-size: 1.6rem;
    border-radius: 4px;

    &[disabled] {
      background-color: $color-gray-3;
    }
  }
  .comments {
    grid-column: 1/-1;
  }
}
</style>