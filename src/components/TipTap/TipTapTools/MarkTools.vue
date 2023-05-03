<template>
  <div class="marks">
    <tip-tap-button
      faIcon="fa-solid fa-bold"
      tooltip="Жирный"
      @click="editor.chain().focus().toggleBold().run()"
      @keypress.enter.prevent="editor.chain().focus().toggleBold().run()"
      :class="{ isActive: editor?.isActive('bold') }"
      :disabled="!editor?.can().chain().focus().toggleBold().run()"
    />
    <tip-tap-button
      faIcon="fa-solid fa-italic"
      tooltip="Курсив"
      @click="editor.chain().focus().toggleItalic().run()"
      @keypress.enter.prevent="editor.chain().focus().toggleItalic().run()"
      :class="{ isActive: editor?.isActive('italic') }"
      :disabled="!editor?.can().chain().focus().toggleItalic().run()"
    />
    <tip-tap-button
      faIcon="fa-solid fa-strikethrough"
      tooltip="Зачеркнуть"
      @click="editor.chain().focus().toggleStrike().run()"
      @keypress.enter.prevent="editor.chain().focus().toggleStrike().run()"
      :class="{ isActive: editor?.isActive('strike') }"
      :disabled="!editor?.can().chain().focus().toggleStrike().run()"
    />
    <tip-tap-button
      faIcon="fa-solid fa-underline"
      tooltip="Подчеркнуть"
      @click="editor.chain().focus().toggleUnderline().run()"
      @keypress.enter.prevent="editor.chain().focus().toggleUnderline().run()"
      :class="{
        isActive: editor?.isActive('underline'),
      }"
    />
    <tip-tap-button
      faIcon="fa-solid fa-code"
      tooltip="Код"
      @click="editor.chain().focus().toggleCode().run()"
      @keypress.enter.prevent="editor.chain().focus().toggleCode().run()"
      :class="{ isActive: editor?.isActive('code') }"
    />
    <tip-tap-button
      faIcon="fa-solid fa-laptop-code"
      tooltip="Блок кода"
      @click="editor.chain().focus().toggleCodeBlock().run()"
      @keypress.enter.prevent="editor.chain().focus().toggleCodeBlock().run()"
      :class="{ isActive: editor?.isActive('codeBlock') }"
    />

    <tip-tap-button
      faIcon="fa-solid fa-highlighter"
      tooltip="Выделить "
      @click="editor.chain().focus().toggleHighlight().run()"
      @keypress.enter.prevent="editor.chain().focus().toggleHighlight().run()"
      :class="{ isActive: editor?.isActive('highlight') }"
    />

    <tip-tap-button
      faIcon="fa-solid fa-list-ul"
      tooltip="Список пуля"
      @click="editor.commands.toggleBulletList()"
      @keypress.enter.prevent="editor.commands.toggleBulletList()"
      :class="{ isActive: editor?.isActive('bulletList') }"
    />

    <tip-tap-button
      faIcon="fa-solid fa-list-ol"
      tooltip="Упорядоченный список"
      @click="editor.commands.toggleOrderedList()"
      @keypress.enter.prevent="editor.commands.toggleOrderedList()"
      :class="{ isActive: editor?.isActive('orderedList') }"
    />

    <tip-tap-button
      faIcon="fa-solid fa-quote-left"
      tooltip="Цитата"
      @click="editor.chain().focus().toggleBlockquote().run()"
      @keypress.enter.prevent="editor.chain().focus().toggleBlockquote().run()"
      :class="{ isActive: editor?.isActive('blockquote') }"
    />

    <tip-tap-button
      faIcon="fa-solid fa-link"
      tooltip=" Добавить ссылку"
      @click="setLink"
      @keypress.enter.prevent="setLink"
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
      type: Editor as PropType<Editor>,
    },
  },
  setup(props) {
    const setLink = () => {
      const previousUrl = props.editor.getAttributes("link").href;
      const url = window.prompt("URL", previousUrl);

      // cancelled
      if (url === null) {
        return;
      }

      // empty
      if (url === "") {
        props.editor.chain().focus().extendMarkRange("link").unsetLink().run();

        return;
      }

      // update link
      props.editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    };
    return { setLink };
  },
});
</script>

<style lang="scss">
$color-main-1: #d84f2a;
.marks {
  display: flex;
  gap: 1rem;
}
</style>