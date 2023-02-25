<script setup>
import { ref, onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";

const headers = ref([
  { title: "活動資訊", link: "/Information" },
  { title: "活動介紹", link: "/Introduction" },
  { title: "主題專欄", link: "/ThemeColumn" },
  { title: "科系手冊", link: "/DeptManual" },
  { title: "合作夥伴", link: "/Partner" },
  { title: "紀念品介紹", link: "/SouvenirPreorder" },
  { title: "團體報名", link: "/GroupRegistration" },
]);

const showMenu = ref(false);
const show = () => {
  showMenu.value = !showMenu.value;
};

onMounted(() => {
  const currentUrl = window.location.href;
  const navLists = document.querySelectorAll(".navLists");
  navLists.forEach((navList) => {
    // console.log(navList.href)
    if (currentUrl.includes(navList)) {
      navList.classList.add("bg-myblue");
    } else {
      navList.classList.remove("bg-myblue");
    }
  });
});
</script>

<template>
  <div
    class="fixed top-0 z-50 w-screen flex justify-between items-center bg-black h-20"
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

    <!-- computer list -->
    <div class="max-lg:hidden space-x-8">
      <ul class="text-white flex justify-end items-end mr-6">
        <li>
          <RouterLink
            v-for="header in headers"
            :key="headers.indexOf(header)"
            :to="header.link"
            class="navLists h-10 rounded-lg px-4 py-5 transition-all mx-1 text-xl hover:bg-myblue"
          >
            {{ header.title }}
          </RouterLink>
        </li>
      </ul>
    </div>

    <!-- mobile hamburger icon -->
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

  <!-- mobile list -->
  <div
    class="fixed top-20 z-40 flex flex-col w-screen text-white text-center bg-black lg:hidden"
    v-if="showMenu"
  >
    <div
      v-for="header in headers"
      :key="headers.indexOf(header)"
      class="flex justify-center py-1.5 items-center text-lg text-white active:bg-myblue"
    >
      <RouterLink :to="header.link">
        {{ header.title }}
      </RouterLink>
    </div>
  </div>
</template>

