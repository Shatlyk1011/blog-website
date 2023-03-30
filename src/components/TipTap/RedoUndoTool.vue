<template>
  <div class="redo-undo">
    <TipTapButton
      faIcon="fa-solid fa-arrow-left"
      @click="editor ? editor.chain().focus().undo().run() : null"
      :disabled="editor ? !editor.can().chain().focus().undo().run() : null"
    />
    <TipTapButton
      faIcon="fa-solid fa-arrow-right"
      @click="editor ? editor.chain().focus().redo().run() : null"
      :disabled="editor ? !editor.can().chain().focus().redo().run() : null"
    />
  </div>
</template>

<script lang="ts">
import TipTapButton from "@/components/TipTap/TipTapButton.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "RedoUndoTool",
  components: { TipTapButton },

  props: {
    editor: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang='scss' scoped>
.redo-undo {
  display: flex;
  gap: 1rem;
}
</style>