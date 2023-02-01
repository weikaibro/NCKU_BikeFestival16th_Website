<script setup>
defineProps({
  header: String,
  keyWord: String,
  theme: String
})
</script>

<template>
  <div>
    <div class="text-end text-xl mb-2">{{ header }}</div>
    <hr />
  </div>
  <div class="flex flex-col justify-center items-center">
    <div class="flex my-10">
      <div class="text-5xl">「</div>
      <div class="flex justify-center items-center text-xl font-bold">{{ keyWord }}</div>
      <div class="text-5xl">」</div>
    </div>
    <div class="text-4xl">{{ theme }}</div>
  </div>
</template>

<style scoped>
hr {
  border: 0;
  height: 1px;
  background: #333;
  background-image: linear-gradient(to right, #ccc, #333, #ccc);
}
</style>