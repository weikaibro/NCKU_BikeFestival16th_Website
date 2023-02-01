<script setup>
defineProps ({
  headerTitle: String
})
</script>

<template>
  <div class>
    <div class="lineHeader relative flex justify-center items-end 
      text-4xl font-bold tracking-wider">
      <div class="absolute bg-black rounded-full h-2 w-2 mb-3.5 left-32 max-sm:hidden"></div>
      {{ headerTitle }}
      <div class="absolute bg-black rounded-full h-2 w-2 mb-3.5 right-32 max-sm:hidden"></div>
    </div>
  </div>
</template>

<style scoped>
.lineHeader:before {
  content: "";
  display: inline-block;
  position: relative;
  width: 160px;
  height: 3px;
  background-color: black;
  margin-right: 24px;
  margin-bottom: 20.8px;
}

@media not all and (min-width: 640px) {
  .lineHeader:before {
    display: none;
  }
}

.lineHeader:after {
  content: "";
  display: inline-block;
  position: relative;
  width: 160px;
  height: 3px;
  background-color: black;
  margin-left: 24px;
  margin-bottom: 20.8px;
}

@media not all and (min-width: 640px) {
  .lineHeader:after {
    display: none;
  }
}

</style>