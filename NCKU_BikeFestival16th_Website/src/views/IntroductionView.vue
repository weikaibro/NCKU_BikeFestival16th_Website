<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div
    class="bg-black w-full h-[665px] px-20 py-24 grid gap-x-28 gap-y-20 grid-cols-3"
  >
    <RouterLink to="/Introduction/InterviewView" class="option">模擬面試</RouterLink>
    <RouterLink to="/Introduction/DeepExperienceView" class="option">沉浸式體驗</RouterLink>
    <RouterLink to="/Introduction/StageView" class="option">舞台活動</RouterLink>
    <RouterLink to="/Introduction/ExpositionView" class="option">科系博覽</RouterLink>
    <RouterLink to="/Introduction/BikeExperienceView" class="option">單車體驗</RouterLink>
    <RouterLink to="/Introduction/MindShopView" class="option">心靈柑仔店</RouterLink>
    <RouterLink to="/Introduction/CollegeChargeView" class="option">大學充值</RouterLink>
    <RouterLink to="/Introduction/SearchLearning" class="option">探索學習</RouterLink>
    <RouterLink to="/Introduction/EnergyBonusView" class="option">能量加值</RouterLink>
  </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
@layer components {
  .option {
    @apply border border-white text-white text-4xl text-center py-7;
  }
}
</style>
