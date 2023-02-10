<script setup>
import { RouterLink } from "vue-router";
import Navbar from "../../../components/Navbar.vue";
import Footer from "../../../components/Footer.vue";
import RoundButton from "../../../components/RoundButton.vue";
import ThemeColumnHeader from "../../../components/ThemeColumnHeader.vue";
</script>

<template>
<Navbar />
  <div class="mx-20 my-10 max-sm:mx-4">

    <ThemeColumnHeader header="主題專欄 / 大學生活" keyWord="時間" theme="時間管理祕笈" />

    <div class="mx-60 my-20 max-sm:mx-4">
      <div class="text-center text-xl leading-9 my-16">筆者：謝雅婷 / 編修：廖珺安</div>
      <img class="shadow-lg mx-auto my-10 w-[800px]" src="../../../assets/themeCol_TimeManagement/timeManagement1.png" alt="">
      <picture>
        <source class="shadow-lg mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_TimeManagement/timeManagement1.webp" type="image/webp">
        <img class="shadow-lg mx-auto my-10 w-[800px]" src="../../../assets/themeCol_TimeManagement/timeManagement1.png" alt="timeManagement">
      </picture>
      <div class="text-xl leading-9">
        時間管理一直以來都是生活中非常重要的一項能力，不論實在學中還是備考中，若能掌握時間管理的技巧，絕對能有更佳的效率！小編我想經由這篇文分享一些時間觀禮相關的資訊，廢話不多說直接進入正題～
        <br><br><span class="font-bold text-2xl">時間管理的技巧</span>
      </div>
      <picture>
        <source class="shadow-lg mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_TimeManagement/timeManagement2.webp" type="image/webp">
        <img class="shadow-lg mx-auto my-10 w-[800px]" src="../../../assets/themeCol_TimeManagement/timeManagement2.png" alt="timeManagement">
      </picture>
      <div class="text-xl leading-9">
        首先是時間管理的技巧，我們將其分成四個點：
        <br><br> 第一是辨認高價值的任務，面對接踵而來的大小事，列出所有代辦事項，分辨輕重緩急，先擬好大概的處理順序，既不會漏掉任何事，在分配上也能更加從容。
        <br><br> 第二點是管理和配置專注力，有時候會面臨到沒辦法在短時間內完成各種事，就可以依照事情的重要性與自我期許決定自己該投入多少心力，若必要時，請求他人協助不失為一個好辦法喔！
        <br><br> 第三，提升單位時間專注力，在分配好專注力後，也必須充分發揮專注力，可以摸索適合自己的方法，例如讀書讀累了換個環境、遠離手機、聽或不聽音樂等等⋯⋯最重要的是養好精神絕對能更加容易達成專注，適時的休息能走更長遠的路。
        <br><br> 最後一點是建立任務管理系統，可以選擇一本手帳或行事曆或是應用程式，依自身使用習慣決定，這些工具的輔助能更有效管理生活瑣事，別忘了持之以恆！長久下來會發現自己能過得既充實又從容～
        <br><br><span class="font-bold text-2xl">科學佐證的自律法</span> 
      </div>
      <picture>
        <source class="shadow-lg mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_TimeManagement/timeManagement3.webp" type="image/webp">
        <img class="shadow-lg mx-auto my-10 w-[800px]" src="../../../assets/themeCol_TimeManagement/timeManagement3.png" alt="timeManagement">
      </picture>
      <div class="text-xl leading-9">
        什麼！自律也能牽扯科學！沒錯，自律的循環就是一種，就像是能達成自律的基礎原理，在這樣的原則下套用在各種情況都很適合，不妨可以試看看！
        <br> 目標設立→自我規劃、策略→自我監控與調節→自我反思）
        <br><br><span class="font-bold text-2xl">app推薦</span> 
        <br> 說到時間管理，想必也要一些輔助的工具，一直以來小編及朋友們都有在多方嘗試一些應用程式，不管是面對大考還是日常生活都能帶給我們一些幫助，以下是小編從以前試過的的app，在這邊推薦給大家！
      </div>
      <picture>
        <source class="shadow-lg mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_TimeManagement/timeManagement4.webp" type="image/webp">
        <img class="shadow-lg mx-auto my-10 w-[800px]" src="../../../assets/themeCol_TimeManagement/timeManagement4.png" alt="timeManagement">
      </picture>
      <div class="text-xl leading-9">
        YPT
        <br> 創建學習群與朋友一起相互督促、努力，切記要適度比較，重點不在讀書時間的長短，而是自己讀進去了多少，如果開始在意計時的數字與排名，反而是偏離了讀書的重點，還是要注意自己的心態後再使用，我建議的方式就是跟幾個好友創一個讀書室一起努力就好，這個app是幫助我能跟精確分配讀書和休息，知道自己休息了多久，再回到位置上繼續專注就好。
        <br><br> Forest專注森林
        <br> 邊專注邊種樹儀式感滿滿，使用頁面簡單明瞭，同時兼顧督促及療癒的效果，雖然小編我不是很建議讀書計時，只是當一天結束後看到自己種了滿滿的樹，也能稍稍感到滿足呢！
        <br><br> Time tree
        <br> 排程、掌控時間，能與朋友、室友、家人共用，待辦、空閒時間更明瞭，也能成為互相督促的工具，像上大學後，就很適合跟室友一起創建一個，不管是考試還是活動，室友間也能互相提醒。
        <br><br> 潮汐
        <br> 專門提供各種白噪音，如果自己能以聽白噪音提升專注，這可是非常實用的程式，也有付費的方案，就看自己有沒有需求。
        <br><br> 番茄鐘
        <br> 近年出現的番茄鐘學習法最佳工具，可以幫你計時、切割出休息時段，也能紀錄一天的時間規劃，非常實用呢！
        <br><br><span class="font-bold text-2xl">自主學習的心態調整</span> 
        <br> 如同前述自律的循環，擁有目標是自律的根本，而自律也是構築目標的一環，心態對自身的影響不容小覷，所以呢，小編還是要推薦幾種心態和方向：
      </div>
      <picture>
        <source class="shadow-lg mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_TimeManagement/timeManagement5.webp" type="image/webp">
        <img class="shadow-lg mx-auto my-10 w-[800px]" src="../../../assets/themeCol_TimeManagement/timeManagement5.png" alt="timeManagement">
      </picture>
      <div class="text-xl leading-9">
        <ul class="list-decimal list-inside">
          <li>自主學習建立在一種自我實現的生活態度，我們是為自己而活，需要一點一點的向目標邁進。</li>
          <li>想想為什麼讀大學、對進入哪個校系的渴望，可以幻想自己考上理想校系，更加有動力實現願景。</li>
          <li>不迫切想得到進步，唯有穩紮穩打、循序漸進，妄想一步登天反而造成反效果。</li>
          <li>重要的是和過去的自己比較，看見自己的進步也能是一種動力，並期待著自己創造的可能。</li>
          <li>撞牆期不代表努力白費，持續努力將會體現進步！</li>
        </ul>
        <br> 以上是我們整理出關於時間管理與心態的資訊分享，希望點入這篇文的大家都能藉此摸索出屬於自己的一套方法，並活用在生活中，上大學之後時間的彈性也使得如何有效時間管理成為大學生的必修之一，以正確的心態面對不讓自己因小失大。更多資訊都能點入官網的其他專欄了解更多，記得也要關注單車節facebook和instagram粉專，各種升大學相關資訊分享不錯過！
      </div>
    </div>
    
    <div>
      <RouterLink to="/ThemeColumn">
        <RoundButton class="mx-auto" BtnTitle="Back" />
      </RouterLink>
    </div>
  </div>
  <Footer />
</template>