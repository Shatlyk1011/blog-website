<template>
  <div class="all-posts">
    <div class="search">
      <button class="clear" @click="clear" v-if="route.params.tag">Очистить результат</button>
      <div class="wrap">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass"/>
        <input v-model.trim="search" type="search" placeholder="Поиск..." ref="searchInput">
      </div>
    </div>
    <!-- if no search result  -->
    <div class="no-result" v-if="posts && !searchResult?.length">
      <p>К сожалению такого поста нету. </p>
      <button @click="clear">Попробуйте еще раз</button>
    </div>
    <!--  -->
    <div class="posts" v-if="posts">
      <Posts :posts="searchResult"  />
    </div>
    <Loading v-else />
  </div>
  <Footer v-if="posts"/>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router';
import Posts from "@/components/Posts/Posts.vue";
import Loading from "@/components/Shared/Loading.vue";
import Footer from "@/components/Footer/Footer.vue";

import getPosts from "@/composables/firestore/getPosts";

import {Post} from '@/assets/Types'
import router from '@/router';

let route = useRoute()
console.log('route', route);
const { posts } = getPosts();
const search = ref('')
const searchInput = ref()
console.log('route', route.params);
const searchResult = computed(() => {
  console.log('tags', route.params.tag);
  if(route.params.tag && posts.value) {
    let tag = route.params.tag as string
    return posts.value.filter((post: Post) => {
      return post.tags.includes(tag)
    })
  }

  if(search.value !== '' && posts.value) {
    return posts.value.filter((post) => {
      return post.title.toLowerCase().includes(search.value.toLowerCase())
    })
  }
  return posts.value
})

const clear = () => {
  search.value = '';
  searchInput.value.focus()
  router.push('/all-posts')
}


</script>

<style lang="scss" scoped>
@import '@/globals';
.all-posts {
  padding: 6rem;

  @include respond(tab-land) {
    padding: 4rem;
  }
  @include respond(tab-port) {
    padding: 2rem;
  } 

  .search {
    display: flex;
    gap: 2rem;
    justify-content: flex-end;
    align-items: center;
    padding: 1rem 1.6rem;
    max-width: 100%;
    margin-bottom: 2.4rem;

    &:focus {
      border: 1px solid $color-gray-3;
    }

    .clear {
      border-radius: 1rem;
      text-align: center;
      background-color: $color-gray-2;
       cursor: pointer;
       padding: 1rem;
      transition: all 0.2s cubic-bezier(0.83, 0, 0.17, 1);

      &:hover {
        background-color: $color-gray-3;
      }
    }

    .wrap {
      display: flex;
      gap: 1rem;
      align-items: center;
      border-bottom: 1px solid $color-gray-2;
      padding: 1rem 0;

      &:focus-within {
        border-bottom: 1px solid $color-gray-3;
      }
      input {
        all: unset;
      }
    }
  }

  .no-result {
    display:flex;
    flex-direction: column;
    gap: 1.6rem;
    p {
      font-size: 3.1rem
    }
    button {
      padding: 1.6rem 2.4rem;
      background-color: $color-main-1;
      align-self: flex-start;
    }
  }

  .posts {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3.2rem;
    
    @include respond(tab-land) {
      grid-template-columns: repeat(2, 1fr);
      gap: 2.4rem;
    }
    @include respond(tab-port) {
      gap: 1.6rem;
    } 
    @include respond(phone) {
      grid-template-columns: 1fr;
    }
  }
}
</style>