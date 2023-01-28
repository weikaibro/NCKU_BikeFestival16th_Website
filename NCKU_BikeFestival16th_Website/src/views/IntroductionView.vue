<script setup>
import { RouterLink, RouterView } from "vue-router";
import irregularButton from "../components/irregularButton.vue";
</script>

<template>
  <div
    class="bgImg relative grid grid-cols-3 place-items-center 
    bg-black w-screen h-screen px-20 py-24 overflow-hidden"
  >
    <!-- background -->
    <div class="imgEff absolute left-0 top-0 hover:-translate-x-2 hover:-translate-y-2">
      <img class="w-[300px]" src="../assets/bg_LeftTop.png" alt="">
    </div>
    <div class="imgEff absolute left-0 bottom-0 hover:-translate-x-2 hover:translate-y-2">
      <img class="w-[300px]" src="../assets/bg_LeftBottom.png" alt="">
    </div>
    <div class="imgEff absolute right-0 top-0 hover:translate-x-2 hover:-translate-y-2">
      <img class="w-[300px]" src="../assets/bg_RightTop.png" alt="">
    </div>
    <div class="imgEff absolute right-0 bottom-0 hover:translate-x-2 hover:translate-y-2">
      <img class="w-[300px]" src="../assets/bg_RightBottom.png" alt="">
    </div>
    

    <!-- router -->
    <RouterLink to="/Introduction/InterviewView">
      <irregularButton btnTitle="模擬面試" />
    </RouterLink>
    <RouterLink to="/Introduction/DeepExperienceView">
      <irregularButton btnTitle="沉浸式體驗" />
    </RouterLink>
    <RouterLink to="/Introduction/StageView">
      <irregularButton btnTitle="舞台活動" />
    </RouterLink>
    <RouterLink to="/Introduction/ExpositionView">
      <irregularButton btnTitle="科系博覽" />
    </RouterLink>
    <RouterLink to="/Introduction/BikeExperienceView">
      <irregularButton btnTitle="單車體驗" />
    </RouterLink>
    <RouterLink to="/Introduction/MindShopView">
      <irregularButton btnTitle="心靈柑仔店" />
    </RouterLink>
    <RouterLink to="/Introduction/CollegeChargeView">
      <irregularButton btnTitle="大學充值" />
    </RouterLink>
    <RouterLink to="/Introduction/SearchLearning">
      <irregularButton btnTitle="探索學習" />
    </RouterLink>
    <RouterLink to="/Introduction/EnergyBonusView">
      <irregularButton btnTitle="能量加值" />
    </RouterLink>
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
  background-image: url(../assets/backgrond.png);
  background-size: 100% 100%;
}
</style>
