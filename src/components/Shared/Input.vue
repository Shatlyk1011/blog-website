<template>
  <input :type="type" :value="modelValue" @input="handleInput" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    modelValue: {
      type: String,
    },
    type: {
      type: String,
      required: false,
      default: "text",
    },
  },

  emits: ["update:modelValue"],
  setup(_, context) {
    const handleInput = (e: Event) => {
      context.emit("update:modelValue", (e.target as HTMLInputElement).value);
    };

    return { handleInput };
  },
});
</script>
