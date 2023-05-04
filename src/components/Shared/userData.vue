<template>
  <div class="user-data">
    <div class="image">
      <img class="img" v-if="user?.photoURL" :src="user.photoURL" alt="" />
      <div class="name" v-else>{{ user?.displayName?.slice(0, 1) }}</div>
    </div>
    <div class="info">
      <div class="name">{{ user?.displayName }}</div>
      <!-- <div class="date">{{ date }}</div> -->
      <div class="date">{{ date }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from "vue";
import { Timestamp } from "firebase/firestore";

import { useUserStore } from "@/stores/user";

defineProps({
  date: {
    required: false,
    type: Timestamp,
  },
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
    }
    .date {
      font-size: 1.28rem;
      font-weight: 600;
      color: rgba(#fff, 0.5);
    }
  }
}
</style>