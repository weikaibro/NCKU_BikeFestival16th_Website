<script setup>
defineProps({
  dialogTitle: String
})
</script>

<template>
  <div 
    class="basis-1/6 transition duration-200
      hover:-translate-x-3 active:opacity-50 active:scale-75 max-sm:hidden"
    @click="scrollLeft"
  >
    <img class="w-full" src="../assets/arrow_left.svg" alt="leftArrow">   
  </div>

  <div class="basis-4/6 shadow-2xl">

    <!-- dialog -->
    <div class="relative h-[100px] bg-black">
      <!-- dialog title -->
      <p class="absolute top-1/2 -translate-y-1/2 left-5
        ml-3 text-4xl text-white font-semibold">
        {{ dialogTitle }}
      </p>
      <!-- dialog cross/underline -->
      <div class="absolute right-0 mr-32 mt-[20px] max-sm:hidden">
        <img class="w-[60px] h-[60px]" src="../assets/cross.svg" alt="cross">
      </div>
      <div class="absolute right-0 mr-14 mt-[20px] max-sm:hidden">
        <img class="w-[60px] h-[60px]" src="../assets/underline.svg" alt="underline">
      </div>
    </div>

    <div class="flex flex-row justify-center items-center p-6
      border-x-4 border-b-4 border-black h-[600px] overflow-hidden">
      <!-- image slot -->
      <slot></slot>
      <div class="text-center p-6 text-2xl leading-relaxed
        max-sm:text-xs max-sm:leading-5 max-sm:p-4">
        高三那年，一出學測考場，人生頓失方向。
        <br> 這樣的輪迴不斷上演。我們希望消弭高中生們內心的不安和迷惘。

        <br><br><strong>消弭不安，驅散迷惘</strong>。這份理念，就是單車節的初心。
        <br> 牽起你與科系的對話，讓第一線的學長姊為你揭開科系的真實面貌。
        
        <br><br> 希望與會的你知曉，在跌宕的路上，你並不孤獨。
        <br> 前方有我們為你指路。這趟旅程，將為你鎖定屬於你發揚光大的舞台。
      </div>
    </div>

  </div>

  <div 
    class="basis-1/6 w-[250px] transition duration-200 
      hover:translate-x-3 active:opacity-50 active:scale-75 max-sm:hidden"
    @click="scrollRight"
  >
    <img class="w-full" src="../assets/arrow_right.svg" alt="rightArrow">
  </div>
</template>