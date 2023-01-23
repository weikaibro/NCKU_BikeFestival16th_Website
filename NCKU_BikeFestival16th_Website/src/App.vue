<script setup>
import { RouterLink, RouterView } from "vue-router";

</script>


<template>
  <header>
    <nav class="flex underline underline-offset-8">
      <RouterLink to="/" class="p-3">Homepage</RouterLink>
      <RouterLink to="/registration" class="p-3">Registration</RouterLink>
      <RouterLink to="/Information" class="p-3">Information</RouterLink>
      <RouterLink to="/Introduction" class="p-3">Introduction</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>