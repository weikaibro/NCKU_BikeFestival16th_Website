<script setup>
import { ref } from "vue";
const buttonName = ref(["健康", "升學", "自學", "大學生活"]);
const num = ref(0);
const Switch = (index) => {
  num.value = index;
};
</script>

<template>
  <button
    v-for="(value, index) in buttonName"
    :key="index"
    @click="Switch(index)"
    class="transition duration-100 mr-3 font-semibold bg-mygray px-4 py-2 rounded-full
      lg:mr-6 lg:px-5 lg:py-2 hover:scale-105 active:scale-95"
    :class="{ change: index === num }"
  >
    {{ value }}
  </button>
</template>

<style scoped>
.change {
  background-color: #003cd1;
  color: white;
}
</style>
