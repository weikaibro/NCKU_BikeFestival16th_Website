<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <div>
    <div class="text-center text-2xl">#筆記心法  #投資理財 #自學平台</div>
    <hr>
    <div class="flex flex-wrap justify-evenly items-center my-16 mx-20">
      <RouterLink to="/ThemeColumn/NotePro">
        <div
          class="flex flex-col justify-evenly items-center w-[400px] h-[500px] border-2 
            tansition duration-150 hover:-translate-y-5"
        >
          <img src="../../assets/comingSoonWithBg.png" alt="NotePro">
          <div class="text-xl font-bold">
            筆記 Pro
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/ThemeColumn/PlatformForDummies">
        <div
          class="flex flex-col justify-evenly items-center w-[400px] h-[500px] border-2 
            tansition duration-150 hover:-translate-y-5"
        >
          <img src="../../assets/comingSoonWithBg.png" alt="PlatformForDummies">
          <div class="text-xl font-bold">
            平台資源懶人包
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/ThemeColumn/FinancialManagement">
        <div
          class="flex flex-col justify-evenly items-center w-[400px] h-[500px] border-2 
            tansition duration-150 hover:-translate-y-5"
        >
          <img src="../../assets/themeCol_FinancialManagement/themeCol_FinancialManagement1.png" alt="FinancialManagement">
          <div class="text-xl font-bold">
            比運彩更好賺－投資理財
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