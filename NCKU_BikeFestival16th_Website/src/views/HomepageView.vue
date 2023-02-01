<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import roundedBtn from "../components/RoundButton.vue";
import irregularButton from "../components/irregularButton.vue";
import homepage_dialogBox from "../components/homepage_dialogBox.vue";
import homepage_lineHeader from "../components/homepage_lineHeader.vue";
import homepage_themeActivity from "../components/homepage_themeActivity.vue";
import homepage_backgroundSlider from "../components/homepage_backgroundSlider.vue";
import homepage_totalMemberSlider from "../components/homepage_totalMemberSlider.vue";
const selectedMember = [
  {
    memberPic: "src/assets/teamMember/姜昕.png",
    memberPicWebp: "src/assets/teamMember/姜昕.webp",
    memberName: "姜昕",
    memberTitle: "總籌",
    memberGrade: "療癒系 112 級",
    memberSaid:
      "弭平高中端與大學端的資訊落差，在升學道路上，有成大單車節的陪伴！",
  },
  {
    memberPic: "src/assets/teamMember/劉子綾.png",
    memberPicWebp: "src/assets/teamMember/劉子綾.webp",
    memberName: "劉子綾",
    memberTitle: "總籌",
    memberGrade: "外文114",
    memberSaid: "人生的意義即在尋找意義的過程，而正是迷惘推著每個人向前。",
  },
  {
    memberPic: "src/assets/teamMember/許哲斐.png",
    memberPicWebp: "src/assets/teamMember/許哲斐.webp",
    memberName: "許哲斐",
    memberTitle: "秘書部",
    memberGrade: "航太113",
    memberSaid: "保持熱忱的方法，不是做你喜歡的事，而是喜歡你做的事。",
  },
  {
    memberPic: "src/assets/teamMember/張鈺昕.png",
    memberPicWebp: "src/assets/teamMember/張鈺昕.webp",
    memberName: "張鈺昕",
    memberTitle: "秘書部",
    memberGrade: "政治114",
    memberSaid: "永遠不要害怕失敗，「成功」的意義，由你來定義。",
  },
  {
    memberPic: "src/assets/teamMember/陳加羲.png",
    memberPicWebp: "src/assets/teamMember/陳加羲.webp",
    memberName: "陳加羲",
    memberTitle: "行銷部",
    memberGrade: "材料114",
    memberSaid: "擁有將腦中想法實踐的機會是一件很美好的事",
  },
  {
    memberPic: "src/assets/teamMember/廖珺安.png",
    memberPicWebp: "src/assets/teamMember/廖珺安.webp",
    memberName: "廖珺安",
    memberTitle: "行銷部",
    memberGrade: "台文114",
    memberSaid: "既然給自己足夠多的時間猶豫，奔跑的時候就不要東張西望！素履之往、心無旁騖。",
  },
  {
    memberPic: "src/assets/teamMember/陳冠儒.png",
    memberPicWebp: "src/assets/teamMember/陳冠儒.webp",
    memberName: "陳冠儒",
    memberTitle: "公關部",
    memberGrade: "機械114",
    memberSaid: "你沒辦法讓所有人喜歡自己 但你永遠應該愛著自己",
  },
  {
    memberPic: "src/assets/teamMember/蔡依璇.png",
    memberPicWebp: "src/assets/teamMember/蔡依璇.webp",
    memberName: "蔡依璇",
    memberTitle: "公關部",
    memberGrade: "護理114",
    memberSaid: "不要想太多，大膽去做不要怕！",
  },
  {
    memberPic: "src/assets/teamMember/許芷綾.png",
    memberPicWebp: "src/assets/teamMember/許芷綾.webp",
    memberName: "許芷綾",
    memberTitle: "學術部",
    memberGrade: "外文114",
    memberSaid: "在選擇科系的道路上，不免遇到許多迷惘徬徨的時刻，希望成大單車節能指引你，讓你也成為閃亮的一顆星星✨",
  },
  {
    memberPic: "src/assets/teamMember/劉世瑜.png",
    memberPicWebp: "src/assets/teamMember/劉世瑜.webp",
    memberName: "劉世瑜",
    memberTitle: "學術部",
    memberGrade: "外文114",
    memberSaid: "如果對過去感到迷惘，對未來又充滿不安，那就把握當下的每分每秒吧！",
  },
  {
    memberPic: "src/assets/teamMember/謝昀璋.png",
    memberPicWebp: "src/assets/teamMember/謝昀璋.webp",
    memberName: "謝昀璋",
    memberTitle: "學術部",
    memberGrade: "醫學116",
    memberSaid: "面對未知的將來，我們做你的引路人，一起勾勒屬於自己的青春模樣！",
  },
  {
    memberPic: "src/assets/teamMember/佘紀伸.png",
    memberPicWebp: "src/assets/teamMember/佘紀伸.webp",
    memberName: "佘紀伸",
    memberTitle: "設計部",
    memberGrade: "土木113",
    memberSaid: "學生時代的我們難免會對未來會感到徬徨，擇你所愛、愛你所擇都好",
  },
  {
    memberPic: "src/assets/teamMember/邱于芸.png",
    memberPicWebp: "src/assets/teamMember/邱于芸.webp",
    memberName: "邱于芸",
    memberTitle: "設計部",
    memberGrade: "建築114",
    memberSaid:
      "我們都走在一個沒有縱軸的平面空間，沒有誰先誰後，只有誰先跨出一步",
  },
  {
    memberPic: "src/assets/teamMember/黃鈺婷.png",
    memberPicWebp: "src/assets/teamMember/黃鈺婷.webp",
    memberName: "黃鈺婷",
    memberTitle: "設計部",
    memberGrade: "交管113",
    memberSaid: "深夜一點半的燈光依舊閃爍，凌晨四點的鬧鐘也不只你一個。",
  },
  {
    memberPic: "src/assets/teamMember/呂秉宸.png",
    memberPicWebp: "src/assets/teamMember/呂秉宸.webp",
    memberName: "呂秉宸",
    memberTitle: "影紀部",
    memberGrade: "水利114",
    memberSaid: "拿著相機，穿梭在校園中，一次次地按下快門，記錄下此刻的快樂。",
  },
  {
    memberPic: "src/assets/teamMember/徐子菱.png",
    memberPicWebp: "src/assets/teamMember/徐子菱.webp",
    memberName: "徐子菱",
    memberTitle: "影紀部",
    memberGrade: "不分114",
    memberSaid: "把握時間，用相機記錄每個瞬間。",
  },
  {
    memberPic: "src/assets/teamMember/林子瑜.png",
    memberPicWebp: "src/assets/teamMember/林子瑜.webp",
    memberName: "林子瑜",
    memberTitle: "策展部",
    memberGrade: "交管113",
    memberSaid: "不管是高中還是大學，將所有的經驗和觀察以最動人的形式展出。",
  },
  {
    memberPic: "src/assets/teamMember/簡以恆.png",
    memberPicWebp: "src/assets/teamMember/簡以恆.webp",
    memberName: "簡以恆",
    memberTitle: "策展部",
    memberGrade: "經濟113",
    memberSaid:
      "策展，Curate，即篩選並照顧藝術品或展品，以構成收藏或展覽。整個成大展場對我來說就是細心呵護藝術品以呈現給大家。",
  },
];
const dialogBoxContent = "猶記得高三那年，一出學測考場，人生頓失方向。該讀哪間學校、報什麼學系？此起彼落的疑問，成了每個考生心中的困擾，也迴盪在每次與父母、導師的談話間。不管閱覽了多少網路資料，你仍然躊躇不前，甚至更加心焦。<br><strong>—— 這樣的選擇是對的嗎？去了那裡會不會後悔？</strong><br><br>已然進入所屬科系的我們，知道這樣的輪迴仍然不斷上演。所以我們自問，該如何消弭高中生們內心的不安。<span class='text-myblue'><strong>曾經籠罩我們的迷惘，就由我們來驅散。這份理念，就是單車節的初心。</strong></span>"
const SouvenirContent = ""
</script>

<template>
  <div class="flex flex-col">
    <Navbar />
    <div class="flex flex-col w-screen aspect-video bg-black">
      <div class="basis-[80%]">
        <homepage_backgroundSlider />
      </div>
      <div class="basis-[20%] self-center">
        <RouterLink to="/Registration/Linktree">
          <irregularButton btnTitle="即刻報名" />
        </RouterLink>
      </div>
    </div>

    <div
      class="flex flex-row justify-center items-center w-screen h-[1100px] overflow-hidden"
    >
      <homepage_dialogBox dialogTitle="單車節緣起" styleAdd="mx-12" :article="dialogBoxContent" />
    </div>

    <div
      class="flex flex-col justify-center items-center mb-10 p-0 w-screen"
    >
      <div class="h-[130px]">
        <homepage_lineHeader headerTitle="四大主題活動" />
      </div>
      <div
        class="flex flex-wrap justify-center items-center w-screen"
      >
        <homepage_themeActivity />
      </div>
      <div class="h-[150px] pt-12">
        <RouterLink to="/Introduction">
          <roundedBtn BtnTitle="More" />
        </RouterLink>
      </div>
    </div>

    <div
      class="flex flex-col justify-center items-center m-0 p-0 w-screen h-[1100px] overflow-hidden"
    >
      <div class="flex justify-center items-center w-full">
        <homepage_dialogBox dialogTitle="紀念品" :article="SouvenirContent" >
          <img src="../assets/comingSoonWithBg.png" alt="" />
        </homepage_dialogBox>
      </div>
      <div class="h-[150px] pt-12">
        <roundedBtn BtnTitle="More" />
      </div>
    </div>

    <div class="m-0 p-0 w-screen h-[1000px]">
      <div class="h-[25%] flex justify-center items-end pb-16">
        <homepage_lineHeader headerTitle="籌備團隊" />
      </div>
      <div class="h-[75%] relative">
        <homepage_totalMemberSlider :members="selectedMember" />
      </div>
    </div>

    <Footer />
  </div>
</template>
