<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { RouterLink, RouterView } from "vue-router";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import roundedBtn from "../components/RoundButton.vue";
import irregularButton from "../components/irregularButton.vue";
import homepage_dialogBox from "../components/homepage_dialogBox.vue";
import homepage_SouvenirDialogBox from "../components/homepage_SouvenirDialogBox.vue";
import homepage_lineHeader from "../components/homepage_lineHeader.vue";
import homepage_themeActivity from "../components/homepage_themeActivity.vue";
import homepage_backgroundSlider from "../components/homepage_backgroundSlider.vue";
import homepage_totalMemberSlider from "../components/homepage_totalMemberSlider.vue";
function fadeInEff() {
  let effElement = document.querySelectorAll(".scrollEff");
  for (var i = 0; i < effElement.length; i++) {
    var elem = effElement[i]
    var distInView = elem.getBoundingClientRect().top - window.innerHeight + 100;
    if (distInView < 0) {
      elem.classList.add("fadeIn");
    }
  }
}
onMounted(() => {
  let effElement = document.querySelectorAll(".scrollEff");
  for (var i = 0; i < effElement.length; i++) {
    var elem = effElement[i]
    if (elem.classList.contains("fadeIn")) {
      elem.classList.remove("fadeIn");
    }
  }
  window.addEventListener('scroll', fadeInEff);
  fadeInEff()
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', fadeInEff); 
})

</script>

<template>
  <div class="flex flex-col">
    <Navbar />
    <div class="mt-20 flex flex-col aspect-[2] w-screen bg-black max-md:bg-white">
      <div class="aspect-[2.5]">
      <homepage_backgroundSlider />
      </div>
      <div class="self-center my-auto max-md:hidden">
        <RouterLink to="/Registration/Linktree">
          <irregularButton btnTitle="即刻報名" />
        </RouterLink>
      </div>
    </div>

    <div
      class="scrollEff flex flex-row justify-center items-center w-screen h-[1100px] overflow-hidden
        max-md:h-[700px]"
    >
      <homepage_dialogBox />
    </div>

    <div
      class="scrollEff flex flex-col justify-center items-center p-0 w-screen"
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
      class="scrollEff flex flex-col justify-center items-center mt-40 p-0 w-screen overflow-hidden max-md:mt-12"
    >
      <div class="flex justify-center items-center w-full">
        <homepage_SouvenirDialogBox />
      </div>
      <div class="h-[150px] pt-12">
        <RouterLink to="/SouvenirPreorder">
          <roundedBtn BtnTitle="More" />
        </RouterLink>
      </div>
    </div>

    <div class="scrollEff mt-40 p-0 w-screen h-[800px] max-md:mt-16 ">
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

<style scoped>
@keyframes fade_in {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fadeIn {
  animation: fade_in ease 1s;
  animation-fill-mode: forwards;
}

.scrollEff {
  opacity: 0;
}
</style>
