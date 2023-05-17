<template>
  <div class="comments">
    <div class="submit" v-if="user">
      <div class="input-area">
        <div class="img" alt="">{{ user.displayName?.slice(0, 1).toUpperCase() }}</div>
        <textarea
          @keydown.enter.prevent="addComment"
          v-model.trim="comment"
          placeholder="Добавить комментарий..."
          maxlength="200"
          :disabled="isPending"
        />
     </div>
      <button class="btn" @click="addComment" :disabled="isPending">
        Опубликовать
      </button>
    </div>
    <!-- if no user -->
    <div class="no-user" v-else>
      <p>Пожалуйста войдите что бы оставлять коментарии</p>
      <router-link class="link" to="/signin">Войти</router-link>
    </div>
    <!--  -->
      <transition-group tag="div" name="fade" class="wrap">
        <Comment
          :comment="comment"
          :comments = "comments"
          :postId="postId"
          v-for="(comment, index) in comments"
          :key="index"
        />
      </transition-group>
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

defineProps({
  comments: {
    required: false,
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
    authorId: user.value!.uid,
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

</script>

<style lang='scss' scoped>
@import "@/globals";
.comments {
  .submit {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .img {
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 4rem;
      height: 4rem;
      object-fit: cover;
      background-color: $color-main-2;
    }

    .input-area {
      display: flex;
      gap: 1rem;
    }

    textarea {
      padding: 1.5rem;
      box-sizing: border-box;
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
      grid-column: 2 / -1;
      padding: 1rem 1.6rem;
      background-color: $color-main-1;
      justify-self: start;
      font-size: 1.6rem;
      border-radius: 4px;
      align-self: flex-end;
      

      &[disabled] {
        background-color: $color-gray-3;
      }
    }
  }
  .no-user {
    border: 1px solid $color-gray-3;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    p {
      font-size: 2rem;
      font-weight: 500; 
    }
    .link {
      padding: 1rem 1.6rem;
      background-color: $color-main-2;
      align-self: start;
    }
  }
  .wrap {
    position: relative;
    padding: 0;
  }
}
.fade-enter-active {
  transition: all 0.3s cubic-bezier(0.83, 0, 0.17, 1);;
}
.fade-enter-from{
  opacity: 0;
  transform: scaleY(0.01) translateX(100px);
}
</style>