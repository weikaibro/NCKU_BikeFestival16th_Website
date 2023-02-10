<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>


<template>

  <main>
    <RouterView />
  </main>

</template>


<style>
* {
  max-width: 100%;
  /* font-family: "Noto Sans Traditional Chinese"; */
  /* background-color: white; */
  /* overflow-x: hidden; */
}
.v-enter-active, .v-leave-active {
  transition: opacity 0.75s;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}

.v-enter-to, .v-leave-from {
  opacity: 1;
}
</style>

