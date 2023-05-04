<template>
  <div class="image-tool">
    <TipTapButton
      faIcon="fa-solid fa-image"
      tooltip="Ссылка на изображение"
      @click="addImage"
    />
  </div>
</template>

<script lang="ts" setup>
import TipTapButton from "@/components/TipTap/TipTapButton.vue";

import { defineProps } from "vue";

const props = defineProps({
  editor: {
    type: Object,
    required: true,
  },
});

const addImage = () => {
  const url = window.prompt("URL");

  if (url) {
    props.editor.chain().focus().setImage({ src: url }).run();
  }
};
</script>

<style scoped>
.image-tool {
  align-self: center;
}
</style>