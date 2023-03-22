<template>
  <section class="hero">
    <div class="container">
      <div class="description">
        <h1>
          Все о <span>{{ action }}</span> <br />
          разработке
        </h1>
        <p>
          Блог о веб разработке, дизайне и о многом другом. Просто о сложном!
        </p>

        <button class="btn">Перейти к постам</button>
      </div>
      <div class="img-container">
        <img src="../../assets/images/hero.jpg" alt="Hero image" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import nextElementList from "@/composables/nextElementList.ts";
import { defineComponent, onBeforeMount, onBeforeUnmount, ref } from "vue";

export default defineComponent({
  components: {},
  setup() {
    const action = ref("веб");
    let interval = ref();

    const changeActionWord = () => {
      interval.value = setInterval(() => {
        const actions = ref(["веб", "дизайн", "лого?"]);
        action.value = nextElementList(actions.value, action.value);
        console.log("interval");
      }, 2700);
    };

    onBeforeMount(changeActionWord);
    onBeforeUnmount(() => {
      clearInterval(interval.value);
    });

    return { action };
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
    gap: 4.8rem;
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
        font-size: 6.1rem;
        font-weight: 600;
        line-height: 1;
        letter-spacing: -2px;
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