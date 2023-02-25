<script setup>
import Navbar from "../../components/Navbar.vue";
import IrregularButton from "../../components/irregularButton.vue";
</script>

<template>
  <div class="h-screen bg-black overflow-hidden">
    <Navbar />

    <div
      class="bg-white h-[75%] rounded-[3rem] mt-28 mx-16 py-16 pl-20 pr-40 text-xl leading-9 overflow-y-auto
        max-sm:mx-4 max-sm:px-4 max-sm:text-base"
    >
      <span class="text-3xl font-bold">能量加值</span>
      <br /><br />
      在各個專案中穿梭，尋覓自己的升學方向和自我探索之餘，總有疲累的時候。
      <br />
      這時，最適合來一個吃吃喝喝的休息時間！有傳統小吃、小點心、清涼飲品、精緻手作品、手作烘培、炸物，等你來覓食，讓你在充飽電之後繼續前進下一個展區！
      <br /><br />
      <span class="text-3xl font-bold"> 專案地圖 </span>
      <iframe
        class="my-12"
        src="https://www.google.com/maps/d/embed?mid=1Vga0aGXdv9V-_rxXj1kB_nr8-IFem2I&ehbc=2E312F"
        width="1080"
        height="480"
      ></iframe>
      <span class="text-3xl font-bold">籌備團隊</span><br />
      <br />
      陳冠儒 機械114 <br />
      蔡依璇 護理114 <br /><br />
    </div>
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track-piece {
  box-shadow: inset 0 0 5px transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(0, 60, 210);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(6, 60, 169);
}

.fontEff {
  color: rgb(6, 60, 169);
  font-weight: bolder;
}
</style>
