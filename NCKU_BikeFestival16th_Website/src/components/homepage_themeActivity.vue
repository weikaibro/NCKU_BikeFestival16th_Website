<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <RouterLink to="/Introduction/Interview">
    <div class="divGrid">
      <picture>
        <source class="w-full" srcset="../assets/themeActivity/MockInterview.webp" type="image/webp">
        <img class="w-full" src="../assets/themeActivity/MockInterview.png" alt="Interview">
      </picture>
      <span class="transitionEff absolute bottom-[120px] left-4 text-xl text-white">
        備戰二階面試的最佳去處
      </span>
      <span class="absolute bottom-4 text-2xl font-semibold">模擬面試</span>
    </div>
  </RouterLink>

  <RouterLink to="/Introduction/Exposition">
    <div class="divGrid">
      <picture>
        <source class="w-full" srcset="../assets/themeActivity/Exposition.png" type="image/webp">
        <img class="w-full" src="../assets/themeActivity/Exposition.png" alt="Exposition">
      </picture>
      <span class="transitionEff absolute bottom-[120px] left-4 text-xl text-white">
        一窺學術殿堂的堂奧
      </span>
      <span class="absolute bottom-4 text-2xl font-semibold">科系博覽</span>
    </div>
  </RouterLink>

  <RouterLink to="/Introduction/CollegeCharge">
    <div class="divGrid">
      <img class="w-full" src="" alt="">
      <picture>
        <source class="w-full" srcset="../assets/themeActivity/CollegeCharge.webp" type="image/webp">
        <img class="w-full" src="../assets/themeActivity/CollegeCharge.png" alt="CollegeCharge">
      </picture>
      <span class="transitionEff absolute bottom-[120px] left-4 text-xl text-white">
        來自學長姐的第一手資訊
      </span>
      <span class="absolute bottom-4 text-2xl font-semibold">大學充值</span>
    </div>
  </RouterLink>

  <RouterLink to="/Introduction/ExploreLearning">
    <div class="divGrid">
      <picture>
        <source class="w-full" srcset="../assets/themeActivity/ExploreLearning.webp" type="image/webp">
        <img class="w-full" src="../assets/themeActivity/ExploreLearning.png" alt="ExploreLearning">
      </picture>
      <span class="transitionEff absolute bottom-[120px] left-4 text-xl text-white">
        自主學習起步走
      </span>
      <span class="absolute bottom-4 text-2xl font-semibold">探索學習</span>
    </div>
  </RouterLink>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .divGrid {
    @apply relative p-4 m-7 border-2 border-black shadow-lg h-[410px] w-[370px] 
      transition duration-200 hover:-translate-y-5;
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
  transition: visibility 0s, opacity 0.3s linear;
  -webkit-transition: visibility 0s, opacity 0.3s linear;
}
</style>