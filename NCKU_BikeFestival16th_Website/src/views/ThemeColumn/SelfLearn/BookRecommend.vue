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

    <ThemeColumnHeader header="主題專欄 / 自學" keyWord="好書" theme="不私藏好書推薦" />

    <div class="mx-60 my-20 max-sm:mx-4">

      <img class="shadow-lg mx-auto my-10 w-[800px]" src="../../../assets/themeCol_BookRecommend/BookRecommend1.jpg" alt="BookRecommend">

      <div class="text-xl leading-9 my-16">
        前面三篇文章所提到的項目與學習管道，都是小編在步入大學環境後，有所需求才真正認識補足的知識。但要如何更早發現自我在人生道路上的缺乏，就要靠大量閱讀養成的習慣來檢視了。在一方面補足自身缺點，另一方面放大眼界、與時俱進。小編列出了一些適合所有人的推薦書單，給鬧書荒的你！
        
        <br><br><span class="font-bold text-2xl">原子習慣</span> 
        <br> 本書將習慣養成的步驟拆解成四大重點，讓好習慣更易養成，使壞習慣更易戒斷。「提示：讓提示顯而易見」、「<strong>渴望</strong>：讓習慣有吸引力」
        、「<strong>回應</strong>：讓行動輕而易舉」、「<strong>滿足</strong>：讓獎賞令人滿足」這個系統不斷往復循還，藉由<strong>複利效應</strong>放大成效，
        輔以心理學：<strong>改變身分認同</strong>、僅<strong>專注於系統</strong>，並搭配生動的範例，使讀者清晰理解並比對生活現況，能將想法馬上化為行動，
        <strong>愛上無聊</strong>（對重複的事物仍有興趣），習慣也如同愛因斯坦所說的：重複做同樣的事情但期待會出現不同的結果！
        
        <br><br><span class="font-bold text-2xl">拖延心理學</span> 
        <br> 本書將拖延心態分成了五類：「<strong>害怕失敗型</strong>」過於完美主義、「<strong>害怕成功型</strong>」擔心成功需要付出太多，不如現在過的安
        逸、「<strong>反抗權威型</strong>」認為被高權位者控制，為反抗而拖延、「<strong>害怕分離型</strong>」拒絕獨行，依賴他人、依賴過去、
        「<strong>害怕親近型</strong>」害怕被他人得寸進尺，自己更加舒適。讓這些不理性的Fight-or-Flight response（戰鬥或逃跑反應）情緒，透過重新建立對時間的認知、想法糾正、設定目標等等，改變心態、自信、耐心、動機掌握力，讓自己邁出第一步，並建立耐心。透過結構分段、群體壓力、多件事的相互拖延等方法一點一點完成事項。
        
        <br><br><span class="font-bold text-2xl">被討厭的勇氣</span> 
        <br> 第一部透過哲學家與年輕人的對話將阿德勒的心理學展現給讀者。「<strong>是你把世界變複雜了</strong>」說明不幸來自於己，定
        義自己的目的。「<strong>煩惱都來自人際關係</strong>」強調為自己而活，減少比較。「<strong>課題分離</strong>」說明不插手他人的
        課題、不追求他人的認同。「橫向的人際關係」則致力於團體，對團體貢獻來滿足自我。「<strong>活在當下</strong>」敘述人生的意義在於過程、當下的每一剎
        那。五段話由淺至深闡述了阿德勒的心理學，第二部曲則為阿德勒思想的實踐應用。
        
        <br><br><span class="font-bold text-2xl">畢業就在夢想的路上，強大</span> 
        <br> 本書作者以平凡的出身、完全沒有任何背景後台支撐，卻在大學畢業後脫胎換骨，最大化利用了大學身分（成年後的轉折、社會
        企業的忍讓），在競爭激烈的大學裡拿到最大量的資源，繳出了亮眼成績單。一個個鮮活的例證，完全一樣的起點，卻有著讓人震撼
        的人生，分類成「<strong>自學、自律、選擇、熱忱</strong>」的四大特質，完全不雞湯的文字，推動著讀者們大力衝刺，成為夢想中的自己。
        
        <br><br><span class="font-bold text-2xl">小編的建議</span> 
        <br> 前三本書的內容都以論述為主，後繼較難的讀者也可以考慮先看最後一本書後，對未來有著更具體的目標後，再來認識配套的技巧喔！
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