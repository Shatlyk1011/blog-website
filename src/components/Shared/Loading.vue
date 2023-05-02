<template>
  <div class="c">
    <div class="loader"></div>
  </div>
</template>



<style lang="scss" scoped>
$color-gray-1: #212529;
$color-gray-2: #495057;
$color-gray-3: #868e96;

$color-main-1: #d84f2a;
$color-main-2: #f9744b;

.c {
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -40%);
  .loader {
    display: inline-block;
    border: 4px solid $color-gray-2;
    border-top: 4px solid $color-main-1;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>