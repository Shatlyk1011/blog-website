<template>
  <div class="form-nav">
    <nav>
      <router-link :to="{ name: 'Home' }" type="logo" class="logo"
        >set-web</router-link
      >
      <div class="btns">
        <button
          :class="['btn--update', { active: change }]"
          @click="emitChange"
        >
          Изменить
        </button>
        <button
          :class="['btn--update', { active: preview }]"
          @click="emitPreview"
        >
          Превью
        </button>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  emits: ["update:change", "update:preview"],
  setup(props, { emit }) {
    let change = ref(true);
    let preview = ref(false);

    const emitChange = () => {
      change.value = true;
      preview.value = false;
      emit("update:change");
    };

    const emitPreview = () => {
      change.value = false;
      preview.value = true;

      emit("update:preview");
    };
    return { emitChange, emitPreview, change, preview };
  },
});
</script>

<style lang="scss">
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
.form-nav {
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

    .btns {
      display: flex;
      gap: 1rem;
      font-size: 1.6rem;

      button {
        padding: 1rem;

        transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

        &:hover {
          background-color: $color-gray-2;
        }

        &.active {
          color: $color-main-1;
          font-weight: 500;
        }
      }
    }
  }
}
</style>