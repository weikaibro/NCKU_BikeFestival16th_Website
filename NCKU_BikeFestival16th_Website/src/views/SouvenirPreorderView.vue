<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import homepage_lineHeader from "../components/homepage_lineHeader.vue";
// entering animation
function fadeInEff() {
  let effElement = document.querySelectorAll(".scrollEff");
  for (var i = 0; i < effElement.length; i++) {
    var elem = effElement[i]
    var distInView = elem.getBoundingClientRect().top - window.innerHeight + 100;
    if (distInView < 0) {
      elem.classList.add("fadeIn");
    } 
  }
}
onMounted(() => {
  // first, clear the animation className when entering this page
  let effElement = document.querySelectorAll(".scrollEff");
  for (var i = 0; i < effElement.length; i++) {
    var elem = effElement[i]
    if (elem.classList.contains("fadeIn")) {
      elem.classList.remove("fadeIn");
    }
  }
  window.addEventListener('scroll', fadeInEff);
  fadeInEff()
})
onBeforeUnmount(() => {
  // clear the eventListener to improve efficiency
  window.removeEventListener('scroll', fadeInEff); 
})
</script>

<template>
  <div>
    <Navbar/>
    <div class="flex flex-col justify-center items-center py-32">
      <div class="flex justify-center items-center mb-16 max-md:mb-6">
        <homepage_lineHeader headerTitle="紀念品介紹" />
      </div>

      <div class="scrollEff flex my-20 w-[70%] gap-20 max-xl:w-[90%] max-lg:flex-col max-lg:text-center max-lg:items-center">
        <img class="w-[300px] h-[300px]" src="../assets/Souvenir/Souvenir1.png" alt="Souvenir">
        <div class="flex flex-col justify-center gap-4 text-xl max-sm:text-base">
          <div class="text-3xl font-bold">金屬徽章</div>
          <div>＄90 /個</div>
          <div>以成大最具象徵性之一的榕園為主題，並選擇以像素遊戲的方式呈現，象徵在這次單車16裡，所有的參加者都在以榕園聞名的成大裡探索遊玩，尋找自己的遊戲結局。</div>
        </div>
      </div>

      <!-- <hr class="w-screen scrollEff"> -->

      <div class="scrollEff flex my-20 w-[70%] gap-20 max-xl:w-[90%] max-lg:flex-col max-lg:text-center max-lg:items-center">
        <img class="w-[300px] h-[300px]" src="../assets/Souvenir/Souvenir2.png" alt="Souvenir">
        <div class="flex flex-col justify-center gap-4 text-xl max-sm:text-base">
          <div class="text-3xl font-bold">學業御守</div>
          <div>＄150 /個</div>
          <div>延伸單車16主視覺所製作的學業御守，以成大校花鳳凰花紋樣點綴，是成大單車節送給每個前來追夢的學子的一份祝福。希望每個人都能夠懷揣著這份信念與盼望，向自己的目標大步邁進！</div>
        </div>
      </div>

      <!-- <hr class="w-screen scrollEff"> -->

      <div class="scrollEff flex my-20 w-[70%] gap-20 max-xl:w-[90%] max-lg:flex-col max-lg:text-center max-lg:items-center">
        <img class="w-[300px] h-[300px]" src="../assets/Souvenir/Souvenir3.png" alt="Souvenir">
        <div class="flex flex-col justify-center gap-4 text-xl max-sm:text-base">
          <div class="text-3xl font-bold">帆布袋</div>
          <div>＄280 /個</div>
          <div>
            單車節就像個裝載滿滿資訊的資料夾，可以從中瞄準、搜尋、探索你想要的!
            <br> 而帆布袋也是個可以裝滿滿的好夥伴，陪著你大步向前!
          </div>
        </div>
      </div>

      <!-- <hr class="w-screen scrollEff"> -->

      <div class="scrollEff flex my-20 w-[70%] gap-20 max-xl:w-[90%] max-lg:flex-col max-lg:text-center max-lg:items-center">
        <img class="w-[300px] h-[300px]" src="../assets/Souvenir/Souvenir4.png" alt="Souvenir">
        <div class="flex flex-col justify-center gap-4 text-xl max-sm:text-base">
          <div class="text-3xl font-bold">飲料提袋</div>
          <div>＄60 /個</div>
          <div>
            背景結合搜索雷達的概念，代表單車節幫助大家探索目標，找到前進方向；
            <br> 單車急速向前的樣子就像我們用雙腳踩出夢想的速度。
          </div>
        </div>
      </div>

      <!-- <hr class="w-screen scrollEff"> -->

      <div class="scrollEff flex my-20 w-[70%] gap-20 max-xl:w-[90%] max-lg:flex-col max-lg:text-center max-lg:items-center">
        <img class="w-[300px] h-[300px]" src="../assets/Souvenir/Souvenir5.png" alt="Souvenir">
        <img class="w-[300px] h-[300px]" src="../assets/Souvenir/Souvenir6.png" alt="Souvenir">
        <div class="flex flex-col justify-center gap-4 text-xl max-sm:text-base">
          <div class="text-3xl font-bold">資料夾</div>
          <div>＄35 /個 &nbsp;&nbsp; ＄55 /兩個</div>
          <div>以成大最具象徵性之一的榕園為主題，並選擇以像素遊戲的方式呈現，象徵在這次單車16裡，所有的參加者都在以榕園聞名的成大裡探索遊玩，尋找自己的遊戲結局。</div>
        </div>
      </div>

      <!-- <hr class="w-screen scrollEff"> -->

      <div class="scrollEff flex my-20 w-[70%] gap-20 max-xl:w-[90%] max-lg:flex-col max-lg:text-center max-lg:items-center">
        <img class="w-[300px] h-[300px]" src="../assets/Souvenir/Souvenir7.png" alt="Souvenir">
        <img class="w-[300px] h-[300px]" src="../assets/Souvenir/Souvenir8.png" alt="Souvenir">
        <div class="flex flex-col justify-center gap-4 text-xl max-sm:text-base">
          <div class="text-3xl font-bold">衣服</div>
          <div>＄350 /件</div>
          <div> 
            衣服正面：
            <br> 將NCKU和主視覺物件放在靶心裡面，象徵將目標鎖定在成大單車節，探索大學實際面貌、找尋想要的目標。
            <br><br> 衣服背面：
            <br> 以網頁風格為基底結合單車節主視覺物件，意味著單車節除了當日實體活動，也能透過官方網站、FB、IG認識實際大學生活面貌
          </div>
        </div>
      </div>

      <!-- <hr class="w-screen scrollEff">

      <div class="scrollEff flex my-20 w-[70%] gap-20 max-xl:w-[90%]">
        <img class="w-[300px] h-[300px]" src="../assets/Souvenir/Souvenir9.png" alt="Souvenir">
        <div class="flex flex-col justify-center gap-4 text-xl max-sm:text-base">
          <div class="text-3xl font-bold">活頁紙</div>
          <div>＄90 /個</div>
          <div>以成大最具象徵性之一的榕園為主題，並選擇以像素遊戲的方式呈現，象徵在這次單車16裡，所有的參加者都在以榕園聞名的成大裡探索遊玩，尋找自己的遊戲結局。</div>
        </div>
      </div> -->

    </div>
    <Footer />
  </div>
</template>

<style scoped>
hr {
  border: 0;
  height: 1px;
  background-image: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.75), rgba(0,0,0,0));
}

@keyframes fade_in {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fadeIn {
  animation: fade_in ease 1s;
  animation-fill-mode: forwards;
}

.scrollEff {
  opacity: 0;
}
</style>