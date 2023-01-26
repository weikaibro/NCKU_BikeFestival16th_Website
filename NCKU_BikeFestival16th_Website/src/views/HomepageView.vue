<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from "vue-router";
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import roundedBtn from '../components/RoundButton.vue'
import irregularButton from '../components/irregularButton.vue'
import homepage_dialogBox from '../components/homepage_dialogBox.vue'
import homepage_lineHeader from '../components/homepage_lineHeader.vue'
import homepage_themeActivity from '../components/homepage_themeActivity.vue'
import homepage_backgroundSlider from '../components/homepage_backgroundSlider.vue'
import homepage_totalMemberSlider from '../components/homepage_totalMemberSlider.vue'
</script>

<template>
  <div class="flex flex-col">
    <Navbar/>

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


    <div class="flex flex-row justify-center items-center w-screen h-[1100px] overflow-hidden">
      <homepage_dialogBox dialogTitle="單車節緣起" />
    </div>


    <div class="flex flex-col justify-center items-center m-0 p-0 w-screen h-[800px]">
      <div class="h-[130px]">
        <homepage_lineHeader headerTitle="四大主題活動" />
      </div>
      <div class="flex flex-col justify-evenly items-center w-screen sm:flex-row">
        <homepage_themeActivity />
      </div>
      <div class="h-[150px] pt-12">
        <roundedBtn text="More" />
      </div>
    </div>

    <div class="flex flex-row justify-center items-center m-0 p-0 w-screen h-[1100px] overflow-hidden">
      <homepage_dialogBox dialogTitle="紀念品">
        <img src="../assets/logo.svg" alt="">
      </homepage_dialogBox>
    </div>

    <div class="m-0 p-0 w-screen h-screen">
      <div class="h-[25%] flex justify-center items-end pb-16">
        <homepage_lineHeader headerTitle="籌備團隊" />
      </div>
      <div class="h-[75%] relative">
        <homepage_totalMemberSlider />
      </div>
    </div>

    <Footer />
  </div>
</template>
