<template>
  <form-nav
    :class="update ? 'update' : 'preview'"
    @update:update="handleUpdate"
    @update:preview="handlePreview"
  />
  <div class="update-post-view">
    <SubmitForm :postToUpdate="post">
      <template #default="slotProps">
        <SubmitButton text="Сохранить" :isPending="slotProps.isPending" />
      </template>
    </SubmitForm>
  </div>
  <PreviewPost v-if="preview" />
</template>

<script lang="ts">
import { ref, onMounted } from "vue";

import { defineComponent } from "vue";
import SubmitForm from "@/components/TipTap/SubmitForm.vue";
import PreviewPost from "@/components/Posts/Post/PreviewPost.vue";
import FormNav from "@/components/Navigation/FormNav.vue";
import SubmitButton from "@/components/Shared/SubmitButton.vue";

import getDocument from "@/composables/firestore/getDocument";

export default defineComponent({
  name: "UpdatePost",

  components: { SubmitForm, PreviewPost, FormNav, SubmitButton },

  props: {
    id: {
      required: true,
      type: String,
    },
  },

  setup(props) {
    const { getDoc, document: post, error: getDocError } = getDocument();

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

    onMounted(async () => {
      await getDoc("posts", props.id!);
    });

    return { preview, update, handleUpdate, post, handlePreview };
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
.update-post-view {
  max-width: 80rem;
  margin: 0 auto;
  background-color: $color-gray-2;
  padding: 2rem;
}
</style>