<script setup>
import Navbar from '../../../../components/Navbar.vue';
import Footer from '../../../../components/Footer.vue';
</script>

<template>
  <Navbar />
  <div class="my-16 mx-10">
    <!-- header -->
    <div class="text-end text-xl">科系手冊 / 理學院 / 物理學系 / 林庭永</div>
    <hr />
    <div class="relative flex flex-col justify-center items-center my-12 text-2xl">
      <div class="absolute -bottom-12 left-0 right-1/2 translate-x-1/2 border-b-2 border-black max-lg:border-0"></div>
      <img class="w-[500px]" src="../../../../assets/DeptManual/Science/Science2.png" alt="member">
      <div class="my-4">物理學系112 林庭永</div>
      <div>#過勞爆吐送急診</div>
    </div>
    <!-- content -->
    <div class="relative px-32 mx-64 py-12 text-xl max-2xl:mx-20 max-2xl:px-32 max-lg:mx-36 max-lg:px-0 max-md:mx-0 max-sm:text-base">
      <div class="absolute top-12 bottom-1/2 left-0 border-l-2 border-black max-lg:border-0"></div>
      <div class="absolute -top-0.5 left-0 right-[75%] translate-x-[150%] border-b-2 border-white max-lg:border-0"></div>
      <div class="text-lg">筆者：王妤文 / 編修：廖珺安</div>
      <br><br>
      <div class="text-2xl font-bold mb-2.5"> 怎麼會想讀物理？</div>
      <div> 林庭永從國中就對物理比較有興趣，那時候就會自己找書來看自己學習，後來越看越覺得有趣就決定來念了。</div>
      <br>
      <div class="text-2xl font-bold mb-2.5"> 物理系跟你原本想像的有沒有落差？</div>
      <div> 大概到大二、大三就會明顯地感受到和高中學習的物理有很大的區別，高中的物理比較是以現象為主，提到的物理定律都是可以觀察到或容易想像的自然現象，而大學所學的物理提到的東西會比較抽象，會有很多沒辦法有畫面的物理問題要去考慮。不過本質上都是在研究自然界的規律，所以也不算有太大的落差。只是學習方式會有很大的差異。</div>
      <br>
      <div class="text-2xl font-bold mb-2.5"> 高中跟大學的學習方式有什麼不同嗎？</div>
      <div> 林庭永在高中時通常就把課本背一背就能去考試了，但上大學後發現會比較需要知道要怎麼從現有的知識去推論出未知的答案，所以變成需要多去上課跟老師討論，所以才會說千萬別蹺課。</div>
      <br>
      <div class="text-2xl font-bold mb-2.5"> 物理系將來的出路有哪些？</div>
      <div> 物理系大概七成或更多的人會去科技業，剩下的可能就往學界發展去專職做研究。</div>
      <br>
      <div class="text-2xl font-bold mb-2.5"> 為什麼想做實驗室計畫？</div>
      <div> 物理系上加入實驗室還挺常見的，看到自己有興趣的領域有教授在做就會去敲門問教授要不要收專題生，通常教授也都會同意。實驗室就是在研究一些尚未解決的問題，林庭永覺得有點像在做很難的考卷，只是這些問題沒有解答，要自己去找答案並且說服別人找到的答案是正確的。</div>
      <br>
      <div class="text-2xl font-bold mb-2.5"> 怎麼會想跑系學會？</div>
      <div> 林庭永在大一的時候跟系學會的學長很合得來就決定加入了。</div>
      <br>
      <div class="text-2xl font-bold mb-2.5"> 參加這些活動有學到什麼嗎？</div>
      <div> 林庭永學到怎麼跟不同的人溝通，跑過這些活動就會發現不同縣市及科系的人做事方式差異性很大，要慢慢去學習怎麼協調。</div>
      <br>
      <div class="text-2xl font-bold mb-2.5"> 要如何兼顧活動跟課業？</div>
      <div> 林庭永的做法就是不要蹺課，不管在忙什麼活動都不要蹺課。物理系的課只要沒蹺課上課有聽基本上都不太會被當，反之蹺課的話就會需要花更多時間去補救，不管從學業跟時間的利用上來說，都是最壞的的選擇。</div>
      <br>
      <div class="text-2xl font-bold mb-2.5">在外地讀書有遇到什麼困難嗎？</div>
      <div> 林庭永表示剛來的時候會有一些不適應，因為文化差異所以可能會不小心做出失禮的事情或者是一些基本的事情不太會，比如不知道垃圾分類怎麼做等。解決方法是多交一些在地人朋友然後有不懂的就要嘗試去問身邊的人，好融入這邊的生活。</div>
      <br>
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