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
let marqueeMom = ref(null);
let progressBarMom = ref(null);
let videoName = ref("");
let srcName = reactive([
  "/src/assets/WelcometoAnimation.mp4",
  "/src/assets/SenatorArmstrong.mp4",
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
  let width =
    progressBarMom.value.offsetWidth *
    (event.target.currentTime / event.target.duration);
  progressBar.value.style.cssText = `width: ${width}px;`;
  if (event.target.currentTime >= event.target.duration) {
    next();
  }
};
const progressClick = (event) => {
  let width = event.pageX - progressBar.value.offsetLeft;
  progressBar.value.style.cssText = `width: ${width}px;`;
  videoPlayer.currentTime(
    videoPlayer.duration() * (width / progressBarMom.value.offsetWidth)
  );
  if (videoPlayer.currentTime() >= videoPlayer.duration()) {
    next();
  }
};

setInterval(() => {
  timer++;
  try {
    if (timer !== marqueeMom.value.offsetWidth) {
      marquee1.value.style.cssText = `--tw-translate-x: ${
        timer - marqueeMom.value.offsetWidth
      }px; transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));`;
      marquee2.value.style.cssText = `--tw-translate-x: ${
        timer - marquee1.value.offsetWidth
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
  <div class="bg-black h-screen overflow-y-auto">
    <!-- frame -->
    <div
      class="bg-white h-[70%] rounded-[3rem] mx-16 py-16 pl-20 pr-40 text-xl leading-9 overflow-y-auto max-sm:mx-4 max-sm:px-4 max-sm:text-base max-sm:h-[70%]"
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
      大學充值站，為你召集一群熱心且經驗滿滿的學長姐，淬鍊自身經驗，第一手分享給來參加的你。從課業、生活、人際關係、多元經驗和其他特殊主題出發，為你拼湊出大學生活的全貌。除了精彩的實體演講與展覽外，在各平台上也有收錄
      Podcast
      特輯。讓每個對大學生活充滿好奇的你，不受時間、距離限制，只要有網路收聽的地方，就是你探索大學生活的大平台！
      <br /><br />
      1. 動態校園講者：
      <br />
      在單車節活動兩日，舉辦共計八場的精彩演講，主題從多元經驗、課業經驗、生活經驗、人際關係到其他特殊主題分享應有盡有，讓充滿好奇與疑惑的你，面對面聆聽學長姐的經驗談，以最直接的方式一探大學生活究竟。在演講結束後，也設有問答時間，讓學長姐們直接答覆你的疑問！
      <br /><br />
      2. 大學甘苦談：
      <br />
      蒐集並彙整講者們經驗，以靜態展覽的形式，在唯農大樓走廊呈現。聽過演講的你，能夠再重新回味方才的精華；等待演講中的你，可先概覽講者小檔案；還在猶豫參加哪場演講的你，可以透過個人展鎖定適合自己的場次喔！
      <br /><br />
      3. 線上 Podcast：
      <br />
      總共 7
      集的單集，以訪談的形式，邀請校園講者線上免費串流。內容涵蓋但不限於學業、大學迷思、校內外活動的經驗分享。學長姐們將最真實的生活經驗，毫無保留地以聲音的形式傳承給你，陪伴你在活動現場以外，盡情探索成大的校園生活。

      <br /><br />
      <div class="text-3xl font-bold">活動資訊</div>
      <br />
      地點：校園講者與個人展將在光復校區唯農大樓舉行 <br /><br />
      ＊校園講者為限額講座，每場上限 30 人，有興趣參與演講記得到報名專區報名喔！
      <br />
      ＊如對以上內容有任何疑惑，歡迎斯訊成大單車節臉書粉專或 IG 官方帳號 <br />
      <br />
      <span class="text-3xl font-bold"> 專案地圖 </span>
      <iframe
        class="my-12"
        src="https://www.google.com/maps/d/embed?mid=1Vga0aGXdv9V-_rxXj1kB_nr8-IFem2I&ehbc=2E312F"
        width="1080"
        height="480"
      ></iframe>
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
    <div
      class="flex justify-end mt-6 mr-16 max-sm:float-none max-sm:justify-center max-sm:mr-0 hidden"
    >
      <!-- <RouterLink to="/Registration/Linktree/CollegeCharge"> -->

      <!-- </RouterLink> -->
    </div>
    <!-- bottom -->
    <div
      class="bg-black flex flex-shrink-0 max-sm:ml-0 justify-center max-sm:px-2 max-sm:flex-wrap"
    >
      <!-- progress frame -->
      <div
        class="w-[72vw] h-min mr-4 mt-2 flex items-start gap-y-0 flex-shrink-0 flex-wrap max-sm:mr-0 max-sm:w-full"
      >
        <!-- Marquee -->
        <div
          ref="marqueeMom"
          class="w-full overflow-hidden flex flex-nowrap mt-5 max-sm:mt-0"
        >
          <div ref="marquee1" class="w-1/2 bg-transparent text-white h-6 max-sm:h-min max-sm:text-xs">
            {{ videoName }}
          </div>
          <div ref="marquee2" class="w-1/2 bg-transparent text-white h-6 max-sm:h-min max-sm:text-xs">
            {{ videoName }}
          </div>
        </div>
        <!-- button * 4 -->
        <button
          class="text-white w-14 active:animate-ping hover:animate-bounce max-sm:w-8"
          @click="last"
        >
          <icon-ic-baseline-skip-previous class="w-full h-full" />
        </button>
        <button
          class="text-white w-14 active:animate-ping hover:animate-bounce max-sm:w-8"
          @click="play"
        >
          <icon-material-symbols-play-arrow class="w-full h-full" />
        </button>
        <button
          class="text-white w-14 active:animate-ping hover:animate-bounce max-sm:w-8"
          @click="pause"
        >
          <icon-ic-baseline-pause class="w-full h-full" />
        </button>
        <button
          class="text-white w-14 active:animate-ping hover:animate-bounce max-sm:w-8"
          @click="next"
        >
          <icon-ic-sharp-skip-next class="w-full h-full" />
        </button>
        <!-- progress bar -->
        <div
          ref="progressBarMom"
          class="w-[calc(100%_-_240px)] bg-transparent h-5 mt-[18px] mr-3 flex flex-shrink-0 flex-nowrap max-sm:mt-[6px] max-sm:w-[calc(100%_-_150px)]"
          @click="progressClick"
        >
          <div
            ref="progressBar"
            class="bg-white h-1 mt-2 mb-8 flex-shrink-0"
            style="width: 0px"
          ></div>
          <div class="bg-white w-5 h-5 mb-8 flex-shrink-0 rounded-full"></div>
        </div>
      </div>
      <div class="mt-5 max-sm:mt-0">
        <irregularButton btnTitle="即將開放" disable="true" />
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
