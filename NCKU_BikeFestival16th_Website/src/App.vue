<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav class="flex underline underline-offset-8">
      <RouterLink to="/Information" class="p-3">Information</RouterLink>
      <RouterLink to="/Introduction" class="p-3">Introduction</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
