
<template>
  <section class="post-view">
    <TipTap />
  </section>
</template>

<script lang="ts">
import TipTap from "@/components/TipTap/TipTap.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { TipTap },
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
.post-view {
  max-width: 100rem;
  margin: 4.8rem auto;
  background-color: #ffe;

  padding: 2.4rem;
}
</style>