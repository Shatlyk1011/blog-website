
<template>
  <form-nav
    :class="update ? 'update' : 'preview'"
    @update:update="handleUpdate"
    @update:preview="handlePreview"
  />
  <div class="create-post-view" v-if="update">
    <CreatePost />
  </div>
  <PreviewPost v-if="preview" />
</template>

<script lang="ts">
import { ref } from "vue";

import CreatePost from "@/components/Posts/Post/CreatePost.vue";
import PreviewPost from "@/components/Posts/Post/PreviewPost.vue";
import FormNav from "@/components/Navigation/FormNav.vue";

import { defineComponent } from "vue";

export default defineComponent({
  components: { CreatePost, PreviewPost, FormNav },
  name: "Create Post View",

  setup() {
    let preview = ref(false);
    let update = ref(true);

    let handleUpdate = () => {
      update.value = true;
      preview.value = false;
    };
    let handlePreview = () => {
      preview.value = true;
      update.value = false;
    };

    return { preview, update, handleUpdate, handlePreview };
  },
});
</script>

<style lang="scss" scoped>
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
.create-post-view {
  max-width: 80rem;
  margin: 0 auto;
  background-color: $color-gray-2;
  padding: 2rem;
}
</style>