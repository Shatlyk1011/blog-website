<template>
  <div class="homeview">
    <Hero />
    <Posts />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Hero from "@/components/Hero/Hero.vue";
import Posts from "@/components/Posts/Posts.vue";

export default defineComponent({
  name: "HomeView",
  components: { Hero, Posts },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>