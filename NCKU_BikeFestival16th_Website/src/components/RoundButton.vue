<script setup>
defineProps({
  BtnTitle: String,
});
</script>
<template>
  <div
    class="transition duration-150 text-xl
    w-24 h-10 rounded-full bg-black cursor-pointer
    lg:w-40 lg:h-14 lg:text-2xl
    hover:bg-myblue hover:scale-105 active:bg-myblue active:scale-95 "
  >
    <div class="text-white h-full flex justify-center items-center">
      {{ BtnTitle }}
    </div>
  </div>
</template>
