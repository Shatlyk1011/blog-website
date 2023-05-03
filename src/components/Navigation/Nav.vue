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
        <router-link
          v-if="user"
          class="btn create-btn"
          :to="{ name: 'CreatePost' }"
          >Создать пост</router-link
        >
        <router-link class="btn login-btn" to="/signup" v-if="!user"
          >Войти</router-link
        >
        <OnClickOutside
          tabindex="0"
          class="profile"
          v-if="user"
          @trigger="closeDropdown"
        >
          <div class="info" @click="openDropdown">
            <img :src="user.photoURL" alt="" v-if="user.photoURL" />
            <p v-else>{{ user.displayName?.slice(0, 1) }}</p>
          </div>
          <transition name="dropdown-animation">
            <div class="dropdown" v-show="dropdown">
              <ul>
                <li class="li-info">
                  <div>{{ user.displayName }}</div>
                  <p class="email">{{ user.email }}</p>
                </li>
                <li>
                  <router-link to="/drafts" tabindex="0">Черновик</router-link>
                </li>
                <li class="li-myposts" tabindex="0">Мои посты</li>
                <li
                  role="button"
                  class="li-logout"
                  @click="handleLogout"
                  tabindex="0"
                >
                  <p>Выйти</p>
                </li>
              </ul>
            </div>
          </transition>
        </OnClickOutside>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" >
import { defineComponent, ref } from "vue";

import { OnClickOutside } from "@vueuse/components";

import getUser from "@/composables/auth/getUser";
import useLogout from "@/composables/auth/useLogout";
import router from "@/router";

export default defineComponent({
  components: { OnClickOutside },
  setup() {
    const { user } = getUser();
    const { logout, error, isPending } = useLogout();

    const dropdown = ref(false);

    const handleLogout = async () => {
      dropdown.value = false;
      await logout();
      if (!error.value) {
        router.push("/");
      }
    };
    const openDropdown = () => {
      if (user.value) {
        dropdown.value = true;
      }
    };

    const closeDropdown = () => {
      if (user.value) {
        dropdown.value = false;
      }
    };
    // onClickOutside(profile, closeDropdown);

    return { user, handleLogout, dropdown, openDropdown, closeDropdown };
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
  & *:focus {
    box-shadow: 0 0 0 0.4rem rgba($color-text, 0.4);
    outline: none;
  }
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
        }
      }
    }

    .btns {
      display: flex;
      gap: 2.4rem;
      align-items: center;

      .btn {
        padding: 1rem 1.6rem;
      }

      .create-btn {
        background-color: $color-black;
      }
      .login-btn {
        padding: 1rem 3.2rem;
        align-items: center;
        background-color: $color-main-1;
        line-height: 1.1;
      }
      .profile {
        position: relative;

        .info {
          width: 4rem;
          height: 4rem;
          cursor: pointer;

          img,
          p {
            width: 100%;
            height: 100%;
            border-radius: 100%;
          }

          p {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: $color-main-1;
            font-weight: 500;
            font-size: 2rem;
            font-family: $ff-mserrat;
          }
        }

        .dropdown {
          position: absolute;
          background-color: $color-gray-2;
          right: 0;
          padding: 1rem;
          margin-top: 4px;
          width: 23rem;
          border-radius: 4px;
          user-select: none;
          z-index: 2000;

          ul {
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
            color: $color-white;

            li {
              width: 90%;
              padding: 6px;

              &:not(:first-child) {
                cursor: pointer;
                &:hover {
                  background-color: $color-main-2;
                  border-radius: 4px;
                }
              }
              &:last-child:hover {
                background-color: $color-main-1;
              }
            }

            .li-info {
              display: flex;
              flex-direction: column;
              gap: 6px;
              border-bottom: 1px solid $color-gray-3;
              .email {
                font-weight: 500;
                font-size: 1.28rem;
                color: $color-gray-3;
                margin-bottom: 4px;
              }
            }

            .li-logout {
              border-top: 1px solid $color-gray-3;
              P {
              }
            }
          }
        }
      }
    }
  }
}

.dropdown-animation-enter-active,
.dropdown-animation-leave-active {
  transition: opacity 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.dropdown-animation-enter-from,
.dropdown-animation-leave-to {
  opacity: 0;
}
</style>