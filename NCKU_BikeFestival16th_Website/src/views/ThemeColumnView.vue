<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import homepage_lineHeader from '../components/homepage_lineHeader.vue';
import Health from '../views/ThemeColumn/Health.vue'
import Enrollment from '../views/ThemeColumn/Enrollment.vue'
import SelfLearn from '../views/ThemeColumn/SelfLearn.vue'
import CollegeLife from '../views/ThemeColumn/CollegeLife.vue'
import { ref, shallowRef, computed } from "vue";
const buttonName = ref(["健康", "升學", "自學", "大學生活"]);
const num = ref(0);
const Switch = (index) => {
  num.value = index;
  console.log(num.value)
};
const showContent = computed(() => {
  switch (num.value) {
    case 0: return Health;
    case 1: return Enrollment;
    case 2: return SelfLearn;
    case 3: return CollegeLife;
    default: return Health;
  }
});
</script>

<template>
  <div>
    <Navbar />
    <div class="flex flex-col justify-center items-center mt-20 mb-8">
      <homepage_lineHeader headerTitle="主題專欄" />
      <div class="grid grid-cols-4 my-10 gap-3 max-sm:grid-cols-2"> 
        <button
          v-for="(value, index) in buttonName"
          :key="index"
          @click="Switch(index)"
          class="w-[150px] transition duration-100 mr-3 font-semibold bg-mygray px-4 py-2 rounded-full
            lg:mr-6 lg:px-5 lg:py-2 hover:scale-105 active:scale-95"
          :class="{ change: index === num }"
        >
          {{ value }}
        </button>
      </div>
    </div>

    <Transition mode="out-in">
      <!-- <KeepAlive include="num"> -->
        <component :is="showContent" />
      <!-- </KeepAlive> -->
    </Transition>


    <Footer />
  </div>
</template>

<style scoped>
.change {
  background-color: #003cd1;
  border-color: #003cd1;
  color: white
}
</style>