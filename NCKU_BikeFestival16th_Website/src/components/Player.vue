<script setup>
import { ref, reactive, onMounted } from "vue";
import { RouterLink } from "vue-router";
import videojs from "video.js";
import irregularButton from "./irregularButton.vue";
import IconIcBaselinePause from "~icons/ic/baseline-pause";
import IconIcSharpSkipNext from "~icons/ic/sharp-skip-next";
import IconIcBaselineSkipPrevious from "~icons/ic/baseline-skip-previous";
import IconMaterialSymbolsPlayArrow from "~icons/material-symbols/play-arrow";

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
  <!-- top + bottom -->
  <div class="bg-black w-full h-full flex flex-col gap-y-4">
    <!-- frame -->
    <div
      class="bg-white h-[600px] rounded-[3rem] mx-16 py-16 pl-20 pr-40 text-xl leading-9 overflow-y-auto"
    >
      <video
        id="myVideo"
        class="rounded-3 h-[499px] hidden"
        data-setup='{ "autoplay":false, "controls": false }'
        @click="playOrPause"
        @timeupdate="progressControl"
      ></video>
      <div class="text-3xl font-bold">大學充值站</div>
      <br />
      大學充值站，為你召集一群熱心且經驗滿滿的學長姐，淬鍊自身經驗，第一手分享給來參加的你。從課業、生活、人際關係、多元經驗和其他特殊主題出發，為你拼湊出大學生活的全貌。除了精彩的實體演講與展覽外，在各平台上也有收錄 Podcast 特輯。讓每個對大學生活充滿好奇的你，不受時間、距離限制，只要有網路收聽的地方，就是你探索大學生活的大平台！
      <br /><br />
      1. 動態校園講者：
      <br />
      在單車節活動兩日，舉辦共計八場的精彩演講，主題從多元經驗、課業經驗、生活經驗、人際關係到其他特殊主題分享應有盡有，讓充滿好奇與疑惑的你，面對面聆聽學長姐的經驗談，以最直接的方式一探大學生活究竟。在演講結束後，也設有問答時間，讓學長姐們直接答覆你的疑問！
      <br /><br />
      2. 靜態個人展：
      <br />
      蒐集並彙整講者們經驗，以靜態展覽的形式，在唯農大樓走廊呈現。聽過演講的你，能夠再重新回味方才的精華；等待演講中的你，可先概覽講者小檔案；還在猶豫參加哪場演講的你，可以透過個人展鎖定適合自己的場次喔！
      <br /><br />
      3. 線上 Podcast：
      <br />
      總共 7 集的單集，以訪談的形式，邀請校園講者線上免費串流。內容涵蓋但不限於學業、大學迷思、校內外活動的經驗分享。學長姐們將最真實的生活經驗，毫無保留地以聲音的形式傳承給你，陪伴你在活動現場以外，盡情探索成大的校園生活。

      <br /><br />
      <div class="text-3xl font-bold">活動資訊</div>
      <br />
      地點：校園講者與個人展將在光復校區唯農大樓舉行 <br /><br>
      ＊校園講者為限額講座，每場上限 30 人，有興趣參與演講記得到報名專區報名喔！
      <br />
      ＊如對以上內容有任何疑惑，歡迎斯訊成大單車節臉書粉專或 IG 官方帳號 <br />
      <br />
      <span class="text-3xl font-bold"> 專案地圖 </span>
      <iframe class="my-12" src="https://www.google.com/maps/d/embed?mid=1Vga0aGXdv9V-_rxXj1kB_nr8-IFem2I&ehbc=2E312F" width="1080" height="480"></iframe>
      <div class="text-3xl font-bold">籌備團隊</div>
      <br />
      部長 外文114 劉世瑜
      <br />
      部員 不分115 張百鴻 <br />
      部員 會計114 李采諭 <br />
      部員 工資管114 魯倫愷 <br />
      部員 電機115 魏子翔 <br />
      部員 機械114 鄭皓澤
    </div>
    <!-- bottom -->
    <div class="bg-black flex justify-between ml-12 flex-shrink-0">
      <!-- progress frame -->
      <div
        class="w-[1200px] ml-4 mt-2 flex items-start gap-y-0 flex-shrink-0 flex-wrap"
      >
        <!-- Marquee -->
        <div class="w-[1200px] overflow-hidden flex flex-nowrap">
          <div ref="marquee1" class="w-[600px] bg-transparent text-white h-6">
            {{ videoName }}
          </div>
          <div ref="marquee2" class="w-[600px] bg-transparent text-white h-6">
            {{ videoName }}
          </div>
        </div>
        <!-- button * 4 -->
        <button
          class="text-white w-16 active:animate-ping hover:animate-bounce"
          @click="last"
        >
          <icon-ic-baseline-skip-previous class="w-full h-full" />
        </button>
        <button
          class="text-white w-16 active:animate-ping hover:animate-bounce"
          @click="play"
        >
          <icon-material-symbols-play-arrow class="w-full h-full" />
        </button>
        <button
          class="text-white w-16 active:animate-ping hover:animate-bounce"
          @click="pause"
        >
          <icon-ic-baseline-pause class="w-full h-full" />
        </button>
        <button
          class="text-white w-16 active:animate-ping hover:animate-bounce"
          @click="next"
        >
          <icon-ic-sharp-skip-next class="w-full h-full" />
        </button>
        <!-- progress bar -->
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

      <div class="float-right mt-8 mr-16">
        <!-- <RouterLink to="/Registration/Linktree/CollegeCharge"> -->
          <irregularButton btnTitle="即將開放" disable="true" />
        <!-- </RouterLink> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track-piece {
  box-shadow: inset 0 0 5px transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(0, 60, 210);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(6, 60, 169);
}

.fontEff {
  color: rgb(6, 60, 169);
  font-weight: bolder;
}
</style>
