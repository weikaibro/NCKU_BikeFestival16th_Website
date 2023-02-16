<script setup>
import { ref, onMounted, computed } from 'vue';
import Navbar from '../../../components/Navbar.vue';
import Footer from '../../../components/Footer.vue';
import irregularButton from '../../../components/irregularButton.vue';
import Lecture from './ExploreLearning_twoFrom/Lecture.vue'
import Discussion from './ExploreLearning_twoFrom/Discussion.vue'
const buttonName = [
  "講座", "討論會"
]
const num = ref(0);
const Switch = (index) => {
  num.value = index;
  console.log(num.value)
};
const Show = computed(() => {
  switch (num.value) {
    case 0: return Lecture;
    case 1: return Discussion;
    default: break;
  }
});
</script>

<template>
  <div class="bg-black text-white">
    <Navbar />

    <div class="flex flex-col justify-center items-center gap-16 mt-10 max-md:gap-10">
      <span class="text-5xl font-bold tracking-wider max-md:text-4xl">探索學習</span>
      <div class="flex max-md:flex-col max-md:my-6">
        <button
          v-for="(value, index) in buttonName"
          :key="index"
          @click="Switch(index)"
          class="transition furatioduration-100 font-semibold bg-transparent text-white text-lg border-2 border-white 
            w-[250px] h-[45px] mx-8 px-5 py-1 rounded-full 
            hover:scale-105 active:scale-95
            max-md:text-base max-md:my-4"
          :class="{ change: index === num }"
        >
          {{ value }}
        </button>
      </div>
      <picture>
        <source class="w-[55%] mx-auto max-md:w-[90%]" srcset="../../../assets/bikeFestivalLogo2.webp" type="image/webp">
        <img class="w-[55%] mx-auto max-md:w-[90%]" src="../../../assets/bikeFestivalLogo2.png" alt="NCKUlogo">
      </picture>
    </div>

    <div class="">
      <div class="px-36 pt-16 max-md:px-4">
        
        
          <div class="flex text-4xl font-bold mb-10 max-sm:text-2xl">
            <div>單車十六｜探索學習</div>
            <Transition mode="out-in">
              <div v-if="num == 0">｜講座報名</div>
              <div v-else-if="num == 1">｜討論會報名</div>
            </Transition>
          </div>
          <!-- <div class="text-4xl font-bold mb-10 max-sm:text-2xl" v-else-if="num == 1">單車十六｜探索學習｜討論會報名</div> -->
        <div class="text-lg leading-9 max-sm:text-sm">
          負責人聯絡資訊：
          <br> 學術部｜部長｜劉世瑜｜
          <a
            class="linkEff"
            href="https://www.facebook.com/liucinnamoroll"
            target="_blank"
            rel="noreferrer noopenner"
          >Facebook</a>
          <br> 學術部｜部員｜陳采欣｜
          <a
            class="linkEff"
            href="https://www.facebook.com/profile.php?id=100082289293575"
            target="_blank"
            rel="noreferrer noopenner"
          >Facebook</a>
          <br> 學術部｜部員｜梁祐晨｜
          <a
            class="linkEff"
            href="https://www.facebook.com/profile.php?id=100001349479942"
            target="_blank"
            rel="noreferrer noopenner"
          >Facebook</a>
          <br> 學術部｜部員｜陳俊安｜
          <a
            class="linkEff"
            href="https://www.facebook.com/ColtenOuO/"
            target="_blank"
            rel="noreferrer noopenner"
          >Facebook</a>
          <br> 學術部｜部員｜黃奎臻｜
          <a
            class="linkEff"
            href="https://www.facebook.com/profile.php?id=100022321603586"
            target="_blank"
            rel="noreferrer noopenner"
          >Facebook</a>
          <br> 學術部｜部員｜姚瀚晴｜
          <a
            class="linkEff"
            href="https://www.facebook.com/hanna.yao.77"
            target="_blank"
            rel="noreferrer noopenner"
          >Facebook</a>
          <br> 學術部｜部員｜蕭翔駿｜
          <a
            class="linkEff"
            href="https://www.facebook.com/profile.php?id=100003734715197"
            target="_blank"
            rel="noreferrer noopenner"
          >Facebook</a>
          <br> 我們收集您的資訊，以方便我們更準確地進行統計，祝福您開心地參與活動。
        </div>

        <Transition mode="out-in">
          <component :is="Show" />
        </Transition>

      </div>
      
    </div>

    <Footer />
  </div>
</template>

<style scoped>
.linkEff {
  -webkit-transition: color 0.5s ease, box-shadow 0.5s ease;
  -moz-transition: color 0.5s ease, box-shadow 0.5s ease;
  -o-transition: color 0.5s ease, box-shadow 0.5s ease;
  transition: color 0.5s ease, box-shadow 0.5s ease;
  text-decoration: underline;
  text-underline-offset: 5px;
  text-decoration-color: #0ea5e9;
}
.linkEff:hover {
  color: #fff;
  box-shadow: inset 0 -30px 0 0 #0ea5e9;
}
.change {
  background-color: #003cd1;
  border-color: #003cd1;
}
</style>
