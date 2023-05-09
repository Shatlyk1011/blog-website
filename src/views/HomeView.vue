<template>
  <div class="homeview">
    <Hero />
    <div class="heading">Последние посты</div>
    <div class="container">
      <Posts :posts="posts" />
    </div>
  </div>
  <Footer/>
</template>

<script lang="ts" setup>
import Hero from "@/components/Hero/Hero.vue";
import Posts from "@/components/Posts/Posts.vue";
import Footer from '@/components/Footer/Footer.vue'

import getPosts from "@/composables/firestore/getPosts";

const { posts } = getPosts();
</script>

<style lang="scss" scoped>
@import '@/globals';

.homeview {
  padding: 6rem;
  
  @include respond(tab-land) {
    padding: 4rem;
  }
  @include respond(tab-port) {
    padding: 3.2rem
  }
  @include respond(phone) {
    padding: 2rem;
  }
  .heading {
    margin: 3.2rem 2rem 4rem;
    font-size: 3.1rem;
    font-weight: 600;
    border-bottom: 1px solid $color-gray-3;
    color: $color-main-2;
    padding-bottom: 1rem;

    @include respond(tab-port) {
      margin: 2rem 1rem 0;
    }
  }
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    @include respond(tab-land) {
      grid-template-columns: repeat(2, 1fr);
    }
    @include respond(phone) {
      grid-template-columns: 1fr;
    }
  }
}
</style>