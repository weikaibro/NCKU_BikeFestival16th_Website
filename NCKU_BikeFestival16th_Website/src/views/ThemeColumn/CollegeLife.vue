<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { RouterLink } from 'vue-router';
function fadeInEff() {
  let effElement = document.querySelectorAll(".scrollEff");
  for (var i = 0; i < effElement.length; i++) {
    var elem = effElement[i]
    var distInView = elem.getBoundingClientRect().top - window.innerHeight + 300;
    elem.classList.remove("fadeIn");
    if (distInView < 0) {
      elem.classList.add("fadeIn");
    }
  }
}
onMounted(() => {
  window.addEventListener('scroll', fadeInEff); 
  fadeInEff()
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', fadeInEff); 
})
</script>

<template>
  <div>
    <div class="text-center text-2xl max-sm:text-base">#打工 #課餘活動 #時間管理</div>
    <hr>
    <div class="flex flex-wrap justify-center items-center gap-8 my-16 max-sm:mx-4">

      <RouterLink to="/ThemeColumn/TimeManagement">
        <div
          class="scrollEff flex flex-col justify-evenly items-center w-[360px] h-[450px] border-2 
            tansition duration-150 hover:-translate-y-5 max-sm:w-[280px] max-sm:h-[370px]"
        >
          <img src="../../assets/themeCol_TimeManagement/timeManagement1.png" alt="TimeManagement">
          <div class="text-xl font-bold">
            時間管理祕笈
          </div>
        </div>
      </RouterLink>

      <RouterLink to="/ThemeColumn/AfterClassInfo">
        <div
          class="scrollEff flex flex-col justify-evenly items-center w-[360px] h-[450px] border-2 
            tansition duration-150 hover:-translate-y-5 max-sm:w-[280px] max-sm:h-[370px]"
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
          class="scrollEff flex flex-col justify-evenly items-center w-[360px] h-[450px] border-2 
            tansition duration-150 hover:-translate-y-5 max-sm:w-[280px] max-sm:h-[370px]"
        >
          <img src="../../assets/Slashie.png" alt="Slashie">
          <div class="text-xl font-bold mx-4">
            分身不乏術——斜槓是在斜什麼
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/ThemeColumn/PartTimeJob">
        <div
          class="scrollEff flex flex-col justify-evenly items-center w-[360px] h-[450px] border-2 
            tansition duration-150 hover:-translate-y-5 max-sm:w-[280px] max-sm:h-[370px]"
        >
          <img src="../../assets/PartTimeJob.png" alt="PartTimeJob">
          <div class="text-xl font-bold mx-4">
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
hr {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.75), rgba(0,0,0,0));
}

@keyframes fade_in {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fadeIn {
  animation: fade_in ease 1s;
  animation-delay: 0.3s;
  animation-fill-mode: forwards;
}

.scrollEff {
  opacity: 0;
}
</style>