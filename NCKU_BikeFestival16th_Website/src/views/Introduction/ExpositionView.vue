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
      <div class="text-3xl font-bold">科系博覽</div>
      <br />
      為協助想進入成大就讀，或正在大學科系選擇中迷惘的學子一窺學術殿堂的堂奧，開設了<span
        class="fontEff"
        >共 46 個科系</span
      >共襄盛舉的科系博覽。以實體攤位互動講解為主，科系手冊為輔，由學長姊親身向你講解該科系之特色、課程內容、相應的能力以及未來的出路等；系館導覽則帶領你實際踏入各系系館，親身感受實地氛圍，期能全面性地促進高中端對大學科系的認知。
      <br /><br />
      1. 科系攤位講解：
      <br />
      由各學系的學長姊，向你講解該系特色（包含與類似科系差別分析，以及與他校科系比較）、學術活動、系所資源、課程介紹與年級規劃、學生需具備的特質、未來出路等。此講解不限時間，可自由提問。最適合對科系迷惘，看了網路分析文章後卻還是無法下定決心的你，前來與學長姐們聊聊，立定未來的志向！
      <br /><br />
      2. 系館導覽：
      <br />
      共開放 14
      個科系，分佈於各校區進行導覽。於指定地點集合後，將由學長姊為你一邊解說，一邊參觀該科系實際上課的場域、實驗室等等，讓你更進一步地認識該科系的硬體設備與教學環境。
      <br /><br />
      3. 科系手冊：
      <br />
      收錄成大所有院系的概覽、課程、特色介紹、迷思破解，以及 108
      課綱相關解說。完整手冊內容請至官網 科系手冊專區下載。

      <br /><br />
      <div class="text-3xl font-bold">活動資訊</div>
      <br />
      科系攤位講解將於成大光復校區的榕園及雲平大樓前舉行（3/4-3/5
      9:00-16:00），直接到攤位即可參與。
      <br /><br />
      系館導覽為限額導覽，每場上限人數不同（將會公佈於粉專），有興趣參加者記得提前到報名專區報名喔！
      <br /><br />
      開放導覽科系：
      <br />
      工業設計學系、建築系&都市計劃學系、法律系、心理系、生命科學系、生物科技與產業科學系、職能治療學系、歷史學系、化學系、環境工程學系、機械系、化學工程學系、系統暨船舶機電工程學系、工程科學系。
      <br />
      （報名後將於活動前 3 天寄 e-mail 通知錄取以及集合地點。若採當天實體報名，則直接於科系帳篷向該科系登記即可。注意！！上午場無實體報名喔）
      <br /><br />
      ＊如對以上內容有任何疑惑，歡迎私訊成大單車節臉書粉專或 IG 官方帳號
      <br />
      <br /><br />
      <div class="text-3xl font-bold">籌備團隊</div>
      <br />
      部長 外文114 許芷綾
      <br />
      部員 會計115 楊郁涵 <br />
      部員 化學115 谷季倫 <br />
      部員 材料114 陳俊穎 <br />
      部員 不分115 王逸蓁 <br />
      部員 都計114 蔡丞惟 <br />
      部員 牙醫117 林柏毅
    </div>
    <div class="float-right mt-6 mr-16">
      <RouterLink to="/Registration/Linktree/DepartmentTour">
        <IrregularButton btnTitle="即刻報名" />
      </RouterLink>
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
  -webkit-transition: font-size 0.5s ease;
  -moz-transition: font-size 0.5s ease;
  -o-transition: font-size 0.5s ease;
  transition: font-size 0.5s ease;
}

.fontEff {
  color: rgb(6, 60, 169);
  font-weight: bolder;
}
</style>
