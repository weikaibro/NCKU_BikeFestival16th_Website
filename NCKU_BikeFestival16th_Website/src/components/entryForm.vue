<script setup>

</script>

<template>
  <div class="flex flex-col justify-items-center items-center">
    <p class="text-4xl">表單名稱</p>
    <form>
      <div class="p-2">
        <p class="text-lg my-2">Name</p>
        <input class="transition duration-200 border-b 
        hover:border-pink-600 focus:border-pink-600 focus:outline-none focus:border-b-2" 
        type="text" autocomplete="off" required>
      </div>
      <div class="p-2">
        <p class="text-lg my-2">E-mail</p>
        <input class="transition duration-200 border-b 
        hover:border-pink-600 focus:border-pink-600 focus:outline-none focus:border-b-2"
        type="email" autocomplete="off" required>
      </div>
      <div class="p-2">
        <p class="text-lg my-2">Phone Number</p>
        <input class="transition duration-200 border-b 
        hover:border-pink-600 focus:border-pink-600 focus:outline-none focus:border-b-2" 
        type="tel" autocomplete="off" pattern="[0-9]{10}" required>
      </div>
      <input type="submit">
    </form>
  </div>
</template>
