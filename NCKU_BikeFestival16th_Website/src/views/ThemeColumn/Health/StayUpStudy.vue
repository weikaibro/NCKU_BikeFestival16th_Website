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

    <ThemeColumnHeader header="主題專欄 / 健康" keyWord="睡眠" theme="熬夜讀書真的好嗎？" />

    <div class="mx-60 my-20 max-sm:mx-4">
      <div>
        <div class="text-center text-xl leading-9 my-16">筆者：許羽沛 / 編修：廖珺安</div>
        <picture>
          <source class="mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_Stayup/themeCol_stayup1.webp" type="image/webp">
          <img class="mx-auto my-10 w-[800px]" src="../../../assets/themeCol_Stayup/themeCol_stayup1.png" alt="stayUp">
        </picture>
        <div class="text-xl leading-9">
          112 學測將進入最後衝刺階段，身為考生的你是否覺得自己準備還不夠充足，想要犧牲睡眠時間來多看點書呢？
          <br> 身處在期末地獄中的你，是否因為讀書計畫趕不上變化而在段考前拼命熬夜呢？
          <br> 除了報復性熬夜以外，你是否常常因為壓力大而成為失眠症候群的一員呢？
          <br><br> 那就讓單車節小編來告訴你，睡眠周期是如何形成，
          <br> 與熬夜對身體產生的影響，以及快速睡眠法讓你不再熬夜！
        </div>
      </div>

      <div>
        <div class="text-3xl mt-16 mb-6">1.熬夜 bad bad</div>
        <picture>
          <source class="mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_Stayup/themeCol_stayup2.webp" type="image/webp">
          <img class="mx-auto my-10 w-[800px]" src="../../../assets/themeCol_Stayup/themeCol_stayup2.png" alt="stayUp">
        </picture>
        <div class="text-xl leading-9">
          長時間作息不正常容易導致：注意力不集中、肥胖、免疫力下…等，少熬夜對身體才是好的幫助喔！
        </div>
      </div>

      <div>
        <div class="text-3xl mt-16 mb-6">2.睡眠週期</div>
        <div class="text-xl leading-9">分為四階段的睡眠週期，讓你快速瞭解睡眠中會經歷的過程，讓大腦得到適度的休息！</div>
        <picture>
          <source class="mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_Stayup/themeCol_stayup3.webp" type="image/webp">
          <img class="mx-auto my-10 w-[800px]" src="../../../assets/themeCol_Stayup/themeCol_stayup3.png" alt="stayUp">
        </picture>
        <div class="text-xl leading-9">
          <br> 1）快速動眼期
          <br> 此階段為眼球快速移動期，也是大腦的活躍時段～容易作夢是正常的現象喔！
          <br> 2）非快速動眼第一期
          <br> 大腦開始進入「慢波睡眠」，逐漸入睡。腦波也逐漸穩定，對增強記憶力也有所幫助！
          <br> 3）非快速動眼第二期
          <br> 大腦開始隔絕外在環境，心態、呼吸逐漸平穩。也開始準備進入熟睡期～～
          <br> 4）非快速動眼第三期
          <br> 此為睡眠週期的最後一階段，大腦開始進入深層睡眠。並得到適當的休息！
        </div>
      </div>

      <div>
        <div class="text-3xl mt-16 mb-6">3. 4-7-8呼吸法</div>
        <div class="text-xl leading-9">
          簡易快速睡眠法報你知！
          <br> 睡前吸吐氣，結合冥想的呼吸放鬆，讓你能夠及早入睡，不再為失眠而苦惱！
        </div>
        <picture>
          <source class="mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_Stayup/themeCol_stayup4.webp" type="image/webp">
          <img class="mx-auto my-10 w-[800px]" src="../../../assets/themeCol_Stayup/themeCol_stayup4.png" alt="stayUp">
        </picture>
      </div>


      <div>
        <div class="text-3xl mt-16 mb-6">4.漸進式肌肉放鬆法</div>
        <div class="text-xl leading-9">
          透過臉部及頸部肌肉的伸展，
          <br> 讓全身心得到放鬆，睡眠品質up up🔝
        </div>
        <picture>
          <source class="mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_Stayup/themeCol_stayup5.webp" type="image/webp">
          <img class="mx-auto my-10 w-[800px]" src="../../../assets/themeCol_Stayup/themeCol_stayup5.png" alt="stayUp">
        </picture>
      </div>

      <div class="text-xl leading-9 mt-10 mb-6">
        今天幫大家整理的「考生保健室」資訊就到這邊，更多關於升學、單車節的資訊，歡迎繼續關注我們的官網和粉絲專頁喔！！
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