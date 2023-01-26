<script setup>
import { ref } from 'vue'
    const list = ref(["活動資訊", "活動介紹", "主題專欄", "科系博覽", "合作夥伴", "紀念品預購"]);
    const showMenu = ref(false);
    const show = () => {
        showMenu.value = !showMenu.value;
    }
</script>
<template>
    <nav class="flex justify-between h-16 lg:h-20 bg-black items-center sticky top-0 inset-x-0">
        <div>
            <a href="#">
                <picture>
                  <source srcset="../assets/logo.webp" type="image/webp">
                  <img src="../assets/logo.svg" alt="Logo" class="h-12 lg:h-16 mx-3 lg:mx-6">
                </picture>
            </a>
        </div>
        <div class="gcse-searchbox"></div>
        <div class="hidden space-x-8 lg:flex">
            <ul class="float-right text-white w-auto mx-6">
                <li><a href="#" v-for="(value, index) in list" :key="index" class="h-10 mr-px hover:bg-myblue rounded px-4 py-5 transition-all font-medium">{{ value }}</a></li>
            </ul>
        </div>
            <button @click="show" class="lg:hidden absolute right-0 m-3 py-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none" 
                    viewBox="0 0 24 24"
                    stroke="white"
                >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
            <ul class="lg:hidden h-10 text-white text-center mt-20 m-3" v-if="showMenu">
                <li><a href="#" v-for="(value, index) in list" :key="index" class="w-32 px-4 py-2 font-medium bg-black block">{{ value }}<br></a></li>
            </ul>
        
      </nav>
</template>
