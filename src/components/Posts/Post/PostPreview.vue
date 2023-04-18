<template>
  <div class="post-item">
    <div class="container">
      <div class="description">
        <router-link
          :to="{ name: 'Post', params: { id: post.id } }"
          class="heading"
          >{{ post.title }}</router-link
        >
        <ul class="tags">
          <li class="tag" v-for="t in post.tags" :key="t">{{ t }}</li>
        </ul>
      </div>
      <div class="img-container">
        <img :src="post.imageUrl" alt="" />
        <div class="read">
          <router-link
            class="link"
            :to="{ name: 'Post', params: { id: post.id } }"
          >
            Прочитать
          </router-link>
        </div>
      </div>
      <div class="credentials">
        <div style="display: flex; justify-content: space-between">
          <div class="posted">Опубликовано: <span>12.05.2002</span></div>
          <div class="author">
            Автор: <span>{{ post.userInfo.author }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Post from "@/assets/types/Post";

export default defineComponent({
  name: "PostPreview",
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
  },

  setup(props) {
    return {};
  },
});
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
.post-item {
  .container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    gap: 4rem;
    padding: 1.6rem;
    box-shadow: 0 0 4rem rgba(0, 0, 0, 0.12);
    &:hover {
      box-shadow: 0 0 4rem rgba(0, 0, 0, 0.2);
    }

    .description {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      justify-content: center;
      .heading {
        font-size: 2.4rem;
        font-family: $ff-mserrat;
        font-weight: 600;
        align-self: flex-start;
        cursor: pointer;
        border-bottom: 1px solid transparent;
        padding-bottom: 4px;

        transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
        &:hover {
          color: $color-main-1;
          border-bottom: 1px solid currentColor;
        }
      }
      .tags {
        display: flex;
        gap: 1rem;
        list-style: none;
        padding: 0;
        .tag {
          padding: 6px 18px;
          background-color: $color-gray-2;
          color: $color-white;
          border-radius: 2rem;
        }
      }
      .html {
        width: 100%;

        & p {
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
        }
      }
      p {
        font-size: 1.6rem;
        line-height: 1.4;
      }
    }
    .img-container {
      width: 100%;
      min-height: 22rem;
      position: relative;

      .read {
        opacity: 0;
        position: absolute;

        z-index: 1000;
        margin: auto;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.8);

        transition: 0.2s cubic-bezier(0.83, 0, 0.17, 1);

        &:hover {
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
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 100%;
        max-height: 100%;
        object-fit: cover;
        z-index: 500;
      }
    }
    .credentials {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: auto;
      color: rgba($color-gray-3, 0.7);
      .posted {
        span {
          font-weight: 600;
        }
      }
      .author {
        span {
          color: $color-main-1;
          cursor: pointer;

          &:hover {
            border-bottom: 1px solid currentColor;
          }
        }
      }
      .source {
        span {
          color: $color-main-2;
          border-bottom: 1px solid currentColor;
          cursor: pointer;

          &:hover {
            border-bottom: 1px solid transparent;
          }
        }
      }
    }
  }
}
</style>