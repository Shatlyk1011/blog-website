<template>
  <div class="update-post">
    <form-nav
      class="nav"
      @update:change="changeView = true"
      @update:preview="changeView = false"
    />
    <div class="error" v-if="error">{{ error }}</div>
    <transition name="switch" mode="out-in" appear>
      <keep-alive>
        <component
        :class="['component', { preview: !changeView }]"
        @update:updateDraft="updateDraft"
        @update:isPending="pendingState"
        @update:imagePreviewUrl="setImagePreviewUrl"
        :is="changeView ? SubmitForm : PreviewPost"
        :postToUpdate="post"
        :post="post"
        :imagePreviewUrl="imagePreviewUrl"
        ref="childComponent"
        />
      </keep-alive>
    </transition>
    <div class="submit" v-if="changeView">
      <button class="btn " @click="handleUpdate" :disabled="isPending">Сохранить</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, KeepAlive, computed, type Ref } from "vue";

import SubmitForm from "@/components/TipTap/SubmitForm.vue";
import PreviewPost from "@/components/Posts/Post/PreviewPost.vue";
import FormNav from "@/components/Navigation/FormNav.vue";

import getDocument from "@/composables/firestore/getDocument";
import { useUserStore } from "@/stores/user";

const props = defineProps({
  id: {
    required: true,
    type: String,
  },
});

const { getDoc, document: post, error } = getDocument();
const userStore = useUserStore();
const user = computed(() => userStore.user);
const childComponent = ref()

let changeView = ref(true);
let isPending = ref(false)
let imagePreviewUrl = ref('')

onMounted(async () => await getDoc("posts", props.id));

const updateDraft = async () => await getDoc("updateDraft", user.value!.uid);

const handleUpdate = () => childComponent.value.handleSubmit()

const pendingState = (payload: boolean) => isPending.value = payload

const setImagePreviewUrl = (payload: Ref<string>) => {
  console.log('payload', payload);
  imagePreviewUrl = payload
}
</script>

<style lang="scss" scoped>
@import "@/globals";
.update-post {
  max-width: 128rem;
  display: grid;
  grid-template-columns: 6.4rem 7fr 3fr 6.4rem;
  grid-template-rows: min-content 1fr min-content;
  column-gap: 1rem;
  margin: 0 auto;
  padding-bottom: 2rem;
  height: 100vh;
  box-sizing: border-box;
  @include respond(tab-port) {
    grid-template-columns: 3.2rem 7fr 3fr 3.2rem;
  }
  @include respond(phone) {
   grid-template-columns: 1rem 7fr 3fr 1rem;
  }
  .nav {
    grid-column: 1 / 3;
    @include respond(tab-land) {
      grid-column: 1 / 4;
    }
  }
  .component {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: auto;
    grid-column: 2 / 3;
    grid-row: 2 / 3;

    @include respond(tab-land) {
      grid-column: 2/4;
    }

    &.preview {
      grid-column: 1 / 3;
      max-width: 85rem;
      margin: 0 auto;

      @include respond(tab-land) {
        grid-column: 2/4
      }
    }
  }

  .helper-board {
    grid-column: 3 / 4;
    grid-row: 2 / -2;
    @include respond(tab-land) {
      display: none;
    }
  }

  .submit {
    grid-column: 2 / 3;
    grid-row: 3 / -1;
    .btn {
      padding: 1rem 1.6rem;
      margin-top: 1rem;
      color: $color-text;
      background-color: $color-main-1;
      display: inline-block;
      justify-self: start;
      border-radius: 2px;
      transition: all 0.2s cubic-bezier(0.83, 0, 0.17, 1);
      &:hover {
        background-color: rgba($color-main-1, 0.8);
      }

      &[disabled] {
        background-color: rgba($color-gray-3, 0.5);
        color: rgba($color-text, 0.5);
      }
    }
  }
}

//transition between components
.switch-enter-active,
.switch-leave-active {
  transition: opacity 0.2s linear;
}
.switch-enter-from,
.switch-leave-to {
  opacity: 0;
}
</style>