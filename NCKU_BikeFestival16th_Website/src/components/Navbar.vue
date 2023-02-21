<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from 'vue-router';

const headers = ref([
  { title: "活動資訊", link: "/Information" },
  { title: "活動介紹", link: "/Introduction" },
  { title: "主題專欄", link: "/ThemeColumn" },
  { title: "科系手冊", link: "/DeptManual"},
  { title: "合作夥伴", link: "/Partner" },
  { title: "紀念品介紹", link: "/SouvenirPreorder" },
  { title: "團體報名", link: "/GroupRegistration"}
]);

const showMenu = ref(false);
const show = () => {
  showMenu.value = !showMenu.value;
};
</script>

<template>
  <div
    class="sticky top-0 z-50 flex justify-between items-center bg-black h-16 lg:h-20"
  >
    <div>
      <RouterLink to="/">
        <picture>
          <!-- 成大單車節 logo -->
          <source srcset="../assets/logo.webp" type="image/webp" />
          <img
            src="../assets/logo.svg"
            alt="Logo"
            class="h-12 lg:h-16 mx-3 lg:mx-6"
          />
        </picture>
      </RouterLink>
    </div>

    <!-- <div class="gcse-searchbox w-[300px]">
      
    </div> -->

    <div class="hidden space-x-8 lg:flex">
      <ul class="float-right w-auto mx-6 text-white">
        <li>
          <RouterLink 
            v-for="header in headers" 
            :key="headers.indexOf(header)"
            :to="header.link" 
            class="h-10 rounded-lg px-4 py-5 transition-all text-xl hover:bg-myblue"
          >
            {{ header.title }}
          </RouterLink>
        </li>
      </ul>
    </div>

    <!-- RWD -->
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
  </div>

  <!-- RWD -->
  <div class="relative">
    <div class="absolute z-50 flex flex-col w-screen text-white text-center lg:hidden" v-if="showMenu">
      <div
        v-for="header in headers" 
        :key="headers.indexOf(header)"
        class="flex justify-center py-1 items-center text-lg text-white active:bg-myblue bg-black"
      >
        <RouterLink :to="header.link">
          {{ header.title }}
        </RouterLink>
      </div>
    </div>
  </div>


</template>
