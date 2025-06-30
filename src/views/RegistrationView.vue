<script setup>
import { ref } from 'vue';
import entryForm from '../components/entryForm_personalInfo.vue'
import Navbar from '../components/Navbar.vue';
</script>

<template>
  <div>
    <Navbar/>
    <div class="bg-black h-full">
      <img class="mx-auto h-[700px] max-md:h-[580px]" src="../assets/comingSoonWithBg.png" alt="">
    </div>
    <Footer />
  </div>
</template>
