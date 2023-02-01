<script setup>
import { ref } from 'vue';
import { useMemberStore } from '../stores/memberInfo.js'
const store = useMemberStore();
defineProps({
  members: Array
})
</script>

<template>
  <div 
    class="absolute z-10 left-8 top-32 w-[250px] transition duration-200 
      hover:-translate-x-3 hover:cursor-pointer active:opacity-50 active:scale-75 max-sm:hidden"
    @click="store.scrollLeft"
  >
    <img src="../assets/arrow_left.svg" alt="leftArrow">   
  </div>

  <div class="absolute z-0 inset-x-0 mx-auto bg-neutral-100
    w-[80%] h-[580px] max-sm:w-screen max-sm:h-[500px]"
  >
    <div 
      id="scrollTo"
      class="snap-x snap-mandatory overflow-hidden 
        flex flex-row gap-8 mx-12 items-center h-full
        max-sm:touch-pan-x max-sm:overflow-auto max-sm:mx-4"
    >

      <div
        v-for="member in members" 
        :key="members.indexOf(member)" 
        class="memberInfo"
      >
        <picture>
          <source class="rounded-full w-[70%] mx-auto mt-5" :srcset="member.memberPicWebp" type="image/webp">
          <img class="rounded-full w-[70%] mx-auto mt-5" :src="member.memberPic" alt="member">
        </picture>
        <span class="mt-4 text-2xl font-bold">{{ member.memberName }}</span>
        <span class="fontSize mt-2 text-center">
          {{ member.memberTitle }}
        </span>
        <span class="fontSize">
          {{ member.memberGrade }}
        </span>
        <span class="fontSize mt-1 text-center">
          {{ member.memberSaid }}
        </span>
      </div>

    </div>
  </div>

  <div 
    class="absolute z-10 right-8 top-32 w-[250px] transition duration-200 
      hover:translate-x-3 hover:cursor-pointer active:opacity-50 active:scale-75 max-sm:hidden"
    @click="store.scrollRight"
  >
    <img src="../assets/arrow_right.svg" alt="rightArrow">
  </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .memberInfo {
    @apply snap-center flex flex-col flex-none 
      items-center bg-white shadow-lg w-[330px] h-[87.5%] p-3
      max-sm:w-[250px];
  }
}
.fontSize {
  font-size: 21px;
}
</style>