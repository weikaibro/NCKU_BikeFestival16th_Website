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
    <ThemeColumnHeader
      header="主題專欄 / 自學"
      keyWord="投資"
      theme="比運彩更好賺 — 投資理財"
    />

    <div class="mx-60 my-20 max-sm:mx-4">
      <div>

        <picture>
          <source class="shadow-lg mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_FinancialManagement/themeCol_FinancialManagement1.webp" type="image/webp">
          <img class="shadow-lg mx-auto my-10 w-[800px]" src="../../../assets/themeCol_FinancialManagement/themeCol_FinancialManagement1.png" alt="FinancialManagement">
        </picture>
        <div class="text-xl leading-9">
          在這個不斷通膨的時代，如何不被通膨追上成為每個人必學的課題，在成年開戶前，先養成良好儲蓄習慣，並培養對總體經濟的敏感度，讓自己提前準備好，以面對各式各樣的危機與轉機（機會是留給準備好的人！！
          <br /><br />
          這邊是我們等等會介紹的目錄：
          <ul class="list-disc list-inside">
            <li>記帳app</li>
            <li>專有名詞</li>
            <li>投資產品、標的物介紹</li>
          </ul>
          <br />
          接著進入到我們主題囉～
          <div class="text-blue-600 font-bold mt-4">一、記帳app</div>
        </div>
      </div>
      <div>
        <picture>
          <source class="shadow-lg mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_FinancialManagement/themeCol_FinancialManagement2.webp" type="image/webp">
          <img class="shadow-lg mx-auto my-10 w-[800px]" src="../../../assets/themeCol_FinancialManagement/themeCol_FinancialManagement2.png" alt="FinancialManagement">
        </picture>
        <div class="text-xl leading-9">
          1. Fortune City 記帳城市
          <br />
          結合記帳與遊戲，每記一筆帳就會在你的城市中出現一棟相應的建築物。身為市長的你除了透過記帳建造建築物外，還可以規劃城市景觀與繁榮程度。是一個可以讓你同時享受遊戲樂趣的記帳程式。
          <br /><br />
          2. MoneyBook 麻布記帳 <br />
          與多間銀行、機構合作，可同步信用卡、悠遊卡、保險、加密貨幣和各大網銀的金流紀錄。透過連結銀行帳戶及信用卡刷卡紀錄，可以讓你了解自己的銀行餘額與消費額度，達成多卡、多帳戶都統整在一起的好處。
          <br /><br />
          3. Moze3.0 <br />
          APP 的介面美麗又極具個人化，兼具了美觀和實用性。除了介面自由度大，讓你可以自由設定介面風格外，還能檢視記帳成果的報表。Moze 目前只有支援 ios 系統。
          <br /><br />
          小編說說話： <br />
          在還沒有足夠的背景知識之前，我們所能運用最基本的資本就是零用錢或是打工拿到的薪水。雖然這些相較於其他投資方法所獲得的錢可能只是小數目，但藉由好好理財，也能一步一步的累積你的儲蓄。透過記帳檢視自己的支出，可以知道自己平常會在哪方面花比較多錢，進而避免掉不必要的支出。平常購物前也要多多三思，才不會每每在月底時只能吃泡麵或是白飯來度過。好的記帳習慣對我們學生時期習慣的養成可說是非常重要的！
          <br /><br />
          再來是我們的專有名詞介紹，再觸碰這些領域之前，一定要確保自己有足夠的知識跟背景，或是有專人的指導才可以喔！所以今天小編帶大家來慎一些關於投資不可不知的專有名詞！
          <br /><br /><span class="font-bold text-2xl"> 投資專有名詞 </span>
          <br /><br />
          <ul class="list-disc list-inside">
            <li>消費者物價指數 CPI</li>
          </ul>
          普遍用來觀察一國通膨的指標，同時也是各國央行制定貨幣政策的重要觀察數據。消費者物價指數的測量會隨著時間變化，包括多種（常有幾百種）商品和服務零售價格的平均變化值。這些商品和服務會被分為幾個主要的類別。在計算消費者物價指數時，每一個類別都有一個能顯示其重要性的權數。這些權數是通過向成千上萬的家庭和個人調查他們購買的產品和服務而定下的。權數會經常修正，以使它們與現實情況相符。
          CPI
          是一個固定的數量價格指數並且無法反映商品品質的改進或者下降，對新產品也不加考慮。
          CPI
          若扣除容易波動的食物與能源的統計數字，此數據稱為「核心物價變動率」，當核心物價變動率低於 3% 時，經濟成長率應是處於相對低的水準。
          <br />
          應用： CPI 年增率上升，貨幣政策會傾向緊縮，股價下跌； CPI
          年增率下滑，貨幣政策會傾向寬鬆，股價上長 <br /><br />
          <ul class="list-disc list-inside">
            <li>美國非農就業指數 NFP</li>
          </ul>
          指的是美國非農業人口就業狀況的數據指標，非農業單位代表美國 9
          成以上的就業人口，因此可以看出整體美國勞工就業的情況，但不包括農場工人、私人家庭僱員、非法人企業主、非盈利部門僱員等。
          <br />
          非農就業數據，包含失業率、行業狀況、平均時薪以及對先前數據的修正，是觀察美國勞動市場的指標。
          <br />
          應用：當美國非農業就業數據增加，代表主要影響美國經濟表現的工商業逐漸好轉。失業率下降導致民眾消費意願增加，因此美國景氣將復甦，美股表現會上揚。
          反之，當美國非農業就業數據減少，代表主要影響美國經濟表現可能轉於趨緩或是衰退。失業率上升導致民眾消費能力下降，導致民眾消費能力下降，進而美國景氣將衰退，故美股表現會呈現下行走勢
          <br /><br />
          <ul class="list-disc list-inside">
            <li>升降息</li>
          </ul>
          是各國央行調節貨幣政策的工具之一，藉著貨幣供給的鬆緊影響資金流動，繼而影響物價、就業市場等經濟目標。升息是一種緊縮貨幣政策，每個國家的中央銀行會透過調整基準利率來穩定貨幣，調控市場上流通的貨幣數量。升息通常會發生於市場上熱錢太多、通膨率快速上升的時期。央行會透過升息來減少市場上的熱錢，有抑制通膨的作用。
          <br />
          應用：銀行裡的存款利率提高，民眾就會比較容易選擇將錢存在銀行，減少消費及投資行為，以降低市場上過多的資金，希望藉著抑制需求面，讓通貨膨脹降溫
          <br /><br />
          <ul class="list-disc list-inside">
            <li>投資報酬率</li>
          </ul>
          經濟學名詞，指投資後所得的收益與成本間的百分比率。
          <br />
          投資報酬率一般可分為總報酬率（持有期間報酬率）和年報酬率。總報酬率是不論資金投入時間，直接計算總共的報酬率，亦即：
          <br />
          投資報酬率（%） = 投資淨損益 / 總投入資金。 <br /><br /><span
            class="text-blue-600 font-bold"
            >*須注意年化報酬率與總報酬率的比較</span
          >
          <br /><br />
          投資期間的總利潤通常包含資本利得（資本收益）與非資本利得性之收益。若以股票報酬率來舉例，投資期間的資本利得為買進賣出間的價差，非資本利得性的收益通常為現金股利。因此股票的持有期間報酬率又可拆解為其資本收益率以及股利收益率的總和。
          <br />
          ex:五年 150% 不等於一年 110%（這是平均報酬率），一年 8.45%
          才是年化報酬率
          <br><br>

          <span class="mt-4 text-blue-600 font-bold">二、股票</span>
          <picture>
            <source class="shadow-lg mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_FinancialManagement/themeCol_FinancialManagement3.webp" type="image/webp">
            <img class="shadow-lg mx-auto my-10 w-[800px]" src="../../../assets/themeCol_FinancialManagement/themeCol_FinancialManagement3.png" alt="FinancialManagement">
          </picture>
          <div class="text-xl leading-9">
            <span class="font-bold">基本面</span> 
            <br> 基本面就是影響公司財務與獲利之所有因素。
            <br> 銷貨數量、原料成本、產品售價的變動、廠房水電費、甚至員工加班時數、經濟景氣、產業供需狀況...等等，都在基本面分析的範圍內。
            <ul class="list-disc list-inside">
              <li>總體經濟</li>
              <li>產業分析</li>
              <li>財務指標（EPS、ROE、毛利率、營業利益率...）</li>
              <li>價值指標（股價淨值比、本益比、本益成長比）</li>
            </ul>
            <br><span class="font-bold">技術面</span>  
            <br> 專注股價圖（K線圖），又可以稱為「圖形專家」。技術分析相信市場多由「心理因素」所控制，投資是猜測其他參與者行為，彙整多項個股的資訊，包含股票K線圖、多種技術線型，例如日、週、月均線等，結合盤後交易資訊，判斷該股未來走勢。
            <ul class="list-disc list-inside">
              <li>技術指標（KD、MACD、RSI...）</li>
              <li>技術型態（W底、M頭、箱型...）</li>
              <li>量價關係</li>
              <li>布林通道</li>
              <li>缺口理論</li>
            </ul>
            <br><span class="font-bold">籌碼面</span>  
            <br> 認為主力、大戶能夠獲得較全面的資訊，比一般散戶投資人擁有較高的勝率。透過分辨股市大戶在市場買賣的動向，或從融資、融券的比例，進而選擇是否跟隨主力「上、下車」。主力包含，外資、自營商以及投信，或是董事、監事、經理人、大股東以及經常性出入千張股票等人。
            <ul class="list-disc list-inside">
              <li>法人/主力買賣超</li>
              <li>大戶/散戶持股比例變化</li>
              <li>總持股人數變化</li>
              <li>董監持股</li>
              <li>融資劵餘額</li>
            </ul>
            <br><span class="font-bold">消息面</span>  
            <br> 消息面主要來源是透過網路、新聞、社群、雜誌等媒體，或是你身邊可能有認識某某公司內部人所獲得的內線資訊。消息面涵蓋了所有可能使股價產生波動的任何訊息，例如一則川普的 Twitter 發文、病毒變種使疫情傳播速度加速擴大、或是企業的財報數據變化等，都能影響市場價格的漲跌。
            想利用消息面來作為買賣依據的人，必須要能夠解讀消息的真實性及個人見解，否則容易人云亦云，淪為市場中的韭菜。
            <ul class="list-disc list-inside">
              <li>分析師報告</li>
              <li>新聞媒體</li>
              <li>媒體識讀</li>
              <li>內線資訊</li>
            </ul>
            <br><span class="font-bold">操作流程</span>  
            <ul class="list-disc list-inside">
              <li>開戶：比較手續費優惠、看盤軟體、營業員等，選擇一間證券公司開戶</li>
              <li>選擇股票：分析</li>
              <li>下單：數量、價格</li>
              <li>等待交易所搓合：不一定成交</li>
              <li>成交：T+2前匯款，避免違約交割</li>
            </ul>
            <br><span class="font-bold">自學推薦</span>  
            <ul class="list-disc list-inside">
              <li>柴鼠兄弟</li>
              <li>Mr.Market市場先生</li>
              <li>金管會 金融智慧網</li>
              <li>CMoney 投資小學堂</li>
              <li>藍白拖主力</li>
              <li>相關書籍</li>
            </ul>
          </div>
          <br><span class="mt-4 text-blue-600 font-bold">三、基金</span>
          <picture>
            <source class="shadow-lg mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_FinancialManagement/themeCol_FinancialManagement4.webp" type="image/webp">
            <img class="shadow-lg mx-auto my-10 w-[800px]" src="../../../assets/themeCol_FinancialManagement/themeCol_FinancialManagement4.png" alt="FinancialManagement">
          </picture>
          <div class="text-xl leading-9">
            <span class="font-bold">基金類型</span> 
            <ul class="list-disc list-inside">
              <li>封閉型／開放型</li>
              <li>主動型／被動型</li>
              <li>股票型／債券型／貨幣型...</li>
              <li>平衡型／組合型</li>
              <li>全球型／地區型</li>
            </ul>
            <br><span class="font-bold">基金資料</span> 
            <ul class="list-disc list-inside">
              <li>成立日期、初始規模、規模</li>
              <li>風險評級</li>
              <li>持股比例（類股／產業）</li>
              <li>績效</li>
              <li>淨值</li>
              <li>配息</li>
            </ul>
            <br><span class="font-bold">相關費用</span> 
            <ul class="list-disc list-inside">
              <li>銷售費用</li>
              <li>贖回費用</li>
              <li>基金管理費</li>
              <li>保管費</li>
            </ul>
            <br><span class="font-bold">資料整合平台</span> 
            <ul class="list-disc list-inside">
              <li>基金大觀園</li>
              <li>MoneyDJ理財網 基金</li>
              <li>三竹股市（股票為主）</li>
              <li>公開資訊觀測站（官方）</li>
            </ul>
            <br><span class="font-bold">操作流程</span> 
            <ul class="list-disc list-inside">
              <li>開戶：比較各通路的相關費用，選擇平台開戶</li>
              <li>選擇基金：評估風險、了解基金資料</li>
              <li>下單：基金最低申購金額、幣別不盡相同</li>
            </ul>
            <br><span class="font-bold">自學推薦</span> 
            <ul class="list-disc list-inside">
              <li>柴鼠兄弟</li>
              <li>Mr.Market市場先生</li>
              <li>CMoney 投資小學堂</li>
            </ul>
            <br>小編說說話：基金是多支股票、債券等標的物的綜合體，而每一檔股票、債券都有其四大面向需要考慮，藉由基金經理人減少投資者的學習門檻，但因為包含的標的物多，學習天花板的難度也相對更高！
          </div>
          <br><span class="mt-4 text-blue-600 font-bold">四、外匯</span>
          <picture>
            <source class="shadow-lg mx-auto my-10 w-[800px]" srcset="../../../assets/themeCol_FinancialManagement/themeCol_FinancialManagement5.webp" type="image/webp">
            <img class="shadow-lg mx-auto my-10 w-[800px]" src="../../../assets/themeCol_FinancialManagement/themeCol_FinancialManagement5.png" alt="FinancialManagement">
          </picture>
          <div class="text-xl leading-9">
            <span class="font-bold">美元指數</span>
            <br> 由六個主要國際貨幣（歐元、日元、英鎊、加拿大元、瑞典克朗和瑞士法郎）權重衡量美元在國際外匯市場匯率變化的一項綜合指標，另外還有貿易加權美元指數。
            <br><br><span class="font-bold">七大貨幣</span>
            <br> 美元、歐元、日幣、英鎊、加幣、澳幣、瑞士法郎這七大幣種共占全球外匯交易量的大約80%，他們高度流動的特性使其成為外匯的主要貨幣。其中日幣、瑞郎為避險貨幣，因為日本獨特的央行政策，使投資者常借入低利率（甚至負利率）的日幣，並在高利率的地區投資，使其成為長期避險的主流貨幣；而瑞郎則因安全、穩定、中立的特性使其成為短期避險貨幣的熱門選擇。另外加幣、澳幣則為原物料貨幣的代表，加拿大有著豐富的天然氣、原油、木頭儲備，澳洲則與礦業、農牧業息息相關
            <br><br><span class="font-bold">外匯交易模式</span>
            <br> 即期外匯和遠期外匯，前者近似換取外幣現鈔，後者則多應用於避險，但兩者的手續費及交易成本都相對較高，獲利較難。
            <br> 外匯期貨或選擇權，買賣契約的規格及複雜度較高，較不適合新手理解
            <br> 外匯差價契約（CFD），一種槓桿式交易，客戶並不實際持有貨幣，交易成本低，非常適合小資投資人交易。
            <br><br><span class="font-bold">差價契約CFD</span>
            <br> 常應用於股市指數、外匯、貴金屬、原物料等商品進行多、空任一方向之交易，並不涉及實體商品或證券的交換。
            <br> ex:小編以 5000 元的保證金去買入 50000 元的商品（的契約）、若商品漲，小編賣掉同單位的商品（的契約）賺取價差，若跌幅超過 5000 ，契約強制平倉（賣掉的契約），小編虧損 5000 元保證金給平台方；相反也可以先賣後買（放空、看跌）。過程中小編完全不經手任一實體商品，並以 5000 元翹動 50000 元的部位（10 倍槓桿），可能的風險則為虧損最大 100% 的資金
            <br><br><span class="font-bold">相關費用</span>
            <ul class="list-disc list-inside">
              <li>外匯保證金</li>
              <li>手續費</li>
              <li>庫存費</li>
              <li>點差</li>
              <li>單位：手／點、步</li>
            </ul>
            <br><br><span class="font-bold">MT4＆MT5平台</span>
            <br> 全球最主流的外匯交易系統，提供虛擬帳戶參與真實世界的外匯實作練習，可以藉由演算法預先設定的參數進行開倉和平倉，進而實現自動化交易。
           <br><br><span class="font-bold">操作流程（差價契約）</span>
            <ul class="list-disc list-inside">
              <li>開戶：選擇外匯保證金&CFD經紀商平台，選擇有監管機構監管的平台，可以比較券商規模、交易量、點差費用、中文服務及出金速度等</li>
              <li>選擇做多或做空：判斷看漲或看跌（先買或賣）</li>
              <li>設定交易手數：可理解為槓桿倍數（幾單位的貨幣，越大量則代表越小的波動就越快達到止營或止損點）</li>
              <li>設定限價止盈止損（判斷商品的波動，避免過早止盈或止損，不建議都設定為100%的保證金）</li>
              <li>賣出或買回平倉：隔夜需付融資利息（考慮各國匯率利率不同，利息通常偏高，若長期不平倉，則可以考慮外匯交易模式的期貨或選擇權）</li>
            </ul>
            <br><span class="font-bold">自學推薦</span>
            <ul class="list-disc list-inside">
              <li>MT4&MT5有提供虛擬帳戶，可多加練習提升勝率</li>
              <li>恰克談外匯</li>
              <li>相關書籍</li>
            </ul>
            <br> 小編說説話：
            <br> 投資之前一定要充分理解標的物的各種面向，建立自己的一套方法（停損機制），透過模擬練習、修正再進場，以上介紹也僅是學習投資的冰山一角，也還有更多標的物類型等著認識！
            <br><br> 免責聲明：以上介紹不得作為投資依據，一切投資行為須自行負擔
          </div>
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
