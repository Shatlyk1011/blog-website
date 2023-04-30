<template>
  <div class="update-post">
    <form-nav @update:change="handleChange" @update:preview="handlePreview" />
    <keep-alive>
      <component
        @update:updateDraft="updateDraft"
        :is="currentView"
        :postToUpdate="post"
        :post="post"
        btnText="Сохранить"
      />
    </keep-alive>
    <!-- :updateDraft="" -->
  </div>
</template>

<script lang="ts">
import { ref, onMounted, KeepAlive, defineComponent } from "vue";

import SubmitForm from "@/components/TipTap/SubmitForm.vue";
import PreviewPost from "@/components/Posts/Post/PreviewPost.vue";
import FormNav from "@/components/Navigation/FormNav.vue";

import getDocument from "@/composables/firestore/getDocument";
import getUser from "@/composables/auth/getUser";

export default defineComponent({
  name: "UpdatePost",

  components: { SubmitForm, PreviewPost, FormNav, KeepAlive },

  props: {
    id: {
      required: true,
      type: String,
    },
  },

  setup(props) {
    const { getDoc, document: post, error } = getDocument();
    const { user } = getUser();

    let currentView = ref("SubmitForm");
    const handleChange = () => {
      currentView.value = "SubmitForm";
    };
    const handlePreview = () => {
      currentView.value = "PreviewPost";
    };
    const updateDraft = async () => {
      console.log("updateDraft for update post");
      await getDoc("updateDraft", user.value!.uid);
    };

    onMounted(async () => {
      await getDoc("posts", props.id);
      console.log("post to edit", post.value);
    });

    return { post, handleChange, handlePreview, currentView, updateDraft };
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