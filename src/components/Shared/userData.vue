<template>
  <div class="user-data">
    <div class="image">
      <img class="img" v-if="user?.photoURL" :src="user.photoURL" alt="" />
      <div class="name" v-else>{{ user?.displayName?.slice(0, 1) }}</div>
    </div>
    <div class="info">
      <div class="name">Автор: <span>{{ user!.displayName }}</span></div>
      <div class="date">
        <div class="created">Создано: <span>{{ createdAt }}</span></div>
        <div v-if="editedAt" class="edited">Изменено: <span>{{ editedAt }}</span></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from "vue";

import { useUserStore } from "@/stores/user";

defineProps({
  createdAt: {
    required: true,
    type: String as PropType<String>,
  },
  editedAt: {
    required: false,
    type: String as PropType<String>
  }
});

const userStore = useUserStore();
const user = computed(() => userStore.user);
</script>

<style lang=scss>
@import "@/globals";
.user-data {
  display: flex;
  gap: 1rem;

  .image {
    width: 4rem;
    height: 4rem;
    border-radius: 100%;

    overflow: hidden;
    .img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      text-align: center;
      margin: auto;
    }
    .name {
      background-color: $color-main-1;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      font-size: 2rem;
      font-weight: 500;
      font-family: $ff-mserrat;
      line-height: 1;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 2px 0;
    justify-content: space-between;
    align-items: flex-start;

    .name {
      font-size: 1.6rem;
      font-weight: 500;
      span {
        font-weight: 600;
        color: $color-main-2;
      }
    }
    .date {
      font-size: 1.28rem;
      font-weight: 600;
      color: rgba(#fff, 0.5);
      display: flex;
      gap: 1rem;
      flex-wrap: nowrap; 
    }
  }
}
</style>