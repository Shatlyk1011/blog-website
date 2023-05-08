<template>
  <Nav v-if="showNav" />
  <main class="app">
    <router-view />
  </main>
  <!-- <Footer /> -->
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRoute } from "vue-router";

import Nav from "@/components/Navigation/Nav.vue";

export default defineComponent({
  components: { Nav },
  setup() {
    const route = useRoute();

    const showNav = computed(() => {
      if (route.name == "CreatePost" || route.name == "UpdatePost")
        return false;
      else {
        return true;
      }
    });

    return { showNav };
  },
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