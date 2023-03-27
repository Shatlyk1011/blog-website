<template>
  <div class="base-tools">
    <div class="marks">
      <tip-tap-button
        faIcon="fa-solid fa-bold"
        @click="editor.chain().focus().toggleBold().run()"
        :class="{ isActive: editor ? editor.isActive('bold') : null }"
        :disabled="
          editor ? !editor.can().chain().focus().toggleBold().run() : null
        "
      />
      <tip-tap-button
        faIcon="fa-solid fa-italic"
        @click="editor.chain().focus().toggleItalic().run()"
        :class="{ isActive: editor ? editor.isActive('italic') : null }"
        :disabled="
          editor ? !editor.can().chain().focus().toggleItalic().run() : null
        "
      />
      <tip-tap-button
        faIcon="fa-solid fa-strikethrough"
        @click="editor.chain().focus().toggleStrike().run()"
        :class="{ isActive: editor ? editor.isActive('strike') : null }"
        :disabled="
          editor ? !editor.can().chain().focus().toggleStrike().run() : null
        "
      />
      <tip-tap-button
        faIcon="fa-solid fa-code"
        @click="editor.chain().focus().toggleCodeBlock().run()"
        :class="{ isActive: editor ? editor.isActive('codeBlock') : null }"
      />
    </div>
  </div>
</template>

<script lang="ts">
import TipTapButton from "@/components/TipTap/TipTapButton.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { TipTapButton },
  props: {
    editor: {
      required: true,
      type: Object,
    },
  },
  setup() {
    return {};
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

.isActive {
  color: $color-main-2;
}

.base-tools {
  background-color: $color-text;
  border-radius: 4px;
  .marks {
    display: flex;
    margin-bottom: 3.2rem;
  }
}
</style>