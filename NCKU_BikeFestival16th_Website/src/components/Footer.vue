<script setup>
import { ref } from "vue";
const list = ref([
  "活動資訊",
  "活動介紹",
  "主題專欄",
  "科系博覽",
  "合作夥伴",
  "紀念品預購",
]);
</script>

<template>
  <div class="bg-black text-white z-0 inset-x-0 relative bottom-0 py-4 flex">
    <div class="mx-6 items-center">
      <span class="font-semibold mb-4">國立成功大學第16屆單車節</span>
      <ul>
        <li>
          <a
            href="#"
            v-for="(value, index) in list"
            :key="index"
            class="text-sm"
            >{{ value }}<br
          /></a>
        </li>
      </ul>
    </div>

    <div class="absolute bottom-0 right-0 flex items-center">
      <a href="#">
        <picture>
          <source srcset="../assets/facebook.webp" type="image/webp" />
          <img
            src="../assets/facebook.svg"
            alt="facebook"
            class="w-10 mr-6 mb-6"
          />
        </picture>
      </a>
      <a href="#">
        <picture>
          <source srcset="../assets/instagram.webp" type="image/webp" />
          <img
            src="../assets/instagram.svg"
            alt="instagram"
            class="w-10 mr-6 mb-6"
          />
        </picture>
      </a>
      <a href="#">
        <picture>
          <source srcset="../assets/youtube.webp" type="image/webp" />
          <img
            src="../assets/youtube.svg"
            alt="youtube"
            class="w-10 mr-6 mb-6"
          />
        </picture>
      </a>
    </div>
  </div>
</template>
