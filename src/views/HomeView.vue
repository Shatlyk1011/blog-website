<template>
  <div class="homeview">
    <Hero />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Hero from "../components/Hero/Hero.vue";

export default defineComponent({
  components: { Hero },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>