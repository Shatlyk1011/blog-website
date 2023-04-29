<template>
  <div class="update-post">
    <form-nav @update:change="handleChange" @update:preview="handlePreview" />
    <keep-alive>
      <component :is="currentView" :postToUpdate="post" :post="post" />
    </keep-alive>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, KeepAlive, defineComponent } from "vue";

import SubmitForm from "@/components/TipTap/SubmitForm.vue";
import PreviewPost from "@/components/Posts/Post/PreviewPost.vue";
import FormNav from "@/components/Navigation/FormNav.vue";
import SubmitButton from "@/components/Shared/SubmitButton.vue";

import getDocument from "@/composables/firestore/getDocument";

export default defineComponent({
  name: "UpdatePost",

  components: { SubmitForm, PreviewPost, FormNav, SubmitButton, KeepAlive },

  props: {
    id: {
      required: true,
      type: String,
    },
  },

  setup(props) {
    const { getDoc, document: post, error } = getDocument();

    let currentView = ref("SubmitForm");
    const handleChange = () => {
      currentView.value = "SubmitForm";
    };
    const handlePreview = () => {
      currentView.value = "PreviewPost";
    };

    onMounted(async () => {
      await getDoc("posts", props.id);
      console.log("post to edit", post.value);
    });

    return { post, handleChange, handlePreview, currentView };
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
</style>