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
      return TaiwaneseLiterature;
    }
    case 2: {
      return History;
    }
    case 3: {
      return ForeignLanguages;
    }
    default:
      break;
  }
});
const showDept = ref(false)
const show = () => {
  showDept.value = !showDept.value;
};
</script>

<template>
  <div>
    <Navbar />
    <div class="flex mx-12 h-[1300px] max-xl:mx-0 max-xl:flex-col max-xl:h-[1500px] max-sm:h-[1200px]">
      <!-- selected dept -->
      <div class="flex flex-col mr-20 mt-20 w-[500px] bg-black text-white text-center max-xl:mt-0 max-xl:w-screen xl:h-[550px]">
        <!-- RWD -->
        <div @click="show" class="text-3xl mt-10 mb-6 font-bold xl:hidden">文學院</div>
        <ul v-if="showDept" class="xl:hidden">
          <li 
            v-for="(chosen, index) in chosenDept"
            :key="index"
            class="transition duration-100 ease-linear py-4 text-xl bg-black hover:cursor-pointer hover:scale-110"
            :class="{ changeBg: index === userChosenNum }"
            @click="userChosen(index)"
          >
          {{ chosen }}
          </li>
        </ul>
        <RouterLink to="/DeptManual">
          <div class="text-3xl mt-6 mb-10 font-bold xl:hidden" v-if="showDept">
            回前頁
          </div>
        </RouterLink>
        <!-- Laptop -->
        <div class="text-3xl mt-10 mb-6 font-bold max-xl:hidden">文學院</div>
        <ul class="max-xl:hidden">
          <li 
            v-for="(chosen, index) in chosenDept"
            :key="index"
            class="transition duration-100 ease-linear py-4 text-xl bg-black hover:cursor-pointer hover:scale-110"
            :class="{ changeBg: index === userChosenNum }"
            @click="userChosen(index)"
          >
          {{ chosen }}
          </li>
        </ul>
        <RouterLink to="/DeptManual">
          <div class="text-3xl mt-6 mb-10 font-bold max-xl:hidden">
            回前頁
          </div>
        </RouterLink>
      </div>

      <!-- pdf -->
      <Transition mode="out-in" class="w-full h-[950px] pl-20 mt-20 border-l-2 border-black max-2xl:pl-0 max-xl:border-l-0 max-sm:mt-6">
        <component :is="showContent" />
      </Transition>
    </div>

    <div class="mt-16 p-0 w-screen h-[800px] hidden">
      <div class="flex justify-center items-center text-black text-3xl mb-16 font-bold">學長姐經驗分享</div>
      <div class="bg-slate-200">
        <!-- <homepage_totalMemberSlider/> -->
        <picture class>
          <source srcset="../../assets/comingSoon.webp" type="image/webp">
          <img src="../../assets/comingSoon.png" alt="">
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