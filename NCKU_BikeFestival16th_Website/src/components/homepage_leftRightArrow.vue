<script setup>

</script>

<template>
  <div class="flex flex-row justify-center items-center m-0 p-0 w-screen h-screen">

    <div class="basis-1/6 transition duration-200 hover:-translate-x-3">
      <img src="../assets/arrow_left.svg" alt="leftArrow">
    </div>

    <div class="basis-4/6 shadow-lg h-2/3">
      <slot/>
    </div>

    <div class="basis-1/6 transition duration-200 hover:translate-x-3">
      <img src="../assets/arrow_right.svg" alt="rightArrow">
    </div>

  </div>
</template>