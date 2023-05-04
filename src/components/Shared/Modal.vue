<template>
  <Teleport to="body">
    <transition name="modal-animation">
      <div v-show="modalActive" class="modal" @click="close">
        <transition name="modal-animation-inner">
          <div v-show="modalActive" class="modal-inner">
            <slot />
          </div>
        </transition>
      </div>
    </transition>
  </Teleport>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  modalActive: {
    required: true,
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["close"]);
const close = () => {
  emit("close");
};
</script>

<style lang="scss" scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(6px);
  z-index: 100;

  .modal-inner {
    border-radius: 4px;
    max-width: 70%;
  }
}

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
</style>