<template>
  <div class="preview-post" v-if="post">
    <div class="cover-image">
      <!-- src="@/assets/images/image-template.jpg" -->
      <img
        class="img"
        :src="imagePreviewUrl"
        alt=""
        title="Ваша обложка тут "
      />
    </div>
    <div class="container">
      <div class="menu">
        <font-awesome-icon class="icon" icon="fa-solid fa-ellipsis" />
      </div>

      <div class="title">{{ post.title }}</div>
      <div class="wrap">
        <ul class="tags">
          <li class="tag" v-for="tag in post.tags" :key="tag">
            <span>#{{ tag }}</span>
          </li>
        </ul>
        <div class="time">
          <font-awesome-icon icon="fa-solid fa-book-open" />
          <span>{{ post.timeToRead }} минут</span>
        </div>
      </div>

      <div class="html" v-html="post.html"></div>
    </div>
  </div>
  <div v-else><Loading /></div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";

import { Post, PostDraft } from "@/assets/Types";

import Loading from "@/components/Shared/Loading.vue";

defineProps({
  post: {
    type: Object as PropType<Post | PostDraft>,
  },
  imagePreviewUrl: {
    type: String
  }
});
</script>

<style lang="scss" scoped>
@import "@/globals";

.preview-post {
  max-width: 85rem;
  margin: 0 auto;
  background-color: $color-gray-2; 
  border-radius: 2px;
  overflow: hidden;
  .cover-image {
    width: 100%;
    .img {
      width: 100%;
      max-height: 32rem;
      object-fit: cover;
      position: relative;
      top: 0;
    }
  }
  .container {
    padding: 3.2rem 6.4rem;
    position: relative;
    @include respond(tab-land) {
      padding: 2.4rem 3.2rem;
    }
    .menu {
      position: absolute;
      right: 2rem;
      top: 2rem;
      text-align: right;

      .icon {
        padding: 2px 6px;
        border-radius: 4px;
        line-height: 1;
        cursor: pointer;

        transition: 0.2s cubic-bezier(0.83, 0, 0.17, 1);

        &:hover {
          background-color: $color-gray-3;
        }
      }

      .dropdown {
        padding: 6px 1rem;
        text-align: left;
        border-radius: 4px;
        background-color: $color-gray-1;
        list-style: none;
        color: $color-text;
        width: 8rem;
        .li,
        li {
          font-size: 1rem;
          padding: 2px 4px;
          border-radius: 3px;
          cursor: pointer;

          &:hover {
            color: $color-main-2;
          }
          &:last-child {
            margin-top: 6px;

            &:hover {
              color: $color-text;
            }
          }
        }
      }
    }

    .user-data {
      margin-bottom: 2rem;
    }

    .title {
      font-size: 4.8rem;
      line-height: 0.9;
      font-family: $ff-mserrat;
      font-weight: 700;
      color: white;
      margin-bottom: 2rem;
    }
    .wrap {
      display: flex;
      margin-left: auto;

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
          color: $color-main-2;
          background-color: $color-gray-1;
          padding: 4px 1rem;
          border-radius: 4px;

          &.white {
            color: $color-text;
          }
        }
      }
      .time {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: $color-gray-3;
        gap: 1rem;
        padding: 6px 10px;
        width: max-content;

        span {
          font-size: 1.28rem;
          font-weight: 500;
          white-space: nowrap;
        }
      }
    }

    .html {
      margin-top: 2rem;
      width: 100%;

      h1,
      h2,
      h3,
      h4,
      h5 {
        font-family: $ff-mserrat;
        line-height: 1.1;
        font-weight: 700;
        color: $color-white;
        margin: 1.6rem 0 6px 0;
      }

      li {
        font-size: 2rem;
      }
    }
  }
}
</style>
