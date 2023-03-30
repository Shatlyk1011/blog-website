<template>
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
      faIcon="fa-solid fa-underline"
      @click="editor ? editor.chain().focus().toggleUnderline().run() : null"
      :class="{
        isActive: editor ? editor.isActive('underline') : null,
      }"
    />
    <tip-tap-button
      faIcon="fa-solid fa-code"
      @click="editor.chain().focus().toggleCodeBlock().run()"
      :class="{ isActive: editor ? editor.isActive('codeBlock') : null }"
    />

    <tip-tap-button
      faIcon="fa-solid fa-list-ul"
      @click="editor ? editor.commands.toggleBulletList() : null"
      :class="{ isActive: editor ? editor.isActive('bulletList') : null }"
    />

    <tip-tap-button
      faIcon="fa-solid fa-list-ol"
      @click="editor ? editor.commands.toggleOrderedList() : null"
      :class="{ isActive: editor ? editor.isActive('orderedList') : null }"
    />
  </div>
</template>

<script lang="ts">
import TipTapButton from "@/components/TipTap/TipTapButton.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MarkTools",

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

<style lang="scss">
.marks {
  display: flex;
  gap: 1.4rem;
}
</style>