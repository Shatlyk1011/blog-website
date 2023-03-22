<template>
  <h1>editor: {{ formEditor }}</h1>
  <section class="post-view">
    <Editor
      api-key="k3nhnrh5p0liuqx4lebh7vd55mjcd7s26joya4w5hokny2j6"
      v-model="formEditor"
      :init="{
        plugins: ['image', 'code'],
        toolbar: ['image', 'code'],
      }"
    />
  </section>
</template>

<script lang="ts">
import Editor from "@tinymce/tinymce-vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: { Editor },
  setup() {
    const formEditor = ref("");
    return { formEditor };
  },
});
</script>

<style lang="scss" scoped>
.post-view {
  margin: 10rem;
  background-color: #ffe;
  color: #000;
}
</style>