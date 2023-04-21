<template>
  <div class="single-post" v-if="post">
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
        <div class="time">
          <font-awesome-icon icon="fa-solid fa-book-open" />
          <span>{{ post.timeToRead }} минут</span>
        </div>
      </ul>

      <div class="html" v-html="post.html"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import Post from "@/assets/types/Post";

import UserData from "@/components/Shared/userData.vue";
import getAvgTimeToRead from "@/composables/getAvgTimeToRead";

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
    const { avgTimeToRead } = getAvgTimeToRead(props.post?.html);

    return { avgTimeToRead };
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
    background-color: rgba($color-gray-2, 0.8);
    // border: 1px solid $color-gray-2;
    padding: 3.2rem 6.4rem;

    .title {
      font-size: 4.8rem;
      font-family: $ff-mserrat;
      font-weight: 700;
      color: white;
      margin-top: 2rem;
    }
    .tags {
      display: flex;
      align-items: center;
      gap: 1.4rem;
      list-style: none;
      padding: 0;
      margin-top: 1.6rem;
      width: 100%;

      .tag {
        font-weight: 500;
        display: flex;
        color: $color-main-2;
        padding: 4px 1rem;
        border-radius: 4px;
      }

      .time {
        display: flex;
        margin-left: auto;
        align-items: center;
        background-color: $color-gray-3;
        gap: 1rem;
        padding: 6px 10px;

        span {
          font-size: 1.28rem;
          font-weight: 500;
        }
      }
    }
    .html {
      margin-top: 2rem;

      h1,
      h2,
      h3,
      h4,
      h5 {
        font-family: $ff-mserrat;
        line-height: 1.1;
        font-weight: 700;
        color: $color-white;
      }
    }
  }
}
</style>