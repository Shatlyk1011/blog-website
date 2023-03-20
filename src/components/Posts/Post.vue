<template>
  <div class="single-posts">
    <div class="heading">{{ heading }}</div>
    <div class="container">
      <PostItem />
      <PostItem />
      <PostItem />
    </div>
  </div>
</template>

<script lang="ts">
import PostItem from "./PostItem.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Post",
  components: { PostItem },
  props: {
    heading: {
      required: true,
      type: String,
    },
  },
  setup() {
    return {};
  },
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

.single-posts {
  .heading {
    font-size: 3.1rem;
    font-weight: 600;
    border-bottom: 1px solid $color-gray-3;
    color: $color-main-2;
    margin-bottom: 4rem;
    padding-bottom: 1rem;
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
}
</style>