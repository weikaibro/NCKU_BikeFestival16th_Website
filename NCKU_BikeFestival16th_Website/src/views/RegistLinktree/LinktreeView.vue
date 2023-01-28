<script setup>
import { RouterLink, RouterView } from "vue-router";
import irregularButton from '../../components/irregularButton.vue'
</script>

<template>
  <div class="bgImg h-screen w-screen flex flex-row bg-black overflow-hidden">

    <div class="basis-1/3 flex flex-col justify-evenly items-center">
      <RouterLink to="/Registration/Linktree/MockInterview">
        <irregularButton btnTitle="模擬面試" />
      </RouterLink>
      <irregularButton btnTitle="探索學習" />
      <irregularButton btnTitle="大學充值" />
    </div>

    <div class="basis-1/3 flex justify-center items-center">
      <img class="w-full" src="../../assets/bikeFestivalLogo.png" alt="">
    </div>

    <div class="basis-1/3 flex flex-col justify-evenly items-center">
      <irregularButton btnTitle="科系博覽" />
      <irregularButton btnTitle="單車體驗" />
      <irregularButton btnTitle="沉浸式體驗" />
    </div>
  </div>
</template>

<style scoped>
.bgImg {
  background-image: url("../../assets/backgrond.png");
  background-size: 100% 100%;
}
</style>