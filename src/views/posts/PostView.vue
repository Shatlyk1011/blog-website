<template>
  <div class="post-view">
    <SinglePost :post="post" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import SinglePost from "@/components/Posts/Post/SinglePost.vue";

import getDocument from "@/composables/firestore/getDocument";

export default defineComponent({
  name: "PostView",

  components: { SinglePost },
  props: {
    id: {
      required: true,
      type: String,
    },
  },

  setup(props) {
    const { document: post, error, getDoc } = getDocument();
    getDoc("posts", props.id);

    return { post, error };
  },
});
</script>
