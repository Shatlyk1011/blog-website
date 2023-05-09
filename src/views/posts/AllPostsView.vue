<template>
  <div class="all-posts">
    <Posts :posts="posts" v-if="posts" />
    <Loading v-else />
  </div>
  <Footer v-if="posts"/>
</template>

<script lang="ts" setup>
import Posts from "@/components/Posts/Posts.vue";
import Loading from "@/components/Shared/Loading.vue";
import Footer from "@/components/Footer/Footer.vue";

import getPosts from "@/composables/firestore/getPosts";

const { posts } = getPosts();
</script>

<style lang="scss" scoped>
@import '@/globals';
.all-posts {
  padding: 6rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3.2rem;

  @include respond(tab-land) {
    grid-template-columns: repeat(2, 1fr);
    padding: 4rem;
    gap: 2.4rem;
  }
  @include respond(tab-port) {
    padding: 2rem;
    gap: 1.6rem;
  } 
  @include respond(phone) {
    grid-template-columns: 1fr;
  }
}
</style>