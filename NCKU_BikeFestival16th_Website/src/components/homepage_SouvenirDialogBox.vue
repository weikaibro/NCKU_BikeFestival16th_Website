<script setup>

</script>

<template>
  <div 
    class="basis-1/6 transition duration-200
      hover:-translate-x-3 hover:cursor-pointer active:opacity-50 active:scale-75"
    @click="scrollLeft"
  >
    <img class="w-full opacity-20" src="../assets/arrow_left.svg" alt="leftArrow">   
  </div>


  <div class="basis-4/6 shadow-xl">

    <!-- dialog -->
    <div class="relative h-[100px] bg-black max-md:h-[70px]">
      <!-- dialog header -->
      <!-- dialog title -->
      <p class="absolute top-1/2 -translate-y-1/2 left-5
        ml-3 text-4xl text-white font-semibold max-md:text-2xl">
        紀念品
      </p>
      <!-- dialog cross/underline -->
      <div class="absolute right-0 mr-[140px] mt-[20px] max-md:hidden">
        <img class="w-[60px] h-[60px]" src="../assets/cross.svg" alt="cross">
      </div>
      <div class="absolute right-0 mr-[56px] mt-[20px] max-md:hidden">
        <img class="w-[60px] h-[60px]" src="../assets/underline.svg" alt="underline">
      </div>
    </div>

    <!-- dialog body -->
    <div class="flex flex-row justify-center items-center
      border-x-4 border-b-4 border-black h-[600px] overflow-hidden max-md:h-[200px] bg-black">
      <img class="h-full" src="../assets/comingSoonWithBg.png" alt="">
      <!-- <div class="text-2xl leading-relaxed m-12 
        max-xl:text-lg max-lg:text-sm max-md:leading-5 max-md:m-4">
      </div> -->
    </div>

  </div>

  <div 
    class="basis-1/6 w-[250px] transition duration-200 
      hover:translate-x-3 hover:cursor-pointer active:opacity-50 active:scale-75"
    @click="scrollRight"
  >
    <img class="w-full opacity-20" src="../assets/arrow_right.svg" alt="rightArrow">
  </div>
</template>