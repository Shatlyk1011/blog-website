<template>
  <div class="marks">
    <tip-tap-button
      faIcon="fa-solid fa-bold"
      tooltip="Жирный"
      @click="editor.chain().focus().toggleBold().run()"
      :class="{ isActive: editor?.isActive('bold') }"
      :disabled="!editor?.can().chain().focus().toggleBold().run()"
    />
    <tip-tap-button
      faIcon="fa-solid fa-italic"
      tooltip="Курсив"
      @click="editor.chain().focus().toggleItalic().run()"
      :class="{ isActive: editor?.isActive('italic') }"
      :disabled="!editor?.can().chain().focus().toggleItalic().run()"
    />
    <tip-tap-button
      faIcon="fa-solid fa-strikethrough"
      tooltip="Зачеркнуть"
      @click="editor.chain().focus().toggleStrike().run()"
      :class="{ isActive: editor?.isActive('strike') }"
      :disabled="!editor?.can().chain().focus().toggleStrike().run()"
    />
    <tip-tap-button
      faIcon="fa-solid fa-underline"
      tooltip="Подчеркнуть"
      @click="editor.chain().focus().toggleUnderline().run()"
      :class="{
        isActive: editor?.isActive('underline'),
      }"
    />
    <tip-tap-button
      faIcon="fa-solid fa-code"
      tooltip="Блок кода"
      @click="editor.chain().focus().toggleCodeBlock().run()"
      :class="{ isActive: editor?.isActive('codeBlock') }"
    />

    <tip-tap-button
      faIcon="fa-solid fa-list-ul"
      tooltip="Список пуля"
      @click="editor.commands.toggleBulletList()"
      :class="{ isActive: editor?.isActive('bulletList') }"
    />

    <tip-tap-button
      faIcon="fa-solid fa-list-ol"
      tooltip="Упорядоченный список"
      @click="editor.commands.toggleOrderedList()"
      :class="{ isActive: editor?.isActive('orderedList') }"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Editor } from "@tiptap/vue-3";

import TipTapButton from "@/components/TipTap/TipTapButton.vue";

export default defineComponent({
  name: "MarkTools",

  components: { TipTapButton },
  props: {
    editor: {
      required: true,
      type: Editor,
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