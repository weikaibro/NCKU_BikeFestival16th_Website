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
        <source srcset="../assets/playerCircle.webp" type="image/webp" />
        <img src="../assets/playerCircle.svg" alt="播放鍵" />
      </picture>
    </a>
  </div>
</template>
