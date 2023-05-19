<template>
  <section class="hero">
    <div class="container">
      <div class="description">
        <h1>
          <span>{{ action }} <br/></span> 
          вместе с нами!
        </h1>
          <p>
          Блог о веб разработке, дизайне и о многом другом. Просто о сложном!
        </p>

        <router-link to="/all-posts" type="button" tabindex="0" class="btn">Перейти к постам</router-link>
      </div>
      <div class="img-container">
        <img src="../../assets/images/hero.jpg" alt="Hero image" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import nextElementList from "@/composables/nextElementList";
import { onMounted, onBeforeUnmount, ref } from "vue";
import {TransitionPresets, useTransition} from '@vueuse/core'

const action = ref("Создавай");

let interval = ref();

const changeActionWord = () => {
  interval.value = setInterval(() => {
    const actions = ref(["Создавай", "Делись", "Узнавай"]);
    action.value = nextElementList(actions.value, action.value);
  }, 2700);
};

onMounted(changeActionWord);
onBeforeUnmount(() => {
  clearInterval(interval.value);
});
</script>

<style lang="scss" scoped>
@import "@/globals";

.hero {
  .container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    max-width: 120rem;
    margin: 0 auto;
    @include respond(tab-port) {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }
    .description {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: left;
      gap: 2rem;
      grid-column: 1 / span 5;
      @include respond(tab-land) {
        grid-column: 1 / span 6;
        gap: 1.6rem;
      }
      @include respond(tab-port) {
        text-align: center;
      }

      h1 {
        font-family: $ff-mserrat;
        font-size: 4.8rem;
        font-weight: 600;
        line-height: 1;
        letter-spacing: -2px;
        margin-left: -3px;

        span {
          font-size: 6.1rem;
          background: linear-gradient(180deg, $color-main-1, $color-main-2);
          background: -webkit-linear-gradient(
            180deg,
            $color-main-1,
            $color-main-2
          );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      p {
        font-size: 2rem;
        line-height: 1.4;
      }

      .btn {
        padding: 1.6rem 3.2rem;
        border: 1px solid $color-main-1;
        align-self: flex-start;
        border-radius: 3px;
        box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.3);

        transition: 0.2s cubic-bezier(0.83, 0, 0.17, 1);

        &:focus {
          box-shadow: 0 0 0 0.3rem rgba($color-main-1, 0.8);
          outline: none;
        }

        &:hover {
          box-shadow: none;
          background-color: $color-main-1;
        }
        @include respond(tab-port) {
          align-self: center
        }
      }
    }

    .img-container {
      grid-column: 7 / -1;
      width: 100%;
      height: 100%;
      margin-left: auto;
      border-radius: 0.8rem;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      @include respond(tab-land) {
        grid-column: 8 / -1
      }
    }
  }
}

</style>