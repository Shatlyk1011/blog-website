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
      return route.path != "/create-post";
    });

    return { showNav };
  },
});
</script>

<style lang="scss" scoped>
.app {
  padding: 0 11rem;
  max-width: 144rem; //??
  height: calc(100vh - 6rem);
  box-sizing: border-box;
  margin: 0 auto;
}
</style>