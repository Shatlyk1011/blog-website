<template>
  <div class="post-view">
    <SinglePost :postId="id" />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

import SinglePost from "@/components/Posts/Post/SinglePost.vue";

defineProps({
  id: {
    required: true,
    type: String,
  },
});
</script>
