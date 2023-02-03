<script setup>
defineProps({
  dialogTitle: String,
  article: String,
  styleAdd: String,
  arrowHidden: String
})
</script>

<template>
  <div 
    class="basis-1/6 transition duration-200
      hover:-translate-x-3 hover:cursor-pointer active:opacity-50 active:scale-75"
    @click="scrollLeft"
  >
    <img class="w-full" src="../assets/arrow_left.svg" alt="leftArrow" :class="arrowHidden">   
  </div>


  <div class="basis-4/6 shadow-xl">

    <!-- dialog -->
    <div class="relative h-[100px] bg-black max-md:h-[70px]">
      <!-- dialog title -->
      <p class="absolute top-1/2 -translate-y-1/2 left-5
        ml-3 text-4xl text-white font-semibold max-md:text-2xl">
        {{ dialogTitle }}
      </p>
      <!-- dialog cross/underline -->
      <div class="absolute right-0 mr-32 mt-[20px] max-md:hidden">
        <img class="w-[60px] h-[60px]" src="../assets/cross.svg" alt="cross">
      </div>
      <div class="absolute right-0 mr-14 mt-[20px] max-md:hidden">
        <img class="w-[60px] h-[60px]" src="../assets/underline.svg" alt="underline">
      </div>
    </div>

    <div class="flex flex-row justify-center items-center
      border-x-4 border-b-4 border-black h-[600px] overflow-hidden max-md:h-[400px]">
      <!-- image slot -->
      <slot></slot>
      <div class="text-2xl leading-relaxed m-12 
        max-xl:text-lg max-lg:text-sm max-md:leading-5 max-md:m-4" :class="styleAdd" v-html="article">
      </div>
    </div>

  </div>

  <div 
    class="basis-1/6 w-[250px] transition duration-200 
      hover:translate-x-3 hover:cursor-pointer active:opacity-50 active:scale-75"
    @click="scrollRight"
  >
    <img class="w-full" src="../assets/arrow_right.svg" alt="rightArrow" :class="arrowHidden">
  </div>
</template>