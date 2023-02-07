<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <div>
    <div class="text-center text-2xl max-sm:text-base">#筆記心法 #投資理財 #自學平台</div>
    <hr>
    <div class="flex flex-wrap justify-center items-center gap-8 my-16 max-sm:mx-4">
      <RouterLink to="/ThemeColumn/NotePro">
        <div
          class="flex flex-col justify-evenly items-center w-[360px] h-[450px] border-2 
            tansition duration-150 hover:-translate-y-5 max-sm:w-[280px] max-sm:h-[370px]"
        >
          <img src="../../assets/themeCol_NotePro/NotePro1.jpg" alt="NotePro">
          <div class="text-xl font-bold">
            筆記 Pro
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/ThemeColumn/PlatformForDummies">
        <div
          class="flex flex-col justify-evenly items-center w-[360px] h-[450px] border-2 
            tansition duration-150 hover:-translate-y-5 max-sm:w-[280px] max-sm:h-[370px]"
        >
          <img class="w-[250px] max-sm:w-[200px]" src="../../assets/themeCol_PlatformForDummies/PlatformForDummies1.png" alt="PlatformForDummies">
          <div class="text-xl font-bold">
            平台資源懶人包
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/ThemeColumn/FinancialManagement">
        <div
          class="flex flex-col justify-evenly items-center w-[360px] h-[450px] border-2 
            tansition duration-150 hover:-translate-y-5 max-sm:w-[280px] max-sm:h-[370px]"
        >
          <img src="../../assets/themeCol_FinancialManagement/themeCol_FinancialManagement1.png" alt="FinancialManagement">
          <div class="text-xl font-bold">
            比運彩更好賺－投資理財
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/ThemeColumn/BookRecommend">
        <div
          class="flex flex-col justify-evenly items-center w-[360px] h-[450px] border-2 
            tansition duration-150 hover:-translate-y-5 max-sm:w-[280px] max-sm:h-[370px]"
        >
          <img src="../../assets/themeCol_BookRecommend/BookRecommend1.jpg" alt="BookRecommend">
          <div class="text-xl font-bold">
            不私藏好書推薦
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