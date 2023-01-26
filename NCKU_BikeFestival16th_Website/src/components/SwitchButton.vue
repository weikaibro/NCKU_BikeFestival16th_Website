<script setup>
import { ref } from 'vue'
    const buttonName = ref(["健康", "升學", "自學", "大學生活"]);
    const num = ref(5);
    const Switch = (index) => {
        num.value = index;
    }
</script>
<template>
    <button v-for="(value, index) in buttonName" :key="index" @click="Switch(index)" class="mr-3 lg:mr-6 font-semibold bg-mygray px-4 py-2 lg:px-5 lg:py-2 rounded-full hover:scale-105 active:scale-95" :class="{ change : index === num }">{{ value }}</button>
</template>
<style>
    .change{
        background-color: #003CD1;
        color: white;
    }
</style>