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

    <ThemeColumnHeader header="主題專欄 / 自學" keyWord="資源" theme="平台資源懶人包" />

    <div class="mx-60 my-20 max-sm:mx-4">
      
      <img class="shadow-lg mx-auto my-10 w-[450px]" src="../../../assets/themeCol_PlatformForDummies/PlatformForDummies1.png" alt="PlatformForDummies">
      
      <div class="text-xl leading-9 my-16">
        高中生課後還想要再先修?
        <br> 還在怕上大學後跟不上課程進度?​
        <br> 想要取得某領域的證書但是時間不夠?​

        <br><br> 小編幫大家個別整理了一些好用的「線上課程平台」，​列舉了一些口碑不錯的「YT老師」，以及一些國內大學架設的「開放式課程」，還有集合了全世界知名大學的線上課程，也有特別整理的現在很熱門的「程式語言平台」，​各個學術領域應有盡有​！
        <br><br> 除此之外，我們也有針對不同「國內的開放式課程」，​給出一些各平台推薦的課程給大家，​不怕未來上大學後銜接不上課程​，快來看看有沒有你有興趣的課程​吧～

        <br><br> 首先第一個要介紹的是「youtube篇」
        <br> 第一位想跟大家推薦的是「蔡任圃」，他是生物科的老師，目前擔任北一女中的生物老師，對於生物的講解有趣且詳細易懂，他自己有在經營youtube頻道，把他的各種資源都放在上面供大家使用，是小編很推薦的老師之一！老師也有一個教學網站，裡面也有豐富滿滿的資源喔！

        <br><br> youtube：<a target="_blank" rel="noreferrer noopenner" href="https://www.youtube.com/c/%E8%94%A1%E4%BB%BB%E5%9C%83">蔡任圃</a>
        <br> 教學網頁：<a target="_blank" rel="noreferrer noopenner" href="https://bit.ly/%E8%94%A1%E4%BB%BB%E5%9C%83%E6%95%99%E5%AD%B8%E7%B6%B2%E9%A0%81">蔡任圃教學網頁</a>
        <br> -
        <br> 第二位也同樣是生物科的頻道，叫做「公鴿生物小講堂」，這也是一個生物老師所經營的頻道，這個頻道旨在建立希望能幫助到需要的人，也是一位對生物講解非常清楚的老師！老師也有經營自己的粉絲專頁，提供大家更多詳細的資訊～

        <br><br> youtube：<a target="_blank" rel="noreferrer noopenner" href="https://www.youtube.com/@user-yg3gb3dd2f/about">公鴿生物小講堂</a> 
        <br> 臉書粉專：<a target="_blank" rel="noreferrer noopenner" href="https://www.facebook.com/YungJenKung">公鴿生物小講堂</a> 
        <br> -
        <br> 接下來要介紹給大家的的是物理科的「物理怪客」跟「吳旭明x蔡佳玲-物理學習網」這兩個頻道也都是物理希望讓同學在學校上物理課不懂的地方，可以藉由youtube教學影片來讓同學可以再看一遍把觀念弄懂。這些影片的用意是希望大家能夠真正理解物理課本中的觀念！

        <br><br> youtube：
        <a target="_blank" rel="noreferrer noopenner" href="https://www.youtube.com/@teachphysics/about">物理怪客</a>、
        <a target="_blank" rel="noreferrer noopenner" href="https://www.youtube.com/@phywu/featured">吳旭明x蔡佳玲-物理學習網</a> 
        <br> -
        <br> 再來要推薦給大家的是化學的頻道「東方王」這個頻道把每個章節都分得非常詳細跟清楚，讓人可以快速找到想要的學習的內容，講解得也十分好理解！為化學所苦的大家歡迎來這邊參考學習～

        <br><br> youtube：<a target="_blank" rel="noreferrer noopenner" href="https://www.youtube.com/@user-ee5qw7it6y/featured">東方王</a> 
        <br> -
        <br> 接下來要跟大家介紹的是地科的推薦頻道「吳美琍」，這個頻道的章節分類非常清楚，除此之外還有替大家整理了一些地科學習的讀書技巧跟小筆記，讓所有想自學的人都能更快的上手，對於地科也能有更深入的了解！

        <br><br> youtube：<a target="_blank" rel="noreferrer noopenner" href="https://www.youtube.com/@earth-classroom/playlists">吳美琍</a> 

        <br><br> -
        <br> 最後想跟大家介紹的是數學科的推薦，還在為數學苦惱的你都快來看看吧！今天小編為大家推薦的有兩個頻道，那就是「高中數學免費線上學習網」跟「Q仔高中數學教室」
        <br> 相信大家都有有曾為了數學苦惱的經驗，大家都來看看老師們替大家整理成影片的精華跟重點吧～

        <br><br>「<a target="_blank" rel="noreferrer noopenner" href="https://www.youtube.com/channel/UCWAYML-SZqSIq0M2SGZOJOQ">Q仔高中數學教室</a>」
        <br> 這是國立金門高中Q仔老師為了幫助學生在家自學所創的頻道，目前有99課綱、 103課綱以及108課綱的上課實況，以後的規畫是增加學測的複習內容以及歷屆試題。

        <br><br>「<a target="_blank" rel="noreferrer noopenner" href="https://www.youtube.com/@user-oy5eo4xq4w/featured">高中數學免費線上學習網</a>」  
        <br> 整理了所有範圍的課程影片，還有提供各種練習題目給同學們練習，許多免費的數學教材跟資源給大家使用～

        <br>br   那youtube的自學推薦頻道就到這邊，希望這些整理能對在學習路上迷路的你一些幫助，小編認為不管是對學測前還是學測後的你，甚至是已經要準備上大學的你，這些都是能陪伴大家學習一輩子的東西，希望大家也都能在這理得到自己所需要的資源～

        <br><br> 你們以為這樣就結束了嗎？

        <br><br> 接下來還替大家整理了一些其他<span class="text-myblue font-bold">高中學習</span>相關的平台～
        <br> 第一個是「均一教育平台」，這個網站完全免費使用。並且提供國小到高中，也有對應108課綱素養導向的學科、素養學習資源。內容涵蓋主科、電腦科學、藝術、素養能力
        <br> 而且還有豐富且完全免費的題目資源喔！

        <br><br> 再來是「讓素養飛」，是由清大各研究室以淺顯易懂的方式將研究內容寫成素養題，提早向高中生介紹各科系研究方向及成果的一個平台。
        <br> -
        <br> 接著要跟大家介紹台灣各大學的<span class="text-myblue font-bold">開放式課程</span>啦～

        <br><br> 首先是「台大開放式課程」
        <br> 網站的教材內容除提供社會人士免費上網自我學習外，並提供予國內外學生、教師及相關研究人員作為學習輔助、課程教學及研究題材之參考，以提昇學習效果及研究品質。他們持續製作並提供優質課程，包含各學系極具特色之基礎、專業課程、共同必修課程及通識教育課程。

        <br><br> 第二個是「清大開放式課程」
        <br> 至2021年止，清華大學共計錄製180多餘門課程，課程規劃目前分為工程、自然科學及人文社會三個學群，由基礎學科延伸至專業科目，推出具清華特色典範之課程。清大開放式課程除提供繁體、英文、簡體的回應式網站外，更提供隨堂錄製的全影音視頻課程，還收錄教授與學生的隨堂筆記、各校考古題、學術著作等學習資源，讓學習者更加輕鬆。如此設計不止使清大開放式課程成為學生們學習的最佳幫手！更重要的是，能讓許多無法在現場接受教育的人們有新的學習管道！

        <br><br> 再來是「交大開放式課程」
        <br> 每年開放分享約12~16門校內優質知識資源，包含各院系基礎、專業課程、共同必修課程及通識教育課程，以及15-20場演講，無償地提供自學者更多元豐富的學習管道。
        <br> 開放式課程除代表對傳統教育的反思過程，亦具備著與其他教育理念及作法相輔相成的功能。國立陽明交通大學開放式課程不但開放分享資源，亦讓教育者、學生與自學者得以針對個別的需求與認知型態，作為教學、學習與研究之利用與再利用。

        <br><br> 最後要跟大家介紹其他開放式平台
        <br> TOCEC(各校整合)：
        <br> 臺灣開放式課程暨教育聯盟TOCEC是由國內多所頂尖大學及特色大學所組成之非營利組織，由會員學校聯合提供完全免費之開放式課程，平台使用免註冊、免登入，課程全年無休，24小時開放，大部分影片可下載觀看。學習者只要遵守創用CC授權條款，皆可無償使用，是完全開放的教育資源。

        <br><br> ewant(育網開放教育平台)
        <br> 是由國立陽明交通大學於2013年建立的ewant育網開放教育平臺是臺灣第一個磨課師(massive open online courses, MOOCs)平臺，採用開放源碼的moodle線上教學系統作為平臺的核心，旨在為所有願意投入MOOCs運動的學校及單位提供一個展示及經營課程的平臺，也為所有想要免費利用線上課程的學習者提供方便的學習機會。

        <br><br> 成大開放式課程、中山開放式課程
        <br> 為促進教學資源共享，提供自學者更寬廣的學習內容。而為響應全球開放式教育運動並善盡社會責任、提高能見度，將邀請各學系及區域夥伴學校提供特色之優質課程，建置「開放式課程」網站。其教材內容除提供大家免費自我學習外，並提供予國內外學生、教師作為學習資源，以提昇學習效果。進行開放式課程之學術機構，為整合開放學術資源，決定共同成立「開放式課程聯盟」。交通大學為響應世界開放教育資源運動，於2007年4月加入，成為台灣第一所加入該組織的頂尖學府，透過持續與聯盟成員的互動、分享，拓展國際間校際合作機會。2007年底政治大學、成功大學...等學校亦陸續加入該聯盟。
        <br> -
        <br> 接下來想跟大家介紹的是<span class="text-myblue font-bold">國外的一些開放式課程</span>

        <br><br> 「edx」
        <br> EDX 是一個知名老牌的線上募課平台，如果有時間還滿推薦利用 EDX 平台學習，介面清楚，比較不會莫名其妙訂閱或付款，或是找不到入口修課。學習英文是有幫助，有些內容是以文字的方式呈現，方便自己查閱。因為沒有中文，如果過量學習，可能會有點吃力。

        <br><br> 「Coursera」
        <br> Coursera是由史丹佛大學的計算機科學教授們聯合創建的一個營利性的教育科技公司。他們的理念為：「讓更多人接受高等教育」平台與知名大學、企業合作，推出上千堂不同的課程，包含專業證書課程、大學學位課程、其他類型課程。

        <br><br> 最受一些大家很關注的程式語言類的自學網站整理：

        <br><br> 「Code academy」
        <br> Codeacademy主打做中學，在學習的過程中，主要教學文章在左，編譯器在中，顯示成果在左，這樣的編排讓人覺得十分舒適，也能更方便地寫程式，不再需要頻繁地切換頁面觀看結果，文章的字體清晰也算是好理解的。

        <br><br> 「DataCamp」
        <br> DataCamp是一個互動性的MOOC網站，影片類的講解偏少，更多的是文字直接指導你進入實戰專案。同時DataCamp也是我最推薦的數據科學入門網站，從Python與R的基礎講解到數據處理流程，從機器學習到深度學習，它都有涉及。如果沒有時間嘗試不同的MOOC，建議認真看完它的一個Career Track就能收穫良多了。

        <br><br> 以上這些自學頻道跟平台都僅是推薦的冰山一角喔～還有更多平台都等待你們的發掘探索！希望大家在這個資訊大爆炸的時代，能夠更加善用網路上的資訊跟資源來做多元學習的發展，更加充實自己，並讓自己成為一個多技能的人吧～
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

<style scoped>
a {
  transition: color 0.5s ease, box-shadow 0.5s ease;
  -o-transition: color 0.5s ease, box-shadow 0.5s ease;
  -moz-transition: color 0.5s ease, box-shadow 0.5s ease;
  -webkit-transition: color 0.5s ease, box-shadow 0.5s ease;
  text-decoration: underline;
  text-underline-offset: 5px;
  text-decoration-color: #0ea5e9;
}

a:hover {
  color: #fff;
  box-shadow: inset 0 -50px 0 0 #0ea5e9;
}
</style>