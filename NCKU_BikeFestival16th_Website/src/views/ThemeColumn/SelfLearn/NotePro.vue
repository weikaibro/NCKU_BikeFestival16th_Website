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

    <ThemeColumnHeader header="主題專欄 / 自學" keyWord="筆記" theme="如何成為筆記pro" />

    <!-- content -->
    <div class="mx-60 my-20 max-sm:mx-4">

      <div class="text-center text-xl leading-9 my-16">筆者：宋張齊 / 編修：廖珺安</div>

      <img class="shadow-lg mx-auto my-10 w-[800px]" src="../../../assets/themeCol_NotePro/NotePro1.jpg" alt="NotePro">

      <div class="text-xl leading-9 my-16">
        上課、讀書、學習，這些都是我們身為學生時一直要持續做的事情。但要怎樣才能更好的吸收、更確實的學習、應用，並且讓自己不要忘記呢？最重要的就是要善用紀錄，不管是以手寫或是電子的方式，將所學紀錄下來就不會消失了。這是一種學習以及抵抗遺忘最好的方式，我們總是需要一些工具來幫助我們更好的學習，而且不只是for學生時代的我們，更是為了日後的自己！
        <br><br> 今天小編就整理了一些推薦的筆記方法，以及應用程式，讓大家可以擁有學習好夥伴！
      </div>

      <img class="shadow-lg mx-auto my-10 w-[800px]" src="../../../assets/themeCol_NotePro/NotePro2.jpg" alt="NotePro">

      <div class="text-xl leading-9 my-16">
        <span class="font-bold text-2xl">康乃爾筆記法</span> 
        <ul class="list-disc list-inside">
          <li>將課堂內容、課後複習和總體摘要連結起來的一套方法</li>
          <li>能有效節省時間、並使筆記容易理解</li>
          <li>上課中</li>
            <ul class="list-decimal list-inside ml-6">
              <li>以不影響聽課的方式將上課內容（講師的詮釋）快速紀錄，來不及也可以寫下標題並留下空白</li>
              <li>目的是幫助事後回憶講師特別提到的重點，以利之後統整節省自我學習的時間</li>
            </ul>
          <li>上課後</li>
            <ul class="list-decimal list-inside ml-6">
              <li>盡快將課本、上課講義一併讀通，修正並填補筆記欄的漏洞</li>
              <li>將關鍵字或不太理解的部分的解釋寫在整理欄</li>
            </ul>
          <li>實作後</li>
            <ul class="list-decimal list-inside ml-6">
              <li>在實作後將筆記做最後修正，並在不看教材的情況下，用自己的話寫出一份摘要</li>
            </ul>
        </ul>
      </div>

      <img class="shadow-lg mx-auto my-10 w-[800px]" src="../../../assets/themeCol_NotePro/NotePro3.jpg" alt="NotePro">

      <div class="text-xl leading-9 my-16">
        <span class="font-bold text-2xl">心智圖法</span>
        <ul class="list-disc list-inside">
          <li>圖像式記憶更能加深學習內容的理解程度，一目瞭然主題與關鍵字的關係</li>
          <li>較適合完整讀熟並實作後的整體複習，將碎片化的內容連接，方便記憶</li>
          <li>關鍵字－吸收</li>
            <ul class="list-decimal list-inside ml-6">
              <li>列出章節關鍵字，將其整理分類整理成適當的群組</li>
              <li>這個步驟考驗的是畫重點的能力</li>
            </ul>
          <li>層狀結構－消化</li>
            <ul class="list-decimal list-inside ml-6">
              <li>越核心的主題在複習時越重要，連結各小點的方法可以是細節、案例、因果關係等</li>
              <li>有效整理重點的過程同時消化所學的內容</li>
            </ul>
          <li>圖像＆線條－應用</li>
            <ul class="list-decimal list-inside ml-6">
              <li>在需要加強記憶或較模糊的地方加上圖例、例題，以更易理解的方式適當取代層狀結構</li>
              <li>可以用虛線或細線在不同分支但互有關係的部分使其相連成網，比較差異、相關性等</li>
            </ul>
        </ul>
        <br><br>
        介紹完做筆記的方法之後，再來就是提供大家一些比較好使用的app，讓大家在做筆記時更加順手！
        <ul class="list-disc list-inside">
          <li>GoodNotes</li>
            <ul class="list-decimal list-inside ml-6">
              <li>筆記結構：層狀式資料夾，直覺易上手</li>
              <li>強大的搜尋功能，手寫字體也能辨認</li>
              <li>支援雙視窗模式，提升多工處理效率</li>
              <li>個人化封面及頁面設計，有大量模板可以選擇</li>
              <li>超實用的匯入匯出功能，方便的跨平台轉檔</li>
            </ul>
          <li>Evernote</li>
            <ul class="list-decimal list-inside ml-6">
              <li>筆記結構：層狀式資料夾，直覺易上手</li>
              <li>強大的搜尋功能，可以拍照掃描票券資訊等瑣碎細項</li>
              <li>支援多系統（Windows、ios、Android、網頁版）</li>
              <li>一款歷史悠久的筆記軟體，在非常多應用上都有相當多的小插件、工具可以使用，隨時間更新已成為非常全面的綜合體</li>
            </ul>
          <li>Notion</li>
            <ul class="list-decimal list-inside ml-6">
              <li>筆記結構：由 block 組成的 page 形成 database，且可以無限延伸</li>
              <li>適合習慣以電腦、雲端記事者</li>
              <li>提供 block 指令、page 模板可高度客製化</li>
              <li>擷取網頁、支援 30 多種多媒體、整合超過 50 個軟體</li>
              <li>分享筆記與多人協作</li>
            </ul>
        </ul>
        <br><br>
        小編說說話：
        另外還有幾種筆記軟體是小編沒有用過的——網狀式筆記軟體，它更符合人類節點式連結的大腦，例如 Obsidian、Roam Research、Logseq、Workflowy 和 Tana，他們有著更直覺地使用模式，但都普遍更難上手，鼓勵有興趣的人可以踏出舒適圈，更有效率的整理思緒喔！
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