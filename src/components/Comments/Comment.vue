<template>
  <div class="comment" v-if="comment">
    <div class="container">
      <div class="info">
        <div class="img" alt="">{{ comment.author?.slice(0, 1).toUpperCase() }}</div>
        <div class="author">{{ comment.author }}</div>
        <div class="time">{{createdAt}}</div>

        <OnClickOutside class="menu" @trigger="closeMenu" v-if="owner">
          <font-awesome-icon
            class="icon"
            icon="fa-solid fa-ellipsis"
            size="sm"
            @click="dropdown = !dropdown"
          />
          <ul class="dropdown" v-if="dropdown">
            <li @click="handleChange(comment.text)">Изменить</li>
            <li @click="deleteComment(comment.id)">Удалить</li>
          </ul>
        </OnClickOutside>
      </div>
      <p v-if="!change">
        {{ comment.text }}
      </p>
      <div class="change-comment" v-if="change">
        <textarea  v-model="updatedComment" />
        <div class="btns">
          <button class="btn btn--update" @click="updateComment(comment.id)" v-if="!isPending">Сохранить</button>
          <button class="btn btn--update" v-if="isPending" disabled>Сохранить</button>
          <button class="btn btn--cancel" @click="cancelUpdate">Отмена</button>
        </div>
      </div>
    </div>
    <div class="actions">
      <button class="like" @click="reactComment(comment.id)" v-if="!delay">
        <font-awesome-icon :class="ifLiked ? 'liked' : ''" icon="fa-solid fa-heart" size="sm" />
        <span>{{ comment.likedBy?.length | 0 }} лайков</span>
      </button>
      <button  class="like delay" @click="reactComment(comment.id)" v-if="delay" disabled>
        <font-awesome-icon  icon="fa-solid fa-heart" size="sm" />
        <span>{{ comment.likedBy?.length | 0 }} лайков</span>
      </button>
      <div class="reply">
        <font-awesome-icon icon="fa-solid fa-reply" size="sm" />
        <span>Ответить</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType, ref, computed } from "vue";
import { Comment as IComment } from "@/assets/Types";
import { nanoid } from "nanoid";
import { Timestamp } from "firebase/firestore";

import { useUserStore } from "@/stores/user";

import { OnClickOutside } from "@vueuse/components";

import useDocument from "@/composables/firestore/useDocument";

import { formatRelative } from "date-fns";
import { ru } from "date-fns/locale";

const props = defineProps({
  comment: {
    type: Object as PropType<IComment>,
    required: true
  },
  comments: {
    type: Array as PropType <IComment[]>,
    required: false
  },
  postId: {
    type: String,
    required: true,
  },
});
const userStore = useUserStore();
const user = computed(() => userStore.user);
const { updateDocument } = useDocument();

const dropdown = ref(false);
const change = ref(false);
const delay = ref(false);
const updatedComment = ref('')
const isPending = ref(false)

const closeMenu = () => (dropdown.value = false);

const handleChange = (text: string) => {
  if(change.value === false) {
    change.value = true;
    dropdown.value = false;
    updatedComment.value = text
  }
}

let createdAt = computed(() => {
  let comment = props.comment
  let date = new Date()
  if(comment) {
    let newFormat = Number(comment.createdAt.toDate())
    return formatRelative(newFormat, date, {locale: ru})
  }
})

let comments = computed(() => {
  if(props.comments) {
    return [...props.comments]
  }
})

const deleteComment = async (id: string) => {
  closeMenu();
  change.value = false;
  if(comments.value) {
    let filtered = comments.value.filter((comment: IComment) => comment.id !== id);
    await updateDocument("posts", props.postId, {
      comments: filtered
    });
  }
};

const updateComment = async (id: string) => {
  isPending.value = true
  let newId = nanoid(5);
  if (comments.value) {
    let commentIndex = comments.value.findIndex((comment: IComment) => comment.id === id)
    comments.value[commentIndex].text = updatedComment.value
    comments.value[commentIndex].id = newId
    await updateDocument('posts', props.postId, {
      comments: comments.value
    })
    isPending.value = false
    change.value = false
  }
};

const cancelUpdate = () => {
  change.value = false;
}

const ifLiked = computed(() => {
  if(user.value) {
    return props.comment.likedBy.find((n) => n === user.value?.displayName )
  }
})

const reactComment = async (id: string) => {
  delay.value = true
  const comments = props.comments
  const userName = user.value!.displayName
  
  if (comments && userName) {
    const commentIndex = comments.findIndex((comment: IComment) => comment.id === id)
    const comment = comments[commentIndex]
    let userIndex = comment.likedBy.indexOf(userName)
    if(userIndex === -1) {
      comment.likedBy.push(userName)
    } else {
      comment.likedBy.splice(userIndex, 1)
    }
    await updateDocument('posts', props.postId, {
      comments
    })
  }
  setTimeout(() => {
    delay.value = false
  }, 500);
}

const owner = computed(() => {
  return user.value && user.value.uid === props.comment.authorId
})

</script>

<style lang="scss" scoped>
@import "@/globals";
.comment {
  margin-top: 3.2rem;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
  .container {
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 1.6rem;
    padding: 1rem 1.6rem;
    border-radius: 4px;
    border: 1px solid rgba($color-gray-3, 0.4);

    .info {
      display: flex;
      gap: 1rem;
      align-items: center;

      .img {
        background-color: $color-main-2;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3rem;
        height: 3rem;
        object-fit: cover;
      }
      .author {
        font-weight: 500;
      }
      .time {
        position: relative;
        margin-left: 4px;
        font-size: 1.28rem;
        font-weight: 500;
        color: $color-gray-3;
        line-height: 1.1;
        display: flex;
        align-items: center;
        justify-content: center;

        &::before {
          content: "\25CF";
          align-self: center;
          position: absolute;
          top: 50%;
          left: -8px;
          transform: translateY(-50%);
          line-height: 1;
          font-size: 8px;
        }
      }
      .menu {
        margin-left: auto;

        .icon {
          padding: 3px 4px;
          align-self: flex-start;
          border-radius: 4px;
          line-height: 1;
          cursor: pointer;

          transition: all 0.2s cubic-bezier(0.83, 0, 0.17, 1);

          &:hover {
            background-color: $color-gray-3;
          }
        }

        .dropdown {
          list-style: none;
          position: absolute;
          top: 3.5rem;
          right: 1.5rem;
          background-color: $color-gray-1;
          font-size: 1rem;
          padding: 1rem;
          border-radius: 4px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          width: 8rem;

          li {
            cursor: pointer;

            &:hover {
              color: $color-main-1;
            }

            &:last-child:hover {
              color: $color-red;
            }
          }
        }
      }
    }
    p {
      line-height: 1.4;
    }
    .change-comment {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      textarea {
        box-sizing: border-box;
        width: 100%;
        padding: 1rem;
        flex: 1;
        border-radius: 4px;
        min-height: 3.2rem;
        max-height: 6.4rem;
        background-color: transparent;
        color: $color-white;
        resize: none;
        border: none;
        outline: 1px solid rgba($color-gray-3, 0.6);
        font-size: 1.6rem;
      }

      .btns {
        display: flex;
        gap: 1rem;

        .btn {
          padding: 6px 10px;
          font-size: 1.28rem;
          font-weight: 500;
          color: $color-text;
          border-radius: 2px;
          transition: all 0.2s cubic-bezier(0.83, 0, 0.17, 1);

          &--update {
            background-color: $color-main-2;

            &:hover {
              background-color: $color-main-1;
              color: rgba($color-text, 0.8);
            }

            &[disabled] {
              background-color: rgba($color-main-2, 0.6);
              color: rgba($color-text, 0.4);
            }
          }

          &--cancel {
            background-color: $color-gray-3;
              &:hover {
              background-color: rgba($color-gray-3, 0.8);
            }
          }
        }

        .btn-cancel {
          background-color: $color-gray-3;
        }
      }
    }
  }
  .actions {
    margin-top: 6px;
    display: flex;
    gap: 1rem;

    .like,
    .reply {
      display: flex;
      align-items: center;
      gap: 6px;
      transition: all 0.2s cubic-bezier(0.83, 0, 0.17, 1);
      padding: 6px 10px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1.28rem;
      line-height: -0.3px;
      font-weight: 500;
      font-family: $ff-mserrat;

      &:hover {
        background-color: $color-gray-3;
      }
    }

    .like.delay {
      background-color: $color-gray-3;
      cursor: not-allowed;
      color: rgba($color-text, 0.7)
    }
    .like {
      .liked {
        color: $color-red;
        font-size: 1.6rem;
      }
      }
    
  }
}
</style>