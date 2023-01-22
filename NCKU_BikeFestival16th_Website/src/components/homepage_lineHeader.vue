<script setup>

</script>

<template>
  <div class="flex flex-col justify-center items-center m-0 p-0 w-screen h-screen">
    <!-- display: block;
  background: black;
  border-radius: 50%;
  height: 3px;
  width: 3px;
  margin: 0; -->
    <div class="lineHeader relative basis-3/12 flex justify-center items-end 
      pb-12 text-2xl font-semibold tracking-wider">
      <div class="absolute bg-black rounded-full h-2 w-2 mb-2.5 left-32"></div>
      四大主題活動
      <div class="absolute bg-black rounded-full h-2 w-2 mb-2.5 right-32"></div>
    </div>

    <div class="basis-6/12 flex flex-row justify-evenly items-center w-screen">
      <div class="border-2 border-black w-1/5 h-full">
        <img class="w-full p-4 hover:bg-gradient-to-t hover:from-black" src="https://picsum.photos/200" alt="">
        <span class="pl-4 text-xl font-semibold">模擬面試</span>
      </div>
      <div class="border-2 border-black w-1/5 h-full">
        <img class="w-full p-4" src="https://picsum.photos/200" alt="">
        <span class="pl-4 text-xl font-semibold">科系博覽</span>
      </div>
      <div class="border-2 border-black w-1/5 h-full">
        <img class="w-full p-4" src="https://picsum.photos/200" alt="">
        <span class="pl-4 text-xl font-semibold">大學充值</span>
      </div>
      <div class="border-2 border-black w-1/5 h-full">
        <img class="w-full p-4" src="https://picsum.photos/200" alt="">
        <span class="pl-4 text-xl font-semibold">探索學習</span>
      </div>
    </div>

    <div class="basis-3/12">
      <!-- button -->
      <slot/>
    </div>

  </div>
</template>

<style scoped>
.lineHeader::before {
  content: "";
  display: inline-block;
  position: relative;
  width: 160px;
  height: 3px;
  background-color: black;
  margin-right: 24px;
  margin-bottom: 16px;
}

.lineHeader::after {
  content: "";
  display: inline-block;
  width: 160px;
  height: 3px;
  background-color: black;
  margin-left: 25px;
  margin-bottom: 15px;
}

</style>