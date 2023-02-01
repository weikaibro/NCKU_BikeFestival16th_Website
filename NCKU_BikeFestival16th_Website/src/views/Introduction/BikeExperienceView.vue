<script setup>
import { RouterLink } from "vue-router";
import Navbar from "../../components/Navbar.vue";
import IrregularButton from "../../components/irregularButton.vue";
</script>

<template>
  <div class="h-screen bg-black overflow-hidden">
    <Navbar />

    <div
      class="bg-white h-[650px] rounded-[3rem] mx-16 py-16 pl-20 pr-40 text-xl leading-9 overflow-y-auto"
    >
      <div class="text-3xl font-bold">單車體驗</div>
      <br />
      漫步在充滿歷史風華的成大校園，隨處可見一輛輛腳踏車在校園兩道旁。單車，是成大學子必備的交通工具。學生們辛勤地踩踏著，只為奔向無窮無盡的學識。為讓參與者體驗成大生的日常，同時認識成大的環境與歷史古蹟蘊含的人文底蘊，我們規劃了數條校園巡禮路線，帶你遊成大！
      <br /><br />
      單車體驗：
      <br />
      共分三條導覽路線－「文學院的一天」、「觀光客行程」、「香香之旅」在每一條路線中，都將由我們為您沿途做解說，讓你深入了解成大景點與其歷史背景，以及不為人知的稗官野史。過程中，更穿插有趣味的問答，運氣好的話，搞不好還能拿到精美小禮物喔！
      <br /><br />
      <span class="fontEff">文學院的一天</span>
      <br />
      中正堂 → 榕園 → 家寶 → 台文系 → 歷史文物館 → 小西門 → 火車頭 → 中正堂
      <br /><br />
      <span class="fontEff">觀光客行程</span>
      <br />
      中正堂（整點） → 博物館 → 格致堂 → 總圖 → 榕園 → 小西門（歷史文物館） →
      火車頭 → 中正堂 <br /><br />
      <span class="fontEff">香香之旅</span>
      <br />
      中正堂（整點） → 未來館 → 航太系直升機 → 化工系左轉 → 測量系（樹） →
      格致堂（湖） → 中正堂 <br /><br />
      ＊單車體驗<span class="fontEff">限額 7 人</span> ，有興趣參與者記得到報名專區報名喔！
      <br />
      ＊如對以上內容有任何疑惑，歡迎斯訊成大單車節臉書粉專或 IG 官方帳號
      <br><br>
      <span class="text-3xl font-bold"> 專案地圖 </span>
      <iframe class="my-12" src="https://www.google.com/maps/d/embed?mid=1Vga0aGXdv9V-_rxXj1kB_nr8-IFem2I&ehbc=2E312F" width="1080" height="480"></iframe>
      <div class="text-3xl font-bold">籌備團隊</div>
      <br />
      部員 航太113 黃翊軒
      <br />
      部員 交管113 沈鉑恩 <br />
      部員 經濟114 范敦竣 <br />
      部員 材料114 林暐庭 <br />
      部員 生技115 陳雨婕
    </div>
    <div class="float-right mt-6 mr-16">
      <!-- <RouterLink to="/Registration/Linktree/BikeExperience"> -->
        <IrregularButton btnTitle="即將開放" disable="true" />
      <!-- </RouterLink> -->
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
