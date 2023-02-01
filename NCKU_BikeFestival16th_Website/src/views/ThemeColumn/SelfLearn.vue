<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const contents = ref([
  { to:"/ThemeColumn/NotePro" , imgSrc: "src/assets/comingSoonWithBg.png", text: "筆記 Pro" },
  { to:"/ThemeColumn/PlatformForDummies" , imgSrc: "src/assets/comingSoonWithBg.png", text: "平台資源懶人包" },
  { to:"/ThemeColumn/FinancialManagement" , imgSrc: "src/assets/themeCol_FinancialManagement/themeCol_FinancialManagement1.png", text: "比運彩更好賺－投資理財" },
])
</script>

<template>
  <div>
    <div class="text-center text-2xl">#筆記心法  #投資理財 #自學平台</div>
    <hr>
    <div class="flex flex-wrap justify-evenly items-center my-16 mx-20">
      <RouterLink 
        v-for="content in contents"
        :key="contents.indexOf(content)"
        :to="content.to"
      >
        <div
          class="flex flex-col justify-evenly items-center w-[400px] h-[500px] border-2 
            tansition duration-150 hover:-translate-y-5"
        >
          <img :src="content.imgSrc" alt="">
          <div class="text-xl font-bold">{{ content.text }}</div>
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