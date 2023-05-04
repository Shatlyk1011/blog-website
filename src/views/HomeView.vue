<template>
  <div class="homeview">
    <Hero />
    <div class="heading">Последние посты</div>
    <div class="container">
      <Posts :posts="posts" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Hero from "@/components/Hero/Hero.vue";
import Posts from "@/components/Posts/Posts.vue";

import getCollection from "@/composables/firestore/getCollection";

const { documents: posts } = getCollection("posts");
</script>

<style lang="scss" scoped>
$color-main-1: #d84f2a;
$color-main-2: #f9744b;

$color-gray-1: #212529;
$color-gray-2: #495057;
$color-gray-3: #868e96;

.homeview {
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
  }
}
</style>