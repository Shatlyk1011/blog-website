<template>
  <div class="text-tools">
    <ul>
      <li>
        <tip-tap-button
          faIcon="fa-solid fa-paragraph"
          @click="editor.chain().focus().setParagraph().run()"
          :class="{ isActive: editor ? editor.isActive('paragraph') : null }"
          size="lg"
        />
      </li>
      <li
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="{
          isActive: editor ? editor.isActive('heading', { level: 1 }) : null,
        }"
      >
        H1
      </li>
      <li
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="{
          isActive: editor ? editor.isActive('heading', { level: 2 }) : null,
        }"
      >
        H2
      </li>
      <li
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
        :class="{
          isActive: editor ? editor.isActive('heading', { level: 3 }) : null,
        }"
      >
        H3
      </li>
      <li
        @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
        :class="{
          isActive: editor ? editor.isActive('heading', { level: 4 }) : null,
        }"
      >
        H4
      </li>
      <li
        @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
        :class="{
          isActive: editor ? editor.isActive('heading', { level: 5 }) : null,
        }"
      >
        H5
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import TipTapButton from "@/components/TipTap/TipTapButton.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "TextTools",

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

<style lang="scss">
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
.text-tools {
  display: flex;
  align-items: center;
  ul {
    display: flex;
    gap: 6px;
    font-family: $ff-mserrat;
    font-size: 1.28rem;
    font-weight: 600;
    align-items: center;

    li {
      cursor: pointer;
      letter-spacing: 1px;
      color: $color-gray-1;
      transition: all 0.25s cubic-bezier(0.83, 0, 0.17, 1);

      &:first-child {
        margin-right: 8px;
      }

      &.isActive {
        color: $color-main-2;
        font-weight: 700;
      }
    }
  }
}
</style>