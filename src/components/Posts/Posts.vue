<template>
  <PostItem v-for="post in formatDate" :key="post.id" :post="post" />
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { Post } from "@/assets/Types";

import PostItem from "@/components/Posts/Post/PostItem.vue";

//форматирование времени
import formatRelative from "date-fns/formatRelative";
import { ru } from "date-fns/locale";

export default defineComponent({
  name: "Post",
  components: { PostItem },
  props: ["posts"],

  setup(props) {
    const date = new Date();
    const formatDate = computed(() => {
      if (props.posts) {
        return props.posts.map((post: Post) => {
          let newFormat = Number(post.createdAt.toDate());
          let newTime = formatRelative(newFormat, date, { locale: ru });
          return { ...post, createdAt: newTime };
        });
      }
    });

    return { formatDate };
  },
});
</script>

<style lang="scss" scoped>
</style>