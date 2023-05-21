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
import Footer from "@/components/Footer/Footer.vue";

const route = useRoute();

const showNav = computed(() => {
  if (route.name == "CreatePost" || route.name == "UpdatePost") return false;
  else return true;
});

const showFooter = computed(() => {
  if (route.name == "CreatePost" || route.name == "UpdatePost") return false;
  else return true;
});


</script>

<style lang="scss" scoped>
.app {
  max-width: 144rem; 
  height: 85vh;
  box-sizing: border-box;
  margin: 0 auto;
  position: relative;
}
</style>