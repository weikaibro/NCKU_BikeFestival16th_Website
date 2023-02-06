<script setup>
import { RouterLink, RouterView } from "vue-router";
import irregularButton from "../components/irregularButton.vue";
</script>

<template>
  <div
    class="bgImg relative overflow-hidden"
  >
    <!-- corner * 4 -->
    <div class="imgEff absolute left-0 top-0 hover:-translate-x-2 hover:-translate-y-2">
      <picture>
        <source class="w-[300px] max-sm:w-[160px]" srcset="../assets/bg_LeftTop.webp" type="image/webp">
        <img class="w-[300px] max-sm:w-[160px]" src="../assets/bg_LeftTop.png" alt="background">
      </picture>
    </div>
    <div class="imgEff absolute left-0 bottom-0 hover:-translate-x-2 hover:translate-y-2">
      <picture>
        <source class="w-[300px] max-sm:w-[160px]" srcset="../assets/bg_LeftBottom.webp" type="image/webp">
        <img class="w-[300px] max-sm:w-[160px]" src="../assets/bg_LeftBottom.png" alt="background">
      </picture>
    </div>
    <div class="imgEff absolute right-0 top-0 hover:translate-x-2 hover:-translate-y-2">
      <picture>
        <source class="w-[300px] max-sm:w-[160px]" srcset="../assets/bg_RightTop.webp" type="image/webp">
        <img class="w-[300px] max-sm:w-[160px]" src="../assets/bg_RightTop.png" alt="background">
      </picture>
    </div>
    <div class="imgEff absolute right-0 bottom-0 hover:translate-x-2 hover:translate-y-2">
      <picture>
        <source class="w-[300px] max-sm:w-[160px]" srcset="../assets/bg_RightBottom.webp" type="image/webp">
        <img class="w-[300px] max-sm:w-[160px]" src="../assets/bg_RightBottom.png" alt="background">
      </picture>
    </div>

    <!-- router -->
    <div class="grid grid-cols-3 place-items-center 
      w-screen h-screen px-20 py-24 overflow-hidden
      max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:py-10"
    >
      <RouterLink to="/Introduction/Interview">
        <irregularButton btnTitle="模擬面試" />
      </RouterLink>
      <RouterLink to="/Introduction/DeepExperience">
        <irregularButton btnTitle="沉浸式體驗" />
      </RouterLink>
      <RouterLink to="/Introduction/Stage">
        <irregularButton btnTitle="舞台活動" />
      </RouterLink>
      <RouterLink to="/Introduction/Exposition">
        <irregularButton btnTitle="科系博覽" />
      </RouterLink>
      <RouterLink to="/Introduction/BikeExperience">
        <irregularButton btnTitle="單車體驗" />
      </RouterLink>
      <RouterLink to="/Introduction/MindShop">
        <irregularButton btnTitle="心靈柑仔店" />
      </RouterLink>
      <RouterLink to="/Introduction/CollegeCharge">
        <irregularButton btnTitle="大學充值" />
      </RouterLink>
      <RouterLink to="/Introduction/ExploreLearning">
        <irregularButton btnTitle="探索學習" />
      </RouterLink>
      <RouterLink to="/Introduction/EnergyBonus">
        <irregularButton btnTitle="能量加值" />
      </RouterLink>
    </div>
    
  </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .imgEff {
    @apply transition ease-out duration-200;
  }
}
.bgImg {
  background-image: url(../assets/background.png);
  background-size: 100% 100%;
}
.bgImg::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
}
</style>
