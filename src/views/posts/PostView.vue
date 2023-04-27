<template>
  <div class="post-view">
    <SinglePost :postId="id" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import SinglePost from "@/components/Posts/Post/SinglePost.vue";

export default defineComponent({
  name: "PostView",

  components: { SinglePost },
  props: {
    id: {
      required: true,
      type: String,
    },
  },
});
</script>
