<template>
  <div class="all-posts">
    <Posts :posts="posts" v-if="posts" />
    <Loading v-else />
  </div>
</template>

<script lang="ts" setup>
import Posts from "@/components/Posts/Posts.vue";
import Loading from "@/components/Shared/Loading.vue";

import getCollection from "@/composables/firestore/getCollection";

const { documents: posts } = getCollection("posts");
</script>

<style lang="scss" scoped>
.all-posts {
  margin-top: 4.8rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3.2rem;
}
</style>