<template>
  <PostPreview v-for="post in posts" :key="post.id" :post="post" />
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import PostPreview from "@/components/Posts/Post/PostPreview.vue";

export default defineComponent({
  name: "Post",
  components: { PostPreview },
  props: ["posts"],
});
</script>

<style lang="scss" scoped>
</style>