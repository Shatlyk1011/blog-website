<template>
  <div class="hero">
    <Heading />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Heading from "./Heading.vue";

export default defineComponent({
  components: { Heading },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>