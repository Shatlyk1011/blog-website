<template>
  <div class="signup">
    <div class="form-container">
      <h2>Войдите</h2>
      <form @submit.prevent="handleSignin">
        <Input
          type="email"
          class="input"
          v-model="email"
          placeholder="Email"
          required
        />
        <div class="password">
          <Input
            ref="passwordRef"
            :type="passwordBool ? 'text' : 'password'"
            class="input"
            v-model="password"
            placeholder="Пароль"
            required
          />
          <font-awesome-icon
            @click="passwordBool = !passwordBool"
            title="Скрыть/показать пароль"
            class="eye"
            icon="fa-solid fa-eye"
          />
        </div>
        <div class="error" v-if="error">{{ error }}</div>
        <button>Войти</button>

        <span>
          Нету аккаунта?
          <router-link class="link" :to="{ name: 'Signup' }">
            Регистрация</router-link
          >
        </span>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import useSignin from "@/composables/auth/useSignin";

import Input from "@/components/Shared/Input.vue";

import { ref } from "vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Input },
  setup() {
    const email = ref("");
    const password = ref("");
    let passwordBool = ref(false);

    const { error, isPending, login } = useSignin();

    const handleSignin = async () => {
      await login(email.value, password.value);
    };

    return { email, password, passwordBool, isPending, error, handleSignin };
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

.signup {
  margin: 6.4rem 0;
  height: 65%;
  width: 100%;
  text-align: center;
  border-radius: 4px;

  .form-container {
    padding: 4.8rem 3.2rem;
    border-radius: 4px;
    background-color: $color-gray-1;
    width: 45%;
    margin: 0 auto;
    h2 {
      font-size: 3.1rem;
      font-weight: 600;
      color: $color-main-1;
      width: 100%;
      margin-bottom: 4.2rem;
    }
    .sign-btns {
      display: flex;
      gap: 3.2rem;
      margin-top: 4.2rem;
      justify-content: center;

      & button {
        border: 1px solid $color-gray-2;
        padding: 1.6rem 1rem;
        display: flex;
        gap: 1rem;
        justify-content: center;
        align-items: center;

        &:hover {
          border-color: $color-gray-3;
          box-shadow: 6.7px 6.7px 8.4px rgba(#fff, 0.06);
        }
      }
    }

    h3 {
      text-align: center;
      margin-top: 6.4rem;
      font-weight: 700;
      color: $color-gray-3;
      font-family: $ff-mserrat;
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4.8rem;
      text-align: left;
      width: 100%;

      .input {
        all: unset;
        border-bottom: 1px solid $color-gray-2;
        background-color: transparent;
        width: 100%;
        padding: 1rem;
        outline: none;
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
        padding: 1.8rem 0;
        width: 100%;
        text-align: center;

        transition: 0.2s cubic-bezier(0.83, 0, 0.17, 1);

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