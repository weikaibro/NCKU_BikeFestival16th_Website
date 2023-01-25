<script setup>

</script>

<template>
  <div class="sliderContainer m-0 p-0 relative">
    <div>
      <img src="../assets/official_slider_1.png" alt="成大單車節">
    </div>
    <div>
      <img src="../assets/official_slider_1.png" alt="成大單車節">
    </div>
    <div>
      <img src="../assets/official_slider_1.png" alt="成大單車節">
    </div>
  </div>
</template>

<style scoped>
.sliderContainer div {
  position: absolute;
  left: 0;
  top: 0;
  left: 0%;
  max-width: 100%;
  opacity: 0;
  z-index: -1;
  animation: sliderTrans 15s linear infinite;
  -webkit-animation: sliderTrans 15s linear infinite;
}

.sliderContainer div img {
  width: 100%;
}

.sliderContainer div:nth-child(3) {
  animation-delay: 0s;
  -webkit-animation-delay: 0s;
}

.sliderContainer div:nth-child(2) {
  animation-delay: 5s;
  -webkit-animation-delay: 5s;
}

.sliderContainer div:nth-child(1) {
  animation-delay: 10s;
  -webkit-animation-delay: 10s;
}

@keyframes sliderTrans {
  6.67% {
    opacity: 1;
    filter: alpha(opacity=100);
    left: 0;
    /* 0 - 1秒 滑入*/
  }
  33.35% {
    opacity: 1;
    filter: alpha(opacity=100);
    left: 0;
    /* 1- 5秒靜止*/
  }
  40.02% {
    opacity: 1;
    filter: alpha(opacity=100);
    left: -100%;
    /* 5-6秒滑出*/
  }
  43.35% {
    opacity: 0;
    filter: alpha(opacity=0);
    left: -100%;
    /* 6-6.5秒變透明*/
  }
  46.69% {
    opacity: 0;
    filter: alpha(opacity=0);
    left: 0%;
    /* 6.5-7秒回到起始位置*/
  }
}
</style>