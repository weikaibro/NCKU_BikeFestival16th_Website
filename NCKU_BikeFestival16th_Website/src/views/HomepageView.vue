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

const dialogBoxContent = "猶記得高三那年，一出學測考場，人生頓失方向。該讀哪間學校、報什麼學系？此起彼落的疑問，成了每個考生心中的困擾，也迴盪在每次與父母、導師的談話間。不管閱覽了多少網路資料，你仍然躊躇不前，甚至更加心焦。<br><strong>—— 這樣的選擇是對的嗎？去了那裡會不會後悔？</strong><br><br>已然進入所屬科系的我們，知道這樣的輪迴仍然不斷上演。所以我們自問，該如何消弭高中生們內心的不安。<span class='text-myblue'><strong>曾經籠罩我們的迷惘，就由我們來驅散。這份理念，就是單車節的初心。</strong></span>"
const SouvenirContent = "Coming Soon!"
</script>

<template>
  <div class="flex flex-col">
    <Navbar />
    <div class="flex flex-col w-screen bg-black max-md:bg-white">
      <div class="aspect-[2.5]">
        <homepage_backgroundSlider />
      </div>
      <div class="my-6 self-center max-md:hidden max-sm:basis-0">
        <RouterLink to="/Registration/Linktree">
          <irregularButton btnTitle="即刻報名" />
        </RouterLink>
      </div>
    </div>

    <div
      class="flex flex-row justify-center items-center w-screen h-[1100px] overflow-hidden
        max-md:h-[700px]"
    >
      <homepage_dialogBox dialogTitle="單車節緣起" :article="dialogBoxContent" arrowHidden="opacity-20"  />
    </div>

    <div
      class="flex flex-col justify-center items-center p-0 w-screen"
    >
      <div class="h-[130px] flex justify-center items-center">
        <homepage_lineHeader headerTitle="四大主題活動" />
      </div>
      <div
        class="flex flex-wrap justify-center items-center w-screen"
      >
        <homepage_themeActivity />
      </div>
      <div class="h-[150px] pt-6">
        <RouterLink to="/Introduction">
          <roundedBtn BtnTitle="More" />
        </RouterLink>
      </div>
    </div>

    <div
      class="flex flex-col justify-center items-center mt-24 p-0 w-screen overflow-hidden max-md:mt-12"
    >
      <div class="flex justify-center items-center w-full">
        <homepage_dialogBox dialogTitle="紀念品" :article="SouvenirContent" arrowHidden="opacity-20" >
          <img src="../assets/comingSoonWithBg.png" alt="SouvenirPreorderView" class="hidden" />
        </homepage_dialogBox>
      </div>
      <div class="h-[150px] pt-12">
        <RouterLink to="/SouvenirPreorder">
          <roundedBtn BtnTitle="More" />
        </RouterLink>

      </div>
    </div>

    <div class="mt-36 p-0 w-screen h-[800px] max-md:mt-16 ">
      <div class="flex justify-center items-end mb-16 max-md:mb-6">
        <homepage_lineHeader headerTitle="籌備團隊" />
      </div>
      <div class="relative">
        <homepage_totalMemberSlider />
      </div>
    </div>

    <Footer />
  </div>
</template>
