<script setup>
import { RouterLink } from "vue-router";
import irregularButton from '../../components/irregularButton.vue'
</script>

<template>
  <div class="bgImg h-screen w-screen flex flex-row bg-black overflow-hidden">

    <div class="basis-1/3 flex flex-col justify-evenly items-center">
      <RouterLink to="/Registration/Linktree/MockInterview">
        <irregularButton btnTitle="模擬面試" />
      </RouterLink>
      <RouterLink to="/Registration/Linktree/ExploreLearning">
        <irregularButton btnTitle="探索學習" />
      </RouterLink>
      <RouterLink to="/Registration/Linktree/CollegeCharge">
        <irregularButton btnTitle="大學充值" />
      </RouterLink>
    </div>

    <div class="basis-1/3 flex justify-center items-center">
      <img class="w-full" src="../../assets/bikeFestivalLogo.png" alt="">
    </div>

    <div class="basis-1/3 flex flex-col justify-evenly items-center">
      <RouterLink to="/Registration/Linktree/DepartmentTour">
        <irregularButton btnTitle="系館導覽" />
      </RouterLink>
      <RouterLink to="/Registration/Linktree/BikeExperience">
        <irregularButton btnTitle="單車體驗" />
      </RouterLink>
      <RouterLink to="/Registration/Linktree/DeepExperience">
        <irregularButton btnTitle="沉浸式體驗" />
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.bgImg {
  background-image: url("../../assets/background.png");
  background-size: 100% 100%;
}
</style>