<template>
  <div class="post-item">
    <div class="container">
      <div class="description">
        <div class="heading">Введение в Javascript</div>
        <ul class="tags">
          <li class="tag">javascript</li>
          <li class="tag">react</li>
        </ul>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
          ipsum quae tempora blanditiis harum vitae deserunt quibusdam? Ex ad
          aut ipsum eligendi, consequatur sint obcaecati.
        </p>

        <div class="credentials">
          <div style="display: flex; justify-content: space-between">
            <div class="posted">Опубликовано: <span>13.06.23</span></div>
            <div class="author">Автор: <span>Shatlyk Abdullayev</span></div>
          </div>
          <div class="source">Источник: <span>google.com</span></div>
        </div>
      </div>
      <div class="img-container">
        <img src="../../assets/images/sample2.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
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
    grid-template-columns: 3fr 2fr;
    gap: 4rem;
    padding: 2rem 3rem;
    box-shadow: 0 0 4rem rgba(0, 0, 0, 0.12);

    .description {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      justify-content: center;
      .heading {
        font-size: 2.4rem;
        font-family: $ff-mserrat;
        font-weight: 600;
      }
      .tags {
        display: flex;
        gap: 1rem;
        .tag {
          padding: 6px 18px;
          background-color: $color-gray-2;
          color: $color-white;
          border-radius: 2rem;
        }
      }
      p {
        font-size: 1.6rem;
        line-height: 1.4;
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
    .img-container {
      width: 100%;
      min-height: 21rem;
      position: relative;
      object-fit: contain;

      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 100%;
        max-height: 100%;
      }
    }
  }
}
</style>