<template>
  <div class="helper-board">
    <h2>Доска помощи при использовании редоктора</h2>
    <ul>
      <li>
        <strong>**text** или __text__</strong>
      </li>
      <li><em>*text* или _text_</em></li>
      <li><s>~~text~~</s> ~~~~</li>
      <li><code>`text`</code> (код)</li>

      <li><code>```</code> (блок кода)</li>
      <li>
        <ul>
          <li>+ или * + space</li>
        </ul>
      </li>
      <li>
        <blockquote>></blockquote>
      </li>
      <li># h1-h6</li>
    </ul>
  </div>
</template>


<style lang="scss" scoped>
@import "@/globals";
.helper-board {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid $color-gray-2;
  background-color: $color-gray-2;
  color: $color-gray-1;
  height: min-content;
  padding: 2rem 1rem;
  border-radius: 2px;

  h2 {
    font-size: 1.8rem;
    color: $color-main-2;
    font-weight: 600;
    letter-spacing: 0.5px;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-left: 2rem;
    font-family: $ff-mserrat;
    color: $color-text;
    li {
      code {
        color: $color-text;
      }
    }
  }
}
</style>