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

    <ThemeColumnHeader header="主題專欄 / 大學生活" keyWord="活動" theme="為生活添加調味：課餘活動資訊分享" />

    <div class="mx-60 my-20 max-sm:mx-4">
      <picture>
        <source class="mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_AfterClassInfo/afterClassInfo1.png" type="image/webp">
        <img class="mx-auto my-10 w-[800px]" src="../../../assets/themeCol_AfterClassInfo/afterClassInfo1.png" alt="afterClass">
      </picture>
      <picture>
        <source class="mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_AfterClassInfo/afterClassInfo2.png" type="image/webp">
        <img class="mx-auto my-10 w-[800px]" src="../../../assets/themeCol_AfterClassInfo/afterClassInfo2.png" alt="afterClass">
      </picture>
      <div class="text-xl leading-9">
        上大學後除了課業，也想體驗好多活動怎麼辦？這時候課餘時間該如何充實自己呢？
        <br> 像小編我就是很喜歡在空閒時往外走的人，非常喜歡把生活過的充實而伴隨的滿足感。
        <br><br> 所以！這篇貼文整理了常見的活動種類，還有資訊平台供大家參考，點進來看更多！
        <br> 如果你是好想利用暑假體驗不同的生活，那「打工換宿」是你不二的好選擇。
        <br> 什麼？！教育部也想鼓勵我出去玩，那「壯遊計畫」是你的旅遊好夥伴！
        <br><br> 課餘的學術活動百百種，展覽、工作坊、論壇、講座、體驗活動
        <br> 小編這邊推文推薦三個彙整平台，希望大家對課餘時間的規劃更有方向～
        <br><br> 第一個要先介紹的是 <strong>「打工換宿」</strong>!
      </div>
      <picture>
        <source class="mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_AfterClassInfo/afterClassInfo3.png" type="image/webp">
        <img class="mx-auto my-10 w-[800px]" src="../../../assets/themeCol_AfterClassInfo/afterClassInfo3.png" alt="afterClass">
      </picture>
      <div class="text-xl leading-9">
        Ｑ：什麼是打工換宿？
        <br> Ａ：以打工換取工作期間住宿的旅遊模式，基本上不會有額外薪水，大學生能利用暑假的時間實踐。
        <br><br>
        <ul class="list-disc list-inside">
          <li>勞務 vs 技能</li>
        </ul>
        依工作性質可以分為勞務或技能換宿，前者不需要太專業的技能，大多是打掃清潔、餐廳外場等較容易短時間內上手的工作，基本上也可以理解成用時間、勞力來換宿，通常會要求固定工作時數，例如：每天 3-5 小時。
        <br> 後者技能換宿就不一樣了，最常看到的類型有攝影剪接、美術繪畫、行銷等，可能是要幫民宿拍宣傳影片、經營社群網站等，這類型的換宿不一定會要求固定工作時數，而是用產出的成果來約定，例如：換宿期間需完成一部影片，花多少時間你自己決定。
        <br><br> Ｑ：打工換宿有什麼好處？
        <br> Ａ：
        <br><br>
        <ul class="list-disc list-inside">
          <li>省旅費：</li>
        </ul>
         在台灣住宿費並不便宜，就連背包客棧的一個床位一晚也可能要 400-500 起跳。打工換宿可以省下住宿費，旅行總花費也可以因此少了一大半。
        <br><br>
        <ul class="list-disc list-inside">
          <li>適合慢生活：</li>
        </ul> 
         有些人不喜歡走馬看花式的旅遊，花兩周～一個月、以打工換宿的方式旅遊，可以得到比觀光客還深度的旅行體驗，適合嚮往慢節奏旅行步調的人。
        <br><br>
        <ul class="list-disc list-inside">
          <li>體驗在地生活：</li>
        </ul> 
         沒有什麼比實際在一個地方長期生活，更能了解當地的方式了。雖然若只有打工換宿兩周或一個月，嚴格來說也不算很長的時間，但與一般觀光客相比，已經多了很多時間可以體驗當地。
        <br><br>
        <ul class="list-disc list-inside">
          <li>認識來自各地的新朋友：</li>
        </ul> 
         打工換宿的人可能來自台灣各地，甚至世界各地，對於喜歡交朋友的人來說，是可以在短時間內認識很多人的好方式。尤其選擇同一個換宿的人很可能有共同興趣，例如：衝浪、潛水、喜歡海島生活等等，有機會結交價值觀相近、志同道合的好朋友！
        <br><br>
        <ul class="list-disc list-inside">
          <li>跳脫舒適圈：</li>
        </ul> 
        打工換宿不需要結伴而行，一個人到一個陌生環境、睡在不熟悉的床、做著不一定是平常會做的工作，可以說是跨出舒適圈的一大步。因此也有很多高中剛畢業的學生，或大學生，喜歡趁寒暑假嘗試打工換宿。
        <br><br> 接下來要介紹的是「壯遊計畫」
      </div>
      <picture>
        <source class="mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_AfterClassInfo/afterClassInfo4.png" type="image/webp">
        <img class="mx-auto my-10 w-[800px]" src="../../../assets/themeCol_AfterClassInfo/afterClassInfo4.png" alt="afterClass">
      </picture>
      <div class="text-xl leading-9">
        Ｑ：什麼是壯遊計畫？
        <br> Ａ：教育部青年發展署的補助計畫，鼓勵青年以壯遊體驗多元方式，與臺灣各地人文社會深入互動交流，認識瞭解臺灣不同面向。
        <br><br> Ｑ：我可以參加嗎？
        <br> Ａ：2 人（含）以上即可組成團隊，本國青年亦可與境外青年共同組隊參與，並須至少 1 人為本國青年，所有團員須於企劃執行期間全程參與。
        <ul class="list-disc list-inside">
          <li> 圓夢青年組：18 至 35 歲（1988 年 1 月 1 日至 2005 年 12 月 31 日）青年且非具高級中等學校學生資格之青年所組成之團隊。</li>
          <li> 扎根種子組：具高級中等學校在學學生（含應屆畢業生）資格者所組成之團隊，可由不同學校學生組成。</li>
        </ul> 
        <br><br> Ｑ：還有什麼適合我參加呢？
        <br> Ａ：課餘時間大家還可以參加展覽、工作坊、論壇、講座、體驗活動等等。
      </div>
      <picture>
        <source class="mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_AfterClassInfo/afterClassInfo5.png" type="image/webp">
        <img class="mx-auto my-10 w-[800px]" src="../../../assets/themeCol_AfterClassInfo/afterClassInfo5.png" alt="afterClass">
      </picture>
      <div class="text-xl leading-9">
        Ｑ：我要從哪裡知道有哪些活動可以參加呢？
        <br> Ａ：
        <ul class="list-disc list-inside">
          <li> 文化部 iCulture：網站統整全台各地大大小小的藝文活動及節慶資訊，也能直接連結到活動網站報名，非常方便。</li>
          <li> 非池中藝術網：非池中藝術網專門統整全台各地的展覽資訊，一覽無遺，若想在空閒時間受藝術的氛圍陶冶，不妨可以到網站找找</li>
          <li> ACCUPASS 活動通：以學術活動為主的資訊統整平台，不論是工作坊、論壇、線上課程、讀書會或者是講座，都能直接在網站中報名參加，培養軟實力</li>
        </ul>
      </div>
      <picture>
        <source class="mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_AfterClassInfo/afterClassInfo6.png" type="image/webp">
        <img class="mx-auto my-10 w-[800px]" src="../../../assets/themeCol_AfterClassInfo/afterClassInfo6.png" alt="afterClass">
      </picture>
    </div>
    
    <div>
      <RouterLink to="/ThemeColumn">
        <RoundButton class="mx-auto" BtnTitle="Back" />
      </RouterLink>
    </div>
  </div>
  <Footer />
</template>