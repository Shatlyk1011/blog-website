<template>
  <PostItem v-for="post in posts" :key="post.id" :post="post" />
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { Post } from "@/assets/Types";

import PostItem from "@/components/Posts/Post/PostItem.vue";

defineProps({
  posts: {
    type: Array as PropType<Post[] | null>,
  },
});
</script>
