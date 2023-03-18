<script setup>
import { ref } from 'vue';
const num = ref(1)
var choiceArr = []
const userChoice = (choice) => {
  choiceArr.push(choice)
  if (choiceArr[choiceArr.length - 1] == choiceArr[choiceArr.length - 2]) {
    if (num.value != 100) {
      num.value = 100;
    } else {
      num.value = choiceArr[choiceArr.length - 1]
    }
  } else {
    switch (choice) {
      case 1: return num.value = 1;
      case 2: return num.value = 2;
      case 3: return num.value = 3;
      case 4: return num.value = 4;
      case 5: return num.value = 5;
      default: break;
    }
  }
  

}
</script>

<template>
  <div class="bg-black text-white p-4">
    <div class="mx-12 my-6 max-sm:mx-0">
      <div class="flex border-b-2 w-[210px]" @click="userChoice(1)">
        <div class="w-[190px] text-2xl">舞台活動</div>
        <img class="w-[20px]" src="../../assets/downArrow.svg" alt="downArrow">
      </div>
      <Transition mode="out-in">
        <div class="my-6" v-if="num == 1">
          <img class="w-[700px]" src="../../assets/timeTable/stage.png" alt="stageAvtivity">
        </div> 
      </Transition>
         
    </div>

    <div class="mx-12 my-6 max-sm:mx-0">
      <div class="flex border-b-2 w-[210px]" @click="userChoice(2)">
        <div class="w-[190px] text-2xl">校園講者</div>
        <img class="w-[20px]" src="../../assets/downArrow.svg" alt="downArrow">
      </div>
      <Transition mode="out-in">
        <div class="w-[1000px] my-6" v-if="num == 2">
          <img src="../../assets/timeTable/collegeCharge.png" alt="collegeCharge">
        </div> 
      </Transition>
         
    </div>

    <div class="mx-12 my-6 max-sm:mx-0">
      <div class="flex border-b-2 w-[210px]" @click="userChoice(3)">
        <div class="w-[190px] text-2xl">探索講座</div>
        <img class="w-[20px]" src="../../assets/downArrow.svg" alt="downArrow">
      </div>
      <Transition mode="out-in">
        <div class="w-[700px] my-6" v-if="num == 3">
          <img src="../../assets/timeTable/explore.png" alt="explore">
        </div> 
      </Transition>
    </div>

    <div class="mx-12 my-6 max-sm:mx-0">
      <div class="flex border-b-2 w-[210px]" @click="userChoice(4)">
        <div class="w-[190px] text-2xl">探索議題討論坊</div>
        <img class="w-[20px]" src="../../assets/downArrow.svg" alt="downArrow">
      </div>
      <Transition mode="out-in">
        <div class="w-[700px] my-6" v-if="num == 4">
          <img src="../../assets/timeTable/issue.png" alt="explore">
        </div> 
      </Transition>
    </div>

    <div class="mx-12 my-6 max-sm:mx-0">
      <div class="flex border-b-2 w-[210px]" @click="userChoice(5)">
        <div class="w-[190px] text-2xl">模擬面試</div>
        <img class="w-[20px]" src="../../assets/downArrow.svg" alt="downArrow">
      </div>
      <Transition mode="out-in">
        <div class="w-[700px] my-6" v-if="num == 5">
          <img src="../../assets/timeTable/mockInterview.png" alt="mockInterview">
        </div> 
      </Transition>
    </div>

  </div>
</template>

<style scoped>
.v-enter-active {
  transition: opacity 0.75s;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}

.v-enter-to, .v-leave-from {
  opacity: 1;
}
</style>
