<script setup>
import { ref, onMounted } from 'vue';
const dialogTitle = ref("單車節緣起")
onMounted(() => {
  var content = document.getElementById("content")
  var memberImg1 = document.getElementById("memberImg1")
  var memberImg2 = document.getElementById("memberImg2")
  content.innerHTML = "猶記得高三那年，一出學測考場，人生頓失方向。該讀哪間學校、報什麼學系？此起彼落的疑問，成了每個考生心中的困擾，也迴盪在每次與父母、導師的談話間。不管閱覽了多少網路資料，你仍然躊躇不前，甚至更加心焦。<br><strong>—— 這樣的選擇是對的嗎？去了那裡會不會後悔？</strong><br><br>已然進入所屬科系的我們，知道這樣的輪迴仍然不斷上演。所以我們自問，該如何消弭高中生們內心的不安。<span class='text-myblue'><strong>曾經籠罩我們的迷惘，就由我們來驅散。這份理念，就是單車節的初心。</strong></span>"
  memberImg1.className = "hidden max-md:w-[100px]"
  memberImg2.className = "hidden max-md:w-[100px]"
})
const scrollRightChangeContent = () => {
  var content = document.getElementById("content")
  var memberImg1 = document.getElementById("memberImg1")
  var memberImg2 = document.getElementById("memberImg2")
  var leftArrowImg = document.getElementById("leftArrowImg")
  var rightArrowImg = document.getElementById("rightArrowImg")
  if (dialogTitle.value == "單車節緣起") {
    content.innerHTML = "在富含歷史底蘊的校園中，我們將直接地牽起你與科系的對話——<br>讓第一線的學長姊為你揭開科系的真實面貌，探索自己的性向；為你配備上面試戰場最有力的武器，用一百分的表現，爭取讓自己滿意的大學生涯；在學術之外，也有充滿熱情和溫暖的心靈陪伴。<br><br>希望與會的你知曉，在跌宕的路上，你並不孤獨。<br>前方有我們，為你指路。這趟旅程，將為你鎖定屬於你發揚光大的舞台。"
    dialogTitle.value = "成為學子們的燈塔"
    leftArrowImg.className = "w-full"
  } else if (dialogTitle.value == "成為學子們的燈塔") {
    content.innerHTML = "我們都曾經站在升學道路的岔口上，在面對未知的結果當前我們是不安的，所以成大單車節希望能夠幫助全台灣高中生，進行升學選擇前都能夠有足夠充足的先備知識，無論是針對課業的準備、系所的認識，或是課外大學生活的日常、組織活動的參與等，<span class='text-myblue'><strong>弭平高中和大學端間的資訊落差，做高中生們的引路人。</strong></span>"
    dialogTitle.value = "總籌的話 - 姜昕"
    memberImg1.className = "max-md:w-[100px]"
  } else if (dialogTitle.value == "總籌的話 - 姜昕") {
    content.innerHTML = "名為校系博覽會，卻用了叛逆的視覺風格。但衝突與矛盾何嘗不是人生最常遇到的課題呢？<br>我們最想呈現的，是在體制內<span class='text-myblue'><strong>迸發的機會</strong></span>。<br>除了世人定義的「正確」選擇，我們還想告訴與會者，一個人的<span class='text-myblue'><strong>熱忱</strong></span>，是能<span class='text-myblue'><strong>無限增長</strong></span>的。除了在課業上用心，各樣的組織參與，也是探索人生熱情之所在的路徑。希望成立的每一個專案，都能確實觸及需求者。"
    dialogTitle.value = "總籌的話 - 劉子綾"
    rightArrowImg.className = "w-full opacity-20"
    memberImg1.className = "hidden max-md:w-[100px]"
    memberImg2.className = "max-md:w-[100px]"
  } else if (dialogTitle.value == "總籌的話 - 劉子綾") {
    return
  }
}
const scrollLeftChangeContent = () => {
  var content = document.getElementById("content")
  var memberImg1 = document.getElementById("memberImg1")
  var memberImg2 = document.getElementById("memberImg2")
  var leftArrowImg = document.getElementById("leftArrowImg")
  var rightArrowImg = document.getElementById("rightArrowImg")
  if (dialogTitle.value == "單車節緣起") {
    return
  } else if (dialogTitle.value == "成為學子們的燈塔") {
    content.innerHTML = "猶記得高三那年，一出學測考場，人生頓失方向。該讀哪間學校、報什麼學系？此起彼落的疑問，成了每個考生心中的困擾，也迴盪在每次與父母、導師的談話間。不管閱覽了多少網路資料，你仍然躊躇不前，甚至更加心焦。<br><strong>—— 這樣的選擇是對的嗎？去了那裡會不會後悔？</strong><br><br>已然進入所屬科系的我們，知道這樣的輪迴仍然不斷上演。所以我們自問，該如何消弭高中生們內心的不安。<span class='text-myblue'><strong>曾經籠罩我們的迷惘，就由我們來驅散。這份理念，就是單車節的初心。</strong></span>"
    dialogTitle.value = "單車節緣起"
    leftArrowImg.className = "w-full opacity-20"
  } else if (dialogTitle.value == "總籌的話 - 姜昕") {
    content.innerHTML = "在富含歷史底蘊的校園中，我們將直接地牽起你與科系的對話——<br>讓第一線的學長姊為你揭開科系的真實面貌，探索自己的性向；為你配備上面試戰場最有力的武器，用一百分的表現，爭取讓自己滿意的大學生涯；在學術之外，也有充滿熱情和溫暖的心靈陪伴。<br><br>希望與會的你知曉，在跌宕的路上，你並不孤獨。<br>前方有我們，為你指路。這趟旅程，將為你鎖定屬於你發揚光大的舞台。"
    dialogTitle.value = "成為學子們的燈塔"
    memberImg1.className = "hidden max-md:w-[100px]"
  } else if (dialogTitle.value == "總籌的話 - 劉子綾") {
    content.innerHTML = "我們都曾經站在升學道路的岔口上，在面對未知的結果當前我們是不安的，所以成大單車節希望能夠幫助全台灣高中生，進行升學選擇前都能夠有足夠充足的先備知識，無論是針對課業的準備、系所的認識，或是課外大學生活的日常、組織活動的參與等，<span class='text-myblue'><strong>弭平高中和大學端間的資訊落差，做高中生們的引路人。</strong></span>"
    dialogTitle.value = "總籌的話 - 姜昕"
    rightArrowImg.className = "w-full "
    memberImg1.className = "max-md:w-[100px]"
    memberImg2.className = "hidden max-md:w-[100px]"
  }
}
</script>

<template>
  <div 
    class="basis-1/6 transition duration-200
      hover:-translate-x-3 hover:cursor-pointer active:opacity-50 active:scale-75"
    @click="scrollLeftChangeContent"
  >
    <img id="leftArrowImg" class="w-full opacity-20" src="../assets/arrow_left.svg" alt="leftArrow">   
  </div>


  <div class="basis-4/6 shadow-xl">

    <!-- dialog -->
    <div class="relative h-[100px] bg-black max-md:h-[70px]">
      <!-- dialog header -->
      <!-- dialog title -->
      <p class="absolute top-1/2 -translate-y-1/2 left-5
        ml-3 text-4xl text-white font-semibold max-md:text-2xl">
        {{ dialogTitle }}
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
    <div class="flex flex-row justify-center items-center p-12
      border-x-4 border-b-4 border-black h-[600px] overflow-hidden 
      max-md:h-[450px] max-md:p-4 max-md:flex-col"
    >
      <!-- image slot -->
      <img id="memberImg1" class="hidden" src="../assets/teamMember/member1.png" alt="member">
      <img id="memberImg2" class="hidden" src="../assets/teamMember/member2.png" alt="member">
      <div id="content" class="text-2xl leading-relaxed m-12
        max-xl:text-lg max-lg:text-sm max-md:leading-5 max-md:m-4">
        猶記得高三那年，一出學測考場，人生頓失方向。該讀哪間學校、報什麼學系？此起彼落的疑問，成了每個考生心中的困擾，也迴盪在每次與父母、導師的談話間。不管閱覽了多少網路資料，你仍然躊躇不前，甚至更加心焦。<br><strong>—— 這樣的選擇是對的嗎？去了那裡會不會後悔？</strong><br><br>已然進入所屬科系的我們，知道這樣的輪迴仍然不斷上演。所以我們自問，該如何消弭高中生們內心的不安。<span class='text-myblue'><strong>曾經籠罩我們的迷惘，就由我們來驅散。這份理念，就是單車節的初心。</strong></span>
      </div>
    </div>

  </div>

  <div 
    class="basis-1/6 w-[250px] transition duration-200 
      hover:translate-x-3 hover:cursor-pointer active:opacity-50 active:scale-75"
    @click="scrollRightChangeContent"
  >
    <img id="rightArrowImg" class="w-full" src="../assets/arrow_right.svg" alt="rightArrow">
  </div>
</template>