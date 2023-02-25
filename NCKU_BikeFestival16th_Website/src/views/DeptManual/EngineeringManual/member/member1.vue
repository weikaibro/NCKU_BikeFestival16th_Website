<script setup>
import Navbar from '../../../../components/Navbar.vue';
import Footer from '../../../../components/Footer.vue';
</script>

<template>
  <Navbar />
  <div class="my-36 mx-10">
    <!-- header -->
    <div class="text-end text-xl">科系手冊 / 工學院 / 生物醫學工程學系 / 劉庭伊</div>
    <hr />
    <div class="relative flex flex-col justify-center items-center my-12 text-2xl">
      <div class="absolute -bottom-12 left-0 right-1/2 translate-x-1/2 border-b-2 border-black max-lg:border-0"></div>
      <img class="w-[500px]" src="../../../../assets/DeptManual/Engineering/Engineering1.jpg" alt="member">
      <div class="my-4">生物醫學工程學系114 劉庭伊</div>
      <div>#活潑愛笑的醫工女孩</div>
    </div>
    <!-- content -->
    <div class="relative px-32 mx-64 py-12 text-xl max-2xl:mx-20 max-2xl:px-32 max-lg:mx-36 max-lg:px-0 max-md:mx-0 max-sm:text-base">
      <div class="absolute top-12 bottom-1/2 left-0 border-l-2 border-black max-lg:border-0"></div>
      <div class="absolute -top-0.5 left-0 right-[75%] translate-x-[150%] border-b-2 border-white max-lg:border-0"></div>
      <div class="text-lg">筆者：許哲維 / 編修：廖珺安</div>
      <br><br>
      <div class="text-2xl font-bold mb-2.5">為甚麼想就讀醫工系？</div>
      <div>劉庭伊的爸爸是電腦工程師，在爸爸的薰陶之下，從小就對寫程式有興趣。到了高中選擇三類組就讀，於是就把生物和程式這兩樣做結合，最後到來了生物醫學工程系。</div>
      <br>
      <div class="text-2xl font-bold mb-2.5">醫工系的課程在上什麼？</div>
      <div>大一比較接近銜接課程，比高中所學稍微難一點，為了讓大家對於醫工系有粗略的認識。大二開始有工程方面的課程和解剖學，到了二下會進入教授的實驗室，對特定的專題進行研究。進入實驗室後會有學長姊指派任務，把自己的工作順利完成，過程中可能會遇到專題計畫或是各種競賽。</div>
      <br>
      <div class="text-2xl font-bold mb-2.5">醫工系的課程跟自己原先的想像符不符合？</div>
      <div>劉庭伊覺得大學和電影中的敘述滿符合的。她認為大學就是要靠意志力，不像高中每天都要上八、九個小時，大學的教授基本上都不點名，所以要靠意志力來上課。如果翹課太多的話，期中考跟期末考就會變得很艱苦，因為等於是整個課程都要重新自己學習，所以在劉庭伊看來，意志力是大學生活中很重要的一部分。</div>
      <br>
      <div class="text-2xl font-bold mb-2.5">跑活動過程中有什麼樣的收穫？</div>
      <div>劉庭伊有跑了與法律合辦的宿營跟醫工營。今年與外系合辦宿營，劉庭伊作為工人經歷到最多的就是過程會有滿多不愉快的事。可能也因為這是第一次跟外系合辦，所以一開始磨合的比較久，大概到宿營前兩個禮拜大家才跟法律系變熟。劉庭伊覺得這是個難得的經驗，她到現在還跟法律系的同學有聯繫。醫工營則是辦給高中生的營隊，劉庭伊擔任隊輔、負責帶高中生認識醫工系和幫助小隊破冰。在醫工營之後，系上的感情變得更好，也很推薦高中生去參加這些營隊，除了能交到新朋友，也能更瞭解這個科系。</div>
      <br>
      <div class="text-2xl font-bold mb-2.5">醫工系的未來出路？</div>
      <div>劉廷伊因為對考試沒有很高，所以打算直升醫工所。有聽說一些學長去讀成大電機所，因為醫工系其實是工程加上醫學的組合，這兩者相關的領域都可以去鑽研。所以如果在醫工系發現自己對於某一種特別有興趣的話，研究所也可以往那邊發展。</div>
      <br>
      <div class="text-2xl font-bold mb-2.5">對想讀醫工系的高中生們說的話、建議？</div>
      <div>剛上大學可能會對陌生的環境感到害怕，可以敞開心胸去認識一些人，最好的方式是多跑一些活動。有了這些體驗才有上大學的感覺。再來一定要加強自己的英文能力，進入專題研究之後，開會都是用英文溝通的，所以要確保自己的口說和聽力能夠負荷全英文的環境。</div>
    </div>

  </div>
  <Footer />
</template>

<style scoped>
hr {
  border: 0;
  height: 1px;
  background: #333;
  background-image: linear-gradient(to right, #ccc, #333, #ccc);
}
</style>