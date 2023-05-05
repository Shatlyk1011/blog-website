<template>
  <div class="text-tools">
    <div class="container">
      <tip-tap-button
        faIcon="fa-solid fa-paragraph"
        tooltip="Параграф"
        @click="editor.chain().focus().setParagraph().run()"
        :class="{ isActive: editor?.isActive('paragraph') }"
      />
      <tip-tap-button
        faIcon="fa-solid fa-heading"
        tooltip="H1-H4 нажмите 'space'"
        @click="handleHeading"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import TipTapButton from "@/components/TipTap/TipTapButton.vue";
import { Editor } from "@tiptap/vue-3";

const props = defineProps({
  editor: {
    type: Editor || undefined,
    required: true,
  },
});

const handleHeading = () => {
  let text = props.editor.getText();
  if (text.length < 4) {
    props.editor.commands.insertContent("#");
  } else {
    props.editor.commands.clearContent();
  }
};
</script>

<style lang="scss" scoped>
.text-tools {
  display: flex;
  align-items: center;
  .container {
    display: flex;
    gap: 6px;
    align-items: center;
  }
}
</style>