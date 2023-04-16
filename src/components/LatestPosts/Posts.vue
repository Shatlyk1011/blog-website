<template>
  <div class="single-posts">
    <div class="heading">Последние посты</div>
    <div class="container">
      <PostItem v-for="post in posts" :key="post.id" :post="post" />
      <PostItem v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script lang="ts">
import PostItem from "@/components/LatestPosts/PostItem.vue";

import getCollection from "@/composables/firestore/getCollection";

import { defineComponent } from "vue";

export default defineComponent({
  name: "Post",
  components: { PostItem },
  setup() {
    const { documents: posts } = getCollection("posts");
    return { posts };
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

.single-posts {
  .heading {
    font-size: 3.1rem;
    font-weight: 600;
    border-bottom: 1px solid $color-gray-3;
    color: $color-main-2;
    margin-bottom: 4rem;
    padding-bottom: 1rem;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    // flex-direction: column;
    gap: 4rem;
  }
}
</style>