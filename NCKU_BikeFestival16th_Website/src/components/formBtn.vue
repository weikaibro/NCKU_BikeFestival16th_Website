<script setup>
import { ref } from "vue";
const buttonName = ref(["各系模擬面試", "教授面試技巧演講", "學習歷程加油站"]);
const num = ref(4);
const Switch = (index) => {
  num.value = index;
};
</script>

<template>
  <!-- RWD -->
  <div class="sm:hidden flex flex-col">
    <button
      v-for="(value, index) in buttonName"
      :key="index"
      @click="Switch(index)"
      class="w-48 mr-3 my-1 font-semibold bg-transparent text-white border-2 border-white px-4 py-1 rounded-full"
      :class="{ change: index === num }"
    >
      {{ value }}
    </button>
  </div>

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
  
</template>

<style scoped>
.change {
  background-color: #003cd1;
  border-color: #003cd1;
}
</style>