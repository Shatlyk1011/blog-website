<template>
  <div class="single-post">
    <div class="cover-image">
      <img class="img" :src="post.imageUrl" alt="" />
    </div>
    <div class="container">
      <UserData :date="post.createdAt" />

      <div class="title">{{ post.title }}</div>
      <ul class="tags">
        <li class="tag" v-for="t in post.tags" :key="t">
          # <span>{{ t }}</span>
        </li>
      </ul>

      <div class="html" v-html="post.html"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import Post from "@/assets/types/Post";

import UserData from "@/components/Shared/userData.vue";

export default defineComponent({
  name: "SinglePost",

  components: { UserData },

  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
  },
  setup(props) {
    console.log("DATEEE", props.post.createdAt.toDate());
    return {};
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

$ff-roboto: "Roboto", sans-serif;
$ff-mserrat: "Montserrat", sans-serif;

.single-post {
  max-width: 85rem;

  margin: 2rem auto;
  background-color: $color-gray-2;
  border-radius: 2px;
  overflow: hidden;
  .cover-image {
    width: 100%;
    // height: 42rem;
    position: relative;
    .img {
      width: 100%;
      max-height: 32rem;
      object-fit: cover;
    }
  }
  .container {
    background-color: $color-gray-2;
    padding: 3.2rem 6.4rem;

    .title {
      font-size: 4.8rem;
      font-family: $ff-mserrat;
      font-weight: 500;
      color: white;
      margin-top: 2rem;
    }
    .tags {
      display: flex;
      gap: 1.4rem;
      list-style: none;
      padding: 0;
      margin-top: 1.6rem;
      .tag {
        font-weight: 500;
        display: flex;
      }
    }
    /* "HTML" classes */
    .html {
      margin-top: 2rem;

      .E-paragraph {
        margin: 1rem 0;
        font-size: 2rem;
        line-height: 1.6;
      }
      .E-bulletList,
      ol {
        padding: 0 2rem;
      }

      .E-codeBlock {
        background-color: $color-gray-1;
        border-radius: 6px;
        color: $color-text;
        padding: 1rem;
        code {
          color: inherit;
          padding: 0;
          background: none;
          font-size: 1.4rem;
        }
      }

      .E-underline {
      }

      .E-listItem {
      }

      .E-image {
        width: 100%;
        object-fit: contain;
        display: block;
      }

      .E-link {
      }
    }
  }
}
</style>