<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import homepage_lineHeader from "../components/homepage_lineHeader.vue";
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
  window.removeEventListener('scroll', fadeInEff); 
})

// default: partnerIndex 100 
const partnerIndex = ref(100)
const userChoose = (index) => {
  partnerIndex.value = index
  var blurEff = document.querySelector('.blurEff')
  if (index == 100) {
    blurEff.classList.remove('blur')
  } else {
    blurEff.classList.add('blur')
  }
  console.log(partnerIndex.value)
}
</script>

<template>
  <div>
    <Navbar/>

    <!-- details of partner -->
    <Transition mode="out-in">
      <div 
        class="fixed z-40 flex items-start px-12 pt-32 pb-16 gap-12 bg-stone-50 
        w-[60%] h-[70%] inset-0 mx-auto my-auto overflow-y-auto max-lg:flex-col max-sm:px-3 max-sm:w-[90%] max-sm:h-[80%]" 
        v-if="partnerIndex == 0"
      >
        <div 
          class="absolute top-6 right-6 transition duration-300 hover:scale-90 hover:rotate-90 hover:cursor-pointer active:opacity-50"
          @click="userChoose(100)"
        >
          <img class="w-[50px] max-sm:w-[40px]" src="../assets/crossNoBg.svg" alt="cross">
        </div>
        <img class="w-[40%] max-lg:w-[80%] mx-auto" src="../assets/Partner/partner1.png" alt="partner">
        <div>
          <div class="text-3xl font-bold mb-4 max-sm:text-lg">法律白話文運動</div>
          <div class="text-lg max-sm:text-base max-sm">
            由一群致力於散播法治種子的法律人成立的新媒體。對一般人而言，本該為人民服務的法律，因為內容有如文言文難懂，反而離人民越來越遠。於是，我們想透過網路與科技，發揮新媒體的各種想像，提供值得信賴的知識。我們相信，法律是人類史上最重要的發明，它搭起一座理性的橋樑，用共存與共榮連結立場衝突的人們，而法律白話文運動希望帶領讀者走上這座橋樑，思考議題、關懷彼此，和我們一起塑造屬於台灣的法律文化。
          </div>
        </div>
      </div>
      <div 
        class="fixed z-40 flex items-start px-12 pt-32 pb-16 gap-12 bg-stone-50 
        w-[60%] h-[70%] inset-0 mx-auto my-auto overflow-y-auto max-lg:flex-col max-sm:px-3 max-sm:w-[90%] max-sm:h-[80%]" 
        v-else-if="partnerIndex == 1"
      >
        <div 
          class="absolute top-6 right-6 transition duration-300 hover:scale-90 hover:rotate-90 hover:cursor-pointer active:opacity-50"
          @click="userChoose(100)"
        >
          <img class="w-[50px] max-sm:w-[40px]" src="../assets/crossNoBg.svg" alt="cross">
        </div>
        <img class="w-[40%] max-lg:w-[100%] mx-auto" src="../assets/Partner/partner2.png" alt="partner">
        <div>
          <div class="text-3xl font-bold mb-4 max-sm:text-lg">Lindt 瑞士蓮</div>
          <div class="text-lg max-sm:text-base">
            1845年起只專注製造巧克力的品牌，是全世界第一個用可可濃度區分巧克力的品牌。
            <br> 瑞士蓮獨特口味的秘訣在於，憑藉瑞士蓮巧克力大師歷年經驗，精心挑選和混合來自世界上獨特產地的優質可可豆。透過全球首創研拌技術，調製出入口即化的獨特質感。
            <br><br><span class="font-bold">Excellence 極醇系列</span> - 從70%、78%、85%、90%、99%到100%，有著六種不同濃度，皆使用高品質的黑巧克力，纖薄的片狀，巧克力於舌頭上融化地更快，能夠品嘗到細膩且濃郁的巧克力。
            <br><br><span class="font-bold">Lindor 夾餡系列</span> - 入口即融的濃滑內餡，冬季限定必買巧克力!
            <br> 每一顆Lindor，每一口Lindor，咬下都是滿滿的驚喜與幸福，無論是寵愛自己的時光，或是與愛人、朋友相聚的時節，Lindor都是享受生活的好夥伴!
          </div>
        </div>
      </div>
      <div 
        class="fixed z-40 flex items-start px-12 pt-32 pb-16 gap-12 bg-stone-50
          w-[60%] h-[70%] inset-0 mx-auto my-auto overflow-y-auto 
          max-lg:flex-col max-sm:px-3 max-sm:w-[90%] max-sm:h-[80%]" 
        v-else-if="partnerIndex == 2"
      >
        <div 
          class="absolute top-6 right-6 transition duration-300 hover:scale-90 hover:rotate-90 hover:cursor-pointer active:opacity-50"
          @click="userChoose(100)"
        >
          <img class="w-[50px] max-sm:w-[40px]" src="../assets/crossNoBg.svg" alt="cross">
        </div>
        <img class="w-[40%] max-lg:w-[70%] mx-auto" src="../assets/Partner/partner3.png" alt="partner">
        <div class>
          <div class="text-3xl font-bold mb-4 max-sm:text-lg">hellolulu</div>
          <div class="text-lg max-sm:text-base">
            由兩位設計師好友John&Ronny於2005年創立的香港品牌hellolulu，透過獨特的剪裁和細節上的講究，將設計及功能集於一身。hellolul簡約又亮眼的時尚休閒風格，讓世界各地追求耐用但不單調的消費者有更多不同的選擇。如今hellolulu已進駐歐洲、美國、日本、台灣，商品線也從休閒包袋擴展到孩童背包、相機包以及多款旅行收納袋。
            <br><br>
            <!-- <div class="flex"> -->
            <img class="" src="../assets/Partner/partner3_1.png" alt="">
            <!-- </div> -->
            <div class="flex mt-5 justify-between">
              <img class="w-[30%]" src="../assets/Partner/partner3_4.png" alt="">
              <img class="w-[30%]" src="../assets/Partner/partner3_2.png" alt="">
              <img class="w-[30%]" src="../assets/Partner/partner3_3.png" alt="">
            </div>
            <br><br><a
              class="linkEff"
              href="https://www.instagram.com/hellolulu_taiwan/"
              target="_blank"
              rel="noreferrer noopenner"
            >Instagram</a>
            <br><a
              class="linkEff"
              href="https://www.facebook.com/hellolulutaiwan"
              target="_blank"
              rel="noreferrer noopenner"
            >Facebook</a>
            <br><a
              class="linkEff"
              href="https://www.hellolulu.com"
              target="_blank"
              rel="noreferrer noopenner"
            >Official Website</a>
            
          </div>
        </div>
      </div>
      <div 
        class="fixed z-40 flex items-start px-12 pt-32 pb-16 gap-12 bg-stone-50
         w-[60%] h-[70%] inset-0 mx-auto my-auto overflow-y-auto max-lg:flex-col max-sm:px-3 max-sm:w-[90%] max-sm:h-[80%]" 
        v-else-if="partnerIndex == 3"
      >
        <div 
          class="absolute top-6 right-6 transition duration-300 hover:scale-90 hover:rotate-90 hover:cursor-pointer active:opacity-50"
          @click="userChoose(100)"
        >
          <img class="w-[50px] max-sm:w-[40px]" src="../assets/crossNoBg.svg" alt="cross">
        </div>
        <img class="w-[40%] max-lg:w-[80%] mx-auto" src="../assets/Partner/partner4.png" alt="partner">
        <div>
          <div class="text-3xl font-bold mb-4 max-sm:text-lg">台南大飯店</div>
          <div class="text-lg max-sm:text-base">
            台南大飯店於西元1964年開幕營運，悠久的歷史是當時南台灣第一家國際觀光飯店，融合台南豐富的文化及人文素養，提供完美的住宿及用餐體驗。佇立於三級古蹟台南車站正前方，兼具歷史、人文、觀光、交通等元素，至今已深耕台南近一甲子。
            <br><br> 12種房型，152間溫馨簡約客房，因應旅客各種需求，悉心照料每位到訪的旅客。
            <br> 免開車旅行首選，台南火車站出站即達，官網訂房獨享加購高鐵票8折優惠！
            <div class="mt-4 flex justify-between">
              <img class="w-[48%]" src="../assets/Partner/partner4_1.jpg" alt="partner">
              <img class="w-[48%]" src="../assets/Partner/partner4_2.jpg" alt="partner">
            </div>
            <br><br> 來台南享受美食之旅就從這裡開始 👉<a
              class="linkEff"
              href="http://bit.ly/2PG3Y0q"
              target="_blank"
              rel="noreferrer noopenner"
            >https://reurl.cc/LXvZe9</a>
            <br><br><span class="font-bold">歐式自助餐</span>
            <br><br> 多元異國美食，開放式廚房現場烹調頂級料理、澎湃海鮮及現切生魚片、飯店手做甜點、鮮打果汁飲料等，給你最豐盛的美食饗宴。
            <div class="mt-4 flex justify-between">
              <img class="w-[48%]" src="../assets/Partner/partner4_3.jpg" alt="">
              <img class="w-[48%]" src="../assets/Partner/partner4_4.jpg" alt="">
            </div>
            <br><br> 上百道豐富美饌任你吃 👉<a
              class="linkEff"
              href="http://bit.ly/2PG3Y0q"
              target="_blank"
              rel="noreferrer noopenner"
            >立即線上訂位</a>
            <br><br>
            <img src="../assets/Partner/partner4_5.png" alt="">
            <br> 台南大飯店美食購的產品選自飯店中受到饕客滿意度、回購率最高的商品，主廚手工製作，堅持天然不添加防腐劑，熱賣商品有港式臘味蘿蔔糕、蜂蜜岩燒乳酪蛋糕、30餘道鮮凍美食，讓你在家也能享用飯店主廚的美味佳餚。
            <div class="mt-8 flex gap-4 items-center">
              <img class="w-[50%]" src="../assets/Partner/partner4_6.jpg" alt="">
              港式臘味蘿蔔糕香傳半世紀，港飲名廚手工製作，口感層次豐富美味。
            </div>
            <br>
            <div class="flex gap-4 items-center">
              <img class="w-[50%]" src="../assets/Partner/partner4_7.jpg" alt="">
              精選30餘道鮮凍美食，加熱即食的料理法寶，簡單為餐桌添加好料。
            </div>
            <br>
            <div class="flex gap-4 items-center">
              <img class="w-[50%]" src="../assets/Partner/partner4_8.jpg" alt="">
              蜂蜜岩燒乳酪蛋糕，飯店人氣熱銷NO.1，微甜滋味大人小孩都愛！
            </div>
            <br>
            <br> 更多美食好料這裡找 👉<a
              class="linkEff"
              href="https://www.yummygo.com.tw/"
              target="_blank"
              rel="noreferrer noopenner"
            >美食購線上購物</a>
            <br><br><a
              class="linkEff"
              href="https://www.hotel-tainan.com.tw/"
              target="_blank"
              rel="noreferrer noopenner"
            > 官方網站</a>
            <br><a
              class="linkEff"
              href="https://www.facebook.com/HotelTainan.Since1964/"
              target="_blank"
              rel="noreferrer noopenner"
            > FB粉專</a>
            <br> 洽詢專線：06-2289101
            <br> 台南市中西區成功路1號 
          </div>
        </div>
      </div>
      <div 
        class="fixed z-40 flex items-start px-12 pt-32 pb-16 gap-12 bg-stone-50
         w-[60%] h-[70%] inset-0 mx-auto my-auto overflow-y-auto max-lg:flex-col max-sm:px-3 max-sm:w-[90%] max-sm:h-[80%]" 
        v-else-if="partnerIndex == 4"
      >
        <div 
          class="absolute top-6 right-6 transition duration-300 hover:scale-90 hover:rotate-90 hover:cursor-pointer active:opacity-50"
          @click="userChoose(100)"
        >
          <img class="w-[50px] max-sm:w-[40px]" src="../assets/crossNoBg.svg" alt="cross">
        </div>
        <img class="w-[40%] max-lg:w-[50%] mx-auto" src="../assets/Partner/partner5.png" alt="partner">
        <div>
          <div class="text-3xl font-bold mb-4 max-sm:text-lg">可果美</div>
          <div class="text-lg max-sm:text-base">
            臺灣可果美於1967年於台南成立，至今已邁入半個多世紀。臺灣可果美一直竭盡所能汲取日本可果美的最新技術和豐富經驗，在各方面不斷地研究和改良，穩健地成長茁壯。自創業以來，秉持「自然。健康」的經營理念。為求更多的健康商品以貢獻社會並延伸品牌力，推出日本銷售第一的「野菜生活100」及「野菜一日」100%綜合蔬果汁，採用優質的蔬菜與水果，致力提昇國人飲食文化，貢獻國民健康，是臺灣可果美的企業使命。
            <br><br>產品介紹：野菜一日100%綜合蔬果汁
            <br> ◎使用12種蔬菜製成，蔬菜含量98%，每日一瓶補充一日不足蔬菜營養! ◎補充茄紅素營養，每日營養補充最佳飲品! ◎100%無添加、熱量僅90.8大卡/瓶，補充營養無負擔!
            <br><br>
            <a
              class="linkEff"
              href="https://www.facebook.com/Kagometaiwan"
              target="_blank"
              rel="noreferrer noopenner"
            >Fb粉絲專頁</a> 
            <br><a
              class="linkEff"
              href="https://www.Instagram.com/kagome_tw/"
              target="_blank"
              rel="noreferrer noopenner"
            > 臺灣可果美IG</a>
            <br><a
              class="linkEff"
              href="https://www.vegelife-shop.com.tw"
              target="_blank"
              rel="noreferrer noopenner"
            >臺灣可果美健康宅配網</a>
          </div>
        </div>
      </div>
      <div 
        class="fixed z-40 flex items-start px-12 pt-32 pb-16 gap-12 bg-stone-50
         w-[60%] h-[70%] inset-0 mx-auto my-auto overflow-y-auto max-lg:flex-col max-sm:px-3 max-sm:w-[90%] max-sm:h-[80%]" 
        v-else-if="partnerIndex == 5"
      >
        <div 
          class="absolute top-6 right-6 transition duration-300 hover:scale-90 hover:rotate-90 hover:cursor-pointer active:opacity-50"
          @click="userChoose(100)"
        >
          <img class="w-[50px] max-sm:w-[40px]" src="../assets/crossNoBg.svg" alt="cross">
        </div>
        <img class="w-[40%] max-lg:w-[70%] mx-auto" src="../assets/Partner/partner6.png" alt="partner">
        <div>
          <div class="text-3xl font-bold mb-4 max-sm:text-lg">保力達股份有限公司</div>
          <div class="text-lg max-sm:text-base">
            保力達的四大主力產品區塊
            <br> 「藥品、機能飲料、酒品、維生素保健類食品」
            <br> 公司一本對產品研發的專業與熱情，
            <br> 不斷投入人力、資金開發新產品，
            <br> 以絕佳的品質為國人的健康打底。
            <br> 主要產品為「保力達B液」、「蠻牛」、「水蠻牛」、「冰火」，
            <br> 開創公司飲料市場新契機，
            <br> 更攻佔機能性飲料市場的龍頭地位。
            <br> 不斷締造佳績的同時，
            <br> 全力提升產品上市最佳效益，
            <br> 以及透過通路合作、異業結盟等方式，
            <br> 來持續擴大品牌經營價值及營運績效。
            <br><br> 產品訴求多元化消費族群的品牌印象，如勞動階層、青少年、女性消費者、銀髮族、兒童等消費族群。
            <br> 掌握健康活力、保健的消費趨勢，積極開拓行銷通路。
            <br> 完備生產線領域，滿足消費市場之需求，創造企
            <br> 業更高產出效率。
            <br> 提升公司產品的品質及價值，造福國人健康。
            <br><br> 
            <a
              class="linkEff"
              href="https://www.paolyta.com.tw/"
              target="_blank"
              rel="noreferrer noopenner"
            >官網</a>
            <br> 服務專線：0800-212345
            <br><a
              class="linkEff"
              href="https://www.facebook.com/Icefire2012"
              target="_blank"
              rel="noreferrer noopenner"
            >冰火FB</a>
            <br><a
              class="linkEff"
              href="https://www.facebook.com/profile.php?id=100064030087574"
              target="_blank"
              rel="noreferrer noopenner"
            >水蠻牛FB</a>
          </div>
        </div>
      </div>
      <div 
        class="fixed z-40 flex items-start px-12 pt-32 pb-16 gap-12 bg-stone-50
         w-[60%] h-[70%] inset-0 mx-auto my-auto overflow-y-auto max-lg:flex-col max-sm:px-3 max-sm:w-[90%] max-sm:h-[80%]" 
        v-else-if="partnerIndex == 6"
      >
        <div 
          class="absolute top-6 right-6 transition duration-300 hover:scale-90 hover:rotate-90 hover:cursor-pointer active:opacity-50"
          @click="userChoose(100)"
        >
          <img class="w-[50px] max-sm:w-[40px]" src="../assets/crossNoBg.svg" alt="cross">
        </div>
        <img class="w-[40%] max-lg:w-[60%] mx-auto" src="../assets/Partner/partner7.png" alt="partner">
        <div>
          <div class="text-3xl font-bold mb-4 max-sm:text-lg">ADHIL</div>
          <div class="text-lg max-sm:text-base">
            本公司創立於2017年,由始至終皆致力於給消費者CP值高的產品，此外，我們擁有完善的售後服務，強勢的商品介紹，使您買得安心，用的開心。
            <br><br> 本公司專營手機配件、耳機、行動電源、充電器、生活用品等，只有您想不到的產品，沒有我們找不到的商品。
            <br><br> 最近火熱的秒貼防塵網玻璃保護貼與真降噪無線藍芽耳機更是擁有著高CP 值，前者，除了有方便的貼膜神器外，其還有著高保護力與隱私性；後者，除了能提供使⽤者舒適的環境外，更重要的是超實惠的價格更替消費者省了不少荷包。
            <br><br> 
            產品介紹
            <br><a
              class="linkEff"
              href=" https://reurl.cc/eXxax7"
              target="_blank"
              rel="noreferrer noopenner"
            >秒貼防塵網玻璃保護貼</a>【點我購買】
            <br><a
              class="linkEff"
              href="https://reurl.cc/eXxaxL"
              target="_blank"
              rel="noreferrer noopenner"
            >真降噪無線藍芽耳機</a>【點我購買】
            <br><br> 主要功能：
            <br> 1. 可改裝置名稱
            <br> 2. 無縫切換：任一耳機關機放回充電盒，即變單耳使用，取出後又變雙耳。
            <br> 3. 雙耳雙麥克風通話
            <br> 4. 左右耳電量顯示
            <br> 5. 耳機觸控式，非按鍵
            <br> 6. 聽音樂不閃燈
            <br> 7. 無損音質
            <br> 8. 貼耳式設計，配戴超舒適
            <br> 9. 喚醒SIRI（IOS裝置自定義）
            <br> 10. 全功能：降噪模式（消除周圍環境音）、通透模式（增加周圍環境音）、遊戲模式（低音與聽音辨位加強）、音樂模式（人聲加強）
            <br><br>
            <div class="flex justify-between">
              <div>
                <a
                  class="linkEff"
                  href="https://www.adhilshop.com/h/Index?key=1dg19"
                  target="_blank"
                  rel="noreferrer noopenner"
                >ADHIL官網</a>
                <br>
                <a
                  class="linkEff"
                  href="https://www.facebook.com/ADHILmobile"
                  target="_blank"
                  rel="noreferrer noopenner"
                > ADHIL粉絲專頁 </a>
                <br>
                <a
                  class="linkEff"
                  href="https://shopee.tw/mandyhsu1"
                  target="_blank"
                  rel="noreferrer noopenner"
                > 蝦皮旗艦店網址</a>
              </div>
              <img class="w-[50%]" src="../assets/Partner/partner7_1.png" alt="">
            </div>
            <br>
          </div>
        </div>
      </div>
      <div 
        class="fixed z-40 flex items-start px-12 pt-32 pb-16 gap-12 bg-stone-50
         w-[60%] h-[70%] inset-0 mx-auto my-auto overflow-y-auto max-lg:flex-col max-sm:px-3 max-sm:w-[90%] max-sm:h-[80%]" 
        v-else-if="partnerIndex == 7"
      >
        <div 
          class="absolute top-6 right-6 transition duration-300 hover:scale-90 hover:rotate-90 hover:cursor-pointer active:opacity-50"
          @click="userChoose(100)"
        >
          <img class="w-[50px] max-sm:w-[40px]" src="../assets/crossNoBg.svg" alt="cross">
        </div>
        <img class="w-[40%] max-lg:w-[60%] mx-auto" src="../assets/Partner/partner8.png" alt="partner">
        <div>
          <div class="text-3xl font-bold mb-4 max-sm:text-lg">KISSME 花漾美姬</div>
          <div class="text-lg max-sm:text-base">
            KISSME 奇士美化粧品旗下的彩妝品牌，來自日本的「全眼妝專家」，為了讓女孩實現對美麗的渴望，綻放如花朵般的光芒，為魅力眼神提供各種秘密武器，致力於發展 #眼線、#睫毛膏、#眉彩系列彩妝，讓每位女性都能自信展現各種樣貌、裝扮各式花漾。
            <br><br> 美姬公主自2021年，由甜美公主蛻變為時尚女王，象徵著她已從期盼美好愛情降臨的可愛女孩，成長為勇敢追尋心之所嚮、重視自我成長的自信女人。鼓勵女性不論妝容、生活，甚至是愛情，都該追求更精緻、獨立、堅強及自信的境地，使自己勇敢蛻變為迷人亮眼的女主角。秉持著「花若盛開，蝴蝶自來」的信念，完美詮釋追尋自我盛放的模樣，滋養為盛開的玫瑰，由內而外散發自信光芒，無論何時都保持完美無瑕，就讓花漾美姬成就妳的獨特魅力。
            <br><br>
            <img src="../assets/Partner/partner8_1.jpg" alt="">
            <br><br> KISSME 花漾美姬
            <br><a
              class="linkEff"
              href="https://www.kissme.com.tw/"
              target="_blank"
              rel="noreferrer noopenner"
            > 官網 </a>
            <br><a
              class="linkEff"
              href="https://www.facebook.com/kissme.tw/"
              target="_blank"
              rel="noreferrer noopenner"
            > Facebook </a>
            <br><a
              class="linkEff"
              href="https://www.instagram.com/kissme.heroinemake/"
              target="_blank"
              rel="noreferrer noopenner"
            > Instagram </a>
          </div>
        </div>
      </div>
      <div 
        class="fixed z-40 flex items-start px-12 pt-32 pb-16 gap-12 bg-stone-50
         w-[60%] h-[70%] inset-0 mx-auto my-auto overflow-y-auto max-lg:flex-col max-sm:px-3 max-sm:w-[90%] max-sm:h-[80%]" 
        v-else-if="partnerIndex == 8"
      >
        <div 
          class="absolute top-6 right-6 transition duration-300 hover:scale-90 hover:rotate-90 hover:cursor-pointer active:opacity-50"
          @click="userChoose(100)"
        >
          <img class="w-[50px] max-sm:w-[40px]" src="../assets/crossNoBg.svg" alt="cross">
        </div>
        <img class="w-[40%] max-lg:w-[90%] mx-auto" src="../assets/Partner/partner9.png" alt="partner">
        <div>
          <div class="text-3xl font-bold mb-4 max-sm:text-lg">Snapask</div>
          <div class="text-lg max-sm:text-base">
            在家複習課業或是復習到一半時，有時會遇上卡住的觀念、問題，而也許是一個小小的觀念就讓整體觀念無法暢通，不僅複習起來效率不高，有問題時無法立即解決都是自己讀書時的硬傷。
            <br><br> 而 Snapask 時課問正是為此而生，Snapask 相信：「學生的疑問如果能即時獲得解答，便能夠防止不敢問、害怕學習的狀況。Snapask 正是為了學生提供無縫隙的學習體驗。」能夠針對個人化的提問，並即時的配對老師解決學生問題，以達到最高學習效率。
            <br><br> 國高中生首選的全科線上學習平台 Snapask 時課問是一個致力於幫助學生解決課業問題的全方位線上學習平台，不只提供內容豐富的線上課程，更有一對一線上真人家教 24Ｈ 解題服務，幫助學生解決學習上所遇到的問題與困難，讓學生在學習的路上暢行無阻。
            <br><br> 了解更多，請至<a
              class="linkEff"
              href="https://snapask.com/zh-tw/"
              target="_blank"
              rel="noreferrer noopenner"
            >官網</a>
          </div>
        </div>
      </div>
      <div 
        class="fixed z-40 flex items-start px-12 pt-32 pb-16 gap-12 bg-stone-50
         w-[60%] h-[70%] inset-0 mx-auto my-auto overflow-y-auto max-lg:flex-col max-sm:px-3 max-sm:w-[90%] max-sm:h-[80%]" 
        v-else-if="partnerIndex == 9"
      >
        <div 
          class="absolute top-6 right-6 transition duration-300 hover:scale-90 hover:rotate-90 hover:cursor-pointer active:opacity-50"
          @click="userChoose(100)"
        >
          <img class="w-[50px] max-sm:w-[40px]" src="../assets/crossNoBg.svg" alt="cross">
        </div>
        <img class="w-[40%] max-lg:w-[100%] mx-auto" src="../assets/Partner/partner10.png" alt="partner">
        <div>
          <div class="text-3xl font-bold mb-4 max-sm:text-lg">JANDI 企業通訊軟體</div>
          <div class="text-lg max-sm:text-base">
            全台各地的學生組織都在用！包含來自 TEDx NTU、甘噪祭、食歸祭、成功單車節等學生團隊，在上大學加入社團時，就開始利用 JANDI 學習成熟的合作溝通與專案管理！
            <br><br> JANDI 就像是 LINE 一樣的溝通介面，卻有著井然有序的整理架構，讓學生們能夠配合各社團部門、宣傳企劃，來客製化不同的溝通需求，並在未來工作打下良好的溝通基礎，成為以後別人工作都會抱上的大腿！
            <br><br> 使用 JANDI 後，可以將私人與工作訊息完全分開，不會有檔案過期的問題、更能輕鬆找到曾經放在對話中的資料。而在日後幹部交接時，也能看到過去討論的所有對話與檔案，短時間內就能大量同步與學弟學妹的資訊落差
            <br><br><span class="font-bold"> 歡迎和我們聊聊 & 成為我們的實習生！</span>
            <br><br> 目前 JANDI 已獲得自日本軟銀、美國高通、台灣心元資本⋯等共超過 2,000 萬美元的投資，並有超過 350,000 個企業團隊採用，並於台灣、韓國、日本辦公室提供完整諮詢服務！
            <br><br> 如果你也想要好好學習溝通、並對企業端的品牌行銷有興趣。歡迎免費下載看看，或是直接加入我們成為實習生喔！
            <br><br><a
              class="linkEff"
              href="https://www.yourator.co/companies/JANDI"
              target="_blank"
              rel="noreferrer noopenner"
            > JANDI 實習生招募</a>
            <br><a
              class="linkEff"
              href="https://www.jandi.com/landing/zh-tw"
              target="_blank"
              rel="noreferrer noopenner"
            > JANDI 官方介紹頁</a>
          </div>
        </div>
      </div>
    </Transition>


    <div class="blurEff py-52 max-lg:px-12">
      <div class="flex justify-center items-center mb-24">
        <homepage_lineHeader headerTitle="合作夥伴" />
      </div>

      <div class="w-[70%] grid grid-cols-2 mx-auto gap-32 text-xl max-md:grid-cols-1 max-lg:w-[90%] max-lg:gap-20 max-sm:text-base">
        <div class="scrollEff flex flex-col justify-end border-b-2 border-black pb-6 max-md:text-center">
          <img @click="userChoose(0)" class="w-[90%] mx-auto cursor-pointer" src="../assets/Partner/partner1.png" alt="Partner">
          <div class="mt-20 mb-4 text-3xl font-bold max-sm:text-2xl">法律白話文運動</div>
          <div>由一群致力於散播法治種子的法律人成立的新媒體。</div>
        </div>
        <div class="scrollEff flex flex-col justify-end border-b-2 border-black pb-6 max-md:text-center">
          <img @click="userChoose(1)" class="cursor-pointer" src="../assets/Partner/partner2.png" alt="Partner">
          <div class="my-4 text-3xl font-bold max-sm:text-2xl">Lindt 瑞士蓮</div>
          <div>1845年起只專注製造巧克力的品牌，是全世界第一個用可可濃度區分巧克力的品牌。</div>
        </div>
        <div class="scrollEff flex flex-col justify-end border-b-2 border-black pb-6 max-md:text-center">
          <img @click="userChoose(2)" class="cursor-pointer w-[50%] mx-auto" src="../assets/Partner/partner3.png" alt="Partner">
          <div class="mt-12 my-4 text-3xl font-bold max-sm:text-2xl max-sm:mt-6">hellolulu</div>
          <div>由兩位設計師好友John&Ronny於2005年創立的香港品牌。</div>
        </div>
        <div class="scrollEff flex flex-col justify-end border-b-2 border-black mt-12 pb-6 max-md:text-center">
          <img @click="userChoose(3)" class="cursor-pointer w-[80%] mx-auto" src="../assets/Partner/partner4.png" alt="Partner">
          <div class="mt-28 mb-4 text-3xl font-bold max-sm:text-2xl max-sm:mt-16">台南大飯店</div>
          <div>台南大飯店於西元1964年開幕營運，是南台灣第一家國際觀光飯店。</div>
        </div>
        <div class="scrollEff flex flex-col justify-end border-b-2 border-black mt-12 pb-6 max-md:text-center">
          <img @click="userChoose(4)" class="cursor-pointer w-[40%] mx-auto" src="../assets/Partner/partner5.png" alt="Partner">
          <div class="mt-24 my-4 text-3xl font-bold max-sm:text-2xl max-sm:mt-16">台灣可果美</div>
          <div>於1967年於台南成立，秉持「自然。健康」的經營理念。</div>
        </div>
        <div class="scrollEff flex flex-col justify-end border-b-2 border-black mt-12 pb-6 max-md:text-center">
          <img @click="userChoose(5)" class="cursor-pointer w-[50%] mx-auto" src="../assets/Partner/partner6.png" alt="Partner">
          <div class="mt-24 my-4 text-3xl font-bold max-sm:text-2xl max-sm:mt-16">保力達</div>
          <div>以絕佳的品質為國人的健康打底。</div>
        </div>
        <div class="scrollEff flex flex-col justify-end border-b-2 border-black mt-12 pb-6 max-md:text-center">
          <img @click="userChoose(6)" class="cursor-pointer w-[50%] mx-auto" src="../assets/Partner/partner7.png" alt="Partner">
          <div class="mt-28 my-4 text-3xl font-bold max-sm:text-2xl max-sm:mt-16">ADHIL</div>
          <div>專營手機配件、耳機、行動電源、充電器、生活用品等。</div>
        </div>
        <div class="scrollEff flex flex-col justify-end border-b-2 border-black mt-12 pb-6 max-md:text-center">
          <img @click="userChoose(7)" class="cursor-pointer w-[55%] mx-auto" src="../assets/Partner/partner8.png" alt="Partner">
          <div class="mt-32 my-4 text-3xl font-bold max-sm:text-2xl max-sm:mt-16">KISSME 花漾美姬</div>
          <div>致力於系列彩妝，讓每位女性自信展現各種樣貌。</div>
        </div>
        <div class="scrollEff flex flex-col justify-end border-b-2 border-black mt-12 pb-6 max-md:text-center">
          <img @click="userChoose(8)" class="cursor-pointer w-[75%] mx-auto" src="../assets/Partner/partner9.png" alt="Partner">
          <div class="mt-32 my-4 text-3xl font-bold max-sm:text-2xl max-sm:mt-16">Snapask 時課問</div>
          <div>致力於幫助學生解決課業問題的全方位線上學習平台。</div>
        </div>
        <div class="scrollEff flex flex-col justify-end border-b-2 border-black mt-8 pb-6 max-md:text-center">
          <img @click="userChoose(9)" class="cursor-pointer w-[80%] mx-auto" src="../assets/Partner/partner10.png" alt="Partner">
          <div class="mt-16 my-4 text-3xl font-bold max-sm:text-2xl">JANDI 企業通訊軟體</div>
          <div>全台各地的學生組織都在用！</div>
        </div>
      </div>

      <!-- <div>
        <div class="fixed bg-white w-[1000px] h-[200px] overflow-y-scroll" v-if="partnerIndex == 0">
          <img class="w-[800px]" src="../assets/Partner/partner1.png" alt="">
        </div>
      </div> -->

    </div>
    <Footer />
  </div>
</template>

<style scoped>
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

.linkEff {
  transition: color 0.5s ease, box-shadow 0.5s ease;
  -o-transition: color 0.5s ease, box-shadow 0.5s ease;
  -moz-transition: color 0.5s ease, box-shadow 0.5s ease;
  -webkit-transition: color 0.5s ease, box-shadow 0.5s ease;
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-color: #0ea5e9;
}

.linkEff:hover {
  color: #fff;
  box-shadow: inset 0 -30px 0 0 #0ea5e9;
}
</style>
