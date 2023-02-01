<script setup>
defineProps({
  BtnTitle: String,
});
</script>
<template>
  <div
    class="transition-all = text-xl font-medium
    w-24 h-10 px-6 pt-1.5 rounded-full bg-black
    lg:w-40 lg:h-16 lg:pl-11 lg:pt-3.5 lg:text-3xl
    hover:bg-myblue hover:scale-105 active:bg-myblue active:scale-95 "
  >
    <button class="text-white">
      {{ BtnTitle }}
    </button>
  </div>
</template>
