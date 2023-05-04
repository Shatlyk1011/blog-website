<template>
  <div class="comment" v-if="comment">
    <div class="container">
      <div class="info">
        <img src="@/assets/images/hero.jpg" alt="" />
        <div class="author">{{ comment.author }}</div>
        <!-- <div class="time">{{ comment.createdAt }}</div> -->
        <div class="time">14.02.1999</div>

        <OnClickOutside class="menu" @trigger="closeMenu">
          <font-awesome-icon
            class="icon"
            icon="fa-solid fa-ellipsis"
            size="sm"
            @click="toggleMenu"
          />
          <ul class="dropdown" v-if="dropdown">
            <li @click="(change = !change), (dropdown = false)">Изменить</li>
            <li @click="emitDeleteComment">Удалить</li>
          </ul>
        </OnClickOutside>
      </div>
      <p v-if="change">
        {{ comment.text }}
      </p>
      <div class="change-comment">
        <textarea v-if="!change" v-model="comment.text" />
        <button @click="emitUpdateComment">Изменить</button>
      </div>
    </div>
    <div class="actions">
      <div class="likes">
        <font-awesome-icon icon="fa-solid fa-heart" size="sm" />
        <span>{{ comment.likes }} лайков</span>
      </div>
      <div class="reply">
        <font-awesome-icon icon="fa-solid fa-reply" size="sm" />
        <span>Ответить</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, PropType, ref } from "vue";
import { Comment as IComment } from "@/assets/Types";

import { OnClickOutside } from "@vueuse/components";

const emit = defineEmits(["delete:comment", "update:comment"]);

const props = defineProps({
  comment: {
    type: Object as PropType<IComment>,
    required: true,
  },
  postId: {
    type: String,
    required: true,
  },
});

const dropdown = ref(false);
const change = ref(false);

const toggleMenu = () => (dropdown.value = !dropdown.value);
const closeMenu = () => (dropdown.value = false);

const emitDeleteComment = () => {
  closeMenu();
  if (props.comment) {
    let id = props.comment.id;
    emit("delete:comment", id);
  }
};

const emitUpdateComment = () => {
  if (props.comment) {
    let text = props.comment.text;
    let id = props.comment.id;
    emit("update:comment", id, text);
  }
};
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

      img {
        border-radius: 100%;
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
      button {
        padding: 6px 10px;
        font-size: 1.28rem;
        font-weight: 500;
        color: $color-text;
        border-radius: 2px;
        background-color: $color-main-2;
        align-self: flex-start;

        transition: all 0.2s cubic-bezier(0.83, 0, 0.17, 1);

        &:hover {
          background-color: $color-main-1;
          color: rgba($color-text, 0.8);
        }
      }
    }
  }
  .actions {
    margin-top: 6px;
    display: flex;
    gap: 1rem;

    .likes,
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
  }
}
</style>