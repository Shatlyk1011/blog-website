<template>
  <Nav />
  <div class="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Nav from "./components/Nav.vue";

export default defineComponent({
  components: { Nav },
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