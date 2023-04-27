<template>
  <div class="post-item">
    <div class="container">
      <div class="description">
        <router-link
          :to="{ name: 'Post', params: { id: post.id } }"
          class="heading"
          >{{ post.title }}</router-link
        >
        <Tags :tags="post.tags" :white="true" />
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
        <div class="posted">
          Опубликовано: <span>{{ post.createdAt }}</span>
        </div>
        <div class="author">
          Автор: <span>{{ post.userInfo.author }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Post } from "@/assets/Types";

import Tags from "@/components/Shared/Tags.vue";

export default defineComponent({
  name: "PostItem",
  components: { Tags },
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true,
    },
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
  max-width: 100%;

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    padding: 2rem;
    box-shadow: 0 0 4rem rgba(0, 0, 0, 0.12);
    &:hover {
      box-shadow: 0 0 4rem rgba(0, 0, 0, 0.2);
    }

    .description {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1.2rem;
      // justify-content: center;
      .heading {
        font-size: 2.4rem;
        font-family: $ff-mserrat;
        font-weight: 600;
        align-self: flex-start;
        cursor: pointer;
        padding-bottom: 4px;

        transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
        &:hover {
          color: $color-main-1;
        }
      }
      .tags {
        display: flex;
        flex-wrap: wrap;
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
      // margin-top: auto;
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