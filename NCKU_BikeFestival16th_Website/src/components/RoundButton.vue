<script setup>
defineProps({
  text: String,
  Onclick: String,
});
</script>
<template>
  <div
    class="transition-all text-white text-xl font-medium
    w-24 h-10 px-6 rounded-full bg-black
    lg:w-40 lg:h-16 lg:pl-11 lg:pt-2.5 lg:text-3xl
    hover:bg-myblue hover:scale-105 active:bg-myblue active:scale-95 "
  >
    <button onclick="v-bind:location.href='Onclick'" class="align-middle">
      {{ text }}
    </button>
  </div>
</template>
