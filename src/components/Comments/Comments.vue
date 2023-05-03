<template>
  <div class="grid">
    <img src="@/assets/images/image-template.jpg" alt="" />
    <textarea
      @keyup.prevent.enter="handleComment"
      v-model.trim="comment"
      placeholder="Добавить комментарий..."
      maxlength="200"
    ></textarea>
    <button class="btn" v-if="!isPending" @click="handleComment">
      Опубликовать
    </button>
    <button class="btn" v-if="isPending" disabled>Опубликовать</button>
    <div class="comments">
      <comment
        :comment="comment"
        v-for="(comment, index) in comments"
        :key="index"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";
import { useRoute } from "vue-router";

import { arrayUnion } from "firebase/firestore";
import { Comment as IComment } from "@/assets/Types";
import { Timestamp } from "firebase/firestore";

import Comment from "@/components/Comments/Comment.vue";

import useDocument from "@/composables/firestore/useDocument";
import getUser from "@/composables/auth/getUser";

export default defineComponent({
  name: "Comments",
  props: {
    comments: {
      type: [] as PropType<IComment>,
    },
  },

  components: { Comment },
  setup() {
    const comment = ref("");
    const route = useRoute();
    let postId = route.params.id as string;
    let isPending = ref(false);
    const { user } = getUser();

    const { updateDocument } = useDocument();

    const handleComment = async () => {
      isPending.value = true;
      let newComment: IComment = {
        author: user.value!.displayName!,
        comment: comment.value.trim(),
        createdAt: Timestamp.fromDate(new Date()),
        likes: 0,
        reply: [],
      };
      await updateDocument("posts", postId, {
        comments: arrayUnion(newComment),
      });
      isPending.value = false;
      comment.value = "";
    };
    return { comment, handleComment, isPending };
  },
});
</script>

<style lang='scss' scoped>
$color-black: #000;
$color-white: #fff;
$color-text: #e9ecef;

$color-main-1: #d84f2a;
$color-main-2: #f9744b;

$color-gray-1: #212529;
$color-gray-2: #495057;
$color-gray-3: #868e96;

$color-red: #d92d20;
$ff-roboto: "Roboto", sans-serif;
$ff-mserrat: "Montserrat", sans-serif;
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

    /*     &:focus {
      min-height: 6.4rem;
    } */
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