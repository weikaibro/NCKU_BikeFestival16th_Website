<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
const timer = ref(5);
onMounted(() => {
  setInterval(() => {
    timer.value--;
  }, 1000);
})

const router = useRouter();
setTimeout(() => {
  router.replace("/");
}, 5500);
</script>

<template>
  <div>
    <Navbar />
    <div class="flex justify-center items-center h-[700px] bg-black text-white text-2xl">
      請確認網址輸入正確
      <br> 將在 {{ timer }} 秒後回到首頁
    </div>

    <Footer />
  </div>
</template>
