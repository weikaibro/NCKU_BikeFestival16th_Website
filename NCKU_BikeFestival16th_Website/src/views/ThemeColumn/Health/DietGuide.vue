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

    <ThemeColumnHeader header="主題專欄 / 健康" keyWord="飲食" theme="考生飲食攻略" />

    <div class="mx-56 my-20 max-sm:mx-4">

      <div>
        <picture>
          <source class="shadow-lg mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_DietGuide/themeCol_dietGuide1.webp" type="image/webp">
          <img class="shadow-lg mx-auto my-10 w-[800px]" src="../../../assets/themeCol_DietGuide/themeCol_dietGuide1.png" alt="dietGuide">
        </picture>
        <div class="text-xl leading-9">
          112學測才剛落幕，相信許多中學生也正身處期末考的水深火熱之中。在此期間，該如何有效的控制自己的飲食？
          <br> 就讓單車節小編來告訴你，如何成為健康之人並戰勝大考！
        </div>
      </div>

      <div>
        <div class="text-3xl mt-16 mb-6">1.避免高熱量食物</div>
        <picture>
          <source class="shadow-lg mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_DietGuide/themeCol_dietGuide2.webp" type="image/webp">
          <img class="shadow-lg mx-auto my-10 w-[800px]" src="../../../assets/themeCol_DietGuide/themeCol_dietGuide2.png" alt="dietGuide">
        </picture>
        <div class="text-xl leading-9">
          市售的含糖飲料、炸物，都是會造成肥胖的元兇！
          <br> 吃多也容易造成代謝下降、心血管疾病...等問題。
          <br> 除此之外，咖啡因跟甜食是許多考生釋放壓力的方法🌟
          <br> 小編在此想告訴大家，雖然咖啡因跟甜食可以達到提神、心情變好的效果，攝取過多也會影響睡眠品質、造成肥胖。盡量適量攝取就好喔！
        </div>
      </div>
      <div>
        <div class="text-3xl mt-16 mb-6">2.飲食均衡</div>
        <picture>
          <source class="shadow-lg mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_DietGuide/themeCol_dietGuide3.webp" type="image/webp">
          <img class="shadow-lg mx-auto my-10 w-[800px]" src="../../../assets/themeCol_DietGuide/themeCol_dietGuide3.png" alt="dietGuide">
        </picture>
        <div class="text-xl leading-9">
          在備考期間最重要的，就是飲食均衡！小編建議可多攝取蔬果及清淡食物，像是菠菜、高麗菜等…，維生素A也能有效加強免疫力！
          <br> 千萬要忌口辛辣、過鹹的食物吃多容易造成腹痛、腸胃不適，有可能導致考試發揮不如預期。
        </div>
      </div>
      <div>
        <div class="text-3xl mt-16 mb-6">3.保健食品</div>
        <picture>
          <source class="shadow-lg mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_DietGuide/themeCol_dietGuide4.webp" type="image/webp">
          <img class="shadow-lg mx-auto my-10 w-[800px]" src="../../../assets/themeCol_DietGuide/themeCol_dietGuide4.png" alt="dietGuide">
        </picture>
        <div class="text-xl leading-9">
          多攝取小麥、黃豆製品，可快速增強記憶力，讓你擁有超強背功！在考試當下能一字不漏地精準發揮～
          <br> 此外 保護眼睛也是很重要的一環，小編私心推薦葉黃素、維生素A
          <br> 不僅可以讓你保持良好的視力，還能在閱讀大量文本時眼睛不再有酸澀感！
        </div>
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