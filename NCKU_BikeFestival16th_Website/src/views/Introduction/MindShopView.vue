<script setup>
import Navbar from "../../components/Navbar.vue";
import IrregularButton from "../../components/irregularButton.vue";
</script>

<template>
  <div class="h-screen bg-black overflow-hidden">
    <Navbar />

    <div
      class="bg-white h-[75%] rounded-[3rem] mt-6 mx-16 py-16 pl-20 pr-40 text-xl leading-9 overflow-y-auto
        max-sm:mx-4 max-sm:px-4 max-sm:text-base"
    >
      <div class="text-3xl font-bold">心靈柑仔店</div>
      <br />
      進入大學後的我們，猶難以忘懷當年在升學時所遇之煩惱。除了升學，在生活中更有千絲萬縷理不清。深陷其中之時，總是難以看清自己憂心的根源究竟為何，宛如置困迷宮般－因此，心靈柑仔店將古早味風格設立為主題，帶領你穿梭於迷宮中，探尋當前面臨的課題，並在迷宮的末端，與心靈擺渡人碰面晤談，拾獲問題的解答。
      <br /><br />
      1. 古早味小販部：
      <br />
      販售各種別具意義的古早味零食，引領你敞開心房，回味兒時記憶。在找回單純的快樂泉源之時，也將被不同零食所隱含的意義鼓舞，給你勇氣繼續前往迷宮探索自我。
      <br /><br />
      2. 迷宮：
      <br />
      以迷宮作為展場的設計，就彷彿是每個人充滿未知數的高中生涯。在這錯綜複雜的迷宮裡頭，我們試著讓你辨明煩憂的源頭，重新定位自我，找到屬於自己的方向。
      <br /><br />
      3. 晤談室：
      <br />
      在尋找自我的路上，憑藉己力是困難的，也是孤獨的。為此，我們在迷宮盡頭，設置了許多單獨的隔間，讓仍舊無法定義自己的你，能與擺渡人談談心，讓他們給予你鼓勵和建議。
      <br /><br />
      4. 紀念明信片區：
      <br />
      在此處，留下你曾探訪的足跡吧！提起勇氣來尋找自我的你，是勇敢。寫下對自己的期許，在迷茫、失意時打開給自己鼓勵。
      <br /><br />
      <div class="text-3xl font-bold">活動資訊</div>
      <br />
      歷史文物館、成功湖前的空地
      <br /><br />
      <span class="text-3xl font-bold"> 專案地圖 </span>
      <iframe class="my-12" src="https://www.google.com/maps/d/embed?mid=1Vga0aGXdv9V-_rxXj1kB_nr8-IFem2I&ehbc=2E312F" width="1080" height="480"></iframe>
      <div class="text-3xl font-bold">籌備團隊</div>
      <div>
        <br> 部員 航太114 陳昱豪
        <br> 部員 能源115 張鈞傑
        <br> 部員 材料115 陳宥蓁
        <br> 部員 政治114 游棨巖
        <br> 部員 政治114 王湘詞
        <br> 部員 交管115 陳奕翰
      </div>
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
