<script setup>
import { ref } from 'vue';
const souvenirIndex = ref(0)
const scrollLeftChangeSouvenirContent = () => {
  var leftArrow = document.getElementById("leftArrow")
  var rightArrow = document.getElementById("rightArrow")
  if (souvenirIndex.value == 2) {
    rightArrow.className = "w-full"
    souvenirIndex.value--
  } else if (souvenirIndex.value == 1) {
    leftArrow.className = "w-full opacity-20"
    souvenirIndex.value--
  } else {
    return
  }
  console.log(souvenirIndex.value)
}
const scrollRightChangeSouvenirContent = () => {
  var leftArrow = document.getElementById("leftArrow")
  var rightArrow = document.getElementById("rightArrow")
  if (souvenirIndex.value == 0) {
    leftArrow.className = "w-full"
    souvenirIndex.value++
  } else if (souvenirIndex.value == 1) {
    rightArrow.className = "w-full opacity-20"
    souvenirIndex.value++
  } else {
    return
  }
  console.log(souvenirIndex.value)
}
</script>

<template>
  <div 
    class="basis-1/6 transition duration-200
      hover:-translate-x-3 hover:cursor-pointer active:opacity-50 active:scale-75"
    @click="scrollLeftChangeSouvenirContent"
  >
    <img id="leftArrow" class="w-full opacity-20" src="../assets/arrow_left.svg" alt="leftArrow">   
  </div>


  <div class="basis-4/6 shadow-xl">

    <!-- dialog -->
    <div class="relative h-[100px] bg-black max-md:h-[55px]">
      <!-- dialog header -->
      <!-- dialog title -->
      <p class="absolute top-1/2 -translate-y-1/2 left-5
        ml-3 text-4xl text-white font-semibold max-md:text-2xl max-md:ml-0">
        紀念品
      </p>
      <!-- dialog cross/underline -->
      <div class="absolute right-0 mr-[140px] mt-[20px] max-md:hidden">
        <img class="w-[60px] h-[60px]" src="../assets/cross.svg" alt="cross">
      </div>
      <div class="absolute right-0 mr-[56px] mt-[20px] max-md:hidden">
        <img class="w-[60px] h-[60px]" src="../assets/underline.svg" alt="underline">
      </div>
    </div>

    <!-- dialog body -->
    <div class="border-x-4 border-b-4 border-black">
      <Transition mode="out-in">
        <div
          class="flex justify-center items-center p-24
             overflow-hidden h-[600px] max-sm:flex-col max-lg:p-10 max-md:h-[380px] max-md:p-3"
          v-if="souvenirIndex == 0"
        >
          <img class="w-[40%] max-sm:mb-4" src="../assets/Souvenir/Souvenir1.png" alt="Souvenir">
          <div class="ml-12 text-2xl max-sm:m-0 max-md:text-base max-sm:text-center">
            <div class="text-4xl font-bold max-sm:text-xl">金屬徽章</div>
            <div class="mt-2 mb-3">90NTD /個</div>
            <div>以成大最具象徵性之一的榕園為主題，並選擇以像素遊戲的方式呈現，象徵在這次單車16裡，所有的參加者都在以榕園聞名的成大裡探索遊玩，尋找自己的遊戲結局。</div>
          </div>
        </div>
        <div
          class="flex justify-center items-center p-24
             overflow-hidden h-[600px] max-sm:flex-col max-lg:p-10 max-md:h-[380px] max-md:p-3"
          v-else-if="souvenirIndex == 1"
        >
          <img class="w-[40%] max-sm:mb-4" src="../assets/Souvenir/Souvenir2.png" alt="Souvenir">
          <div class="ml-12 text-2xl max-sm:m-0 max-md:text-base max-sm:text-center">
            <div class="text-4xl font-bold max-sm:text-xl">學業御守</div>
            <div class="mt-2 mb-3">150NTD /個</div>
            <div>延伸單車16主視覺所製作的學業御守，以成大校花鳳凰花紋樣點綴，是成大單車節送給每個前來追夢的學子的一份祝福。希望每個人都能夠懷揣著這份信念與盼望，向自己的目標大步邁進！</div>
          </div>
        </div>
        <div
          class="flex justify-center items-center p-24
             overflow-hidden h-[600px] max-sm:flex-col max-lg:p-10 max-md:h-[380px] max-md:p-3"
          v-else-if="souvenirIndex == 2"
        >
          <img class="w-[40%] max-sm:mb-4" src="../assets/Souvenir/Souvenir3.png" alt="Souvenir">
          <div class="ml-12 text-2xl max-sm:m-0 max-md:text-base max-sm:text-center">
            <div class="text-4xl font-bold max-sm:text-xl">帆布袋</div>
            <div class="mt-2 mb-3">280NTD /個</div>
            <div>單車節就像個裝載滿滿資訊的資料夾，可以從中瞄準、搜尋、探索你想要的！而帆布袋也是個可以裝滿滿的好夥伴，陪著你大步向前！</div>
          </div>
        </div>
      </Transition>
    </div>

  </div>

  <div 
    class="basis-1/6 w-[250px] transition duration-200 
      hover:translate-x-3 hover:cursor-pointer active:opacity-50 active:scale-75"
    @click="scrollRightChangeSouvenirContent"
  >
    <img id="rightArrow" class="w-full" src="../assets/arrow_right.svg" alt="rightArrow">
  </div>
</template>