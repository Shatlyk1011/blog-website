<template>
  <div class="create-post">
    <form-nav
      class="nav"
      @update:change="changeView = true"
      @update:preview="changeView = false"
    />
    <keep-alive>
      <component
        :class="['component', { preview: !changeView }]"
        @update:draft="updateDraft"
        :setDraft="true"
        :is="changeView ? SubmitForm : PreviewPost"
        :postToSetDraft="draft"
        :post="draft"
      />
    </keep-alive>
    <HelperBoard class="helper-board" v-if="changeView" />
    <div class="submit" v-if="changeView">
      <button class="btn btn--submit">Опубликовать</button>
      <button class="btn btn--isPending" v-if="false" disabled>
        Опубликовать
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, KeepAlive, computed } from "vue";

import SubmitForm from "@/components/TipTap/SubmitForm.vue";
import PreviewPost from "@/components/Posts/Post/PreviewPost.vue";
import FormNav from "@/components/Navigation/FormNav.vue";
import HelperBoard from "@/components/TipTap/HelperBoard.vue";

import getDocument from "@/composables/firestore/getDocument";

import { useUserStore } from "@/stores/user";

onMounted(async () => await getDoc("createDraft", user.value!.uid));

let changeView = ref(true);

const userStore = useUserStore();
const user = computed(() => userStore.user);

const { getDoc, document: draft } = getDocument();
const updateDraft = async () => await getDoc("createDraft", user.value!.uid);
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
.create-post {
  max-width: 128rem;
  display: grid;
  grid-template-columns: 6.4rem 7fr 3fr;
  grid-template-rows: min-content 1fr min-content;
  column-gap: 1rem;
  margin: 0 auto;
  height: 100vh;
  box-sizing: border-box;
  padding: 0 2rem 2rem;

  .nav {
    grid-column: 1 / 3;
  }

  .component {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: auto;
    grid-column: 2 / 3;
    grid-row: 2 / 3;

    &.preview {
      grid-column: 1 / 3;
      max-width: 85rem;
      margin: 0 auto;
    }
  }
  .helper-board {
    grid-column: 3 / 4;
    grid-row: 2 / -2;
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
      &--submit {
        &:hover {
          background-color: rgba($color-main-1, 0.8);
        }
      }

      &--isPending {
        background-color: rgba($color-gray-3, 0.5);
        color: rgba($color-text, 0.5);
      }
    }
  }
}
</style>