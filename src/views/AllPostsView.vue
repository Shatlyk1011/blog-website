<template>
  <div class="all-posts"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import PostItem from "@/components/LatestPosts/PostItem.vue";

import getCollection from "@/composables/firestore/getCollection";

export default defineComponent({
  name: "CreatePost",
  components: {
    PostItem,
  },
  setup() {
    const { documents: posts } = getCollection("posts");

    return { posts };
  },
});
</script>

<style scoped>
</style>