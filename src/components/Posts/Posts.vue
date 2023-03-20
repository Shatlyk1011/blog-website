<template>
  <section class="posts">
    <Post heading="Разработка" />
    <Post heading="Дизайн" />
  </section>
</template>

<script lang="ts">
import Post from "@/components/Posts/Post.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Posts",
  components: { Post },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.posts {
  max-width: 90rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 8rem;
}
</style>