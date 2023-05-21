<template>
  <div class="helper-board" >
    <div class="advice" v-if="changeView">
      <h2>Доска помощи при использовании редоктора</h2>
      <ul>
        <li>
          <strong>**text**</strong> или <strong>__text__</strong>
        </li>
        <li><em>*text*</em> или <em>_text_</em></li>
        <li><s>~~text~~</s> ~~text~~</li>
        <li><code>`text`</code> (код)</li>
        
        <li><code>```ts/css/html</code> (блок кода)</li>
        <li>
          <blockquote>> </blockquote>
        </li>
      </ul>
    </div>
    <div v-else><code  style="line-height: 1.8">code color highlight</code> будет применено после опубликации</div>
  </div>
</template>

<script lang="ts" setup>

defineProps({
  changeView: {
    type: Boolean,
    required: true
  }
})
</script>


<style lang="scss" scoped>
@import "@/globals";
.helper-board {
  background-color: $color-gray-2;
  height: min-content;
  padding: 2rem 1rem;
  border-radius: 2px;

  .advice {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
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

      code {
        color: $color-text;
      }
    }
  }
}
</style>