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

    <ThemeColumnHeader header="主題專欄 / 升學" keyWord="生涯探索" theme="生涯探索／升學網站懶人包" />

    <div class="mx-60 my-20 max-sm:mx-4">
      <div>
        <picture>
          <source class="shadow-lg mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_enrollmentForDummies/enrollmentForDummies1.png" type="image/webp">
          <img class="shadow-lg mx-auto my-10 w-[800px]" src="../../../assets/themeCol_enrollmentForDummies/enrollmentForDummies1.png" alt="enrollment">
        </picture>
        <div class="text-xl leading-9">
          大家在高中時最苦惱的想必就是將來要做什麼了，對各科系不太了解，身邊可能又沒有該領域的前輩可以詢問。但不用擔心～現在已經有非常多網站幫你統整出各校系的相關資訊，還有開放個人經驗的平台讓你可以免費獲得各領域的前輩經驗談。小編幫大家整理出了 11 個超級實用的網站，大家可以多多利用這些資源去選擇你心中真正喜歡的科系。
          <br><br> 除了這些網站以外，也歡迎各位同學、家長們來參加成大單車節的活動，和第一線的大學生交流也可以對科系有更直接且深入的了解喔！
          <br><br><span class="font-bold text-2xl">生涯探索相關</span>
          <br> 首先第一部分要介紹的是「生涯探索」性質的網站。
          <br> 這些網站所包含的資訊主要有...
          <ul class="list-disc list-inside">
            <li>認識不同科系、學群：很多 18 學群以及各校系的詳細介紹</li>
            <li>認識自己：職涯興趣測驗可以幫你測出興趣類型以及適合的科系</li>
            <li>經驗分享：有各科系學長姐的經驗分享，也有教授或社會人士的經驗談</li>
            <li>畢業出路：透過資料庫統計出各科系畢業後的出路以及待遇等</li>
          </ul>
          <br><br><a target="_blank" rel="noreferrer noopenner" href="https://collego.edu.tw/">
            <span class="linkEff">
              ColleGO!
            </span> 
          </a> 
          <br> 這個網站的內容整理的很詳細，網站版面好看也很直觀。這裡的資訊很多是以圖表方式呈現的，可以很清楚且快速的理解他們想呈現的內容！
        </div>
        <picture>
          <source class="shadow-lg mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_enrollmentForDummies/enrollmentForDummies2.png" type="image/webp">
          <img class="shadow-lg mx-auto my-10 w-[800px]" src="../../../assets/themeCol_enrollmentForDummies/enrollmentForDummies2.png" alt="enrollment">
        </picture>
        <div class="text-xl leading-9">
          <br>在這個網站你可以知道
          <ul class="list-disc list-inside">
            <li>科系學什麼</li>
            <li>需具備的能力</li>
            <li>對應到哪些興趣類型</li>
            <li>核心課程</li>
            <li>常見誤解</li>
          </ul>
          <br><br> 以下是ColleGo!包含的三大項主題：
          <br> 1. 大學選才
          <br> 18學群介紹：包含學群對應的興趣類型以及知識領域，可以知道自己的興趣類型和個人特質有沒有符合該學群的核心素養。
          <br> 學類介紹：這邊的學類就是科系的意思！包含簡介科系學什麼、未來出路還有一些常見的誤解。
          <br> 大學介紹：包含全台各大學的特色、生活、資源介紹，每一所大學的特色都不同，透過大學介紹可以幫助學生選擇自己最適合的大學～
          <br> 2. 高中育才
          <br> 三年行動計劃：藉由各種任務讓你更加了解自己適合的科系
          <br><br> ＃小提醒：此功能需註冊才可以進行
          <br> 1. 興趣類型介紹
          <br> 2. 加深加廣課程介紹
          <br> 3. 焦點話題：包含各種升學相關文章
          <br><br><span class="font-bold text-2xl"><a target="_blank" rel="noreferrer noopenner" href="https://ucan.moe.edu.tw/">
            <span class="linkEff">
              UCAN大專院校就業職能平台
            </span>
          </a> / 
            <a target="_blank" rel="noreferrer noopenner" href="http://www.hollandexam.com/hollandQuiz.aspx">
              <span class="linkEff">1111人力銀行Holland學職涯探索平臺</span></a> </span>
          <br> 這兩個網站主要的功能是提供職涯興趣測驗，讓學生更了解自己未來可發展的方向！下面是興趣類型的分類，讓大家先對六種興趣類型有個基礎的概念～
        </div>
        <picture>
          <source class="shadow-lg mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_enrollmentForDummies/enrollmentForDummies3.png" type="image/webp">
          <img class="shadow-lg mx-auto my-10 w-[800px]" src="../../../assets/themeCol_enrollmentForDummies/enrollmentForDummies3.png" alt="enrollment">
        </picture>
        <div class="text-xl leading-9">
          興趣類型（搶先看）
          <br>1. 實用型（Realistic）＃行動 ＃耐性 ＃技術
          <br> 偏好倚靠雙手實作，從事務實、需要操作機械的工作
          <br><br> 2. 研究型（Investigative） ＃觀察 ＃分析 ＃邏輯
          <br> 喜歡依據理論與資訊行動，樂於追根究底解決問題
          <br><br> 3. 藝術型（Artistic） ＃創作 ＃感性 ＃想像
          <br> 不循規蹈矩、獨立自主、富有創意，對事物有敏銳的感受力
          <br><br> 4. 社會型（Social） ＃合作 ＃協助 ＃護理
          <br> 喜歡與人合作的環境，擅長輔助、救治、協助他人
          <br><br> 5. 企業型（Enterprising） ＃領導 ＃談判 ＃策略
          <br> 偏好競爭的環境，喜歡說服、銷售與宣傳
          <br><br> 6. 事務型（Conventional） ＃組織 ＃系統 ＃精確
          <br> 處事精確、要求完美，講究細節、井然有序的狀態
          <br><br><span class="font-bold text-2xl"><a target="_blank" rel="noreferrer noopenner" href="https://ioh.tw/"><span class="linkEff">IOH</span></a> </span> 
          <br> 這是一個開放個人經驗的分享平台，創辦初衷是希望讓在台灣沒有資源或人脈了解在求學與工作經驗的人，可以透過 IOH 去了解世界，讓他們敢於作夢，不被環境所受限。
        </div>
        <picture>
          <source class="shadow-lg mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_enrollmentForDummies/enrollmentForDummies4.png" type="image/webp">
          <img class="shadow-lg mx-auto my-10 w-[800px]" src="../../../assets/themeCol_enrollmentForDummies/enrollmentForDummies4.png" alt="enrollment">
        </picture>
        <div class="text-xl leading-9">
          小編很喜歡他們的座右銘：「當每個人都說起故事，我們可以改變世界」，透過錄製演講以及文字整理的方式讓每個人都有機會接觸到各種獨一無二且珍貴的經驗，也能一窺這個世界更多的可能性
          <br><br> 除了經驗分享的影片外，也有豐富的升學專欄以及學群介紹影片，讓大家對於各個科系在學什麼有更深入的了解。
          <br><br> 經驗分享三大類
          <br>1. 學長姐分享：包含各科系學長姐的求學經驗、心路歷程、資源等，也包含留學海外的學長姐分享，可以解答一些申請留學或交換方面的疑惑。
          <br>2. 教授談科系：由教授親自告訴你該校系的特色以及資源，也會提供一些學習歷程及面試方面的資訊，讓學生知道教授真正想看到的特質為何。
          <br>3. 工作講座：分享在世界各地的工作內容、性質、工作方式、生活風格以及所需的專業技能以及學經歷
          <br><br><span class="font-bold text-2xl"><a target="_blank" rel="noreferrer noopenner" href="https://www.cheers.com.tw/career"><span class="linkEff">生涯探索@cheers</span></a> </span> 
          <br> Cheers是一個由天下雜誌出版的雜誌，其實他們主要在更新的是Cheers 快樂工作人這個網站，不過生涯探索@cheers的內容會和升學以及生涯探索較為相關，所以小編才選擇介紹這個網站！雖然比較少更新，但還是有很多實用的資訊，如果大家想要看最新資訊記得到快樂工作人的網站看哦～
        </div>
        <picture>
          <source class="shadow-lg mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_enrollmentForDummies/enrollmentForDummies5.png" type="image/webp">
          <img class="shadow-lg mx-auto my-10 w-[800px]" src="../../../assets/themeCol_enrollmentForDummies/enrollmentForDummies5.png" alt="enrollment">
        </picture>
        <div class="text-xl leading-9">
          小編覺得這個網站特別的地方是人物特寫的部分，這邊有許多成功人士的故事以及訪談，可以在這裡看到人生其實有更多種可能，不一定要讀大學就照著自己的專業找工作，每個人都能走出自己的一片天！下面是生涯探索＠cheers主要的資訊：
          <br><br> 生涯規劃
          <ul class="list-disc list-inside">
            <li>趨勢新知：時事分享 （要看最新時事記得到Cheers 快樂工作人）</li>
            <li>人物特寫：不同職業生涯的人生故事</li>
            <li>學習歷程：自己的歷程該如何規劃？</li>
          </ul>
          <br><br> 大學相關資訊
          <ul class="list-disc list-inside">
            <li> 18 學群簡介</li>
            <li>大學搶先看：學院數、師生比、經費比、獨特優勢及口碑科系</li>
            <li>聽學長姐說：人文社科和理工資訊類學長姐的經驗分享</li>
          </ul>
          <br><br><span class="font-bold text-2xl"><a target="_blank" rel="noreferrer noopenner" href="https://www.104.com.tw/jb/career/department/navigation?browser=2&degree=2"><span class="linkEff">104升學就業地圖</span></a></span> 
        </div>
        <picture>
          <source class="shadow-lg mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_enrollmentForDummies/enrollmentForDummies6.png" type="image/webp">
          <img class="shadow-lg mx-auto my-10 w-[800px]" src="../../../assets/themeCol_enrollmentForDummies/enrollmentForDummies6.png" alt="enrollment">
        </picture>
        <div class="text-xl leading-9">
          由資料庫統計出各科系畢業生的發展狀況，藉由未來發展狀況找到最適合自己的科系！
          <br> 內容包含：
          <ul class="list-disc list-inside">
            <li>大學畢業後的升學比例</li>
            <li>工作類型</li>
            <li>畢業生起薪</li>
            <li>需具備的技能</li>
          </ul>
          <br><br><span class="font-bold text-2xl">升學資訊網站</span> 
          <br> 接著要介紹的是升學資訊相關網站，這些網站會整理很多申請大學相關的內容，包含各種升學管道的介紹，還有一些考試、營隊、活動等等的資訊！
          <br><br><span class="font-bold text-2xl"><a target="_blank" rel="noreferrer noopenner" href="https://university-tw.ldkrsi.men/"><span class="linkEff">University TW</span></a></span> 
        </div>
        <picture>
          <source class="shadow-lg mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_enrollmentForDummies/enrollmentForDummies7.png" type="image/webp">
          <img class="shadow-lg mx-auto my-10 w-[800px]" src="../../../assets/themeCol_enrollmentForDummies/enrollmentForDummies7.png" alt="enrollment">
        </picture>
        <div class="text-xl leading-9">
          這個網站白話說就是各種申請簡章的電子版啦～
          <br><br> 申請簡章通常一個班只會買一本共用，可能你想要看的時候剛好別人在用。而且紙本簡章都蠻厚重的，因為有每一所大學的申請資訊和門檻。
          <br><br> 所以呢， University TW 會是你的好幫手！它就像是把申請簡章電子化，會比較好查詢，還是免費的喔。想當初小編在排志願的時候也是跟這個網站日夜為伍呢。
          <br><br> 以下是 University TW 網站中包含的內容：
          <ul class="list-disc list-inside">
            <li>各招生管道的申請資訊：特殊選才、個人申請、繁星推薦、分發入學</li>
            <li>升學內容：篩選標準、招生人數、採計科目等</li>
            <li>大學內容：大學男女比、新生註冊率</li>
          </ul>
          <br><br><span class="font-bold text-2xl"><a target="_blank" rel="noreferrer noopenner" href="https://www.unews.com.tw/"><span class="linkEff">大學問</span></a></span> 
        </div>
        <picture>
          <source class="shadow-lg mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_enrollmentForDummies/enrollmentForDummies8.png" type="image/webp">
          <img class="shadow-lg mx-auto my-10 w-[800px]" src="../../../assets/themeCol_enrollmentForDummies/enrollmentForDummies8.png" alt="enrollment">
        </picture>
        <div class="text-xl leading-9">
          大學問是一個資訊非常豐富的網站，基本上就是什麼都有什麼都不奇怪。比起 University TW的申請資訊，大學問的資訊比較有經過整理和排版。而除了申請資訊外，大學問也有整理出各種升學管道的介紹和時程、寒暑假營隊的相關資訊，還有一些升學專欄內容等。大家平常也可以多上去看看大學情報，那邊時不時會發布一些新的文章。
          <br><br> 以下是大學問網站主要包含的內容：
          <ul class="list-disc list-inside">
            <li>各大學校系的超詳細介紹：基本資料、申請資訊等（含軍警大學）</li>
            <li>各申請管道的詳細介紹：日程表、申請條件、適合哪些人</li>
            <li>多樣化的專欄內容</li>
            <ul class="list-decimal list-inside ml-6">
              <li>考情：升學相關資訊</li>
              <li>學習：學科相關、好書推薦、特色課程...</li>
              <li>考題：各科參考試卷、歷屆、答案</li>
              <li>校園：各校相關新聞</li>
              <li>活動：寒暑假營隊整理</li>
            </ul>
          </ul>

          <br><br><span class="font-bold text-2xl">落點分析</span> 
        </div>
        <picture>
          <source class="shadow-lg mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_enrollmentForDummies/enrollmentForDummies9.png" type="image/webp">
          <img class="shadow-lg mx-auto my-10 w-[800px]" src="../../../assets/themeCol_enrollmentForDummies/enrollmentForDummies9.png" alt="enrollment">
        </picture>
        <div class="text-xl leading-9">
          落點分析的網站包含
          <a target="_blank" rel="noreferrer noopenner" href="https://hs.1111.com.tw/testAnalysisType.aspx?agent=of_email_analysis_highschool_03"><span class="linkEff">1111</span></a> /
          <a target="_blank" rel="noreferrer noopenner" href="https://student.104.com.tw/hs/"><span class="linkEff">104</span></a>人力銀行、
          <a target="_blank" rel="noreferrer noopenner" href="https://www.com.tw/p.html"><span class="linkEff">儒林</span></a>等，這些網站會依據各升學管道的入學門檻，分析出你的最適落點。在臉書專欄中沒有把儒林貼出來，怕會有點像在打廣告，但這也是大家最常使用的落點分析網站之一哦！每個網站的落點分析結果都會不一樣，建議多參考不同的結果來排出最適合你的志願序。
          <br> ＃小提醒：這些網站有些功能要經過註冊才可以使用
          <br><br> 以下是每個網站包含的落點分析內容：
          <ul class="list-disc list-inside ml-6">
            <li>1111落點分析：學測（繁星、個申、科大）、統測、分科</li>
            <li>104落點分析：學測（個申）／分科...</li>
            <li>儒林落點分析：學測（繁星、個申、科大、警大軍校申請）、統測、分科</li>
          </ul>
          <br><br><span class="font-bold text-2xl">成大單車節官網</span> 
        </div>
        <picture>
          <source class="shadow-lg mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_enrollmentForDummies/enrollmentForDummies10.png" type="image/webp">
          <img class="shadow-lg mx-auto my-10 w-[800px]" src="../../../assets/themeCol_enrollmentForDummies/enrollmentForDummies10.png" alt="enrollment">
        </picture>
        <div class="text-xl leading-9">
          最後要介紹的就是這邊的單車節官網本人啦！
          <br> 單車節會幫大家整理出一些升學相關資訊放在臉書以及官網，官網的內容會比臉書詳細也會更方便閱讀。另外單車節的 IG（＠nckubike_official）會放一些貼近生活的有趣內容，大家有空的時候也可以去看看哦～
          <br><br> 以下是單車節官網的主要內容：
          <ul class="list-disc list-inside">
            <li>ABOUT單車節：緣起、專案介紹、宣傳片、活動報名表單...</li>
            <li>各科系學長姐的經驗分享：這裡會有點像是IOH的經驗分享，會有成大各科系學長姐分享他們的大學生活、學業、活動、打工等等的相關經驗。</li>
            <li>專欄總整理：大家可以直接點選連結進入個專欄介面閱讀！（註記：這邊在底線處置入各專欄連結）</li>
            <ul class="list-decimal list-inside ml-6">
              <li>健康專欄｜#飲食 ＃睡眠 ＃運動 ＃心態調整</li>
              <li>升學專欄｜#學習歷程 #升學資訊 #繁星 ＃生涯探索...</li>
              <li>自學專欄｜＃筆記術 ＃好書推薦 ＃平台資源 ＃投資理財</li>
              <li>生活專欄｜＃斜槓 ＃打工 ＃時間管理 ＃邊玩邊學</li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
    
    <div>
      <RouterLink to="/themeColumn">
        <RoundButton class="mx-auto" BtnTitle="Back" />
      </RouterLink>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
.linkEff {
  transition: color 0.5s ease, box-shadow 0.5s ease;
  -o-transition: color 0.5s ease, box-shadow 0.5s ease;
  -moz-transition: color 0.5s ease, box-shadow 0.5s ease;
  -webkit-transition: color 0.5s ease, box-shadow 0.5s ease;
  text-decoration: underline;
  text-underline-offset: 5px;
  text-decoration-color: #0ea5e9;
}

.linkEff:hover {
  color: #fff;
  box-shadow: inset 0 -50px 0 0 #0ea5e9;
}
</style>