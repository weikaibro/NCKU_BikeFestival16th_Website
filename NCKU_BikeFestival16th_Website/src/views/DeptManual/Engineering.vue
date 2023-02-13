<script setup>
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import Navbar from '../../components/Navbar.vue';
import Footer from '../../components/Footer.vue';
import AeronauticsandAstronautics from './EngineeringManual/AeronauticsandAstronautics.vue';
import BiomedicalEngineering from './EngineeringManual/BiomedicalEngineering.vue';
import ChemicalEngineering from './EngineeringManual/ChemicalEngineering.vue';
import CivilEngineering from './EngineeringManual/CivilEngineering.vue';
import EnergyEngineering from './EngineeringManual/EnergyEngineering.vue';
import EngineeringScience from './EngineeringManual/EngineeringScience.vue';
import EnvironmentalEngineering from './EngineeringManual/EnvironmentalEngineering.vue';
import Geomatics from './EngineeringManual/Geomatics.vue';
import HydraulicandOceanEngineering from './EngineeringManual/HydraulicandOceanEngineering.vue';
import MaterialsScienceandEngineering from './EngineeringManual/MaterialsScienceandEngineering.vue';
import MechanicalEngineering from './EngineeringManual/MechanicalEngineering.vue';
import ResourcesEngineering from './EngineeringManual/ResourcesEngineering.vue';
import SystemandNavalMechatronicEngineering from './EngineeringManual/SystemandNavalMechatronicEngineering.vue';
const chosenDept = ref([
  "航太系", "醫工系", "化工系", "土木系",
  "能源系", "工程科學系", "環境工程系", "測量系", 
  "水利系", "材料系", "機械系", "資源系", "系統系"
])
const userChosenNum = ref(0)
const userChosen = (index) => {
  userChosenNum.value = index;
  showDept.value = !showDept.value;
  // console.log(index)
}
const showContent = computed(() => {
  switch (userChosenNum.value) {
    case 0: return AeronauticsandAstronautics;
    case 1: return BiomedicalEngineering;
    case 2: return ChemicalEngineering;
    case 3: return CivilEngineering;
    case 4: return EnergyEngineering;
    case 5: return EngineeringScience;
    case 6: return EnvironmentalEngineering;
    case 7: return Geomatics;
    case 8: return HydraulicandOceanEngineering;
    case 9: return MaterialsScienceandEngineering;
    case 10: return MechanicalEngineering;
    case 11: return ResourcesEngineering;
    case 12: return SystemandNavalMechatronicEngineering;
    default: break;
  }
});
const showDept = ref(false)
const show = () => {
  showDept.value = !showDept.value;
};
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
  <div>
    <Navbar />
    <div class="flex mx-12 h-[1300px] max-xl:mx-0 max-xl:flex-col max-xl:h-[1500px] max-sm:h-[1100px]">
      <!-- selected dept -->
      <div class="relative flex flex-col mr-20 mt-20 w-[500px] bg-black text-white text-center max-xl:mt-0 max-xl:w-screen xl:h-[1000px]">
        <!-- RWD -->
        <div @click="show" class="absolute bg-black w-screen h-[50px] text-2xl font-bold xl:hidden">工學院</div>
        <img class="absolute top-8 inset-x-0 mx-auto w-[15px] xl:hidden" src="../../assets/downArrow.svg" alt="downArrow">
        <ul v-if="showDept" class="absolute bg-black w-screen top-12 xl:hidden">
          <li 
            v-for="(chosen, index) in chosenDept"
            :key="index"
            class="transition duration-100 ease-linear py-4 text-xl bg-black hover:cursor-pointer hover:scale-110"
            :class="{ changeBg: index === userChosenNum }"
            @click="userChosen(index)"
          >
          {{ chosen }}
          </li>
        </ul>
        <!-- <RouterLink class="absolute" to="/DeptManual">
          <div class="text-3xl mt-6 mb-10 font-bold xl:hidden" v-if="showDept">
            回前頁
          </div>
        </RouterLink> -->
        <!-- Laptop -->
        <div class="text-3xl mt-10 mb-6 font-bold max-xl:hidden">工學院</div>
        <ul class="max-xl:hidden">
          <li 
            v-for="(chosen, index) in chosenDept"
            :key="index"
            class="transition duration-100 ease-linear py-4 text-xl bg-black hover:cursor-pointer hover:scale-110"
            :class="{ changeBg: index === userChosenNum }"
            @click="userChosen(index)"
          >
          {{ chosen }}
          </li>
        </ul>
        <RouterLink to="/DeptManual">
          <div class="text-3xl mt-6 mb-10 font-bold max-xl:hidden">
            回前頁
          </div>
        </RouterLink>
      </div>

      <!-- pdf -->
      <Transition mode="out-in" class="w-full h-[950px] pl-20 mt-20 border-l-2 border-black max-2xl:pl-0 max-xl:border-l-0 max-sm:mt-15">
        <component :is="showContent" />
      </Transition>
    </div>

    <div class="relative mt-16 p-0 w-screen h-[800px]">
      <div class="flex justify-center items-center text-black text-3xl mb-16 font-bold">學長姐經驗分享</div>

      <div 
        class="absolute z-10 left-8 top-60 w-[250px] transition duration-200 
          hover:-translate-x-3 hover:cursor-pointer active:opacity-50 active:scale-75 max-sm:hidden"
        @click="scrollLeft"
      >
        <img src="../../assets/arrow_left.svg" alt="leftArrow">   
      </div>

      <div class="absolute z-0 inset-x-0 mx-auto bg-neutral-100
        w-[75%] h-[580px] max-sm:w-screen max-sm:h-[460px]"
      >
        <div 
          id="scrollTo"
          class="snap-x snap-mandatory overflow-hidden 
            flex flex-row gap-8 mx-12 items-center h-full
            max-sm:touch-pan-x max-sm:overflow-auto max-sm:mx-4"
        >

          <RouterLink to="/DeptManual/Engineering/member1">
            <div class="memberInfo">
              <!-- <picture> -->
                <!-- <source class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" srcset="" type="image/webp"> -->
                <img class="rounded-full w-[80%] max-h-[244px] object-cover mx-auto mt-5 max-sm:max-h-[180px]" src="../../assets/DeptManual/Engineering/Engineering1.jpg" alt="member">
              <!-- </picture> -->
              <span class="mt-10 text-3xl font-bold max-md:mt-6">劉庭伊</span>
              <span class="fontSize mt-3 text-center">生物醫學工程學系 114</span>
              <span class="fontSize mt-2 text-center">#活潑愛笑的醫工女孩</span>
            </div>
          </RouterLink>
          <RouterLink to="/DeptManual/Engineering/member2">
            <div class="memberInfo">
              <!-- <picture> -->
                <!-- <source class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" srcset="" type="image/webp"> -->
                <img class="rounded-full w-[80%] mx-auto mt-5" src="../../assets/DeptManual/Engineering/Engineering2.png" alt="member">
              <!-- </picture> -->
              <span class="mt-10 text-3xl font-bold max-md:mt-6">蕭友哲</span>
              <span class="fontSize mt-3 text-center">環境工程學系 114</span>
              <span class="fontSize mt-2 text-center">#大學成績不是重點，重點是要學會怎麼跟別人不一樣</span>
            </div>
          </RouterLink>
          <RouterLink to="/DeptManual/Engineering/member3">
            <div class="memberInfo">
              <!-- <picture> -->
                <!-- <source class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" srcset="" type="image/webp"> -->
                <img class="rounded-full w-[80%] mx-auto mt-5" src="../../assets/DeptManual/Engineering/Engineering3.png" alt="member">
              <!-- </picture> -->
              <span class="mt-10 text-3xl font-bold max-md:mt-6">張祐銘</span>
              <span class="fontSize mt-3 text-center">機械工程學系 114</span>
              <span class="fontSize mt-2 text-center">#成功高中直生人</span>
            </div>
          </RouterLink>
          <RouterLink to="/DeptManual/Engineering/member4">
            <div class="memberInfo">
              <!-- <picture> -->
                <!-- <source class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" srcset="" type="image/webp"> -->
                <img class="rounded-full w-[80%] min-h-[244px] object-cover mx-auto mt-5 max-sm:min-h-[180px]" src="../../assets/DeptManual/Engineering/Engineering4.png" alt="member">
              <!-- </picture> -->
              <span class="mt-10 text-3xl font-bold max-md:mt-6">吳李函</span>
              <span class="fontSize mt-3 text-center">資源工程學系 113</span>
              <span class="fontSize mt-2 text-center">#挖石油，發大財</span>
            </div>
          </RouterLink>
          <RouterLink to="/DeptManual/Engineering/member5">
            <div class="memberInfo">
              <!-- <picture> -->
                <!-- <source class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" srcset="" type="image/webp"> -->
                <img class="rounded-full w-[80%] max-h-[244px] object-cover mx-auto mt-5 max-sm:max-h-[180px]" src="../../assets/DeptManual/Engineering/Engineering5.jpg" alt="member">
              <!-- </picture> -->
              <span class="mt-10 text-3xl font-bold max-md:mt-6">郭守珀</span>
              <span class="fontSize mt-3 text-center">測量及空間資訊學系 113</span>
              <span class="fontSize mt-2 text-center">#不務正業的大學生</span>
            </div>
          </RouterLink>
          <RouterLink to="/DeptManual/Engineering/member6">
            <div class="memberInfo">
              <!-- <picture> -->
                <!-- <source class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" srcset="" type="image/webp"> -->
                <img class="rounded-full w-[80%] mx-auto mt-5" src="../../assets/DeptManual/Engineering/Engineering6.png" alt="member">
              <!-- </picture> -->
              <span class="mt-10 text-3xl font-bold max-md:mt-6">陳俊安</span>
              <span class="fontSize mt-3 text-center">航空太空工程學系 114</span>
              <span class="fontSize mt-2 text-center">#臺南在地排球少年</span>
            </div>
          </RouterLink>
          <RouterLink to="/DeptManual/Engineering/member7">
            <div class="memberInfo">
              <!-- <picture> -->
                <!-- <source class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" srcset="" type="image/webp"> -->
                <img class="rounded-full w-[80%] mx-auto mt-5" src="../../assets/DeptManual/Engineering/Engineering7.png" alt="member">
              <!-- </picture> -->
              <span class="mt-10 text-3xl font-bold max-md:mt-6">陳胤融</span>
              <span class="fontSize mt-3 text-center">系統及船舶機電工程學系 114</span>
              <span class="fontSize mt-2 text-center">#向錢看齊，興趣不能當飯吃</span>
            </div>
          </RouterLink>
          <RouterLink to="/DeptManual/Engineering/member8">
            <div class="memberInfo">
              <!-- <picture> -->
                <!-- <source class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" srcset="" type="image/webp"> -->
                <img class="rounded-full w-[80%] min-h-[244px] object-cover mx-auto mt-5 max-sm:min-h-[180px]" src="../../assets/DeptManual/Engineering/Engineering8.png" alt="member">
              <!-- </picture> -->
              <span class="mt-10 text-3xl font-bold max-md:mt-6">林鉅騰</span>
              <span class="fontSize mt-3 text-center">材料科學與工程學系 113</span>
              <span class="fontSize mt-2 text-center">#既然選擇了，那就盡力吧！</span>
            </div>
          </RouterLink>
          <RouterLink to="/DeptManual/Engineering/member9">
            <div class="memberInfo">
              <!-- <picture> -->
                <!-- <source class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" srcset="" type="image/webp"> -->
                <img class="rounded-full w-[80%] mx-auto mt-5" src="../../assets/DeptManual/Engineering/Engineering9.jpg" alt="member">
              <!-- </picture> -->
              <span class="mt-10 text-3xl font-bold max-md:mt-6">郭政儒</span>
              <span class="fontSize mt-3 text-center">水利及海洋工程學系 114</span>
              <span class="fontSize mt-2 text-center">#水研營推推</span>
            </div>
          </RouterLink>
          <RouterLink to="/DeptManual/Engineering/member10">
            <div class="memberInfo">
              <!-- <picture> -->
                <!-- <source class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" srcset="" type="image/webp"> -->
                <img class="rounded-full w-[80%] max-h-[244px] object-cover mx-auto mt-5 max-sm:max-h-[180px]" src="../../assets/DeptManual/Engineering/Engineering10.png" alt="member">
              <!-- </picture> -->
              <span class="mt-10 text-3xl font-bold max-md:mt-6">許舜傑</span>
              <span class="fontSize mt-3 text-center">化學工程學系 113</span>
              <span class="fontSize mt-2 text-center">#對科學保有了解的慾望</span>
            </div>
          </RouterLink>
          <RouterLink to="/DeptManual/Engineering/member11">
            <div class="memberInfo">
              <!-- <picture> -->
                <!-- <source class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" srcset="" type="image/webp"> -->
                <img class="rounded-full w-[80%] mx-auto mt-5" src="../../assets/DeptManual/Engineering/Engineering11.png" alt="member">
              <!-- </picture> -->
              <span class="mt-10 text-3xl font-bold max-md:mt-6">張博盛</span>
              <span class="fontSize mt-3 text-center">工程科學系 114</span>
              <span class="fontSize mt-2 text-center">#辣個活動家教轉系兼顧的男人</span>
            </div>
          </RouterLink>
          <RouterLink to="/DeptManual/Engineering/member12">
            <div class="memberInfo">
              <!-- <picture> -->
                <!-- <source class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" srcset="" type="image/webp"> -->
                <img class="rounded-full w-[80%] mx-auto mt-5" src="../../assets/DeptManual/Engineering/Engineering12.jpg" alt="member">
              <!-- </picture> -->
              <span class="mt-10 text-3xl font-bold max-md:mt-6">張喬霖</span>
              <span class="fontSize mt-3 text-center">土木工程學系 113</span>
              <span class="fontSize mt-2 text-center">#讀土木不用被關啦</span>
            </div>
          </RouterLink>
          <RouterLink to="/DeptManual/Engineering/member13">
            <div class="memberInfo">
              <!-- <picture> -->
                <!-- <source class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" srcset="" type="image/webp"> -->
                <img class="rounded-full w-[80%] mx-auto mt-5" src="../../assets/DeptManual/Engineering/Engineering13.jpg" alt="member">
              <!-- </picture> -->
              <span class="mt-10 text-3xl font-bold max-md:mt-6">殷子樵</span>
              <span class="fontSize mt-3 text-center">能源工程國際學士學位學程 114</span>
              <span class="fontSize mt-2 text-center">#能源只有一半台灣人</span>
            </div>
          </RouterLink>

        </div>
      </div>

      <div 
        class="absolute z-10 right-8 top-60 w-[250px] transition duration-200 
          hover:translate-x-3 hover:cursor-pointer active:opacity-50 active:scale-75 max-sm:hidden"
        @click="scrollRight"
      >
        <img src="../../assets/arrow_right.svg" alt="rightArrow">
      </div>
      
    </div>

    <Footer />
  </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .memberInfo {
    @apply snap-center flex flex-col flex-none 
      items-center bg-white shadow-lg w-[330px] h-[500px] p-3
      cursor-pointer transition duration-200 hover:-translate-y-5 
      max-sm:w-[250px] max-sm:h-[400px];
  }
}
.fontSize {
  font-size: 21px;
}
@media (max-width: 768px) {
  .fontSize {
    font-size: 18px;
  }
}
.changeBg {
  background-color: #003cd1;
}

</style>