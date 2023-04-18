<template>
  <div class="text-tools">
    <div class="container">
      <tip-tap-button
        style="margin-right: 6px"
        faIcon="fa-solid fa-paragraph"
        tooltip="Параграф"
        @click="editor.chain().focus().setParagraph().run()"
        :class="{ isActive: editor?.isActive('paragraph') }"
        size="lg"
      />
      <tip-tap-button
        tooltip="Загаловок"
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="{
          isActive: editor?.isActive('heading', { level: 1 }),
        }"
      >
        H1
      </tip-tap-button>
      <tip-tap-button
        tooltip="Загаловок"
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="{
          isActive: editor?.isActive('heading', { level: 2 }),
        }"
      >
        H2
      </tip-tap-button>
      <tip-tap-button
        tooltip="Загаловок"
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
        :class="{
          isActive: editor?.isActive('heading', { level: 3 }),
        }"
      >
        H3
      </tip-tap-button>
      <tip-tap-button
        tooltip="Загаловок"
        @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
        :class="{
          isActive: editor?.isActive('heading', { level: 4 }),
        }"
      >
        H4
      </tip-tap-button>
      <tip-tap-button
        tooltip="Загаловок"
        @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
        :class="{
          isActive: editor?.isActive('heading', { level: 5 }),
        }"
      >
        H5
      </tip-tap-button>
    </div>
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
.text-tools {
  display: flex;
  align-items: center;
  .container {
    display: flex;
    gap: 6px;
    font-family: $ff-mserrat;
    font-size: 1.28rem;
    font-weight: 600;
    align-items: center;
    list-style: none;
  }
}
</style>