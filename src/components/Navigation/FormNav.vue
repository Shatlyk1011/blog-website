<template>
  <div class="form-nav">
    <nav>
      <router-link :to="{ name: 'Home' }" type="logo" class="logo"
        >set-web</router-link
      >
      <div class="btns">
        <button class="btn--update" @click="handleUpdateEmit">Изменить</button>
        <button class="btn--preview" @click="handlePreviewEmit">Превью</button>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  emits: ["update:preview", "update:update"],
  setup(props, { emit }) {
    const handleUpdateEmit = () => {
      emit("update:update");
    };

    const handlePreviewEmit = () => {
      emit("update:preview");
    };
    return { handlePreviewEmit, handleUpdateEmit };
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
  &.update {
    .btn--update {
      color: $color-main-2;
      font-weight: 500;
    }
  }
  &.preview {
    .btn--preview {
      color: $color-main-2;
      font-weight: 500;
    }
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
      }
    }
  }
}
</style>