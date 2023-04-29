<template>
  <Teleport to="body">
    <transition name="modal-animation">
      <div v-show="!modalActive" class="modal">
        <transition name="modal-animation-inner">
          <div v-show="!modalActive" class="modal-inner">
            <font-awesome-icon
              @click="close"
              class="icon"
              icon="fa-solid fa-times-circle"
            />

            <slot />
            <button @click="close" type="button">Закрыть</button>
          </div>
        </transition>
      </div>
    </transition>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Modal",

  props: ["modalActive"],
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };
    return { close };
  },
});
</script>

<style lang="scss" scoped>
.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}
.modal-animation-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1) 0.2s;
}
.modal-animation-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-animation-inner-leave-to {
  transform: scale(0.8);
}

.modal-animation-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1) 0.2s;
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.2);
  z-index: 100;

  .modal-inner {
    position: relative;
    max-width: 64rem;
    width: 80%;
    background-color: #fff;
    padding: 64px 16px;
    z-index: 1000;

    .icon {
      position: absolite;
      top: 2rem;
      right: 2rem;
      font-size: 2rem;
      cursor: pointer;
    }
  }
}
</style>