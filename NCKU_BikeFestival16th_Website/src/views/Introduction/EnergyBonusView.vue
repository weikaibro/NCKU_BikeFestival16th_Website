<script setup>
import Navbar from "../../components/Navbar.vue";
import IrregularButton from "../../components/irregularButton.vue";
</script>

<template>
  <div class="h-screen bg-black overflow-hidden">
    <Navbar />

    <div
      class="bg-white h-[650px] rounded-[3rem] mt-6 mx-16 py-16 pl-20 pr-40 text-xl leading-9 overflow-y-auto"
    >
      <div class="text-3xl font-bold">能量加值</div>
      <br />
      <div class="bg-stone-200">
        <img src="../../assets/comingSoon.png" alt="">
      </div>
      
    </div>
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track-piece {
  box-shadow: inset 0 0 5px transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(0, 60, 210);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(6, 60, 169);
}

.fontEff {
  color: rgb(6, 60, 169);
  font-weight: bolder;
}
</style>
