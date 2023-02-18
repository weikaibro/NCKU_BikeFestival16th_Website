<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import homepage_lineHeader from "../components/homepage_lineHeader.vue";
function fadeInEff() {
  let effElement = document.querySelectorAll(".scrollEff");
  for (var i = 0; i < effElement.length; i++) {
    var elem = effElement[i]
    var distInView = elem.getBoundingClientRect().top - window.innerHeight + 300;
    if (distInView < 0) {
      elem.classList.add("fadeIn");
    }
  }
}
onMounted(() => {
  let effElement = document.querySelectorAll(".scrollEff");
  for (var i = 0; i < effElement.length; i++) {
    var elem = effElement[i]
    if (elem.classList.contains("fadeIn")) {
      elem.classList.remove("fadeIn");
    }
  }
  window.addEventListener('scroll', fadeInEff);
  fadeInEff()
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', fadeInEff); 
})

</script>

<template>
  <div>
    <Navbar/>
    <div class="py-32 max-lg:px-12">
      <div class="flex justify-center items-center mb-24">
        <homepage_lineHeader headerTitle="合作夥伴" />
      </div>

      <div class="w-[70%] grid grid-cols-2 mx-auto gap-32 text-xl max-md:grid-cols-1 max-lg:w-[90%] max-lg:gap-20">
        <div class="scrollEff flex flex-col justify-end border-b-2 border-black pb-6 max-md:text-center">
          <img class="w-[90%] mx-auto" src="../assets/Partner/partner1.png" alt="Partner">
          <div class="mt-20 mb-4 text-3xl font-bold">法律白話文運動</div>
          <div>由一群致力於散播法治種子的法律人成立的新媒體。</div>
        </div>
        <div class="scrollEff flex flex-col justify-end border-b-2 border-black pb-6 max-md:text-center">
          <img src="../assets/Partner/partner2.png" alt="Partner">
          <div class="my-4 text-3xl font-bold">Lindt 瑞士蓮</div>
          <div>1845年起只專注製造巧克力的品牌，是全世界第一個用可可濃度區分巧克力的品牌。</div>
        </div>
        <div class="scrollEff flex flex-col justify-end border-b-2 border-black pb-6 max-md:text-center">
          <img class="mx-auto" src="../assets/Partner/partner3.png" alt="Partner">
          <div class="my-4 text-3xl font-bold">hellolulu</div>
          <div>由兩位設計師好友John&Ronny於2005年創立的香港品牌。</div>
        </div>
        <div class="scrollEff flex flex-col justify-end border-b-2 border-black pb-6 max-md:text-center">
          <img src="../assets/Partner/partner4.png" alt="Partner">
          <div class="mt-20 mb-4 text-3xl font-bold">台南大飯店</div>
          <div>台南大飯店於西元1964年開幕營運，是南台灣第一家國際觀光飯店。</div>
        </div>
      </div>

    </div>
    <Footer />
  </div>
</template>

<style scoped>
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
  animation-fill-mode: forwards;
}

.scrollEff {
  opacity: 0;
}
</style>
