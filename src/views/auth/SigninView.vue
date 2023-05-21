<template>
  <div class="signup">
    <div class="form-container">
      <h2>Войдите</h2>
      <form @submit.prevent="handleSignin">
        <Input
          type="email"
          v-model="email"
          placeholder="Email"
          required
        />
        <div class="password">
          <Input
            :type="togglePassword ? 'text' : 'password'"
            v-model="password"
            placeholder="Пароль"
            autocomplete="on"
            ref="passwordRef"
            required
          />
          <font-awesome-icon
            @click="togglePassword = !togglePassword"
            title="Скрыть/показать пароль"
            class="eye"
            icon="fa-solid fa-eye"
          />
        </div>
        <div class="error" v-if="error">{{ error }}</div>
        <button :disabled="isPending">Войти</button>

        <span>
          Нету аккаунта?
          <router-link class="link" :to="{ name: 'Signup' }">
            Регистрация
          </router-link>
        </span>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import router from "@/router";

import Input from "@/components/Shared/Input.vue";

import useSignin from "@/composables/auth/useSignin";

const email = ref("");
const password = ref("");
let togglePassword = ref(false);

const { error, isPending, login } = useSignin();

const handleSignin = async () => {
  await login(email.value, password.value);
  if (!error.value) {
    router.push("/");
  }
};
</script>

<style lang="scss" scoped>
@import '@/globals';
.signup {
  margin: 6.4rem 0;
  width: 100%;
  text-align: center;
  .form-container {
    padding: 4.8rem 3.2rem;
    width: 40%;
    margin: 0 auto;
    h2 {
      font-size: 3.1rem;
      font-weight: 600;
      color: $color-main-1;
      width: 100%;
      margin-bottom: 3.2rem;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4.8rem;
      text-align: left;
      width: 100%;

      input {
        all: unset;
        border-bottom: 1px solid $color-gray-2;
        background-color: transparent;
        width: 100%;
        padding: 1rem;
        box-sizing: border-box;

        &:focus {
          border-bottom: 1px solid $color-gray-3;

          & ~ .eye {
            border-bottom: 1px solid $color-gray-3;
          }
        }
        &::placeholder {
          font-family: inherit;
          color: $color-gray-3;
        }

        &[type="password"] {
          letter-spacing: 4px;

          &::placeholder {
            letter-spacing: normal;
          }
        }
      }

      .password {
        width: 100%;
        display: flex;

        .eye {
          border-bottom: 1px solid $color-gray-2;
          align-self: center;
          padding: 1rem 0;
          margin-top: auto;
          cursor: pointer;
        }
      }

      button {
        background-color: $color-main-1;
        padding: 1.4rem ;
        font-size: 2rem;
        width: 100%;
        text-align: center;

        transition: all 0.2s cubic-bezier(0.83, 0, 0.17, 1);

        &:hover {
          background-color: $color-main-2;
        }
      }

      span {
        .link {
          color: $color-main-1;
          font-weight: 500;
          border-bottom: 1px solid $color-main-1;
        }
      }
    }
  }
}
</style>