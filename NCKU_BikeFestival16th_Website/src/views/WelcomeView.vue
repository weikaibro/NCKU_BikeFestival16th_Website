<script setup>
import { RouterLink, RouterView } from "vue-router";
import irregularButton from "../components/irregularButton.vue";
</script>

<template>
  <div class="relative overflow-hidden flex flex-col h-screen w-screen">
    <video autoplay muted loop class="absolute w-full">
      <source src="../assets/bg1.mp4" type="video/mp4" />
    </video>

    <div class="absolute flex flex-col justify-evenly w-full h-full">

      <img class="mx-auto w-[75%]" src="../assets/logo.svg" alt="NCKU_BikeFestival_Logo" />

      <div class="flex flex-row justify-evenly items-end">
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
