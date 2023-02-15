<script setup>
import { RouterLink } from "vue-router";
import irregularButton from '../../components/irregularButton.vue'
</script>

<template>
  <div class="bgImg h-screen w-screen flex flex-row bg-black overflow-hidden max-md:flex-col">

    <div class="basis-1/3 flex flex-col justify-evenly items-end max-md:basis-1/2 max-md:items-center max-md:justify-end max-md:gap-8 max-md:mb-4">
      <RouterLink to="/Registration/Linktree/MockInterview">
        <irregularButton btnTitle="模擬面試" />
      </RouterLink>
      <RouterLink to="/Registration/Linktree/DepartmentTour">
        <irregularButton btnTitle="系館導覽" />
      </RouterLink>
      <RouterLink to="/Registration/Linktree/DeepExperience">
        <irregularButton btnTitle="沉浸式體驗" />
      </RouterLink>
    </div>


    <div class="basis-1/3 flex justify-center items-center ml-6 max-md:hidden">
      <picture>
        <source class="w-full" srcset="../../assets/bikeFestivalLogo.webp" type="image/webp">
        <img class="w-full brightness-125" src="../../assets/bikeFestivalLogo.png" alt="NCKUlogo">
      </picture>
    </div>



    <div class="basis-1/3 flex flex-col justify-evenly items-start max-md:basis-1/2 max-md:items-center max-md:justify-start max-md:gap-8 max-md:mt-4">
      <RouterLink to="/Registration/Linktree/CollegeCharge">
        <irregularButton btnTitle="大學充值" />
      </RouterLink>
      <RouterLink to="/Registration/Linktree/BikeExperience">
        <irregularButton btnTitle="單車體驗" />
      </RouterLink>
      <RouterLink to="/Registration/Linktree/ExploreLearning">
        <irregularButton btnTitle="探索學習" />
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
/* .webp .bgImg {
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
} */
.bgImg {
  background-image: url("../../assets/background.png");
  background-size: 100% 100%;
}
.bgImg::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>