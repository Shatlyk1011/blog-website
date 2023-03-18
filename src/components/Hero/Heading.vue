<template>
  <div class="heading">
    <p>The Блог</p>
    <h1>Все о веб разработке</h1>
    <div>Самые последние новости, технологии и ресурсы</div>
  </div>
</template>


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
$ff-oswald: "Oswald", sans-serif;

.heading {
  margin-top: 8rem;
  text-align: center;
  p {
    color: $color-main-1;
    font-family: $ff-oswald;
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 1.6rem;
    margin-bottom: 8px;
  }

  h1 {
    font-size: 3.9rem;
    margin-bottom: 1rem;
    line-height: 1.1;
  }

  div {
    font-size: 1.28rem;
    color: $color-gray-3;
  }
}
</style>