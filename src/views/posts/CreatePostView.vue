<template>
  <div class="create-post">
    <form-nav @update:change="handleChange" @update:preview="handlePreview" />
    <keep-alive>
      <component
        @update:draft="updateDraft"
        :setDraft="true"
        :is="currentView"
        :postToSetDraft="draft"
        :post="draft"
        btnText="Cоздать"
      />
    </keep-alive>
  </div>
</template>

<script lang="ts">
import { onMounted, ref, KeepAlive, onUpdated } from "vue";

import SubmitForm from "@/components/TipTap/SubmitForm.vue";
import PreviewPost from "@/components/Posts/Post/PreviewPost.vue";
import FormNav from "@/components/Navigation/FormNav.vue";
import SubmitButton from "@/components/Shared/SubmitButton.vue";

import getDocument from "@/composables/firestore/getDocument";
import getUser from "@/composables/auth/getUser";

import { defineComponent } from "vue";

export default defineComponent({
  name: "Create Post View",

  components: { SubmitForm, PreviewPost, FormNav, SubmitButton, KeepAlive },

  setup() {
    const { user } = getUser();
    const { getDoc, document: draft } = getDocument();

    let currentView = ref("SubmitForm");
    const handleChange = () => {
      currentView.value = "SubmitForm";
    };
    const handlePreview = () => {
      currentView.value = "PreviewPost";
    };

    const updateDraft = async () => {
      console.log("updateDrafttttttt!!!!!!!!");
      await getDoc("drafts", user.value!.uid);
    };

    onMounted(async () => {
      console.log("mounting create-post");
      await getDoc("drafts", user.value!.uid);
    });

    return { currentView, handleChange, handlePreview, draft, updateDraft };
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