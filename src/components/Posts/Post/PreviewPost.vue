<template>
  <div class="preview-post" v-if="draft">
    <div class="cover-image">
      <img
        class="img"
        src="@/assets/images/image-template.jpg"
        alt=""
        title="Ваша обложка тут "
      />
    </div>
    <div class="container">
      <div class="menu">
        <font-awesome-icon class="icon" icon="fa-solid fa-ellipsis" />
      </div>
      <UserData :date="draft.createdAt" class="user-data" />

      <div class="title">{{ draft.title }}</div>
      <div class="wrap">
        <Tags :tags="draft.tags" hash="#" />
        <div class="time">
          <font-awesome-icon icon="fa-solid fa-book-open" />
          <span>{{ draft.timeToRead }} минут</span>
        </div>
      </div>

      <div class="html" v-html="draft.html"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

import SinglePost from "@/components/Posts/Post/SinglePost.vue";
import UserData from "@/components/Shared/UserData.vue";
import Tags from "@/components/Shared/Tags.vue";

import getDocument from "@/composables/firestore/getDocument";
import getUser from "@/composables/auth/getUser";

export default defineComponent({
  components: { SinglePost, UserData, Tags },
  setup() {
    const { document: draft, error, getDoc } = getDocument();
    const { user } = getUser();
    onMounted(async () => {
      await getDoc("drafts", user.value!.uid);
    });

    return { draft, error };
  },
});
</script>

<style lang="scss" scoped>
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

.preview-post {
  max-width: 85rem;
  margin: 0 auto;

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
    padding: 3.2rem 6.4rem;
    position: relative;
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
              color: $color-text;
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
      line-height: 0.9;
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
}
</style>
