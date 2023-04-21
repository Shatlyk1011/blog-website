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
        tooltip="H1-H6 нажмите 'space'"
        @click="handleHeading"
        :class="{
          isActive: editor?.isActive('heading', { level: 1 }),
        }"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TipTapButton from "@/components/TipTap/TipTapButton.vue";
import { Editor } from "@tiptap/vue-3";

export default defineComponent({
  name: "TextTools",

  components: { TipTapButton },

  props: {
    editor: {
      type: Editor || undefined,
      required: true,
    },
  },
  setup(props) {
    const handleHeading = () => {
      props.editor.commands.insertContent("#");
    };
    return { handleHeading };
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
    align-items: center;
  }
}
</style>