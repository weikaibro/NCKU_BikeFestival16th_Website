<script setup>
import Navbar from '../../../components/Navbar.vue';
import Footer from '../../../components/Footer.vue';

import DepartmentMockInterview from '../RegistPage/MockInterview_threeForm/DepartmentMockInterview.vue'
import LearningExperience from '../RegistPage/MockInterview_threeForm/LearningExperience.vue'
import ProfessorInterview from '../RegistPage/MockInterview_threeForm/ProfessorInterview.vue'

import { ref, computed } from "vue";
const buttonName = ref(["各系模擬面試", "教授面試技巧演講 - 2/4 開放", "學習歷程加油站 - 2/4 開放"]);
const num = ref(0);
const Switch = (index) => {
  num.value = index;
  console.log(num.value)
};
const Show = computed(() => {
  switch (num.value) {
    case 0: {
      return DepartmentMockInterview;
    }
    case 1: {
      // return LearningExperience;
    }
    case 2: {
      // return ProfessorInterview;
    }
    default:
      break;
  }
});
</script>

<template>
  <div class="bg-black text-white">
    <Navbar />

    <div class="flex flex-col justify-center items-center gap-16 mt-10 max-md:gap-1">
      <span class="text-5xl font-bold tracking-wider">模擬面試</span>

      <!-- registration form * 3 -->
      <!-- @click="Switch(index)" -->
      <div class="flex max-md:flex-col">
        <button
          v-for="(value, index) in buttonName"
          :key="index"
          
          class="transition furatioduration-100 font-semibold bg-transparent text-white text-lg border-2 border-white 
            w-[250px] h-[100px] mx-8 px-5 py-1 rounded-full 
            hover:scale-105 active:scale-95
            max-md:text-base max-md:h-[70px] max-md:my-4"
          :class="{ change: index === num }"
        >
          {{ value }}
        </button>
      </div>
      <picture>
        <source class="w-[55%] mx-auto max-md:w-[90%]" srcset="../../../assets/bikeFestivalLogo2.webp" type="image/webp">
        <img class="w-[55%] mx-auto max-md:w-[90%]" src="../../../assets/bikeFestivalLogo2.png" alt="NCKUlogo">
      </picture>
    </div>

    <div class="px-36 pt-20 max-md:px-4">
      <Transition mode="out-in">
        <component :is="Show" />
      </Transition>
    </div>

    <Footer />
  </div>
</template>

<style scoped>
.change {
  background-color: #003cd1;
  border-color: #003cd1;
}
</style>