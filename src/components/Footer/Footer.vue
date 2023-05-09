<template>
  <footer> 
    <div class="container">
      <!-- <div class="logo">set-/</div> -->
      <p>Для сотрудничество над этим сайтом пишите в мессенджерах</p>
      <div class="icons">
        <a target="_blank" href="https://instagram.com/shatlykabdullayew">
          <img src="@/assets/images/instagram.svg" alt="instagram">
        </a>
        <a target="_blank" href="https://vk.com/shatlyk99">
          <img src="@/assets/images/telegram.svg" alt="telegram">
        </a>
        <a target="_blank" href="https://t.me/sh_1415926535">
          <img src="@/assets/images/vk.svg" alt="vk">
        </a>
      </div>
    </div> 
  </footer>
</template>

<style lang="scss" scoped>
@import '@/globals';
  footer {
    .container {
      border-top: 1px solid $color-gray-3;
      padding: 3rem 0;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      justify-content: center;
      align-items: center;
      
      p{
        font-size: 2.4rem;
        font-family: $ff-mserrat;
      }
      .icons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        img {
          width: 2rem;
          height: 2rem;
          cursor: pointer;
          transition: all 0.2s ease-in-out;

          &:hover {
            transform: translateY(-3px) scale(1.05);
          }
        }
      }
    }
  }
</style>