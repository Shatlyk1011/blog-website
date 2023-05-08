<template>
  <div class="post-view">
    <SinglePost :postId="id" />
  </div>
</template>

<script lang="ts" setup>
import SinglePost from "@/components/Posts/Post/SinglePost.vue";

defineProps({
  id: {
    required: true,
    type: String,
  },
});
</script>

<style lang='scss'>
@import '@/globals'; 
.post-view {
  padding: 2rem;

  @include respond(phone) {
    padding: 0
  }
}
</style>
