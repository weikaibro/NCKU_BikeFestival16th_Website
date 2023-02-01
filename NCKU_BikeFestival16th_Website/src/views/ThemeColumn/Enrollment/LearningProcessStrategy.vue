<script setup>
import { RouterLink } from "vue-router";
import Navbar from "../../../components/Navbar.vue";
import Footer from "../../../components/Footer.vue";
import RoundButton from "../../../components/RoundButton.vue";
import ThemeColumnHeader from "../../../components/ThemeColumnHeader.vue";
</script>

<template>
<Navbar />
  <div class="mx-20 my-10">

    <ThemeColumnHeader header="主題專欄 / 升學" keyWord="健身" theme="考生保健室" />

    <div class="mx-60 my-20">
      <div class="text-xl leading-9">

        <!-- Coming Soon -->
        <img src="../../../assets/comingSoonWithBg.png" alt="">

      </div>
    </div>
    
    <div>
      <RouterLink to="/ThemeColumn">
        <RoundButton class="mx-auto" BtnTitle="Back" />
      </RouterLink>
    </div>
  </div>
  <Footer />
</template>