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
    <ThemeColumnHeader
      header="主題專欄 / 升學"
      keyWord="繁星"
      theme="繁星到底怎麼繁？"
    />

    <div class="mx-60 my-20 max-sm:mx-4">
      <div>
        <div class="text-center text-xl leading-9 my-16">
          筆者：邱暄澐 / 編修：廖珺安
        </div>
        <picture>
          <source
            class="shadow-lg mx-auto my-10 w-[800px]"
            srcset="../../../assets/themeCol_StarPlan/themeCol_starPlan1.webp"
            type="image/webp"
          />
          <img
            class="shadow-lg mx-auto my-10 w-[800px]"
            src="../../../assets/themeCol_StarPlan/themeCol_starPlan1.png"
            alt="starPlan"
          />
        </picture>
        <div class="text-xl leading-9">
          這篇要介紹的是「繁星推薦」！在上一篇升學專欄中有稍微簡介繁星，但因為繁星的規則其實頗為複雜，所以決定再寫一篇專欄詳細為大家整理繁星的規則～
          <br /><br />
          首先先來簡單介紹一下繁星推薦是什麼！這是一個由大學甄選入學委員會主辦的升學管道，約佔升學管道中的
          15%，算是第三大宗的升學方式。 <br /><br />
          繁星的核心理念是「高中均質、區域均衡」，希望能透過各校推薦優秀學生的方式降低城鄉差距的問題，讓資源相對不足的偏鄉學生也能取得優質校系的入學門票。
          <br /><br />
          主要參考的標準是在校成績，因此適合在校成績優異的學生報考，不過還是要符合各校系訂的學測門檻。接著我們來看看繁星的申請條件吧！
          <br /><br /><span class="font-bold text-3xl">申請條件</span>
          <br />
          <ul class="list-decimal list-outside ml-6">
            <li>全程就讀同高中且沒有轉學的應屆畢業生</li>
            <br />
            <li>
              符合各校系訂定的學測五標、英聽、術科檢定標準：<br />
              每個學校會參考的學測科目、英聽級數以及術科檢定都不同，可以多多翻閱當年度繁星簡章，或是到
              University TW 查詢，去找到自己最有興趣又很有機會錄取的校系。<br /><br />
              ＃小提醒 <br />
              從111學年度開始，數學分成數A和數B，因此同個校系可能根據數A或數B的採計被分成兩組或分到不同學群，報名的時候記得不要填錯哦！
            </li>
            <br />
            <li>
              符合各校系訂定的在校成績百分比門檻：<br />
              在校成績百分比的門檻可能會設定在20、30、40、50%內，所以在校成績至少要維持在50％以內才有機會上榜喔！
              <br />
              至於成績採計的部分，國、英、資訊、生科成績採計至高三上，其餘皆採計至高二下，建議維持好每一科的成績（包含藝能科目），提高自己上榜的機率。
            </li>
          </ul>

          <br /><br />
          <span class="font-bold text-3xl">繁星規則</span>
          <br />
          再來要介紹的是大家最好奇的繁星規則了～繁星的規則相對其他升學管道來說比較複雜一點，小編列出了幾項大重點，讓大家對於決定志願以及繁星分發流程會有比較清楚的概念！
          <br /><br />
          <span class="font-bold">一、前情提要</span> <br />
          這邊先來說明幾個在參加繁星推薦之前，你不可不知的重要資訊！ <br />
          <ul class="list-decimal list-outside ml-6">
            <li>
              錄取後不能參加當年度個人申請： <br />
              這點超級超級超級重要喔，在繁星前就要做好個申的落點分析，盡量爭取到比個申落點更好的大學，否則繁星上榜後就沒有機會參加個申或四技申請了。
              <br /><br />
              ＃小提醒 <br />
              第八學群（醫牙）的繁星放榜時間會在個人申請報名之後，所以學生通常也會一起參加個人申請。但這邊要注意的是，即使個申上榜，也只能去繁星上榜的科系就讀，大家就要自己做出取捨了！
            </li><br>
            <li>除了第八學群（醫牙）外，其他皆不用面試</li>
            <li>第八學群若通過第一階段，個申不能填同大學的醫學或牙醫系</li>
          </ul>

          <br />

          <span class="font-bold">二、學群介紹</span> <br />
          這裡的學群和大家所知的 18
          學群是不一樣的！比較像是我們講的一、二、三類組的概念，在繁星推薦中，每個高中可以填的名額會跟學群分類有關。
          <br /><br />
          第一類學群｜文、法、商、社會科學、教育、管理等學系 <br />
          第二類學群｜理、工科等學系 <br />
          第三類學群｜醫、生命科學、農等學系 <br />
          第四類學群｜音樂相關學系 <br />
          第五類學群｜美術相關學系 <br />
          第六類學群｜舞蹈相關學系 <br />
          第七類學群｜體育相關學系 <br />
          第八類學群｜醫學系、牙醫系 <br /><br />
          <span class="font-bold">三、分發規則</span> <br />
          <span class="font-bold">第一步：校內規則</span> <br />
          <ul class="list-disc list-outside ml-6">
            <li>同大學的同一學群最多推薦 2 名學生</li>
            <li>
              第一到三類學群的分發順位會一起計算： <br />
              學校會依據在校成績與分發比序等條件將學生分成第一至六順位，第一順位參與第一輪分發，其餘皆為第二輪分發。
            </li>
          </ul>
          <br />
          ＃小提醒 <br />
          建議大家盡量爭取第一順位，因為第二輪分發錄取機會相對小非常多，但也不是不可能，大家可以查查往年你想要的科系會不會經常進入二輪分發。
          <br />
          這邊要特別注意的是，如果該科系今年的錄取名額變少的話，就不一定像往年一樣都會進到第二輪分發！
          <br /><br />
          <ul class="list-disc list-outside ml-6">
            <li>
              第四到八學群的名額及分發順位為個別計算，每學群都有各自的第一、二順位
            </li>
            <li>
              校內斯榜： <br />
              通常學校會辦一個志願選填的場合，以公平、公開的方式決定順位（俗稱撕榜），為避免在撕榜現場時你的第一志願被撕走，最好要有備案哦！
            </li>
          </ul>

          <br /><br />
          <span class="font-bold">第二步：決定志願序</span> <br />
          每個學校規定可以填的志願數量都不一樣，在你決定要填哪校哪一學群後，可以依據該校規定的志願數去選填志願！
          <br /><br />
          <span class="font-bold">第三步：兩輪分發</span> <br />
          第一輪分發 <br />
          <ul class="list-disc list-outside ml-6">
            <li>大學端會依據推薦學生的順位以及分發項目的比序決定錄取的順序</li>
            <li>
              同一大學只會錄取同高中一到三類學群中的一名學生，四到八學群則為每學群各一名學生
            </li>
          </ul>

          <br />
          第二輪分發 <br />
          <ul class="list-disc list-outside ml-6">
            <li>若第一輪分發有缺額，才會進行二輪分發，因此錄取機率相對較小</li>
            <li>第一到七學群：同一大學的學群可錄取同高中一名以上的學生</li>
            <li>第八學群：同一大學的學群僅可錄取同高中一名學生</li>
          </ul>
          <br />

          <span class="font-bold text-3xl">四、實例挑戰</span> <br />
          看完了那麼多規則之後，大家可能還是有點霧煞煞聽不懂。這邊小編出了兩個參考案例讓大家可以對於可能碰到的情況有更多的了解！（以下情節虛構成分100％）
          <br /><br />
          <span class="font-bold">背景知識</span><br />
          在單車高中裡，單單同學的在校成績百分比為 5％，車車同學則為
          6％。但很不巧的，單單和車車都想要繁成大的第二學群，而選擇成大第一、三學群的學生在校成績百分比的排名都在單單和車車之後。因此在一二三學群中，單單為第一順位，車車為第二順位，其他同學則為三至六順位。
          <br /><br />
          單單的志願序只有成大材料系，一心想要成為護國神山的爆肝材料工程師。
          <br />
          車車的第一志願為成大材料系，第二志願為成大化工系，第三志願為成大機械系。
          <br /><br />
          <span class="font-bold"
            >案例一：第一順位未錄取，由二到六順位遞補</span
          >
          <br />
          <img
            class="shadow-lg mx-auto my-10 w-[800px]"
            src="../../../assets/themeCol_StarPlan/themeCol_starPlan2.png"
            alt="starPlan"
          />
          <span class="underline underline-offset-4">成大材料系</span> <br />
          今年成大材料系繁星的缺額開出 3 位， <br />
          校外競爭者的學校及在校成績百分比如下： <br />
          A 校 3%、B 校 2％、C 校 1％ <br />
          <br />
          由於繁星的分發比序第一個一定是看在校成績，因此單單和車車都無緣透過繁星進入成大材料系，單單的繁星結果是未錄取任何校系。
          <br />
          於是！在第一順位未錄取的情況下，車車晉升為單車高中第一順位。接著，讓我們繼續看下去。
          <br /><br />
          <span class="underline underline-offset-4">成大化工系</span> <br />
          今年成大化工系的繁星缺額開出 3 位， <br />
          校外競爭者的學校及在校成績百分比如下： <br />
          D 校 2%、E 校 3％、F 校 7％ <br />
          <br />
          這邊可以看到車車的在校成績百分比是優於F校同學的，且車車為第一順位，因此在成大化工系的繁星第一輪分發中，車車錄取成大化工系。恭喜車車同學錄取他的理想校系。
          <br /><br />
          <span class="font-bold"
            >案例二：第一輪分發有缺額，則進入第二輪分發</span
          >
          <br />
          <img
            class="shadow-lg mx-auto my-10 w-[800px]"
            src="../../../assets/themeCol_StarPlan/themeCol_starPlan3.png"
            alt="starPlan"
          />
          <span class="underline underline-offset-4">成大材料系</span> <br />
          今年成大材料系繁星的缺額開出 5 位， <br />
          校外競爭者的學校及在校成績百分比如下： <br />
          A 校 3%、B 校 2％、C 校 1％ <br /><br />
          在這個案例中，成大材料系有 5
          個缺額，但除了單車高中外只有三所高中報名成大材料系的繁星。於是，單單順利在第一輪分發錄取成大材料系。因為仍有一個缺額，所以進入第二輪分發。剛好車車又是剩下的競爭者中，在校成績排名最前面的，因此車車也順利在第二輪分發時錄取成大材料系。
          <br /><br />
          ＠小編說說話時間 <br />
          小編以前也有走過繁星這個管道，以我的觀點會覺得繁星有點像在賭博（這邊沒有貶義～）。因為真的有太多不確定因素，而且每個人的選擇都可能會互相影響，有時候還有點像在打心理戰。在撕榜現場如果沒有備案的話，當情況不如預期就可能會很緊張，建議大家都要做好萬全準備，給自己留多一點後路！可以趁學測考完的時間多多詢問學校老師的意見，也要去了解往年的錄取標準。繁星是一個可以運用的管道，但不需要將所有希望都放在這裡～因為繁星上了之後就沒辦法參加個申了，大家可以依照自己所需去做選擇，加油！
        </div>
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
