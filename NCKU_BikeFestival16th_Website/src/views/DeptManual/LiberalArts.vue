<script setup>
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import Navbar from '../../components/Navbar.vue';
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
    <div class="flex mt-20 ml-12">

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

      <div class="columnLine w-[1200px] h-[700px] text-white">
        <component :is="showContent" />
      </div>

    </div>

    <div>tset</div>

  </div>
</template>

<style scoped>
.changeBg {
  background-color: #003cd1;
}

.columnLine {
  column-rule: solid 6px;
}
</style>