<script setup>
    defineProps({
        text: String,
        Onclick: String
    })
</script>
<template>
    <div
    class="
        w-24 h-8 lg:w-32 lg:h-10
        px-6 lg:px-9 
        rounded-full
        bg-black hover:bg-myblue active:bg-myblue
        hover:scale-105 active:scale-95,
        transition-all
        text-white text-xl lg:text-2xl font-medium"
    >
    <button onclick="v-bind:location.href='Onclick'" class="align-middle">{{ text }}</button>
    </div>
</template>
