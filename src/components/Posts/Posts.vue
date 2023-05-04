<template>
  <PostItem v-for="post in formatDate" :key="post.id" :post="post" />
</template>

<script lang="ts" setup>
import { defineProps, computed, PropType } from "vue";
import { Post } from "@/assets/Types";

import PostItem from "@/components/Posts/Post/PostItem.vue";

//форматирование времени
import formatRelative from "date-fns/formatRelative";
import { ru } from "date-fns/locale";

const props = defineProps({
  posts: {
    required: true,
    type: Array as PropType<Post[]>,
  },
});

const date = new Date();
const formatDate = computed(() => {
  if (props.posts) {
    return props.posts.map((post: Post) => {
      let newFormat = Number(post.createdAt!.toDate());
      let newTime = formatRelative(newFormat, date, { locale: ru });
      return { ...post, createdAt: newTime };
    });
  }
});
</script>
