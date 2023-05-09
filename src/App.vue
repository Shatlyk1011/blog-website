<template>
  <Nav v-if="showNav" />
  <main class="app">
    <router-view />
  </main>
</template>

<script lang="ts" setup>
import { computed} from "vue";
import { useRoute } from "vue-router";

import Nav from "@/components/Navigation/Nav.vue";

const route = useRoute();

const showNav = computed(() => {
  if (route.name == "CreatePost" || route.name == "UpdatePost") return false;
  else return true;
});


</script>

<style lang="scss" scoped>
.app {
  max-width: 144rem; 
  height: calc(100vh - 9rem);
  box-sizing: border-box;
  margin: 0 auto;
  position: relative;
}
</style>