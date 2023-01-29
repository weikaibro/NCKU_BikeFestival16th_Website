<script setup>
import { ref } from 'vue';
import { useMemberStore } from '../../../stores/memberInfo.js'
const store = useMemberStore();  // pinia: all members
const members = ref([
  { memberPic: "https://picsum.photos/200", memberName: "姜昕", memberTitle: "總籌", 
      memberGrade: "療癒系 112 級", memberSaid: "牙空灰機牙空灰機牙空灰機牙空灰機牙空灰機" },
  { memberPic: "https://picsum.photos/200", memberName: "劉子綾", memberTitle: "總籌", 
      memberGrade: "療癒系 112 級", memberSaid: "牙空灰機牙空灰機牙空灰機牙空灰機牙空灰機" },
  { memberPic: "https://picsum.photos/200", memberName: "許哲斐", memberTitle: "秘書部", 
      memberGrade: "療癒系 112 級", memberSaid: "牙空灰機牙空灰機牙空灰機牙空灰機牙空灰機" },
  { memberPic: "https://picsum.photos/200", memberName: "張鈺昕", memberTitle: "秘書部", 
      memberGrade: "療癒系 112 級", memberSaid: "牙空灰機牙空灰機牙空灰機牙空灰機牙空灰機" },
  { memberPic: "https://picsum.photos/200", memberName: "陳加羲", memberTitle: "行銷部", 
      memberGrade: "療癒系 112 級", memberSaid: "牙空灰機牙空灰機牙空灰機牙空灰機牙空灰機" },
  { memberPic: "https://picsum.photos/200", memberName: "廖珺安", memberTitle: "行銷部", 
      memberGrade: "療癒系 112 級", memberSaid: "牙空灰機牙空灰機牙空灰機牙空灰機牙空灰機" },
  { memberPic: "https://picsum.photos/200", memberName: "陳冠儒", memberTitle: "公關部", 
      memberGrade: "療癒系 112 級", memberSaid: "牙空灰機牙空灰機牙空灰機牙空灰機牙空灰機" },
  { memberPic: "https://picsum.photos/200", memberName: "蔡依璇", memberTitle: "公關部", 
      memberGrade: "療癒系 112 級", memberSaid: "牙空灰機牙空灰機牙空灰機牙空灰機牙空灰機" },
  { memberPic: "https://picsum.photos/200", memberName: "佘紀伸", memberTitle: "設計部", 
      memberGrade: "療癒系 112 級", memberSaid: "牙空灰機牙空灰機牙空灰機牙空灰機牙空灰機" },
  { memberPic: "https://picsum.photos/200", memberName: "邱于芸", memberTitle: "設計部", 
      memberGrade: "療癒系 112 級", memberSaid: "牙空灰機牙空灰機牙空灰機牙空灰機牙空灰機" },
  { memberPic: "https://picsum.photos/200", memberName: "黃鈺婷", memberTitle: "設計部", 
      memberGrade: "療癒系 112 級", memberSaid: "牙空灰機牙空灰機牙空灰機牙空灰機牙空灰機" }
])
</script>

<template>
  <div>
    <div 
    class="absolute z-10 left-8 top-32 w-[250px] transition duration-200 
      hover:-translate-x-3 active:opacity-50 active:scale-75 max-sm:hidden"
    @click="store.scrollLeft"
  >
    <img src="../../../assets/arrow_left.svg" alt="leftArrow">   
  </div>
  <div class="absolute z-0 inset-x-0 mx-auto bg-neutral-100
    w-[80%] h-[580px] max-sm:w-screen max-sm:h-[500px]">
    <div 
      id="scrollTo"
      class="snap-x snap-mandatory overflow-hidden 
        flex flex-row gap-8 mx-12 items-center h-full
        max-sm:touch-pan-x max-sm:overflow-auto max-sm:mx-4"
    >

      <div
        v-for="member in members" 
        :key="members.indexOf(member)"
        class="memberInfo"
      >
        <img class="imgInfo" :src="member.memberPic" alt="">
        <span class="mt-4 text-2xl font-bold">{{ member.memberName }}</span>
        <span class="text-lg mt-2 text-center">
          {{ member.memberTitle }}
          <br>{{ member.memberGrade }}
          <br>{{ member.memberSaid }}
        </span>
      </div>

    </div>
  </div>
  <div 
    class="absolute z-10 right-8 top-32 w-[250px] transition duration-200 
      hover:translate-x-3 3 active:opacity-50 active:scale-75 max-sm:hidden"
    @click="store.scrollRight"
  >
    <img src="../../../assets/arrow_right.svg" alt="rightArrow">
  </div>
  </div>
</template>