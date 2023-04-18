<template>
  <div class="post-view">
    <!-- {{ document.html }} -->
    <SinglePost :post="post" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import SinglePost from "@/components/Posts/Post/SinglePost.vue";

import getSingleDocument from "@/composables/firestore/getSingleDocument";

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
    const { document: post, error, getDocument } = getSingleDocument();
    getDocument("posts", props.id);

    return { post, error };
  },
});
</script>

<style lang="scss">
$color-black: #000;
$color-white: #fff;
$color-text: #e9ecef;

$color-main-1: #d84f2a;
$color-main-2: #f9744b;

$color-gray-1: #212529;
$color-gray-2: #495057;
$color-gray-3: #868e96;

$ff-roboto: "Roboto", sans-serif;
$ff-mserrat: "Montserrat", sans-serif;

.post-view {
}
</style>