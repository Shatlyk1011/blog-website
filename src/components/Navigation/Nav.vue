<template>
  <div class="nav">
    <nav>
      <router-link :to="{ name: 'Home' }" type="logo" class="logo">set-web</router-link>
      <font-awesome-icon class="icon " :icon="menuIcon" @click="toggleMenu"/>

      <div class="wrapper" ref="wrapper">
        <ul>
          <router-link  outer-link class="link" to="/all-posts">Все посты</router-link>
          <router-link class="link" to="#">Поиск</router-link>
          <!-- <router-link class="link" to="#">Обо мне</router-link> -->
        </ul>
        <div class="btns">
          <router-link
            v-if="user"
            class="btn create-btn"
            :to="{ name: 'CreatePost' }"
            >Создать пост</router-link
          >
          <div class="error" v-if="error">{{ error }}</div>
          <router-link class="btn login-btn" to="/signup" v-if="!user"
            >Войти</router-link
          >
          <!-- dropdown -->
          <OnClickOutside
            tabindex="0"
            class="profile"
            v-if="user"
            @trigger="dropdown = false"
          >
            <div class="info" @click="dropdown = !dropdown">
              <img :src="user.photoURL" alt="" v-if="user.photoURL" />
              <p v-else-if="!user.photoURL">
                {{ user.displayName?.slice(0, 1).toUpperCase() }}
              </p>
              <p v-else>{{ user.email?.slice(0, 1).toUpperCase() }}</p>
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
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref} from "vue";
import { OnClickOutside } from "@vueuse/components";
import { useUserStore } from "@/stores/user";

import useLogout from "@/composables/auth/useLogout";

const { logout, error } = useLogout();
const dropdown = ref(false);

const userStore = useUserStore();
const user = computed(() => userStore.user);

//menu icon and toggle
const wrapper = ref()
const isOpen = ref(false)
const menuIcon = computed(() =>  isOpen.value ?   ['fas', 'x'] : ['fas', 'bars'])
const toggleMenu = () => {
  isOpen.value = !isOpen.value
  wrapper.value.classList.toggle('active')
}

const handleLogout = async () => {
  dropdown.value = false;
  await logout();

};
</script>

<style lang="scss" scoped>
@import "@/globals";

.nav {
  border-bottom: 1px solid $color-gray-3;
  position: relative;

  & *:focus {
    box-shadow: 0 0 0 0.3rem rgba($color-text, 0.4);
    outline: none;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 110rem;
    margin: 0 auto;
    padding: 1rem 3rem;

    @include respond(phone) {
      overflow-x: hidden;
    }

    .logo {
      color: $color-main-1;
      font-size: 1.8rem;
      font-weight: 600;
    }

    .icon {
      display: none;
      height: 1.8rem;
      width: 2.4rem;
      @include respond(phone) {
        display: block;
        z-index: 1000;
      }
    }

    .wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 4rem;
      transition: all 0.3s cubic-bezier(0.83, 0, 0.17, 1);;

      &.active {
        transform: translateX(0)
      }

      @include respond(tab-port) {
        gap: 1.6rem;
      }

      @include respond(phone) {
        position: absolute;
        backdrop-filter: blur(5px);
        right: 0;
        top: 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 999;
        width: 55%;
        height: 60vh;
        background-color: rgba($color-gray-1, 0.6);
        transform: translateX(100%)
      }
      @include respond(smallest) {
        width: 65%;
      }
    }

    ul {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 2rem;

      @include respond(tab-port) {
        gap: 1rem;
      }

      @include respond(phone) {
        flex-direction: column;
        order: 1;
      }
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
      @include respond(phone) {
        flex-direction: column;
        order: 0;
      }

      .btn {
        padding: 1rem 1.6rem;
      }

      .create-btn {
        background-color: $color-black;
        @include respond(phone) {
          order: 1;
        }
      }
      .login-btn {
        padding: 1rem 3.2rem;
        align-items: center;
        background-color: $color-main-1;
        line-height: 1.1;
      }
      .profile {
        position: relative;
        @include respond(phone) {
          order: 0;
        }

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