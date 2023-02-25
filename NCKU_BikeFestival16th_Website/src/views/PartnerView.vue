<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import homepage_lineHeader from "../components/homepage_lineHeader.vue";
function fadeInEff() {
  let effElement = document.querySelectorAll(".scrollEff");
  for (var i = 0; i < effElement.length; i++) {
    var elem = effElement[i]
    var distInView = elem.getBoundingClientRect().top - window.innerHeight + 100;
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
const partnerIndex = ref(100)
const userChoose = (index) => {
  partnerIndex.value = index
  console.log(partnerIndex.value)
}
</script>

<template>
  <div>
    <Navbar/>
    <div class="py-52 max-lg:px-12">
      <div class="flex justify-center items-center mb-24">
        <homepage_lineHeader headerTitle="合作夥伴" />
      </div>

      <div class="w-[70%] grid grid-cols-2 mx-auto gap-32 text-xl max-md:grid-cols-1 max-lg:w-[90%] max-lg:gap-20 max-sm:text-base">
        <div class="scrollEff flex flex-col justify-end border-b-2 border-black pb-6 max-md:text-center">
          <img @click="userChoose(0)" class="w-[90%] mx-auto cursor-pointer" src="../assets/Partner/partner1.png" alt="Partner">
          <div class="mt-20 mb-4 text-3xl font-bold max-sm:text-2xl">法律白話文運動</div>
          <div>由一群致力於散播法治種子的法律人成立的新媒體。</div>
        </div>
        <div class="scrollEff flex flex-col justify-end border-b-2 border-black pb-6 max-md:text-center">
          <img src="../assets/Partner/partner2.png" alt="Partner">
          <div class="my-4 text-3xl font-bold max-sm:text-2xl">Lindt 瑞士蓮</div>
          <div>1845年起只專注製造巧克力的品牌，是全世界第一個用可可濃度區分巧克力的品牌。</div>
        </div>
        <div class="scrollEff flex flex-col justify-end border-b-2 border-black pb-6 max-md:text-center">
          <img class="w-[50%] mx-auto" src="../assets/Partner/partner3.png" alt="Partner">
          <div class="mt-12 my-4 text-3xl font-bold max-sm:text-2xl max-sm:mt-6">hellolulu</div>
          <div>由兩位設計師好友John&Ronny於2005年創立的香港品牌。</div>
        </div>
        <div class="scrollEff flex flex-col justify-end border-b-2 border-black mt-12 pb-6 max-md:text-center">
          <img class="w-[80%] mx-auto" src="../assets/Partner/partner4.png" alt="Partner">
          <div class="mt-28 mb-4 text-3xl font-bold max-sm:text-2xl max-sm:mt-16">台南大飯店</div>
          <div>台南大飯店於西元1964年開幕營運，是南台灣第一家國際觀光飯店。</div>
        </div>
        <div class="scrollEff flex flex-col justify-end border-b-2 border-black mt-12 pb-6 max-md:text-center">
          <img class="w-[40%] mx-auto" src="../assets/Partner/partner5.png" alt="Partner">
          <div class="mt-24 my-4 text-3xl font-bold max-sm:text-2xl max-sm:mt-16">台灣可果美</div>
          <div>於1967年於台南成立，秉持「自然。健康」的經營理念。</div>
        </div>
        <div class="scrollEff flex flex-col justify-end border-b-2 border-black mt-12 pb-6 max-md:text-center">
          <img class="w-[50%] mx-auto" src="../assets/Partner/partner6.png" alt="Partner">
          <div class="mt-24 my-4 text-3xl font-bold max-sm:text-2xl max-sm:mt-16">保力達</div>
          <div>以絕佳的品質為國人的健康打底。</div>
        </div>
        <div class="scrollEff flex flex-col justify-end border-b-2 border-black mt-12 pb-6 max-md:text-center">
          <img class="w-[50%] mx-auto" src="../assets/Partner/partner7.png" alt="Partner">
          <div class="mt-28 my-4 text-3xl font-bold max-sm:text-2xl max-sm:mt-16">ADHIL</div>
          <div>專營手機配件、耳機、行動電源、充電器、生活用品等。</div>
        </div>
        <div class="scrollEff flex flex-col justify-end border-b-2 border-black mt-12 pb-6 max-md:text-center">
          <img class="w-[55%] mx-auto" src="../assets/Partner/partner8.png" alt="Partner">
          <div class="mt-32 my-4 text-3xl font-bold max-sm:text-2xl max-sm:mt-16">KISSME 花漾美姬</div>
          <div>致力於系列彩妝，讓每位女性自信展現各種樣貌。</div>
        </div>
        <div class="scrollEff flex flex-col justify-end border-b-2 border-black mt-12 pb-6 max-md:text-center">
          <img class="w-[75%] mx-auto" src="../assets/Partner/partner9.png" alt="Partner">
          <div class="mt-32 my-4 text-3xl font-bold max-sm:text-2xl max-sm:mt-16">Snapask 時課問</div>
          <div>致力於幫助學生解決課業問題的全方位線上學習平台。</div>
        </div>
        <div class="scrollEff flex flex-col justify-end border-b-2 border-black mt-8 pb-6 max-md:text-center">
          <img class="w-[80%] mx-auto" src="../assets/Partner/partner10.png" alt="Partner">
          <div class="mt-16 my-4 text-3xl font-bold max-sm:text-2xl">JANDI 企業通訊軟體</div>
          <div>全台各地的學生組織都在用！</div>
        </div>
      </div>

      <!-- <div>
        <div class="fixed bg-white w-[1000px] h-[200px] overflow-y-scroll" v-if="partnerIndex == 0">
          <img class="w-[800px]" src="../assets/Partner/partner1.png" alt="">
        </div>
      </div> -->

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
