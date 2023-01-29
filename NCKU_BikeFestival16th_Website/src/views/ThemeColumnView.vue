<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import Navbar from "../components/Navbar.vue";
import irregularButton from "../components/irregularButton.vue";
// const btn = ref([
//   { title: "活動資訊", link: "/Information"},
//   { title: "活動介紹", link: "/Introduction"},
//   { title: "主題專欄", link: "/ThemeColumn"},
//   { title: "科系手冊", link: ""},
//   { title: "合作夥伴", link: ""},
//   { title: "紀念品預購", link: ""} 
// ]);

</script>

<template>
  <div class="bgImg overflow-hidden h-screen">
    <Navbar />
    <div class="h-[90%] grid grid-cols-3 place-items-center">
      <!-- <RouterLink 
        v-for="header in btn" 
        :key="index"
        :to="header.link" 
        class="h-10 rounded-lg px-4 py-5 transition-all text-xl hover:bg-myblue"
      >
        <irregularButton btnTitle="{{ header.title }}" />
      </RouterLink> -->
      
      <irregularButton btnTitle="文學院" />
      <irregularButton btnTitle="文學院" />
      <irregularButton btnTitle="文學院" />
      <irregularButton btnTitle="文學院" />
      <irregularButton btnTitle="文學院" />
      <irregularButton btnTitle="文學院" />
      <irregularButton btnTitle="文學院" />
      <irregularButton btnTitle="文學院" />
      <irregularButton class="col-span-3" btnTitle="文學院" />
    </div>
  </div>
</template>

<style scoped>
.bgImg {
  background-image: url("../assets/background.png");
  background-size: 100% 100%;
}
</style>
