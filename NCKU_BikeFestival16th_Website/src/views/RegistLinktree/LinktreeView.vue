<script setup>
import { RouterLink } from "vue-router";
import irregularButton from '../../components/irregularButton.vue'
</script>

<template>
  <div class="bgImg h-screen w-screen flex flex-row bg-black overflow-hidden">

    <div class="basis-1/3 flex flex-col justify-evenly items-end pr-12">
      <RouterLink to="/Registration/Linktree/MockInterview">
        <irregularButton btnTitle="模擬面試" />
      </RouterLink>
      <!-- <RouterLink to="/Registration/Linktree/ExploreLearning"> -->
        <irregularButton btnTitle="探索學習" disable="true" />
      <!-- </RouterLink> -->
      <!-- <RouterLink to="/Registration/Linktree/CollegeCharge"> -->
        <irregularButton btnTitle="大學充值" disable="true"/>
      <!-- </RouterLink> -->
    </div>

    <div class="basis-1/3 flex justify-center items-center ml-6">
      <picture>
        <source class="w-full" srcset="../../assets/bikeFestivalLogo.webp" type="image/webp">
        <img class="w-full" src="../../assets/bikeFestivalLogo.png" alt="NCKUlogo">
      </picture>
    </div>

    <div class="basis-1/3 flex flex-col justify-evenly items-start pl-12">
      <!-- <RouterLink to="/Registration/Linktree/DepartmentTour"> -->
        <irregularButton btnTitle="系館導覽" disable="true" />
      <!-- </RouterLink> -->
      <!-- <RouterLink to="/Registration/Linktree/BikeExperience"> -->
        <irregularButton btnTitle="單車體驗" disable="true" />
      <!-- </RouterLink> -->
      <!-- <RouterLink to="/Registration/Linktree/DeepExperience"> -->
        <irregularButton btnTitle="沉浸式體驗" disable="true" />
      <!-- </RouterLink> -->
    </div>
  </div>
</template>

<style scoped>
.webp .bgImg {
  background-image: url("../../assets/background.webp");
  background-size: 100% 100%;
  -webkit-filter: brightness(120%);
  filter: brightness(120%);
}
.no-webp .bgImg {
  background-image: url("../../assets/background.png");
  background-size: 100% 100%;
  -webkit-filter: brightness(120%);
  filter: brightness(120%);
}
</style>