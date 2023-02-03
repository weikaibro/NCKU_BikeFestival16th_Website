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
      <div class="text-3xl font-bold">沈浸式體驗 成・鏡</div>
      <br />
      遙想高中時期，總是對於大學生活充滿了嚮往與期待，但在實際經歷了大學生活後，卻發現與想像中的模樣有很大的出入。因此，我們將以最真實且多元化的劇本來還原大學日常，讓你走入互動式的劇場，沉浸於大學生活。
      <br /><br />
      〈成・鏡〉這個亦現實亦幻境的劇場，將如鏡般映射出最真實的你，讓你在探索大學課內課外生活的同時也更瞭解自己，以及你最理想中的大學生活模式。
      <br /><br />
      沉浸式劇場，也被寫作「互動式劇場」，有別於坐在台下觀賞演出，觀眾在非典型的劇場空間中，成為劇場的參與者，順著表演者的帶領，一同感受全劇的悲與喜。
      <br /><br />
      適合想了解大學日常生活的你，能讓你體會大學最真實的感受，參與絕對讓你收穫滿滿，美好的回憶，難忘的紀念品。

      <br /><br />
      <div class="text-3xl font-bold">活動資訊</div>
      <br />
      地點：國際會議廳一、二、三、四會、陽台 ( 3、4F ) <br />
      場次：一場 40 分 <br />
      名額有限，每場 10－12 人想參加者請提早報名喔！（當天亦會開放現場）
      <br /><br />
      <span class="text-3xl font-bold"> 專案地圖 </span>
      <iframe class="my-12" src="https://www.google.com/maps/d/embed?mid=1Vga0aGXdv9V-_rxXj1kB_nr8-IFem2I&ehbc=2E312F" width="1080" height="480"></iframe>
      <div class="text-3xl font-bold">籌備團隊</div>
      <br />
      部長 林子瑜 <br />
      部員 林奐至 <br />
      部員 徐仁駿 <br />
      部員 林新茂 <br />
      部員 陳峻霖 <br />
      部員 李欣芸 <br />
      部員 黃詩芩 <br />
      部員 劉尚恩
    </div>
    <div class="flex justify-end mt-6 mr-16 max-sm:float-none max-sm:justify-center max-sm:mr-0">
      <!-- <RouterLink to="/Registration/Linktree/DeepExperience"> -->
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

</style>
