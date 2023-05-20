<template>
  <div class="actions">
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

<script lang="ts" setup>
import TipTapButton from "@/components/TipTap/TipTapButton.vue";

defineProps({
  editor: {
    type: Object,
    required: true,
  },
});
</script>

<style lang='scss' scoped>
.actions {
  display: flex;
  gap: 1rem;
}
</style>