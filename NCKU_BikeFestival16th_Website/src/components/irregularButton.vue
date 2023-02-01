<script setup>
defineProps({
  btnTitle: String,
  disable: Boolean
})
</script>

<template>
  <!-- default: false -->
  <div v-if="disable">
    <div class="relative opacity-50
      w-[300px] max-sm:w-[120px]"
    >
      <img src="../assets/irregularBtn_transparent.svg" alt="">
      <span class="absolute top-6 left-11 text-3xl text-white font-medium
        max-sm:text-xs max-sm:top-2 max-sm:left-2"
      >
        {{ btnTitle }}
      </span>
    </div>
  </div>
  <!-- true -->
  <div v-else>
    <div class="scaleEff relative transition duration-150 ease-in-out
      w-[300px] max-sm:w-[120px]"
    >
      <img src="../assets/irregularBtn_transparent.svg" alt="">
      <span class="absolute top-6 left-11 text-3xl text-white font-bold
        max-sm:text-xs max-sm:top-2 max-sm:left-2"
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