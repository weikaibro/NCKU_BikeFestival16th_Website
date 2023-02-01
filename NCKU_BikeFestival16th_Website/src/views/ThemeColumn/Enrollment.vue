<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const contents = ref([
  { to:"/ThemeColumn/LearningProcessStrategy" , imgSrc: "src/assets/comingSoonWithBg.png", text: "學習歷程全攻略" },
  { to:"/ThemeColumn/EnrollmentForDummies" , imgSrc: "src/assets/themeCol_enrollmentForDummies/enrollmentForDummies1.png", text: "生涯探索 / 升學網站懶人包" },
  { to:"/ThemeColumn/AllRoadsLeadToRome" , imgSrc: "src/assets/comingSoonWithBg.png", text: "升學管道總整理：條條大路通羅馬" },
  { to:"/ThemeColumn/StarPlan" , imgSrc: "src/assets/themeCol_starPlan.png", text: "繁星到底怎麼繁？" }
])
</script>

<template>
  <div>
    <div class="text-center text-2xl">#學習歷程 #面試攻略 #生涯探索 #入學管道</div>
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