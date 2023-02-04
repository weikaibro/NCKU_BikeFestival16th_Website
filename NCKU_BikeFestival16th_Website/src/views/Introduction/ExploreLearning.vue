<script setup>
import Navbar from "../../components/Navbar.vue";
import IrregularButton from "../../components/irregularButton.vue";
</script>

<template>
  <div class="h-screen bg-black overflow-hidden">
    <Navbar />

    <div
      class="bg-white h-[70%] rounded-[3rem] mx-16 py-16 pl-20 pr-40 text-xl leading-9 overflow-y-auto
        max-sm:mx-4 max-sm:px-4 max-sm:text-base"
    >
      <div class="text-3xl font-bold">探索學習</div>
      <br />
      進入大學生活後，少了制式的課表和補習，多了屬於自己的彈性時間，故自主學習將成為重中之重的課題。在探索學習中，藉由探索在各領域耕耘並付諸實踐的特色組織，開拓自己的視野；將自身沉浸於大量的資訊和刺激之中，覺察潛在的興趣，進而激發自主學習和課外參與動機。學些什麼？如何開始？你將在探索學習專案中，聚焦答案！
      <br /><br />
      1. 組織攤位：
      <br />
      邀集不同領域的組織，涵蓋環境議題、教育、區塊鏈等，包含但不限於 TFT
      為台灣而教、台灣青年氣候聯盟（TWYCC）、法律白話文運動、可能非學校，到現場設攤，與你互動並介紹該組織之理念與特色，為你打開視野，提供給你在課外的活動參與新選擇。
      <br /><br />
      2. 組織展覽：
      <br />
      蒐集攤位組織的故事案例以及豐富的學習資源，製成翻蓋式的問答供你閱覽。閱畢後，可至組織攤位與其交流，為心中被引出的疑惑，找到解答。
      <br /><br />
      3. 討論會：
      <br />
      當天將在現場，以類似辯論模式分組討論指定議題。在進入實作前，將由成大辯論社或相關議題的組織，進行資料檢索和討論模式之教學，亦會在現場提供討論素材。先引導題目，再循序漸進地組織自身對特定議題的看法，進而訓練思辨邏輯、溝通和團隊合作。
      <br><br>
      <span class="fontEff">＊討論坊為限額報名，每場上限 32 人，有興趣參加者記得提前到報名專區選擇想要的議題報名喔！ <br />
      ＊如對以上內容有任何疑惑，歡迎私訊成大單車節臉書粉專或 IG 官方帳號 </span>
      <br /><br />

      <div class="text-3xl font-bold">地點</div>
      <br>
      講座：國際會議廳第一演講廳、第二演講廳
      <br />
      組織攤位：國際會議廳前草地 <br />
      組織展覽：國際會議廳前走廊 <br />
      討論坊：國際會議廳 多功能廳 <br /><br />
      <span class="text-3xl font-bold"> 專案地圖 </span>
      <iframe class="my-12" src="https://www.google.com/maps/d/embed?mid=1Vga0aGXdv9V-_rxXj1kB_nr8-IFem2I&ehbc=2E312F" width="1080" height="480"></iframe>
      <div class="text-3xl font-bold">籌備團隊</div>
      <br />
      部長 外文114 劉世瑜
      <br />
      部長 政治115 姚瀚晴 <br />
      部員 交管115 黃奎臻 <br />
      部員 資訊115 陳俊安 <br />
      部員 材料115 陳采欣 <br />
      部員 資訊114 梁祐晨 <br />
      部員 材料114 蕭翔駿
    </div>
    <div class="flex justify-end mt-6 mr-16 max-sm:float-none max-sm:justify-center max-sm:mr-0">
    <!-- <RouterLink to="/Registration/Linktree/ExploreLearning"> -->
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
