<script setup>
import { RouterLink } from "vue-router";
import Navbar from "../../../components/Navbar.vue";
import Footer from "../../../components/Footer.vue";
import RoundButton from "../../../components/RoundButton.vue";
import ThemeColumnHeader from "../../../components/ThemeColumnHeader.vue";
</script>

<template>
<Navbar />
  <div class="mx-20 my-32 max-sm:mx-4">

    <ThemeColumnHeader header="主題專欄 / 大學生活" keyWord="斜槓" theme="分身不乏術——斜槓是在斜什麼" />

    <div class="mx-60 my-20 max-sm:mx-4">
      <div class="text-center text-xl leading-9 my-16">筆者：謝雅婷 / 編修：廖珺安</div>
      <img class="shadow-lg mx-auto my-10 w-[800px]" src="../../../assets/Slashie.png" alt="Slashie">
      <div class="text-xl leading-9">
        小編在上大學後對生活的多樣性有更深認知，時常想著如何豐富自己的大學生活，了解到了生活不單單只有課業，還有餘能裕發展自己的興趣，甚至將其作為一項工作，藉由這篇文章想與大家分享大學生的斜槓，在學生與其他身份來去自如。
        <br><br>以下我們將分為四個部分來做分享
        <br> 1. 斜槓是什麼
        <br> 2. 斜槓適合什麼人
        <br> 3. 斜槓的基本
        <br> 4. 學長姐個案分享
        <br><br><span class="font-bold text-2xl"> 斜槓是什麼</span>
        <br> 現今延伸為一種​​工作態度，斜槓一詞具體意指年輕人不再滿足於專一職業的工作模式，而選擇有多重職業及身份的生活，但這與兼職不同，斜槓是以興趣作為出發點，使得生活更具豐富度及多樣性。
        <br><br><span class="font-bold text-2xl"> 斜槓適合哪些人？</span>
        <br> 1. 對某件本業外的事物很感興趣
        <br> 2. 想讓自己的生命更豐富、更多元
        <br> 3. 想要擁有額外收入、甚至是能賺到被動收入
        <br><br><span class="font-bold text-2xl"> 斜槓的基本？</span>
        <br> 1. 清楚自己的目的：
        <br> 了解自己為何開始，明白花費更多時間的必要，重點是自己對於這件事不會造成額外的壓力，應該會是獲得樂趣。
        <br> 2. 年齡不設限：
        <br> 以我們學生的身份，同樣可以嘗試多方探索。
        <br> 3. 找出真正感興趣的事：
        <br> 當只是一頭熱栽入，沒辦法持之以恆，反而會是白忙一場，所以在開始之前記得審慎評估自己的興趣，再著手進一步的規劃。
        <br> 4. 懂得時間管理：
        <br> 若我們想從事斜槓，以課業為本業的學生，勢必要在本業及斜槓間平衡，所以通常會使用零碎或休假時間。
        <br><br>小編提醒：
        <br> 通常的本業是指有穩定收入的工作，斜槓可能會是創業或自媒體相關，所以強調主業需要穩固是因為需要有金源去支持你的斜槓，但以我們學生來講，工作不佔生活大多數，創業也是比較少有的選擇，所以我們想分享的學生斜槓不會是金錢導向為主。
        <br><br><span class="font-bold text-2xl"> 學長姐個案分享</span>
        <br><br> 📌學習不只是比較，更是自我的轉化與吸收
        <br> 從過往到現今的教育制度，或許我們都深受分數的禁錮，任何的學習勢必都和分數有所掛勾。一旦喪失分數的衡量，失去和同儕間的比較，或許我們就不見得願意去學習。但事實上，學習絕不侷限於課業上的學習，更不侷限於考試與測驗，事實上我們每分每秒都在學習，而學習更重要的是自我的轉化與吸收。而這樣的概念，也深深影響著我。
        <br><br> 📌身為一名學生，除了課業，你在學習上能投入的是什麼？
        <br> 誠如前述可知，「學習」絕不只是分數、競爭，而是自我轉化與吸收，甚至也不侷限於課業，那如你／妳身為一名學生，除了課業外，你／妳在學習上能投入的，究竟是什麼？
        <br><br> 在回答這個問題前，先讓我自我介紹一下！我是現就讀國立成功大學交通管理科學系大一生：吳宸宏，對我而言，學習是具有多種可能的。我總希望能藉由自身感興趣的領域去發展不同的學習，如我對於社會科學（尤其在公共參與、法律議題上）別具興趣，同時也對文化傳承及保存、資訊科學，以及服務學習、壯遊等相關領域也有興趣學習。因此，從高中開始，我即非常喜歡參與各式活動與組織，如曾在高中擔任親善大使，負責接待外賓，以及協辦校內各項活動。同時，也因對於學生自治的興趣，在高中階段也擔任班級代表、相關校級會議代表，並且也曾於台灣青年民主協會擔任青年夥伴。同時，也曾參與廟宇文化資產保存工作坊，並也曾參與過西拉雅族夜祭、青年壯遊體驗計畫。
        <br><br> 此外，也因自身對法律議題的興趣，因此至今仍為司改會 318 攻佔行政院訴訟資料整理之志工，同時也加入台語巢政策組、現也擔任雙北高中職學生權益陣線理事，持續關注高中相關學權議題。進入成功大學後，也仍於學生自治深耕，除加入學生會外，同時也延續高中推動的 18 歲公民權倡議，持續於成大校內推動，並和志同道合的朋友，一同成立「成功大學 18 歲公民權倡議行動」，並和系聯會合作一同舉辦「功民入口（18 歲公民權論壇）」，邀請各黨政治人物一同分享對於 18 歲公民權的看法與想法。
        <br><br> 📌我為何投入？投入後，會面對怎麼樣的困難呢？
        <br> 看了以上的種種經歷，事實上我之所以投入，其實原因就是因為自身的興趣，以及是自身喜愛的領域。對我而言，我總認為實際做、應用，遠比只理解理論還要來得重要，更重要的是我認為現今的社會是變化快速的，過往僅於固定領域深耕，或許能在部分領域上，得到極高的成就，但卻難逃社會結構的變遷。因此，我希望這些我所投入的事務，因為自身的興趣做為開端，也因後續的深究，讓自身多獲得一項能力。
        <br><br> 參考網站：
        <a target="_blank" rel="noreferrer noopenner" href="https://startingedu.com/slash/">
          <span class="linkEff">
            到底什麼是「斜槓」？在開始斜槓人生前，你應該具備這4項思維！
          </span>
        </a> 
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

<style scoped>
.linkEff {
  transition: color 0.5s ease, box-shadow 0.5s ease;
  -o-transition: color 0.5s ease, box-shadow 0.5s ease;
  -moz-transition: color 0.5s ease, box-shadow 0.5s ease;
  -webkit-transition: color 0.5s ease, box-shadow 0.5s ease;
  text-decoration: underline;
  text-underline-offset: 5px;
  text-decoration-color: #0ea5e9;
}

.linkEff:hover {
  color: #fff;
  box-shadow: inset 0 -50px 0 0 #0ea5e9;
}
</style>