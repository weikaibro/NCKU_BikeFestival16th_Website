<script setup>
import Navbar from '../../../../components/Navbar.vue';
import Footer from '../../../../components/Footer.vue';
</script>

<template>
  <Navbar />
  <div class="my-16 mx-10">
    <!-- header -->
    <div class="text-end text-xl">科系手冊 / 醫學院 / 會計學系 / 張芸菁</div>
    <hr />
    <div class="relative flex flex-col justify-center items-center my-12 text-2xl">
      <div class="absolute -bottom-12 left-0 right-1/2 translate-x-1/2 border-b-2 border-black max-lg:border-0"></div>
      <img class="w-[500px]" src="../../../../assets/DeptManual/Medicine/Medicine4.png" alt="member">
      <div class="my-4">醫學檢驗生物技術學系113 方文廷</div>
      <div>#斜槓到不能再斜了</div>
    </div>
    <!-- content -->
    <div class="relative px-32 mx-64 py-12 text-xl max-2xl:mx-20 max-2xl:px-32 max-lg:mx-36 max-lg:px-0 max-md:mx-4">
      <div class="absolute top-12 bottom-1/2 left-0 border-l-2 border-black max-lg:border-0"></div>
      <div class="absolute -top-0.5 left-0 right-[75%] translate-x-[150%] border-b-2 border-white max-lg:border-0"></div>
      <div class="text-lg">筆者：黃宇睿 / 編修：廖珺安</div>
      <br><br>
      <div class="text-2xl font-bold mb-2.5">為什麼當初想讀醫技系？</div>
      <div> 方文廷原本想透過繁星上藥學系，但在最後成績未能達標的情況下，最後上了醫技系。</div>
      <br>
      <div class="text-2xl font-bold mb-2.5">醫技系的課程規劃和出路</div>
      <div> 方文廷提到，醫技系的課程主要依照醫檢師法，法規規定學校必須上哪些課程，像是微生物學、病毒學、免疫學、血液學等，且之後一定要在衛福部指定的醫療院所實習。出路最基本的是需要考到醫檢師這張證照，可以到生技業、藥業、中研院等地方服務。</div> 
      <br>
      <div class="text-2xl font-bold mb-2.5">醫療器材學程和Fintech金融學程</div>
      <div> 方文廷有修醫療器材學程，該學程主要是由醫工系、醫材所等系所開，聚焦在醫療器材的創新研發，像是快篩試劑如何簡單上手好用，這些都是跟醫材相關的領域。此外，方文廷也有修Fintech金融科技學程，原因是出自於對銀行業的好奇，想獲取些關於數位金融方面的知識，所以選擇上此課程。</div>
      <br>
      <div class="text-2xl font-bold mb-2.5">印象深刻的課</div> 
      <div> 方文廷對於「臨床血液學實驗」這堂課印象深刻，該課程會讓大家互相練習抽血，所以怕血的人一定要克服。此外，在「臨床鏡檢學」這堂課中，主要學習顯微鏡的操作，以及醫技系的一個重點：驗血驗尿和驗大便。在「懷孕試驗和精液檢查」這堂課中，教授會要求學生在實驗課開始前去廁所採樣，對方文廷來說，算是一個特別又尷尬的經驗。</div>
      <br>
      <div class="text-2xl font-bold mb-2.5">中研院基因體研究中心暑期實習生</div>
      <div> 方文廷曾在中研院基因體研究中心擔任暑期實習生。他認為這段經歷，除了認識實驗室、找尋自己的專長，還能學到一些學校不會教的知識，也可以訓練自己口頭報告的實力。此外，方文廷也認為這段經歷是個寶貴的經驗，能為自己的履歷加分。</div>
      <br>
      <div class="text-2xl font-bold mb-2.5">課外活動</div>
      <div> 方文廷目前參加了成大動態影像創作社、職業生涯教練計畫等活動。其中「職業生涯教練計畫」是把學校與產業界作結合，而學校會邀請一些公司的中、高階主管來做職涯歷程的分享。學生可從中了解到現今的一些產業趨勢，讓學生在未來進職場後可以快速的適應。參加那麼多活動，方文廷認為除了活動本身的經驗受益外，學習如何跟同伴相處、溝通能力的提升、時間規劃得宜都是參加這些活動擁有的收穫。</div>
      <br>
      <div class="text-2xl font-bold mb-2.5">什麼人適合讀醫技系？</div> 
      <div> 方文廷覺得，適合讀醫技系的同學需要有獨立研究能力，比較會推理、思考、舉一反三。此外，醫技人員需無礙的與醫生和病人溝通，所以「溝通能力」在醫技系也是一個大重點。</div>
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