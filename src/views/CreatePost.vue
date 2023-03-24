
<template>
  <section class="post-view">
    <TipTap />
  </section>
</template>

<script lang="ts">
import TipTap from "@/components/TipTap.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: { TipTap },
});
</script>

<style lang="scss" scoped>
.post-view {
  margin: 10rem;
  background-color: #ffe;
  color: #000;
  padding: 5rem;
  background-color: brown;
}
</style>