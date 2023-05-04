<template>
  <div class="redo-undo">
    <TipTapButton
      faIcon="fa-solid fa-arrow-left"
      tooltip="отменить"
      command="CTRL + Z"
      @click="editor.chain().focus().undo().run()"
      :disabled="!editor?.can().chain().focus().undo().run()"
    />
    <TipTapButton
      faIcon="fa-solid fa-arrow-right"
      tooltip="вернуть"
      command="CTRL + Y"
      @click="editor.chain().focus().redo().run()"
      :disabled="!editor?.can().chain().focus().redo().run()"
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