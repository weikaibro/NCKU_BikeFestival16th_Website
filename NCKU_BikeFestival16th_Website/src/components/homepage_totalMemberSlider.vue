<script setup>
const scrollLeft = () => {
  var scrollTo = document.getElementById('scrollTo');
  scrollTo.scrollBy({
    left: -300,
    behavior: 'smooth'
  });
}

const scrollRight = () => {
  var scrollTo = document.getElementById('scrollTo');
  scrollTo.scrollBy({
    left: 300,
    behavior: 'smooth'
  });
}
</script>

<template>
  <div 
    class="absolute z-10 left-8 top-32 w-[250px] transition duration-200 
      hover:-translate-x-3 active:opacity-50 active:scale-75 max-sm:hidden"
    @click="scrollLeft"
  >
    <img src="../assets/arrow_left.svg" alt="leftArrow">   
  </div>
  <div class="absolute z-0 inset-x-0 mx-auto bg-neutral-100
    w-[80%] h-[580px] max-sm:w-screen max-sm:h-[500px]">
    <div 
      id="scrollTo" 
      class="snap-x snap-mandatory overflow-hidden 
        flex flex-row gap-8 mx-12 items-center h-full
        max-sm:touch-pan-x max-sm:overflow-auto max-sm:mx-4"
    >
      <div class="memberInfo">
        <img class="imgInfo" src="https://picsum.photos/200" alt="">
        <span class="mt-4 text-2xl font-bold">姜昕</span>
        <span class="text-lg mt-2 text-center">
          總籌
          <br>療癒系 112 級
          <br>牙空灰機牙空灰機牙空灰機牙空灰機牙空灰機
        </span>
      </div>
      <div class="memberInfo">
        <img class="imgInfo" src="https://picsum.photos/200" alt="">
        <span class="mt-4 text-2xl font-bold">劉子綾</span>
        <span class="text-lg mt-2 text-center">
          總籌
          <br>療癒系 112 級
          <br>牙空灰機牙空灰機牙空灰機牙空灰機牙空灰機
        </span>
      </div>
      <div class="memberInfo">
        <img class="imgInfo" src="https://picsum.photos/200" alt="">
        <span class="mt-4 text-2xl font-bold">許哲斐</span>
        <span class="text-lg mt-2 text-center">
          秘書部
          <br>療癒系 112 級
          <br>牙空灰機牙空灰機牙空灰機牙空灰機牙空灰機
        </span>
      </div>
      <div class="memberInfo">
        <img class="imgInfo" src="https://picsum.photos/200" alt="">
        <span class="mt-4 text-2xl font-bold">張鈺昕</span>
        <span class="text-lg mt-2 text-center">
          秘書部
          <br>療癒系 112 級
          <br>牙空灰機牙空灰機牙空灰機牙空灰機牙空灰機
        </span>
      </div>
      <div class="memberInfo">
        <img class="imgInfo" src="https://picsum.photos/200" alt="">
        <span class="mt-4 text-2xl font-bold">陳加羲</span>
        <span class="text-lg mt-2 text-center">
          行銷部
          <br>療癒系 112 級
          <br>牙空灰機牙空灰機牙空灰機牙空灰機牙空灰機
        </span>
      </div>
      <div class="memberInfo">
        <img class="imgInfo" src="https://picsum.photos/200" alt="">
        <span class="mt-4 text-2xl font-bold">廖珺安</span>
        <span class="text-lg mt-2 text-center">
          行銷部
          <br>療癒系 112 級
          <br>牙空灰機牙空灰機牙空灰機牙空灰機牙空灰機
        </span>
      </div>
      <div class="memberInfo">
        <img class="imgInfo" src="https://picsum.photos/200" alt="">
        <span class="mt-4 text-2xl font-bold">陳冠儒</span>
        <span class="text-lg mt-2 text-center">
          公關部
          <br>療癒系 112 級
          <br>牙空灰機牙空灰機牙空灰機牙空灰機牙空灰機
        </span>
      </div>
      <div class="memberInfo">
        <img class="imgInfo" src="https://picsum.photos/200" alt="">
        <span class="mt-4 text-2xl font-bold">蔡依璇</span>
        <span class="text-lg mt-2 text-center">
          公關部
          <br>療癒系 112 級
          <br>牙空灰機牙空灰機牙空灰機牙空灰機牙空灰機
        </span>
      </div>
      <div class="memberInfo">
        <img class="imgInfo" src="https://picsum.photos/200" alt="">
        <span class="mt-4 text-2xl font-bold">余紀伸</span>
        <span class="text-lg mt-2 text-center">
          設計部
          <br>療癒系 112 級
          <br>牙空灰機牙空灰機牙空灰機牙空灰機牙空灰機
        </span>
      </div>
      <div class="memberInfo">
        <img class="imgInfo" src="https://picsum.photos/200" alt="">
        <span class="mt-4 text-2xl font-bold">邱于芸</span>
        <span class="text-lg mt-2 text-center">
          設計部
          <br>療癒系 112 級
          <br>牙空灰機牙空灰機牙空灰機牙空灰機牙空灰機
        </span>
      </div>
      <div class="memberInfo">
        <img class="imgInfo" src="https://picsum.photos/200" alt="">
        <span class="mt-4 text-2xl font-bold">黃鈺婷</span>
        <span class="text-lg mt-2 text-center">
          設計部
          <br>療癒系 112 級
          <br>牙空灰機牙空灰機牙空灰機牙空灰機牙空灰機
        </span>
      </div>
    </div>
  </div>
  <div 
    class="absolute z-10 right-8 top-32 w-[250px] transition duration-200 
      hover:translate-x-3 3 active:opacity-50 active:scale-75 max-sm:hidden"
    @click="scrollRight"
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
      justify-center items-center bg-white shadow-lg w-[300px] h-[87.5%] p-3
      max-sm:w-[250px];
  }
  .imgInfo {
    @apply rounded-full w-44 max-sm:w-36
  }
}
</style>