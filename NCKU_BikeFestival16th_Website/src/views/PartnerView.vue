<script setup>
import { ref } from 'vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <div>
    <Navbar/>
    <div class="bg-black">
      <img class="mx-auto h-[700px]" src="../assets/comingSoonWithBg.png" alt="">
    </div>
    <Footer/>
  </div>
</template>
