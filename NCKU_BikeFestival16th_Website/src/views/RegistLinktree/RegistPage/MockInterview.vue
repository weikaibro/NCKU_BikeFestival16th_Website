<script setup>
import Navbar from '../../../components/Navbar.vue';
import Footer from '../../../components/Footer.vue';
// import formBtn from '../../../components/formBtn.vue';
import entryForm from '../../../components/entryForm_personalInfo.vue';
import entryFormIntro from '../../../components/entryFormIntro.vue';

import DepartmentMockInterview from '../RegistPage/MockInterview_threeForm/DepartmentMockInterview.vue'
import LearningExperience from '../RegistPage/MockInterview_threeForm/LearningExperience.vue'
import ProfessorInterview from '../RegistPage/MockInterview_threeForm/ProfessorInterview.vue'

import { ref, computed } from "vue";
const buttonName = ref(["各系模擬面試", "教授面試技巧演講", "學習歷程加油站"]);
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
      return LearningExperience;
    }
    case 2: {
      return ProfessorInterview;
    }
    default:
      break;
  }
});
</script>

<template>
  <div class="bg-slate-700 text-white">
    <Navbar />

    <div class="flex flex-col justify-center items-center gap-16 mt-20">
      <span class="text-5xl font-bold tracking-wider">模擬面試</span>

      <!-- registration form * 3 -->
      <div class="hidden sm:flex">
        <button
          v-for="(value, index) in buttonName"
          :key="index"
          @click="Switch(index)"
          class="transition furatioduration-100 w-[250px] h-[60px] font-semibold bg-transparent text-white text-lg border-2 border-white mx-8 px-5 py-1 rounded-full 
            hover:scale-105 active:scale-95"
          :class="{ change: index === num }"
        >
          {{ value }}
        </button>
      </div>

      <img src="../../../assets/bikeFestivalLogo2.png" alt="">
    </div>

    <div class="px-36 pt-52">
      <div>
        <component :is="Show" />
      </div>

      <!-- <entryFormIntro /> -->
      <!-- <entryForm /> -->
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