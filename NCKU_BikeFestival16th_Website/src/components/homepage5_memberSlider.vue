<script setup>
import { ref } from 'vue'

let canvas = ref.canvas;
let ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(100, 75);
ctx.lineTo(150, 50);
ctx.lineTo(100, 25);
ctx.closePath();
ctx.fillStyle = "blue";
ctx.fill();

</script>

<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>