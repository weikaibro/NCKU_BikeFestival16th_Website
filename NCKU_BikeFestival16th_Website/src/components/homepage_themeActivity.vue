<script setup>

</script>

<template>
  <div class="divGrid">
    <img class="w-full" src="https://picsum.photos/200" alt="">
    <span class="transitionEff absolute bottom-[90px] left-4 text-xl text-white">
      備戰二階面試的最佳去處
    </span>
    <span class="absolute bottom-3 text-xl font-semibold">模擬面試</span>
  </div>

  <div class="divGrid">
    <img class="w-full" src="https://picsum.photos/200" alt="">
    <span class="transitionEff absolute bottom-[90px] left-4 text-xl text-white">
      一窺學術殿堂的堂奧
    </span>
    <span class="absolute bottom-3 text-xl font-semibold">科系博覽</span>
  </div>

  <div class="divGrid">
    <img class="w-full" src="https://picsum.photos/200" alt="">
    <span class="transitionEff absolute bottom-[90px] left-4 text-xl text-white">
      來自學長姐的第一手資訊
    </span>
    <span class="absolute bottom-3 text-xl font-semibold">大學充值</span>
  </div>

  <div class="divGrid">
    <img class="w-full" src="https://picsum.photos/200" alt="">
    <span class="transitionEff absolute bottom-[90px] left-4 text-xl text-white">
      自主學習起步走
    </span>
    <span class="absolute bottom-3 text-xl font-semibold">探索學習</span>
  </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .divGrid {
    @apply flex-none relative p-4 m-4 border-2 border-black shadow-lg h-[350px] w-[300px] ;
  }
}

.divGrid:hover .transitionEff {
  padding: 20px 15px;
  visibility: visible;
  opacity: 1;
  max-width: 80%;
}

.transitionEff {
  opacity: 0;
  visibility: hidden;
  background: rgba(0, 0, 0, 0.65);
  transition: visibility 0s, opacity 0.5s linear;
  -webkit-transition: visibility 0s, opacity 0.5s linear;
}
</style>