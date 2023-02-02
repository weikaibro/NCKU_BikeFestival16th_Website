<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  
  <div>
    <div class="text-center text-2xl">#健身 #心情調適 #睡眠 #飲食</div>
    <hr>
    <div class="flex flex-wrap justify-between items-center my-16 mx-20">
      <RouterLink to="/ThemeColumn/HealthRoom">
        <div
          class="flex flex-col justify-evenly items-center w-[400px] h-[500px] border-2 
            tansition duration-150 hover:-translate-y-5"
        >
          <img src="../../assets/themeCol_healthEye.png" alt="HealthRoom">
          <div class="text-xl font-bold">
            考生保健室
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/ThemeColumn/StayUpStudy">
        <div
          class="flex flex-col justify-evenly items-center w-[400px] h-[500px] border-2 
            tansition duration-150 hover:-translate-y-5"
        >
          <img src="../../assets/themeCol_Stayup/themeCol_stayup1.png" alt="StayUpStudy">
          <div class="text-xl font-bold">
            熬夜讀書真的好嗎？
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/ThemeColumn/AnxietyBeforeExam">
        <div
          class="flex flex-col justify-evenly items-center w-[400px] h-[500px] border-2 
            tansition duration-150 hover:-translate-y-5"
        >
          <img src="../../assets/themeCol_Emotion/themeCol_emotion1.png" alt="AnxietyBeforeExam">
          <div class="text-xl font-bold">
            考前焦慮怎麼辦？
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/ThemeColumn/DietGuide">
        <div
          class="flex flex-col justify-evenly items-center w-[400px] h-[500px] border-2 
            tansition duration-150 hover:-translate-y-5"
        >
          <img src="../../assets/themeCol_DietGuide/themeCol_dietGuide1.png" alt="DietGuide">
          <div class="text-xl font-bold">
            考生飲食策略
          </div>
        </div>
      </RouterLink>
    </div>

  </div>
</template>

<style scoped>
hr {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.75), rgba(0,0,0,0));
}
</style>