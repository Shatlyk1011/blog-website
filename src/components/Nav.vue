<template>
  <div class="nav">
    <nav>
      <router-link :to="{ name: 'Home' }" type="logo" class="logo"
        >set-web</router-link
      >
      <ul>
        <router-link class="link" to="#">Поиск</router-link>
        <router-link class="link" to="/all-posts">Все посты</router-link>
        <router-link class="link" to="#">Обо мне</router-link>
      </ul>
      <!-- show login-register or create-logout? -->
      <div class="btns">
        <router-link class="create-btn" :to="{ name: 'CreatePost' }"
          >Создать блог</router-link
        >
        <router-link class="login-btn" to="/signin" v-if="!user"
          >Войти</router-link
        >
        <router-link class="profile-btn" to="/" v-if="user">
          <p>{{ user.displayName }}</p>
        </router-link>
        <button class="logout-btn" @click="handleLogout">Logout</button>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import getUser from "@/composables/getUser";
import useLogout from "@/composables/useLogout";
import router from "@/router";

export default defineComponent({
  setup() {
    const { user } = getUser();
    const { logout, error, isPending } = useLogout();

    const handleLogout = async () => {
      await logout();
      if (!error.value) {
        router.push("/");
      }
    };
    return { user, handleLogout };
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
    max-width: 110rem;
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
      .link {
        border-bottom: 1px solid transparent;
        padding: 4px 0;
        cursor: pointer;

        transition: border-bottom 0.2s cubic-bezier(0.83, 0, 0.17, 1);
        &:hover {
          border-bottom: 1px solid $color-main-1;
          color: $color-main-2;
          font-weight: 500;
        }
      }
    }

    .btns {
      display: flex;
      gap: 2.4rem;
      align-items: center;

      .create-btn {
        background-color: $color-gray-2;
        padding: 1rem;
      }
      .login-btn {
        padding: 1rem 3.2rem;
        align-items: center;
        background-color: $color-main-1;
        line-height: 1.1;
      }
      .profile-btn {
        p {
          color: $color-white;
        }
      }
    }
  }
}
</style>