<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const contents = ref([
  { to:"/ThemeColumn/TimeManagement" , imgSrc: "src/assets/themeCol_TimeManagement/timeManagement (1).png", text1: "時間管理祕笈" },
  { to:"/ThemeColumn/AfterClassInfo" , imgSrc: "src/assets/themeCol_AfterClassInfo/afterClassInfo (1).png", text1: "為生活添加調味：", text2: "課餘活動資訊分享" },
  { to:"/ThemeColumn/unknown" , imgSrc: "src/assets/themeCol_TimeManagement", text1: "標題" },
])
</script>

<template>
  <div>
    <div class="text-center text-2xl">#打工 #課餘活動 #時間管理</div>
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
          <div class="text-xl font-bold">{{ content.text1 }}
            <br> {{ content.text2 }}
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