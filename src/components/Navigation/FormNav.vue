<template>
  <div class="form-nav">
    <nav>
      <router-link :to="{ name: 'Home' }" type="logo" class="logo"
        >set-web</router-link
      >
      <div class="btns">
        <button :class="{ active: change }" @click="emitChange">
          Изменить
        </button>
        <button :class="[{ active: preview }]" @click="emitPreview">
          Превью
        </button>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const emit = defineEmits(["update:change", "update:preview"]);

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
</script>

<style lang="scss">
@import "@/globals";

.form-nav {
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
    padding: 1rem 0 1rem 3rem;
    @include respond(smallest) {
      padding: 1rem;
    }

    .logo {
      color: $color-main-1;
      font-size: 1.8rem;
      font-weight: 600;
    }

    .btns {
      display: flex;
      gap: 1rem;
      font-size: 1.6rem;
      @include respond(smallest) {
        font-size: 1.4rem;
        gap: 3px;
      }
 
      button {
        padding: 6px;
        transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

        &:hover {
          background-color: $color-gray-2;
        }

        &.active {
          color: $color-main-1;
          font-weight: 600;
        }
      }
    }
  }
}
</style>