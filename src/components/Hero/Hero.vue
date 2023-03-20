<template>
  <div class="hero">
    <div class="container">
      <div class="description">
        <h1>
          Все о <span>веб</span> <br />
          разработке
        </h1>
        <p>
          Блог о веб разработке, дизайне и о многом другом. <br />
          Просто о сложном!
        </p>

        <button class="btn">Перейти к постам</button>
      </div>
      <div class="img-container">
        <img src="../../assets/images/hero.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
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

.hero {
  padding: 6rem 0rem;
  .container {
    display: flex;
    gap: 6rem;
    max-width: 120rem;
    margin: 0 auto;
    .description {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: left;
      gap: 2rem;
      .blog-text {
        font-weight: 600;
        font-size: 0.82rem;
        color: $color-main-1;
      }
      h1 {
        font-family: $ff-mserrat;
        font-size: 7.63rem;
        font-weight: 600;
        line-height: 1;
        margin-left: -3px;

        span {
          color: $color-main-2;
        }
      }
      p {
        font-size: 2rem;
        line-height: 1.5;
      }

      button {
        padding: 1.6rem 3.2rem;
        border: 1px solid $color-main-1;
        align-self: flex-start;
        border-radius: 3px;
        box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.3);

        transition: 0.2s cubic-bezier(0.83, 0, 0.17, 1);

        &:hover {
          box-shadow: none;
          background-color: $color-main-1;
          // color: $color-gray-1;
        }
      }
    }

    .img-container {
      max-width: 64rem;
      max-height: 43rem;
      margin-left: auto;
      border-radius: 0.8rem;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>