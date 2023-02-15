<script setup>
defineProps({
  btnTitle: String,
  disable: String
})
</script>

<template>
  <!-- true -->
  <div v-if="disable">
    <div class="relative opacity-50
      w-[300px] max-lg:w-[210px] max-sm:w-[120px]"
    >
      <img src="../assets/irregularBtn_transparent.svg" alt="">
      <span class="absolute top-6 left-11 text-3xl text-white font-bold
        max-lg:text-2xl max-sm:text-xs max-sm:top-3 max-sm:left-5"
      >
        {{ btnTitle }}
      </span>
    </div>
  </div>
  <!-- default: false -->
  <div v-else>
    <div class="scaleEff relative transition duration-150 ease-in-out
      w-[300px] max-lg:w-[210px] max-sm:w-[120px]"
    >
      <img src="../assets/irregularBtn_transparent.svg" alt="">
      <span class="absolute top-6 left-11 text-3xl text-white font-bold
        max-lg:text-2xl max-lg:top-5 max-sm:text-xs max-sm:top-3 max-sm:left-5"
      >
        {{ btnTitle }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.scaleEff:hover {
  transform: scale(1.10);
}
.scaleEff:hover img {
  content: url(../assets/irregularBtn_blue.svg);
}
</style>