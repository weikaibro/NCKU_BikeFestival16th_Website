<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const contents = ref([
  { to:"/ThemeColumn/HealthRoom" , imgSrc: "src/assets/themeCol_healthEye.png", text: "考生保健室" },
  { to:"/ThemeColumn/StayUpStudy" , imgSrc: "src/assets/themeCol_Stayup/themeCol_stayup1.png", text: "熬夜讀書真的好嗎？" },
  { to:"/ThemeColumn/AnxietyBeforeExam" , imgSrc: "src/assets/themeCol_Emotion/themeCol_emotion1.png", text: "考前焦慮怎麼辦？" },
  { to:"/ThemeColumn/DietGuide" , imgSrc: "src/assets/themeCol_DietGuide/themeCol_dietGuide1.png", text: "考生飲食策略" }
])
</script>

<template>
  
  <div>
    <div class="text-center text-2xl">#健身 #心情調適 #睡眠 #飲食</div>
    <hr>
    <div class="flex flex-wrap justify-between items-center my-16 mx-20">
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