<script setup>
import { ref } from 'vue';
// import { useMemberStore } from '../stores/memberInfo.js'
// const store = useMemberStore();
const scrollLeft = () => {
  var scrollTo = document.getElementById('scrollTo');
  scrollTo.scrollBy({
    left: -250,
    behavior: 'smooth'
  });
}
const scrollRight = () => {
  var scrollTo = document.getElementById('scrollTo');
  scrollTo.scrollBy({
    left: 250,
    behavior: 'smooth'
  });
} 
</script>

<template>
  <div 
    class="absolute z-10 left-8 top-32 w-[250px] transition duration-200 
      hover:-translate-x-3 hover:cursor-pointer active:opacity-50 active:scale-75 max-sm:hidden"
    @click="scrollLeft"
  >
    <img src="../assets/arrow_left.svg" alt="leftArrow">   
  </div>

  <div class="absolute z-0 inset-x-0 mx-auto bg-neutral-100
    w-[80%] h-[580px] max-sm:w-screen max-sm:h-[410px]"
  >
    <div 
      id="scrollTo"
      class="snap-x snap-mandatory overflow-hidden 
        flex flex-row gap-8 mx-12 items-center h-full
        max-sm:touch-pan-x max-sm:overflow-auto max-sm:mx-4"
    >

      <div class="memberInfo">
        <picture>
          <source class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" srcset="../assets/teamMember/member1.webp" type="image/webp">
          <img class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" src="../assets/teamMember/member1.png" alt="member">
        </picture>
        <span class="mt-4 text-2xl font-bold max-md:mt-2 max-md:text-xl">姜昕</span>
        <span class="fontSize mt-2 text-center">總籌</span>
        <span class="fontSize">企管114</span>
        <span class="fontSize mt-1 text-center">弭平高中端與大學端的資訊落差，在升學道路上，有成大單車節的陪伴！</span>
      </div>
      <div class="memberInfo">
        <picture>
          <source class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" srcset="../assets/teamMember/member2.webp" type="image/webp">
          <img class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" src="../assets/teamMember/member2.png" alt="member">
        </picture>
        <span class="mt-4 text-2xl font-bold max-md:mt-2 max-md:text-xl">劉子綾</span>
        <span class="fontSize mt-2 text-center">總籌</span>
        <span class="fontSize">外文114</span>
        <span class="fontSize mt-1 text-center">人生的意義即在尋找意義的過程，而正是迷惘推著每個人向前。</span>
      </div>
      <div class="memberInfo">
        <picture>
          <source class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" srcset="../assets/teamMember/member3.webp" type="image/webp">
          <img class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" src="../assets/teamMember/member3.png" alt="member">
        </picture>
        <span class="mt-4 text-2xl font-bold max-md:mt-2 max-md:text-xl">許哲斐</span>
        <span class="fontSize mt-2 text-center">秘書部</span>
        <span class="fontSize">航太113</span>
        <span class="fontSize mt-1 text-center">保持熱忱的方法，不是做你喜歡的事，而是喜歡你做的事。</span>
      </div>
      <div class="memberInfo">
        <picture>
          <source class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" srcset="../assets/teamMember/member4.webp" type="image/webp">
          <img class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" src="../assets/teamMember/member4.png" alt="member">
        </picture>
        <span class="mt-4 text-2xl font-bold max-md:mt-2 max-md:text-xl">張鈺欣</span>
        <span class="fontSize mt-2 text-center">秘書部</span>
        <span class="fontSize">政治114</span>
        <span class="fontSize mt-1 text-center">永遠不要害怕失敗，「成功」的意義，由你來定義。</span>
      </div>
      <div class="memberInfo">
        <picture>
          <source class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" srcset="../assets/teamMember/member5.webp" type="image/webp">
          <img class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" src="../assets/teamMember/member5.png" alt="member">
        </picture>
        <span class="mt-4 text-2xl font-bold max-md:mt-2 max-md:text-xl">陳加羲</span>
        <span class="fontSize mt-2 text-center">行銷部</span>
        <span class="fontSize">材料114</span>
        <span class="fontSize mt-1 text-center">擁有將腦中想法實踐的機會是一件很美好的事</span>
      </div>
      <div class="memberInfo">
        <picture>
          <source class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" srcset="../assets/teamMember/member6.webp" type="image/webp">
          <img class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" src="../assets/teamMember/member6.png" alt="member">
        </picture>
        <span class="mt-4 text-2xl font-bold max-md:mt-2 max-md:text-xl">廖珺安</span>
        <span class="fontSize mt-2 text-center">行銷部</span>
        <span class="fontSize">台文114</span>
        <span class="fontSize mt-1 text-center">既然給自己足夠多的時間猶豫，奔跑的時候就不要東張西望！素履之往、心無旁騖。</span>
      </div>
      <div class="memberInfo">
        <picture>
          <source class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" srcset="../assets/teamMember/member7.webp" type="image/webp">
          <img class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" src="../assets/teamMember/member7.png" alt="member">
        </picture>
        <span class="mt-4 text-2xl font-bold max-md:mt-2 max-md:text-xl">陳冠儒</span>
        <span class="fontSize mt-2 text-center">公關部</span>
        <span class="fontSize">機械114</span>
        <span class="fontSize mt-1 text-center">你沒辦法讓所有人喜歡自己，但你永遠應該愛著自己</span>
      </div>
      <div class="memberInfo">
        <picture>
          <source class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" srcset="../assets/teamMember/member8.webp" type="image/webp">
          <img class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" src="../assets/teamMember/member8.png" alt="member">
        </picture>
        <span class="mt-4 text-2xl font-bold max-md:mt-2 max-md:text-xl">蔡依璇</span>
        <span class="fontSize mt-2 text-center">公關部</span>
        <span class="fontSize">護理114</span>
        <span class="fontSize mt-1 text-center">不要想太多，大膽去做不要怕！</span>
      </div>
      <div class="memberInfo">
        <picture>
          <source class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" srcset="../assets/teamMember/member9.webp" type="image/webp">
          <img class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" src="../assets/teamMember/member9.png" alt="member">
        </picture>
        <span class="mt-4 text-2xl font-bold max-md:mt-2 max-md:text-xl">許芷綾</span>
        <span class="fontSize mt-2 text-center">學術部</span>
        <span class="fontSize">外文114</span>
        <span class="fontSize mt-1 text-center">在選擇科系的道路上，不免遇到許多迷惘徬徨的時刻，希望成大單車節能指引你，讓你也成為閃亮的一顆星星✨</span>
      </div>
      <div class="memberInfo">
        <picture>
          <source class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" srcset="../assets/teamMember/member10.webp" type="image/webp">
          <img class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" src="../assets/teamMember/member10.png" alt="member">
        </picture>
        <span class="mt-4 text-2xl font-bold max-md:mt-2 max-md:text-xl">劉世瑜</span>
        <span class="fontSize mt-2 text-center">學術部</span>
        <span class="fontSize">外文114</span>
        <span class="fontSize mt-1 text-center">如果對過去感到迷惘，對未來又充滿不安，那就把握當下的每分每秒吧！</span>
      </div>
      <div class="memberInfo">
        <picture>
          <source class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" srcset="../assets/teamMember/member11.webp" type="image/webp">
          <img class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" src="../assets/teamMember/member11.png" alt="member">
        </picture>
        <span class="mt-4 text-2xl font-bold max-md:mt-2 max-md:text-xl">謝昀璋</span>
        <span class="fontSize mt-2 text-center">學術部</span>
        <span class="fontSize">醫學116</span>
        <span class="fontSize mt-1 text-center">面對未知的將來，我們做你的引路人，一起勾勒屬於自己的青春模樣！</span>
      </div>
      <div class="memberInfo">
        <picture>
          <source class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" srcset="../assets/teamMember/member12.webp" type="image/webp">
          <img class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" src="../assets/teamMember/member12.png" alt="member">
        </picture>
        <span class="mt-4 text-2xl font-bold max-md:mt-2 max-md:text-xl">佘紀伸</span>
        <span class="fontSize mt-2 text-center">設計部</span>
        <span class="fontSize">土木113</span>
        <span class="fontSize mt-1 text-center">學生時代的我們難免會對未來會感到徬徨，擇你所愛、愛你所擇都好</span>
      </div>
      <div class="memberInfo">
        <picture>
          <source class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" srcset="../assets/teamMember/member13.webp" type="image/webp">
          <img class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" src="../assets/teamMember/member13.png" alt="member">
        </picture>
        <span class="mt-4 text-2xl font-bold max-md:mt-2 max-md:text-xl">邱于芸</span>
        <span class="fontSize mt-2 text-center">設計部</span>
        <span class="fontSize">建築114</span>
        <span class="fontSize mt-1 text-center">我們都走在一個沒有縱軸的平面空間，沒有誰先誰後，只有誰先跨出一步</span>
      </div>
      <div class="memberInfo">
        <picture>
          <source class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" srcset="../assets/teamMember/member14.webp" type="image/webp">
          <img class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" src="../assets/teamMember/member14.png" alt="member">
        </picture>
        <span class="mt-4 text-2xl font-bold max-md:mt-2 max-md:text-xl">黃鈺婷</span>
        <span class="fontSize mt-2 text-center">設計部</span>
        <span class="fontSize">交管113</span>
        <span class="fontSize mt-1 text-center">深夜一點半的燈光依舊閃爍，凌晨四點的鬧鐘也不只你一個。</span>
      </div>
      <div class="memberInfo">
        <picture>
          <source class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" srcset="../assets/teamMember/member15.webp" type="image/webp">
          <img class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" src="../assets/teamMember/member15.png" alt="member">
        </picture>
        <span class="mt-4 text-2xl font-bold max-md:mt-2 max-md:text-xl">呂秉宸</span>
        <span class="fontSize mt-2 text-center">影紀部</span>
        <span class="fontSize">水利114</span>
        <span class="fontSize mt-1 text-center">拿著相機，穿梭在校園中，一次次地按下快門，記錄下此刻的快樂。</span>
      </div>
      <div class="memberInfo">
        <picture>
          <source class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" srcset="../assets/teamMember/member16.webp" type="image/webp">
          <img class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" src="../assets/teamMember/member16.png" alt="member">
        </picture>
        <span class="mt-4 text-2xl font-bold max-md:mt-2 max-md:text-xl">徐子菱</span>
        <span class="fontSize mt-2 text-center">影紀部</span>
        <span class="fontSize">不分114</span>
        <span class="fontSize mt-1 text-center">把握時間，用相機記錄每個瞬間。</span>
      </div>
      <div class="memberInfo">
        <picture>
          <source class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" srcset="../assets/teamMember/member17.webp" type="image/webp">
          <img class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" src="../assets/teamMember/member17.png" alt="member">
        </picture>
        <span class="mt-4 text-2xl font-bold max-md:mt-2 max-md:text-xl">林子瑜</span>
        <span class="fontSize mt-2 text-center">策展部</span>
        <span class="fontSize">交管113</span>
        <span class="fontSize mt-1 text-center">不管是高中還是大學，將所有的經驗和觀察以最動人的形式展出。</span>
      </div>
      <div class="memberInfo">
        <picture>
          <source class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" srcset="../assets/teamMember/member18.webp" type="image/webp">
          <img class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" src="../assets/teamMember/member18.png" alt="member">
        </picture>
        <span class="mt-4 text-2xl font-bold max-md:mt-2 max-md:text-xl">簡以恆</span>
        <span class="fontSize mt-2 text-center">策展部</span>
        <span class="fontSize">經濟113</span>
        <span class="fontSize mt-1 text-center">策展，Curate，即篩選並照顧藝術品或展品，以構成收藏或展覽。整個成大展場對我來說就是細心呵護藝術品以呈現給大家。</span>
      </div>


    </div>
  </div>

  <div 
    class="absolute z-10 right-8 top-32 w-[250px] transition duration-200 
      hover:translate-x-3 hover:cursor-pointer active:opacity-50 active:scale-75 max-sm:hidden"
    @click="scrollRight"
  >
    <img src="../assets/arrow_right.svg" alt="rightArrow">
  </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .memberInfo {
    @apply snap-center flex flex-col flex-none 
      items-center bg-white shadow-lg w-[330px] h-[87.5%] p-3
      max-sm:w-[200px] max-sm:p-1;
  }
}
.fontSize {
  font-size: 21px;
}
@media (max-width: 640px) {
  .fontSize {
    font-size: 14px;
  }
}
</style>