<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "../../components/Navbar.vue";
import IrregularButton from "../../components/irregularButton.vue";
</script>

<template>
  <div class="h-screen bg-black overflow-hidden">
    <Navbar />

    <div
      class="bg-white h-[650px] rounded-[3rem] mx-16 py-16 pl-20 pr-40 text-xl leading-9 overflow-y-auto"
    >
      <div class="text-3xl font-bold">模擬面試</div>
      <br />
      備戰二階面試的最佳去處－在這裡，你可以汲取學長姐經驗，觸及第一線面試教授以及學習歷程專家；諮詢學習歷程，為你的書審資料做「健康檢查」，更有最貼近真實情境的模擬面試，作為上場前的前哨戰。所有學測二階的準備與演練，全都匯集在模擬面試，等著你，來為自己暖身。
      <br /><br />
      1. 教授演講：
      <br />
      邀請會計系、電機系、牙醫系教授到現場演講分享面試技巧、108
      課綱建議、印象特別深刻的考生以及面試迷思。一場演講 50
      分鐘，在演講過程中可以隨時匿名提問，最後將有專屬問答時間 20 分鐘。
      除學系教授外，另邀請到學習歷程專家－
      <a class="fontEff" href="https://www.yory.school/">Yory優歷</a
      >到場分享。參加者更有機會免費獲得 Yory
      優歷帳號，將於活動當天講座結束後現場抽出！還在為不知如何統整經歷傷透腦筋嗎？快來講座一探究竟吧！
      <br /><br />
      2. 學長姐經驗分享：
      <br />
      兩天共 6
      場，由醫學系、藥學系、不分系、牙醫系的學長姐主講。以過來人的身分，分享準備書審與面試的歷程和實戰經驗，並為學弟妹們解惑，給予最真誠的建議。
      <br /><br />
      3. 學習歷程檔案加油站：
      <br />
      採事前報名制，將學習歷程自述（就讀動機、學習計畫、未來生涯規劃）上傳至報名專區，由專人加註給予建議，在單車節當日由學長姊一對一講解內容。
      <br /><br />
      4. 面試知多少：
      <br />
      面試穿什麼？該注意哪些禮儀？面試中如何展現自我？這些關於面試的疑難雜症，將盡數呈現於我們製作的展覽中。以靜態方式呈現，方便拍照記錄，也可以依照自己的腳步調整看展速度。
      <br /><br />
      5. 模擬面試：
      <br />
      分為團體面試和單人面試兩種最常見的形式，另外也有部份三類科系常見的跑關 MMI
      面試。從自我介紹、科系歷屆、時事題、情境題到常見問答，一一為你預習未來可能的情境。在結束後，每位參加者將收到評分回饋單，包含但不限於儀態、口語、科系相關等項目，且皆有具體改善細項，以及來自面試官的建議。
      （參加科系包含：醫學系、心理系、藥學系、法律系、歷史學系、交通管理科學系、環工系、牙醫系、醫技系、外文系、職能治療系、不分系）
      <br /><br />
      <span class="text-3xl font-bold">活動資訊</span> <br /><br />
      模擬面試、學長姐面試經驗分享將於唯農大樓前棟教室舉行 <br />
      教授演講將於國際會議廳第三演講室舉行 <br /><br />
      ＊模擬面試活動除「面試知多少」外皆有限制名額，有興趣參加者記得到報名專區報名喔！
      <br />
      ＊如對以上內容有任何疑惑，歡迎私訊成大單車節臉書粉專或 IG 官方帳號
      <br /><br />
      <span class="text-3xl font-bold"> 專案地圖 </span>
      <iframe class="my-12" src="https://www.google.com/maps/d/embed?mid=1Vga0aGXdv9V-_rxXj1kB_nr8-IFem2I&ehbc=2E312F" width="1080" height="480"></iframe>
      <span class="text-3xl font-bold"> 籌備團隊 </span> <br /><br />
      部長 醫學116 謝昀暲 <br />
      部員 會計115 趙蓁妤 <br />
      部員 外文114 柯雯瑄 <br />
      部員 會計115 張嘉純 <br />
      部員 交管115 張尚弘
    </div>
    <div class="float-right mt-6 mr-16">
      <RouterLink to="/Registration/Linktree/MockInterview">
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
  transition: color 0.5s ease, box-shadow 0.5s ease;
  -o-transition: color 0.5s ease, box-shadow 0.5s ease;
  -moz-transition: color 0.5s ease, box-shadow 0.5s ease;
  -webkit-transition: color 0.5s ease, box-shadow 0.5s ease;
  text-decoration: underline;
  text-underline-offset: 5px;
  text-decoration-color: #0ea5e9;
}

.fontEff:hover {
  color: #fff;
  box-shadow: inset 0 -50px 0 0 #0ea5e9;
}
</style>
