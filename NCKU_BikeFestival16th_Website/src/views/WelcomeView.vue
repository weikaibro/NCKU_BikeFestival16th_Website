<script setup>
import { RouterLink, RouterView } from "vue-router";
import irregularButton from "../components/irregularButton.vue";
</script>

<template>
  <div class="relative overflow-hidden flex flex-col h-screen w-screen max-sm:bg-black">

    <video autoplay muted loop class="absolute w-full max-sm:hidden">
      <source src="../assets/bg1.mp4" type="video/mp4" />
    </video>

    <div class="absolute flex flex-col justify-center w-full h-full sm:justify-evenly">

      <img class="mx-auto w-[75%]" src="../assets/logo.svg" alt="NCKU_BikeFestival_Logo" />
<!-- flex flex-row sm:justify-evenly items-end w-full h-[300px] max-sm:flex-col max-sm:items-center max-sm:gap-12 -->
      <div class="h-[200px] flex flex-col items-center justify-evenly sm:flex-row">
        <RouterLink to="/Registration/Linktree">
          <irregularButton btnTitle="即刻報名" />
        </RouterLink>
        <RouterLink to="/Homepage">
          <irregularButton btnTitle="進入官網" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
