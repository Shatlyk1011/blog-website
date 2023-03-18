<template>
  <div class="nav">
    <nav>
      <div class="logo">set-web</div>
      <ul>
        <li>Поиск</li>
        <li>Все посты</li>
        <li>Обо мне</li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
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
$ff-oswald: "Oswald", sans-serif;

.nav {
  border-bottom: 1px solid $color-gray-3;
  nav {
    display: flex;
    justify-content: space-between;
    max-width: 94rem;
    margin: 0 auto;
    padding: 3rem 0;
    .logo {
      color: $color-main-1;
      font-size: 1.8rem;
    }

    ul {
      list-style: none;
      display: flex;
      gap: 2rem;
      li {
        border-bottom: 1px solid transparent;
        padding-bottom: 4px;
        cursor: pointer;

        transition: border-bottom 0.3s cubic-bezier(0.83, 0, 0.17, 1);
        &:hover {
          border-bottom: 1px solid $color-main-1;
          color: $color-main-2;
        }
      }
    }
  }
}
</style>