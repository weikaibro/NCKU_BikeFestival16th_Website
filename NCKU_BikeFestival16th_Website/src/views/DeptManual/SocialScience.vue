<script setup>
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
import Navbar from '../../components/Navbar.vue';
import Footer from '../../components/Footer.vue';
import Economics from './SocialScienceManual/Economics.vue';
import Law from './SocialScienceManual/Law.vue';
import PoliticalScience from './SocialScienceManual/PoliticalScience.vue';
import Psychology from './SocialScienceManual/Psychology.vue';

const chosenDept = ref([
  "經濟系", "法律系", "政治系", "心理系"
])
const userChosenNum = ref(0)
const userChosen = (index) => {
  userChosenNum.value = index;
  showDept.value = !showDept.value;
  // console.log(index)
}
const showContent = computed(() => {
  switch (userChosenNum.value) {
    case 0: return Economics;
    case 1: return Law;
    case 2: return PoliticalScience;
    case 3: return Psychology;
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
        <div @click="show" class="absolute bg-black w-screen h-[50px] text-2xl font-bold xl:hidden">社會科學院</div>
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
        <div class="text-3xl mt-10 mb-6 font-bold max-xl:hidden">社會科學院</div>
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

          <RouterLink to="/DeptManual/SocialScience/member1">
            <div class="memberInfo">
                <!-- <picture> -->
                  <!-- <source class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" srcset="" type="image/webp"> -->
                  <img class="rounded-full w-[80%] max-h-[244px] object-cover mx-auto mt-5 max-sm:max-h-[180px]" src="../../assets/DeptManual/SocialScience/SocialScience1.jpg" alt="member">
                <!-- </picture> -->
                <span class="mt-10 text-3xl font-bold max-md:mt-6">高譽庭</span>
                <span class="fontSize mt-3 text-center">心理系 112</span>
                <span class="fontSize mt-2 text-center">#心理系，讓我更了解自己，也更了解別人</span>
              </div>
          </RouterLink>  
          <RouterLink to="/DeptManual/SocialScience/member2">
            <div class="memberInfo">
              <!-- <picture> -->
                <!-- <source class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" srcset="" type="image/webp"> -->
                <img class="rounded-full w-[80%] mx-auto mt-5" src="../../assets/DeptManual/SocialScience/SocialScience2.png" alt="member">
              <!-- </picture> -->
              <span class="mt-10 text-3xl font-bold max-md:mt-6">許齊芳</span>
              <span class="fontSize mt-3 text-center">法律學系 115</span>
              <span class="fontSize mt-2 text-center">#因為一次的糾紛，而選擇法律系</span>
            </div>
          </RouterLink>
          <RouterLink to="/DeptManual/SocialScience/member3">
            <div class="memberInfo">
              <!-- <picture> -->
                <!-- <source class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" srcset="" type="image/webp"> -->
                <img class="rounded-full w-[80%] mx-auto mt-5" src="../../assets/DeptManual/SocialScience/SocialScience3.jpg" alt="member">
              <!-- </picture> -->
              <span class="mt-10 text-3xl font-bold max-md:mt-6">許景筑</span>
              <span class="fontSize mt-3 text-center">政治學系 114</span>
              <span class="fontSize mt-2 text-center">#成大的門面擔當</span>
            </div>
          </RouterLink>
          <RouterLink to="/DeptManual/SocialScience/member4">
            <div class="memberInfo">
              <!-- <picture> -->
                <!-- <source class="rounded-full w-[80%] mx-auto mt-5 max-md:mt-1" srcset="" type="image/webp"> -->
                <img class="rounded-full w-[80%] mx-auto mt-5" src="../../assets/DeptManual/SocialScience/SocialScience4.jpg" alt="member">
              <!-- </picture> -->
              <span class="mt-10 text-3xl font-bold max-md:mt-6">林青澤</span>
              <span class="fontSize mt-3 text-center">經濟學系 114</span>
              <span class="fontSize mt-2 text-center">#多跑活動多交友</span>
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