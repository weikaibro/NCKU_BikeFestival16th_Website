<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <div>
    <div class="text-center text-2xl max-sm:text-base">#學習歷程 #面試攻略 #生涯探索 #入學管道</div>
    <hr>
    <div class="flex flex-wrap justify-center items-center gap-8 my-16 max-sm:mx-4">
      <RouterLink to="/ThemeColumn/LearningProcessStrategy">
        <div
          class="flex flex-col justify-evenly items-center w-[360px] h-[450px] border-2 
            tansition duration-150 hover:-translate-y-5 max-sm:w-[280px] max-sm:h-[370px]"
        >
          <img src="../../assets/themeCol_LearningProcessStrategy/LearningProcessStrategy1.png" alt="LearningProcessStrategy">
          <div class="text-xl font-bold">
            學習歷程全攻略
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/ThemeColumn/EnrollmentForDummies">
        <div
          class="flex flex-col justify-evenly items-center w-[360px] h-[450px] border-2 
            tansition duration-150 hover:-translate-y-5 max-sm:w-[280px] max-sm:h-[370px]"
        >
          <img src="../../assets/themeCol_enrollmentForDummies/enrollmentForDummies1.png" alt="EnrollmentForDummies">
          <div class="text-xl font-bold">
            生涯探索 / 升學網站懶人包
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/ThemeColumn/AllRoadsLeadToRome">
        <div
          class="flex flex-col justify-evenly items-center w-[360px] h-[450px] border-2 
            tansition duration-150 hover:-translate-y-5 max-sm:w-[280px] max-sm:h-[370px]"
        >
          <img src="../../assets/themeCol_AllRoadsLeadToRome/AllRoadsLeadToRome1.png" alt="AllRoadsLeadToRome">
          <div class="text-xl font-bold mx-4">
            升學管道總整理：條條大路通羅馬
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/ThemeColumn/StarPlan">
        <div
          class="flex flex-col justify-evenly items-center w-[360px] h-[450px] border-2 
            tansition duration-150 hover:-translate-y-5 max-sm:w-[280px] max-sm:h-[370px]"
        >
          <img src="../../assets/themeCol_starPlan.png" alt="StarPlan">
          <div class="text-xl font-bold">
            繁星到底怎麼繁？
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