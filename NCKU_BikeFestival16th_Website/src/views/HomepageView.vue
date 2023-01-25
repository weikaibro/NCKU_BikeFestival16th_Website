<script setup>
import { ref } from 'vue';
import homepage_backgroundSlider from '../components/homepage_backgroundSlider.vue'
import homepage_dialogBox from '../components/homepage_dialogBox.vue'

import homepage_lineHeader from '../components/homepage_lineHeader.vue'
import homepage_themeActivity from '../components/homepage_themeActivity.vue'
import homepage_totalMemberSlider from '../components/homepage_totalMemberSlider.vue'


</script>

<template>
  <div class="snap-y snap-mandatory flex flex-col">

    <div class="snap-start h-screen">
      <homepage_backgroundSlider />
    </div>

    <div class="snap-start flex flex-row justify-center items-center m-0 p-0 w-screen h-screen">
      <div class="basis-1/6 transition duration-200 hover:-translate-x-3">
        <img src="../assets/arrow_left.svg" alt="leftArrow">
      </div>
      <div class="basis-4/6 shadow-lg h-2/3">
        <homepage_dialogBox />
      </div>
      <div class="basis-1/6 transition duration-200 hover:translate-x-3">
        <img src="../assets/arrow_right.svg" alt="rightArrow">
      </div>
    </div>

    <div class="snap-start flex flex-col justify-center items-center m-0 p-0 w-screen">
      <div class="flex justify-center items-end">
        <homepage_lineHeader headerTitle="四大主題活動" />
      </div>
      <div class="flex flex-col justify-evenly items-center w-screen sm:flex-row">
        <homepage_themeActivity />
      </div>
      <div class="">
        ...
      </div>
    </div>

    <div class="snap-start flex flex-row justify-center items-center m-0 p-0 w-screen h-screen">
      <div class="basis-1/6 transition duration-200 hover:-translate-x-3">
        <img src="../assets/arrow_left.svg" alt="leftArrow">
      </div>
      <div class="basis-4/6 shadow-lg h-2/3">
        <homepage_dialogBox>
          <img class="w-64" src="../assets/logo.svg" alt="">
        </homepage_dialogBox>
      </div>
      <div class="basis-1/6 transition duration-200 hover:translate-x-3">
        <img src="../assets/arrow_right.svg" alt="rightArrow">
      </div>
    </div>

    <div class="snap-start m-0 p-0 w-screen h-screen">
      <div class="h-[20%] flex justify-center items-end">
        <homepage_lineHeader headerTitle="籌備團隊" />
      </div>
      <div class="h-[80%] relative">
        <homepage_totalMemberSlider />
      </div>
    </div>

  </div>
</template>
