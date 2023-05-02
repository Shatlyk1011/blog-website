<template>
  <div class="single-post" v-if="post">
    <div class="cover-image">
      <img class="img" :src="post.imageUrl" alt="" />
    </div>
    <div class="container">
      <div class="wrapper">
        <OnClickOutside class="menu" @trigger="closeMenu">
          <font-awesome-icon
            class="icon"
            icon="fa-solid fa-ellipsis"
            @click="toggleMenu"
          />
          <ul class="dropdown" v-if="menu">
            <router-link
              class="li"
              :to="{ name: 'UpdatePost', params: { id: postId } }"
              >Изменить</router-link
            >
            <li @click="toggleModal">Удалить</li>
          </ul>
        </OnClickOutside>
        <Modal :modalActive="modalActive" @close="toggleModal">
          <div class="modal-content">
            <div class="icon-wrap">
              <font-awesome-icon
                class="icon"
                color="red"
                size="xl"
                icon="fa-solid fa-circle-exclamation"
              />
            </div>
            <h3>Удалить?</h3>
            <p>
              Вы уверены что хотите удалить <span>"{{ post.title }}"</span>?
            </p>

            <div class="btns">
              <button class="btn btn--cancel" @click="toggleModal">
                Отмена
              </button>
              <button class="btn btn--delete" @click="handleDelete">
                Удалить
              </button>
            </div>
          </div>
        </Modal>

        <UserData :date="post.createdAt" class="user-data" />

        <div class="title">{{ post.title }}</div>
        <div class="wrap">
          <Tags :tags="post.tags" hash="#" />
          <div class="time">
            <font-awesome-icon icon="fa-solid fa-book-open" />
            <span> {{ post.timeToRead }} минут</span>
          </div>
        </div>

        <div class="html" v-html="post.html"></div>
      </div>
      <div class="comments-container">
        <comments :comments="post.comments" />
      </div>
    </div>
  </div>
  <div class="getError" v-if="getError">
    {{ getError }} <br />
    <router-link class="link" to="/all-posts"
      >Перейти ко всем постам</router-link
    >
  </div>
  <div v-if="!post && !getError"><Loading /></div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, PropType, ref } from "vue";
import { useRoute } from "vue-router";
import router from "@/router";

import { OnClickOutside } from "@vueuse/components";

import UserData from "@/components/Shared/UserData.vue";
import Tags from "@/components/Shared/Tags.vue";
import Modal from "@/components/Shared/Modal.vue";
import Comments from "@/components/Comments/Comments.vue";
import Loading from "@/components/Shared/Loading.vue";

import getAvgTimeToRead from "@/composables/getAvgTimeToRead";
import useDocument from "@/composables/firestore/useDocument";
import getDocument from "@/composables/firestore/getDocument";
import useStorage from "@/composables/storage/useStorage";

export default defineComponent({
  name: "SinglePost",

  components: { UserData, Tags, OnClickOutside, Modal, Comments, Loading },

  props: {
    postId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    let menu = ref(false);
    const modalActive = ref(false);
    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };

    const { deleteDocument, error } = useDocument();
    const { document: post, error: getError, getDoc } = getDocument();
    getDoc("posts", props.postId);

    const { deleteImage, error: deleteError } = useStorage();

    const route = useRoute();
    let postId = route.params.id as string;

    const toggleMenu = () => {
      menu.value = !menu.value;
    };
    const closeMenu = () => {
      menu.value = false;
    };

    const handleDelete = async () => {
      await deleteImage(post.value!.imageRef);
      await deleteDocument("posts", postId);
      if (!error.value) {
        router.push("/all-posts");
      }
    };

    onBeforeUnmount(() => {
      post.value = undefined;
    });

    return {
      menu,
      toggleMenu,
      closeMenu,
      postId,
      handleDelete,
      error,
      post,
      modalActive,
      toggleModal,
      getError,
    };
  },
});
</script>

<style lang="scss" >
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

.single-post {
  max-width: 85rem;

  margin: 2rem auto;
  background-color: $color-gray-2; // ?

  border-radius: 2px;
  overflow: hidden;
  .cover-image {
    width: 100%;
    // height: 42rem;
    // position: relative;
    .img {
      width: 100%;
      max-height: 32rem;
      object-fit: cover;
      position: relative;
      top: 0;
    }
  }
  .container {
    position: relative;

    .wrapper {
      padding: 3.2rem 6.4rem;

      .menu {
        position: absolute;
        right: 2rem;
        top: 2rem;
        text-align: right;

        .icon {
          padding: 2px 6px;
          border-radius: 4px;
          line-height: 1;
          cursor: pointer;

          transition: 0.2s cubic-bezier(0.83, 0, 0.17, 1);

          &:hover {
            background-color: $color-gray-3;
          }
        }

        .dropdown {
          padding: 6px 1rem;
          text-align: left;
          border-radius: 4px;
          background-color: $color-gray-1;
          list-style: none;
          color: $color-text;
          width: 8rem;
          .li,
          li {
            font-size: 1rem;
            padding: 2px 4px;
            border-radius: 3px;
            cursor: pointer;

            &:hover {
              color: $color-main-2;
            }
            &:last-child {
              margin-top: 6px;

              &:hover {
                color: $color-red;
              }
            }
          }
        }
      }

      .user-data {
        margin-bottom: 2rem;
      }

      .title {
        font-size: 4.8rem;
        line-height: 1.07;
        font-family: $ff-mserrat;
        font-weight: 700;
        color: white;
        margin-bottom: 2rem;
      }

      .wrap {
        display: flex;
        margin-left: auto;
        .time {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: $color-gray-3;
          gap: 1rem;
          padding: 6px 10px;
          width: max-content;

          span {
            font-size: 1.28rem;
            font-weight: 500;
            white-space: nowrap;
          }
        }
      }

      .html {
        margin-top: 2rem;
        width: 100%;

        h1,
        h2,
        h3,
        h4,
        h5 {
          font-family: $ff-mserrat;
          line-height: 1.1;
          font-weight: 700;
          color: $color-white;
          margin: 1.6rem 0 6px 0;
        }

        li {
          font-size: 2rem;
        }
      }
    }

    .comments-container {
      // margin-top: 4rem;
      padding: 4.8rem 6.4rem;
      border-top: 1px solid $color-gray-3;
    }
  }
}

.getError {
  margin-top: 2rem;
  font-size: 2.4rem;
  padding: 2rem;
  border: 1px solid $color-red;
  border-radius: 4px;
  line-height: 1.6;

  .link {
    border-bottom: 1px solid $color-gray-2;
    color: $color-gray-2;
    cursor: pointer;
  }
}

.modal-content {
  padding: 2.4rem 3.2rem;
  position: relative;
  background-color: #fff;
  border-radius: 4px;
  color: $color-gray-1;

  .icon-wrap {
    position: absolute;
    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 3.6rem;
      height: 3.6rem;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 100%;
      background-color: rgba($color-red, 0.15);
      z-index: 10000;
    }
    &::after {
      width: 4.8rem;
      height: 4.8rem;
      background-color: rgba($color-red, 0.1);
    }
  }

  h3 {
    margin-top: 4.8rem;
  }

  p {
    margin-top: 1.6rem;
    line-height: 1.4;

    span {
      font-weight: 500;
    }
  }

  .btns {
    display: flex;
    gap: 2.4rem;
    margin-top: 2rem;
    justify-content: flex-end;

    .btn {
      padding: 0.8rem 1.2rem;
      border: 1px solid $color-gray-2;
      border-radius: 2px;

      transition: all 0.4s cubic-bezier(0.83, 0, 0.17, 1);

      &--cancel {
      }

      &--delete {
        background-color: $color-red;
        color: $color-text;

        transition: all 0.4s cubic-bezier(0.83, 0, 0.17, 1);

        &:hover {
          background-color: rgba($color-red, 0.9);
        }
      }
    }
  }
}
</style>