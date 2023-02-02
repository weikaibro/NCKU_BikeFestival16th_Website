<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const contents = ref([
  { to:"" , imgSrc: "assets/themeCol_TimeManagement/timeManagement1.png", text1: "" },
  { to:"" , imgSrc: "", text1: "", text2: "" },
  { to:"/ThemeColumn/" , imgSrc: "", text1: "" },
  { to:"/ThemeColumn/" , imgSrc: "", text1: "" },
])
</script>

<template>
  <div>
    <div class="text-center text-2xl">#打工 #課餘活動 #時間管理</div>
    <hr>
    <div class="flex flex-wrap justify-evenly items-center my-16 mx-20">

      <RouterLink to="/ThemeColumn/TimeManagement">
        <div
          class="flex flex-col justify-evenly items-center w-[400px] h-[500px] border-2 
            tansition duration-150 hover:-translate-y-5"
        >
          <img src="../../assets/themeCol_TimeManagement/timeManagement1.png" alt="TimeManagement">
          <div class="text-xl font-bold">
            時間管理祕笈
          </div>
        </div>
      </RouterLink>

      <RouterLink to="/ThemeColumn/AfterClassInfo">
        <div
          class="flex flex-col justify-evenly items-center w-[400px] h-[500px] border-2 
            tansition duration-150 hover:-translate-y-5"
        >
          <img src="../../assets/themeCol_AfterClassInfo/afterClassInfo1.png" alt="AfterClassInfo">
          <div class="text-xl font-bold">
            為生活添加調味：
            <br> 課餘活動資訊分享
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/ThemeColumn/Slashie">
        <div
          class="flex flex-col justify-evenly items-center w-[400px] h-[500px] border-2 
            tansition duration-150 hover:-translate-y-5"
        >
          <img src="../../assets/Slashie.png" alt="Slashie">
          <div class="text-xl font-bold">
            分身不乏術——斜槓是在斜什麼
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/ThemeColumn/PartTimeJob">
        <div
          class="flex flex-col justify-evenly items-center w-[400px] h-[500px] border-2 
            tansition duration-150 hover:-translate-y-5"
        >
          <img src="../../assets/PartTimeJob.png" alt="PartTimeJob">
          <div class="text-xl font-bold">
            踏入社會的第一步：打工大小事
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