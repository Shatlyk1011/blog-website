<template>
  <div class="image-tool">
    <TipTapButton faIcon="fa-solid fa-image" @click="addImage" />
  </div>
</template>

<script lang="ts">
import TipTapButton from "@/components/TipTap/TipTapButton.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "ImageTool",
  components: { TipTapButton },

  props: {
    editor: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const addImage = () => {
      const url = window.prompt("URL");

      if (url) {
        props.editor.chain().focus().setImage({ src: url }).run();
      }
    };
    return { addImage };
  },
});
</script>

<style scoped>
</style>