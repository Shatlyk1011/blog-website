<template>
  <div class="nav">
    <nav>
      <router-link :to="{ name: 'HomeView' }" type="logo" class="logo"
        >set-web</router-link
      >
      <ul>
        <li>Поиск</li>
        <li>Все посты</li>
        <li>Обо мне</li>
      </ul>
      <div class="btns">
        <button>Войти</button>
      </div>
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
$ff-mserrat: "Montserrat", sans-serif;

.nav {
  border-bottom: 1px solid $color-gray-3;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 94rem;
    margin: 0 auto;
    padding: 1rem 3rem;
    .logo {
      color: $color-main-1;
      font-size: 1.8rem;
      font-weight: 600;
    }

    ul {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 2rem;
      li {
        border-bottom: 1px solid transparent;
        padding: 4px 0;
        cursor: pointer;

        transition: border-bottom 0.3s cubic-bezier(0.83, 0, 0.17, 1);
        &:hover {
          border-bottom: 1px solid $color-main-1;
          color: $color-main-2;
        }
      }
    }

    .btns {
      button {
        align-items: center;
        padding: 1rem 3.2rem;
        background-color: $color-main-1;
        line-height: 1.1;
      }
    }
  }
}
</style>