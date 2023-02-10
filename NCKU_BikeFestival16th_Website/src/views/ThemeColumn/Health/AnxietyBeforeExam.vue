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

    <ThemeColumnHeader header="主題專欄 / 健康" keyWord="心情" theme="考前焦慮怎麼辦？" />

    <div class="mx-60 my-20 max-sm:mx-4">
      <div class="text-center text-xl leading-9 my-16">筆者：許羽沛 / 編修：廖珺安</div>
      <div>
        <picture>
          <source class="shadow-lg mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_Emotion/themeCol_emotion1.webp" type="image/webp">
          <img class="shadow-lg mx-auto my-10 w-[800px]" src="../../../assets/themeCol_Emotion/themeCol_emotion1.png" alt="emotion">
        </picture>
        <div class="text-xl leading-9">
          在準備考試時，你是否經常懷疑自我，覺得自己還沒準備充足？
          <br> 是否害怕自己的努力無法與最終的考試結果有相應的回報？
          <br><br> 是否會在考前過度緊張進而影響當天考試的發揮？
          <br> 如果有以上的情況發生，那你可能也是考前焦慮症候群的一員！
          <br> 別擔心～單車小編這就來告訴你如何戰勝考前焦慮！
        </div>
      </div>

      <div>
        <div class="text-3xl mt-16">1.相信自我</div>
        <picture>
          <source class="shadow-lg mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_Emotion/themeCol_emotion2.webp" type="image/webp">
          <img class="shadow-lg mx-auto my-10 w-[800px]" src="../../../assets/themeCol_Emotion/themeCol_emotion2.png" alt="emotion">
        </picture>
        <div class="text-xl leading-9">
          缺乏自信心越容易因為過度緊張，而亂了自己讀書的步調和考試心態。
          <br> 小編以往在考前一天或考試的當下，都會在心裡告訴自己：
          <br> 「你已經做的很好了，要相信自己準備的都能在考場上精準發揮！」
          <br> 在最後衝刺階段要做的就是多相信自己，適時的自我勉勵也能舒緩考前的緊張情緒！
        </div>
      </div>

      <div>
        <div class="text-3xl mt-16">2.調整心態</div>
        <picture>
          <source class="shadow-lg mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_Emotion/themeCol_emotion3.webp" type="image/webp">
          <img class="shadow-lg mx-auto my-10 w-[800px]" src="../../../assets/themeCol_Emotion/themeCol_emotion3.png" alt="emotion">
        </picture>
        <div class="text-xl leading-9">
          「學測只有一次，要是考差了怎麼辦？」
         <br>相信這是許多高中生及應屆考生的心魔。
         <br> 在這裡，單車節小編想要告訴各位考生：
         <br> 「考試其實只是人生的必經之路，勿用考試分數來定義自己的好壞。」
         <br> 心態上的調適，也有助於每位考生能夠適當的舒緩壓力，繼續朝著自己的目標邁進喔！
        </div>
      </div>

      <div>
        <div class="text-3xl mt-16">3.改變目標</div>
        <picture>
          <source class="shadow-lg mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_Emotion/themeCol_emotion4.webp" type="image/webp">
          <img class="shadow-lg mx-auto my-10 w-[800px]" src="../../../assets/themeCol_Emotion/themeCol_emotion4.png" alt="emotion">
        </picture>
        <div class="text-xl leading-9">
          夢想中的校系與現實中的落差，該繼續追求目標還是趁早改變呢？
          <br> 小編作為108課綱第一屆的學生，當初在高三模擬考期間也曾因為一次次的考試成績未達到自己夢想校系的門檻，而感到沮喪且不知所措…後來小編嘗試著將自己的目標轉變為以「現在的成績可以選擇的校系」為出發點，達到了就算沒有如願進自己夢想中的校系，現在可以選擇的校系也要是我喜歡且願意努力的！
          <br> 改變自己的目標並不可恥，適當調整才不會讓自己壓力過大～
        </div>
      </div>

      <div>
        <div class="text-3xl mt-16">4.心情抒發</div>
        <picture>
          <source class="shadow-lg mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_Emotion/themeCol_emotion5.webp" type="image/webp">
          <img class="shadow-lg mx-auto my-10 w-[800px]" src="../../../assets/themeCol_Emotion/themeCol_emotion5.png" alt="emotion">
        </picture>
        <div class="text-xl leading-9">
          在備考期間除了調整自己的讀書方式外，抒發自己的心情也是很重要的一環！
           <br> 切勿讓不好的情緒藏在心底，多與家人、師長、朋友談心，
           <br> 讓壓力被釋放，徹底跟焦慮說掰掰～
        </div>
      </div>

      <div class="text-xl leading-9">
        <br> 今天幫大家整理的資訊就到這邊，更多關於升學、單車節的資訊，歡迎繼續關注我們的官網和粉絲專頁喔！！
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