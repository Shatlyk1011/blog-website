<template>
  <Nav />
  <div class="app">
    <router-view />
  </div>
  <!-- <Footer /> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Nav from "./components/Nav.vue";
import Footer from "./components/Footer/Footer.vue";

export default defineComponent({
  components: { Nav, Footer },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.app {
  padding: 0 11rem;
}
</style>