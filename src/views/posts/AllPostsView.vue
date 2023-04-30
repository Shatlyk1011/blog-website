<template>
  <div class="all-posts">
    <Posts :posts="posts" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Posts from "@/components/Posts/Posts.vue";

import getCollection from "@/composables/firestore/getCollection";

export default defineComponent({
  name: "CreatePost",
  components: {
    Posts,
  },
  setup() {
    const { documents: posts } = getCollection("posts");
    if (posts.value) {
      console.log("posts", posts.value);
    }

    return { posts };
  },
});
</script>

<style lang="scss" scoped>
.all-posts {
  margin-top: 4.8rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>