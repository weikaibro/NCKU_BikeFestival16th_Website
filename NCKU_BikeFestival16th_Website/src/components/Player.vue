<script setup>
import videojs from "video.js";
import IconIcBaselinePause from "~icons/ic/baseline-pause";
import IconIcSharpSkipNext from "~icons/ic/sharp-skip-next";
import IconIcBaselineSkipPrevious from "~icons/ic/baseline-skip-previous";
import IconMaterialSymbolsPlayArrow from "~icons/material-symbols/play-arrow";
import { ref, reactive, onMounted } from "vue";
let videoPlayer = {};
let progressBar = ref(null);
let marquee1 = ref(null);
let marquee2 = ref(null);
let videoName = ref("");
let srcName = reactive([
  "/src/assets/Welcome to Animation.mp4",
  "/src/assets/Senator Armstrong running at you then punching you Bluescreen.mp4",
]);
let current = ref(0);
let timer = 0;

onMounted(() => {
  videoPlayer = videojs("myVideo");
  srcControl();
});

const srcControl = () => {
  videoPlayer.src({ type: "video/mp4", src: srcName[current.value] });
  videoName.value = videoPlayer.currentSrc().split("/").pop().split(".")[0];
};

let isPlay = true;

const play = () => {
  videoPlayer.play(); // 播放
  isPlay = true;
};
const pause = () => {
  videoPlayer.pause(); // 暫停
  isPlay = false;
};
const playOrPause = () => {
  if (isPlay) {
    pause();
  } else play();
};
const next = () => {
  current.value++;
  current.value %= srcName.length;
  if (current.value === srcName.length) {
    current.value = 0;
  }
  srcControl();
  timer = 0;
};
const last = () => {
  current.value--;
  current.value %= srcName.length;
  if (current.value < 0) {
    current.value = srcName.length - 1;
  }
  srcControl();
  timer = 0;
};
const progressControl = (event) => {
  let width = 920 * (event.target.currentTime / event.target.duration);
  progressBar.value.style.cssText = `width: ${width}px;`;
  if (event.target.currentTime >= event.target.duration) {
    next();
  }
};
const progressClick = (event) => {
  let width = event.pageX - 320;
  progressBar.value.style.cssText = `width: ${width}px;`;
  videoPlayer.currentTime(videoPlayer.duration() * (width / 920));
  if (videoPlayer.currentTime() >= videoPlayer.duration()) {
    next();
  }
};

setInterval(() => {
  timer++;
  try {
    if (timer !== 1200) {
      marquee1.value.style.cssText = `--tw-translate-x: ${
        timer - 1200
      }px; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));`;
      marquee2.value.style.cssText = `--tw-translate-x: ${
        timer - 600
      }px; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));`;
    } else {
      marquee1.value.style.cssText = `--tw-translate-x: -1200px; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));`;
      marquee2.value.style.cssText = `--tw-translate-x: -600px; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));`;
      timer = 0;
    }
  } catch {
    location.reload();
  }
}, 30);
</script>

<template>
  <link href="https://vjs.zencdn.net/7.21.1/video-js.css" rel="stylesheet" />
  <div class="bg-black w-full h-full pt-8 flex flex-col gap-y-4">
    <div
      class="bg-white h-[500px] rounded-[3rem] flex justify-center mx-16 flex-shrink-0"
    >
      <video
        id="myVideo"
        class="rounded-3 h-[499px]"
        data-setup='{ "autoplay":true, "controls": false }'
        @click="playOrPause"
        @timeupdate="progressControl"
      ></video>
    </div>
    <div class="bg-black h-auto flex justify-between mx-12 flex-shrink-0">
      <div
        class="w-[1200px] ml-4 mt-2 flex items-start gap-y-0 flex-shrink-0 flex-wrap"
      >
        <div class="w-[1200px] overflow-hidden flex flex-nowrap">
          <div ref="marquee1" class="w-[600px] bg-transparent text-white h-6">
            {{ videoName }}
          </div>
          <div ref="marquee2" class="w-[600px] bg-transparent text-white h-6">
            {{ videoName }}
          </div>
        </div>

        <button class="text-white w-16" @click="last">
          <icon-ic-baseline-skip-previous class="w-full h-full" />
        </button>
        <button class="text-white w-16" @click="play">
          <icon-material-symbols-play-arrow class="w-full h-full" />
        </button>
        <button class="text-white w-16" @click="pause">
          <icon-ic-baseline-pause class="w-full h-full" />
        </button>
        <button class="text-white w-16" @click="next">
          <icon-ic-sharp-skip-next class="w-full h-full" />
        </button>

        <div
          class="w-[900px] bg-transparent h-5 mt-[24px] mb-7 flex flex-shrink-0 flex-nowrap"
          @click="progressClick"
        >
          <div
            ref="progressBar"
            class="bg-white h-1 mt-2 mb-7 flex-shrink-0"
            style="width: 0px"
          ></div>
          <div class="bg-white w-5 h-5 mb-7 flex-shrink-0 rounded-full"></div>
        </div>
      </div>
      <button
        class="w-52 h-[84px] border border-white text-white text-center text-3xl mt-2 shrink-0"
      >
        即刻報名
      </button>
    </div>
  </div>
</template>


<style scoped></style>
