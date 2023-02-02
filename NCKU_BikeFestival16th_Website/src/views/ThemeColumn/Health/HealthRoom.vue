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

    <ThemeColumnHeader header="主題專欄 / 健康" keyWord="健身" theme="考生保健室" />

    <div class="mx-60 my-20 max-sm:mx-4">
      <div class="text-xl leading-9 mt-10">
        在備考期間，身為高中生或學測考生的你是否經常讀書讀到肩頸痠痛？
        <br />
        在閱讀大量題目時常讓你感到眼睛酸澀？總是在苦惱被書堆淹沒的你沒時間運動怎麼辦？
        <br /><br />
        別擔心！這次的「考生保健室」專欄，就讓小編來與你一同分享四招放鬆身心的秘笈～
        <br />
        讓你在讀書之餘也能適當的放鬆，滿血復活戰勝大考！
      </div>

      <div>
        <div class="text-3xl mt-16">1.眼部放鬆</div>
        <picture>
          <source class="shadow-lg mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_healthEye.webp" type="image/webp">
          <img class="shadow-lg mx-auto my-10 w-[800px]" src="../../../assets/themeCol_healthEye.png" alt="healthEye">
        </picture>
        <div class="text-xl leading-9">
          眼睛操
          <br />
          國英閱讀題型太長讓你看到頭昏眼花？你可以透過「眨眼操」 <br />
          讓你每天只需花費一分鐘時間，就能達到保護眼睛的效果。 <br /><br />
          閉目養神 <br />
          小編自己在準備學測時，也經常大量閱讀許多題目而感到眼睛酸澀。 <br />
          這時小編會適時的讓自己閉上眼睛幾分鐘，讓眼部得到適當的休息後再繼續努力讀書喔！
          <br /><br />
          遠離3C產品 <br />
          準備學測或其他考試時，對3C產品的自我控管也是很重要的一環！ <br />
          適量的減少一天中使用手機的頻率，既能幫助讀書專注力提升，也能保護視力喔！
        </div>
      </div>

      <div>
        <div class="text-3xl mt-16 mb-6">2.健身－徒手健身</div>
        <picture>
          <source class="shadow-lg mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_handWorkout.webp" type="image/webp">
          <img class="shadow-lg mx-auto my-10 w-[800px]" src="../../../assets/themeCol_handWorkout.png" alt="handWorkout">
        </picture>
        <div class="text-xl leading-9">
          身為考生的你是否還在苦惱每天的時間都被讀書占了大部分，沒有時間能好好運動放鬆呢？
          <br />
          當讀書時間過長，​會使人頭暈、記憶力減退、理解能力下降，​ <br />
          單車小編在此強力推薦「Tabata間歇運動訓練」 ， <br />
          透過深蹲、高抬腿、捲腹、平板支撐...等動作， <br />
          「每日做4分鐘、運動20秒，休息10秒為一組，共做8個循環」 <br />
          此運動是一種耗時最短、免專業健身器材就能做的運動， <br />
          讓你隨時都能燃燒脂肪，也能讓腦神經得到好的休息和恢復！​
        </div>
      </div>

      <div>
        <div class="text-3xl mt-16 mb-6">3.肩頸放鬆－肩頸操</div>
        <picture>
          <source class="shadow-lg mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_shoulderWorkout.webp" type="image/webp">
          <img class="shadow-lg mx-auto my-10 w-[800px]" src="../../../assets/themeCol_shoulderWorkout.png" alt="shoulderWorkout">
        </picture>
        <div class="text-xl leading-9">
          在家讀書時經常姿勢不正確經常感到肩頸痠痛？
          <br />
          「繞肩運動」改善你的背部僵硬，讓年輕的肩膀不再「頂扣扣」！
        </div>
      </div>

      <div>
        <div class="text-3xl mt-16 mb-6">4.拉筋伸展</div>
        <picture>
          <source class="shadow-lg mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_shoulderStretch.webp" type="image/webp">
          <img class="shadow-lg mx-auto my-10 w-[800px]" src="../../../assets/themeCol_shoulderStretch.png" alt="shoulderStretch">
        </picture>
        <div class="text-xl leading-9">
          久坐在書桌前容易腳麻、屁股痠痛？
          <br />
          「瑜珈」讓你舒緩緊繃的神經，血液循環也能改善。 <br />
          快跟著小編介紹的方法一起活絡筋骨吧🧘‍♀
        </div>
      </div>

      <div class="text-xl leading-9 mt-10 mb-6">
        今天幫大家整理的資訊就到這邊，更多關於升學、單車節的資訊，歡迎繼續關注我們的官網和粉絲專頁喔！！
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
</style>
