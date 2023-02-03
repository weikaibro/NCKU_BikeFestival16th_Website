<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "../../components/Navbar.vue";
import IrregularButton from "../../components/irregularButton.vue";
</script>

<template>
  <div class="h-screen bg-black overflow-hidden">
    <Navbar />

    <div
      class="bg-white rounded-[3rem] h-[75%] mt-6 mx-16 py-16 pl-20 pr-40 text-xl leading-9 overflow-y-auto
        max-sm:mx-4 max-sm:px-4 max-sm:text-base"
    >
      <div class="text-3xl font-bold">舞台活動</div>
      <br />
      由各地高中社團與成大在校生所帶來的多樣化表演舞台，為活動場域注入朝氣，同時展現大學社團的豐富度和可能性。歡迎熱愛動態表演的你，駐足於榕園草地，感受春日徐風與活力交織而成的青春洋溢氣息。
      <br><br> 舞台意象：星空下的瓶中船
      <br />
      在星空中，遺世獨立的星球，就像每個獨特的你，都在浩瀚的宇宙中奮力搏鬥著。將對自我的期許寄託於瓶中船吧！儘管未知的領域如迷霧籠罩般令人惶恐，也要喚醒心中的勇氣向前航行。我們將祈願，每一艘瓶中船都能順著洋流駛向那更好的彼岸。
      <br /><br />
      開幕活動：瓶中信
      <br />
      請長官寫下對高中生的祝福與期許，將紙條放入象徵駛向美好未來的玻璃瓶中，揭開「駛途」的序幕。
      <br /><br />
      閉幕活動：啟航
      <br />
      邀請全體幹部、工人將想說的話寫在紙飛機上，在空中飛翔的紙飛機象徵單車節圓滿落幕並乘載著期許駛向未來。
      <br /><br />
      活動資訊：
      <br />
      舞台活動將於榕園草地舉行，將有不定時抽獎活動，可以來碰碰運氣抽大獎喔！
      <br />
      在路上也可能巧遇舞台吉祥物，歡迎與它們合影留念😍 <br /><br />
      <span class="text-3xl font-bold"> 專案地圖 </span>
      <iframe class="my-12" src="https://www.google.com/maps/d/embed?mid=1Vga0aGXdv9V-_rxXj1kB_nr8-IFem2I&ehbc=2E312F" width="1080" height="480"></iframe>
      <span class="text-3xl font-bold"> 籌備團隊 </span> <br /><br />
      部長 簡以恆
      <br />
      部員 黃怡瑄 <br />
      部員 蔡宛岑  <br />
      部員 葉紹宇 <br />
      部員 陳星宇  <br />
      部員 康哲禎 
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
</style>
