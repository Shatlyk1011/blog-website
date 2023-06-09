<template>
  <div class="post-item">
    <div class="container">
      <div class="description">
        <router-link
          :to="{ name: 'Post', params: { id: post.id } }"
          class="heading"
          >{{ post.title }}
        </router-link>
        <ul class="tags">
          <router-link :to="{name: 'AllPosts', params: {tag: tag}}"
            class="tag" v-for="tag in post.tags" :key="tag">
            #{{ tag }}
          </router-link>
        </ul>
      </div>
      <div class="img-container">
        <img :src="post.imageUrl" alt="" />
        <div class="read">
          <router-link
            tabindex="0"
            class="link"
            :to="{ name: 'Post', params: { id: post.id } }"
          >
            Прочитать
          </router-link>
        </div>
      </div>
      <div class="credentials">
        <div class="posted">
          Создан: <span>{{ post.createdAt }}</span>
        </div>
        <div class="author">
          Автор: <span>{{ post.userInfo.author }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { type Post } from "@/assets/Types";

defineProps({
  post: {
    type: Object as PropType<Post>,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@import "@/globals";
.post-item {
  max-width: 100%;

  & *:focus {
    box-shadow: 0 0 0 0.3rem rgba(#fff, 0.4);
    box-sizing: content-box;
    border-radius: 1px;
    outline: none;
  }
  .container {
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    padding: 2rem;
    box-shadow: 0 0 4rem rgba(0, 0, 0, 0.2);

    @include respond(tab-port) {
      padding: 1.6rem
    }

    transition: all 0.3s cubic-bezier(0.83, 0, 0.17, 1);
    &:hover {
      box-shadow: 0 0 4rem rgba(0, 0, 0, 0.4);
    }

    .description {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1.2rem;
      .heading {
        font-size: 2.4rem;
        font-family: $ff-mserrat;
        font-weight: 600;
        align-self: flex-start;
        cursor: pointer;
        padding-bottom: 4px;
        word-break: break-word;

        transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
        &:hover {
          color: $color-main-1;
        }
      }
      .tags {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 1.4rem;
        list-style: none;
        padding: 0;
        width: 100%;

        .tag {
          font-weight: 500;
          display: flex;
          color: $color-text;
          background-color: $color-gray-2;
          padding: 4px 1rem;
          border-radius: 4px;

          &.white {
            color: $color-text;
          }
        }
      }
    }
    .img-container {
      max-width: 100%;
      height: 20rem;
      position: relative;
      margin-top: auto;

      .read {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1000;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.8);

        transition: all 0.2s cubic-bezier(0.83, 0, 0.17, 1);

        &:hover,
        &:focus-within {
          opacity: 1;
        }

        .link {
          cursor: pointer;
          font-size: 1.28rem;
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.3px;
          padding: 1rem 1.4rem;
          background-color: $color-main-1;
          border-radius: 6px;
          line-height: 1;
          color: rgba($color-white, 0.8);

          transition: 0.2s cubic-bezier(0.83, 0, 0.17, 1);

          &:hover {
            background-color: $color-main-2;
          }
          &:active {
            transform: translateY(4px) scale(0.98);
          }
        }
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 500;
      }
    }
    .credentials {
      display: flex;
      flex-direction: column;
      justify-self: flex-end;
      gap: 4px;
      font-size: 1.28rem;
      color: rgba($color-gray-3, 0.7);
      .posted {
        span {
          font-weight: 600;
          line-height: 1.2;
        }
      }
      .author {
        span {
          color: $color-main-1;
          cursor: pointer;
          line-height: 1.2;

          &:hover {
            border-bottom: 1px solid currentColor;
          }
        }
      }
    }
  }
}
</style>