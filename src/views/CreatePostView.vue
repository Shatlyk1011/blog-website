
<template>
  <section class="post-view">
    <TipTapMain />
  </section>
</template>

<script lang="ts">
import TipTapMain from "@/components/TipTap/TipTapMain.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { TipTapMain },
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
  background-color: $color-gray-2;
  padding: 2.4rem;
}
</style>