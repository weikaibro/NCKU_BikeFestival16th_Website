<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>


    <nav class="flex underline underline-offset-8">
      <RouterLink to="/" class="p-3">Home</RouterLink>
      <RouterLink to="/registration" class="p-3">registration</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
