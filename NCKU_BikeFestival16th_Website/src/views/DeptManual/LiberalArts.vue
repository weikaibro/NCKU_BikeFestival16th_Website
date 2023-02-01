<script setup>
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import Navbar from '../../components/Navbar.vue';
import Footer from '../../components/Footer.vue';
import homepage_totalMemberSlider from '../../components/homepage_totalMemberSlider.vue';
import ChineseLiterature from '../DeptManual/LiberalArtsManual/ChineseLiterature.vue'
import ForeignLanguages from '../DeptManual/LiberalArtsManual/ForeignLanguages.vue'
import History from '../DeptManual/LiberalArtsManual/History.vue'
import TaiwaneseLiterature from '../DeptManual/LiberalArtsManual/TaiwaneseLiterature.vue'
const chosenDept = ref([
  "中國文學系",
  "台灣文學系",
  "歷史學系",
  "外國語文學系",
])
const userChosenNum = ref(0)
const userChosen = (index) => {
  userChosenNum.value = index;
  console.log(index)
}
const showContent = computed(() => {
  switch (userChosenNum.value) {
    case 0: {
      return ChineseLiterature;
    }
    case 1: {
      return ForeignLanguages;
    }
    case 2: {
      return History;
    }
    case 3: {
      return TaiwaneseLiterature;
    }
    default:
      break;
  }
});
</script>

<template>
  <div>
    <Navbar />
    <div class="flex mt-20 mx-12">
      <!-- selected dept -->
      <div class="flex flex-col mr-12 w-[300px] h-[550px] bg-black text-white text-center">
        <div class="text-3xl mt-10 mb-6 font-bold">文學院</div>
        <ul>
          <li 
            v-for="(chosen, index) in chosenDept"
            :key="index"
            class="transition duration-100 ease-linear py-4 text-lg bg-black hover:cursor-pointer hover:scale-110"
            :class="{ changeBg: index === userChosenNum }"
            @click="userChosen(index)"
          >
          {{ chosen }}
          </li>
        </ul>
        <RouterLink to="/DeptManual">
          <div class="text-3xl mt-6 mb-10 font-bold">
            回前頁
          </div>
        </RouterLink>
      </div>
      <!-- reader -->
      <div class="relative w-[1000px] h-[950px] text-white pl-12 border-l-2 border-black">
        <component :is="showContent" />
      </div>
    </div>

    <div class="mt-16 p-0 w-screen h-[800px]">
      <div class="flex justify-center items-center text-black text-3xl mb-16">學長姐經驗分享</div>
      <div class="relative">
        <homepage_totalMemberSlider/>
        <picture>
          <source class="absolute top-10" srcset="../../assets/comingSoon.webp" type="image/webp">
          <img class="absolute top-10" src="../../assets/comingSoon.png" alt="">
        </picture>
      </div>
      
      <!-- <img src="../../assets/comingSoonWithBg.png" alt=""> -->
    </div>

    <Footer />
  </div>
</template>

<style scoped>
.changeBg {
  background-color: #003cd1;
}

</style>