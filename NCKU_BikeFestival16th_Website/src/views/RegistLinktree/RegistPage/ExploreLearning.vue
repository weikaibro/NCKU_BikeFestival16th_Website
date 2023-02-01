<script setup>
import Navbar from '../../../components/Navbar.vue';
import Footer from '../../../components/Footer.vue';
</script>

<template>
  <div class="bg-black text-white">
    <Navbar />

    <div class="flex flex-col justify-center items-center gap-16 mt-20">
      <!-- <span class="text-5xl font-bold tracking-wider">單車體驗</span> -->
      <img src="../../../assets/comingSoon.png" alt="">
    </div>

    <div class="px-36 pt-20">
      <Transition mode="out-in">
        <component :is="Show" />
      </Transition>
    </div>

    <Footer />
  </div>
</template>