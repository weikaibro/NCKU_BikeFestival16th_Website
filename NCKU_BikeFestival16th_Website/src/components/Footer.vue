<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
const list = ref([
  { title: "活動資訊", to: "/Information" },
  { title: "活動介紹", to: "/Introduction" },
  { title: "主題專欄", to: "/ThemeColumn" },
  { title: "科系手冊", to: "/DeptManual" },
  { title: "合作夥伴", to: "/Partner" },
  { title: "紀念品預購", to: "/SouvenirPreorder" },
  { title: "團體報名", to: "/GroupRegistration" },
]);
</script>

<template>
  <div class="bg-black text-white inset-x-0 relative py-4 flex">
    
    <div class="mx-6 items-center">
      <div class="font-semibold mb-2">國立成功大學第16屆單車節</div>
      <ul>
        <li>
          <RouterLink 
            v-for="value in list"
            :key="list.indexOf(value)"
            :to="value.to"
          >
            <a
              href="#"
              class="text-sm"
            >{{ value.title}}<br/>
            </a>
          </RouterLink>
        </li>
      </ul>
    </div>

    <div class="absolute bottom-0 right-0 flex items-center">
      <a href="https://www.facebook.com/NCKUbikefestival" target="_blank" rel="noreferrer noopenner">
        <picture>
          <source srcset="../assets/facebook.webp" type="image/webp" />
          <img
            src="../assets/facebook.svg"
            alt="facebook"
            class="w-10 mr-6 mb-6"
          />
        </picture>
      </a>
      <a href="https://www.instagram.com/nckubike_official/?fbclid=IwAR0t4smhGxWpPVr6ql3my23jcX2KKkEXFuVnT6oPiFF6BgYGRtOTmt4m0Cw" target="_blank" rel="noreferrer noopenner">
        <picture>
          <source srcset="../assets/instagram.webp" type="image/webp" />
          <img
            src="../assets/instagram.svg"
            alt="instagram"
            class="w-10 mr-6 mb-6"
          />
        </picture>
      </a>
      <a href="#" target="_blank" rel="noreferrer noopenner">
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
