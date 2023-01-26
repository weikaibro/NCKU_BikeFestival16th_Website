<script setup>
defineProps({
  link: String,
});
</script>

<template>
  <div
    :class="[
      'hover:scale-105 active:scale-95',
      'transition-all',
      'w-14 lg:w-16',
    ]"
  >
    <a v-bind:href="link">
      <picture>
        <source srcset="../assets/icon _play circle_.webp" type="image/webp" />
        <img src="../assets/icon _play circle_.svg" alt="播放鍵" />
      </picture>
    </a>
  </div>
</template>
