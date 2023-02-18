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
    <div class="text-center text-2xl max-sm:text-base">#健身 #心情調適 #睡眠 #飲食</div>
    <hr>
    <div class="flex flex-wrap justify-center items-center gap-8 my-16 max-sm:mx-4">
      <RouterLink to="/ThemeColumn/HealthRoom">
        <div
          class="scrollEff flex flex-col justify-evenly items-center w-[360px] h-[450px] border-2 
            tansition duration-150 hover:-translate-y-5 max-sm:w-[280px] max-sm:h-[370px]"
        >
          <img src="../../assets/themeCol_healthEye.png" alt="HealthRoom">
          <div class="text-xl font-bold">
            考生保健室
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/ThemeColumn/StayUpStudy">
        <div
          class="scrollEff flex flex-col justify-evenly items-center w-[360px] h-[450px] border-2 
            tansition duration-150 hover:-translate-y-5 max-sm:w-[280px] max-sm:h-[370px]"
        >
          <img src="../../assets/themeCol_Stayup/themeCol_stayup1.png" alt="StayUpStudy">
          <div class="text-xl font-bold">
            熬夜讀書真的好嗎？
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/ThemeColumn/AnxietyBeforeExam">
        <div
          class="scrollEff flex flex-col justify-evenly items-center w-[360px] h-[450px] border-2 
            tansition duration-150 hover:-translate-y-5 max-sm:w-[280px] max-sm:h-[370px]"
        >
          <img src="../../assets/themeCol_Emotion/themeCol_emotion1.png" alt="AnxietyBeforeExam">
          <div class="text-xl font-bold">
            考前焦慮怎麼辦？
          </div>
        </div>
      </RouterLink>
      <RouterLink to="/ThemeColumn/DietGuide">
        <div
          class="scrollEff flex flex-col justify-evenly items-center w-[360px] h-[450px] border-2 
            tansition duration-150 hover:-translate-y-5 max-sm:w-[280px] max-sm:h-[370px]"
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