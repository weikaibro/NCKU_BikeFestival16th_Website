<script setup>
import { ref } from "vue";
import irregularButton from "./irregularButton.vue";
const checkBoxInfo1 = ref([
  { dept: "心理系", api: "entry.837131498" },
  { dept: "法律系", api: "entry.837131498" },
  { dept: "環工系", api: "entry.837131498" },
  { dept: "醫技系", api: "entry.837131498" },
  { dept: "外文系", api: "entry.837131498" },
  { dept: "不分系", api: "entry.837131498" },
  { dept: "不參加", api: "entry.837131498" },
]);
const checkBoxInfo2 = ref([
  { dept: "心理系", api: "entry.1152759436" },
  { dept: "藥學系", api: "entry.1152759436" },
  { dept: "環工系", api: "entry.1152759436" },
  { dept: "牙醫系", api: "entry.1152759436" },
  { dept: "法律系", api: "entry.1152759436" },
  { dept: "職治系", api: "entry.1152759436" },
  { dept: "不分系", api: "entry.1152759436" },
  { dept: "水利系", api: "entry.1152759436" },
  { dept: "不參加", api: "entry.1152759436" },
]);
const checkBoxInfo3 = ref([
  { dept: "醫學系", api: "entry.807095932" },
  { dept: "心理系", api: "entry.807095932" },
  { dept: "環工系", api: "entry.807095932" },
  { dept: "醫技系", api: "entry.807095932" },
  { dept: "法律系", api: "entry.807095932" },
  { dept: "外文系", api: "entry.807095932" },
  { dept: "不分系", api: "entry.807095932" },
  { dept: "歷史系", api: "entry.807095932" },
  { dept: "不參加", api: "entry.807095932" },
]);
const checkBoxInfo4 = ref([
  { dept: "心理系", api: "entry.244463617" },
  { dept: "藥學系", api: "entry.244463617" },
  { dept: "法律系", api: "entry.244463617" },
  { dept: "交管系", api: "entry.244463617" },
  { dept: "環工系", api: "entry.244463617" },
  { dept: "職治系", api: "entry.244463617" },
  { dept: "不分系", api: "entry.244463617" },
  { dept: "不參加", api: "entry.244463617" },
]);
const checkBoxInfo5 = ref([
  {
    speech:
      "3/4（六）10:45-11:15 醫學系 - 陳柏宇（從零開始備醫學—醫學系需要從小立志嗎？）",
    api: "entry.1780036049",
  },
  {
    speech:
      "3/4（六）11:30-12:00 藥學系 - 傅芊雯、吳姿蓉（關於申請面試你「藥」知道的事）",
    api: "entry.1780036049",
  },
  {
    speech:
      "3/4（六）15:15-15:45 不分系 - 邱耀陞（面試等於演戲？面試官到底想要什麼？）",
    api: "entry.1780036049",
  },
  {
    speech:
      "3/5（日）10:45-11:15 牙醫系 - 張方慈、王嘉榆（關於牙醫面試你必須要知道的幾件事）",
    api: "entry.1780036049",
  },
  {
    speech:
      "3/5（日）11:30-12:00 藥學系 - 傅芊雯、蕭怡得（關於申請面試你「藥」知道的事—藥學與醫技面試經驗分享）",
    api: "entry.1780036049",
  },
  {
    speech: "3/5（日）15:15-15:45 醫學系 - 蔡宜貞 （備審二階經驗分享）",
    api: "entry.1780036049",
  },
  { speech: "不參加", api: "entry.1780036049" },
]);
</script>

<template>
  <div>
    <form
      action="https://docs.google.com/forms/u/1/d/e/1FAIpQLScDvhJuAJisZGoLG29si_UMhGmxcNYNqlGjLYmLVjJNUlXoiQ/formResponse"
      method="POST"
      onsubmit="submitted=true"
      target="hidden_iframe"
    >
      <div class="mt-12">
        <p class="text-lg my-6">電子信箱</p>
        <input
          name="entry.1542886366"
          class="inputEff"
          type="text"
          autocomplete="off"
          required
        />
      </div>
      <div class="mt-12">
        <p class="text-lg my-6">你的名字</p>
        <input
          name="entry.345686533"
          class="inputEff"
          type="text"
          autocomplete="off"
          required
        />
      </div>
      <div class="mt-12">
        <p class="text-lg my-6">
          就讀學校及年級
          <br />例：高雄中學高三
        </p>
        <input
          name="entry.1279699445"
          class="inputEff"
          type="text"
          autocomplete="off"
          required
        />
      </div>
      <div class="mt-12">
        <p class="text-lg my-6">聯絡電話</p>
        <input
          name="entry.826079181"
          class="inputEff"
          type="text"
          autocomplete="off"
          required
        />
      </div>
      <div class="mt-12">
        <p class="text-lg my-6">
          常用的聯絡信箱
          <br />
          報名後要記得確認信箱喔～
        </p>
        <input
          name="entry.1951500596"
          class="inputEff"
          type="text"
          autocomplete="off"
          required
        />
      </div>
      <div class="mt-12">
        <p class="text-lg my-6">你的臉書連結</p>
        <input
          name="entry.1433765434"
          class="inputEff"
          type="text"
          autocomplete="off"
          required
        />
      </div>

      <div class="mt-28">
        <div class="text-3xl mb-10">B1.模擬面試</div>
        <p class="text-lg">
          📣 要仔細閱讀完這裡的說明再繼續填寫表單喔！

          <br /><br />
          模擬面試分為三種形式：個人面試、團體面試、跑關面試 <br />
          個人面試科系（15分鐘）：心理系、藥學系、歷史系、交管系、外文系、水利系
          <br />
          團體面試科系（25分鐘）：法律系、環工系、醫技系 <br />
          跑關面試科系（時長不同）：醫學系、牙醫系、職治系

          <br /><br />
          表單問題將時段分為兩日的上午下午，選項為該時段參與模擬面試的科系。
          <br />
          請依據時段及科系勾選（可在時段中勾選不參加），四個問題至多勾選五個志願，並請於第五個問題處填寫前面勾選項目的志願序。原則上以第一志願的時段及科系做安排，若其他志願仍有餘額也會安排參加兩場或三場。

          <br /><br />
          最終面試的科系及時段會再寄發確認信件，記得要確認常用信箱喔！
        </p>
      </div>

      <p class="mt-10 mb-4 text-2xl">3/4（六）上午 9:00 - 12:00</p>
      <label
        class="checkBoxEff"
        v-for="info in checkBoxInfo1"
        :key="checkBoxInfo1.indexOf(info)"
      >
        <input
          :name="info.api"
          type="checkbox"
          :value="info.dept"
          class="cursor-pointer"
        />
        {{ info.dept }}
      </label>

      <p class="mt-10 mb-4 text-2xl">3/4（六）下午 13:30 - 16:30</p>
      <label
        class="checkBoxEff"
        v-for="info in checkBoxInfo2"
        :key="checkBoxInfo2.indexOf(info)"
      >
        <input
          :name="info.api"
          type="checkbox"
          :value="info.dept"
          class="cursor-pointer"
        />
        {{ info.dept }}
      </label>

      <p class="mt-10 mb-4 text-2xl">3/5（日）上午 9:00 - 12:00</p>
      <label
        class="checkBoxEff"
        v-for="info in checkBoxInfo3"
        :key="checkBoxInfo3.indexOf(info)"
      >
        <input
          :name="info.api"
          type="checkbox"
          :value="info.dept"
          class="cursor-pointer"
        />{{ info.dept }}
      </label>

      <p class="mt-10 mb-4 text-2xl">3/5（日）下午 13:30 - 16:00</p>
      <label
        class="checkBoxEff"
        v-for="info in checkBoxInfo4"
        :key="checkBoxInfo4.indexOf(info)"
      >
        <input
          :name="info.api"
          type="checkbox"
          :value="info.dept"
          class="cursor-pointer"
        />{{ info.dept }}
      </label>

      <div class="mt-12">
        <p class="text-lg my-6">
          上述勾選的科系及時段的志願序？（會以此作為優先排序的依據） 例：3/4上午
          心理系、3/4下午 心理系
        </p>
        <input
          name="entry.2013155686"
          class="inputEff"
          type="text"
          autocomplete="off"
          required
        />
      </div>
      <div class="mt-12">
        <p class="text-lg my-6">有其他想問的嗎？</p>
        <input
          name="entry.567554739"
          class="inputEff"
          type="text"
          autocomplete="off"
          required
        />
      </div>

      <div class="mt-24 mb-4">
        <div class="text-2xl mb-6">B2. 學長姐經驗分享報名</div>
        <div class="text-lg">
          報名前要注意時間上沒有和前面報名的模擬面試或其他活動衝突喔～
          <br />
          報名後會寄出確認信件至前面填的常用信箱！
        </div>
      </div>

      <div class="mt-6 mb-4">
        <p class="text-lg">想參加的經驗分享場次</p>
        <label class="checkBoxEff" v-for="info in checkBoxInfo5" :key="checkBoxInfo5.indexOf(info)">
          <input
            :name="info.api"
            type="checkbox"
            :value="info.speech"
          />{{ info.speech }}
        </label>
      </div>

      <div class="pt-12">
        <p class="text-lg my-6">有其他想問的嗎？</p>
        <input
          name="entry.1205062714"
          class="inputEff"
          type="text"
          autocomplete="off"
          required
        />
      </div>

      <div class="py-20 w-[300px]">
        <input id="customBtn" type="submit" hidden />
        <label for="customBtn">
          <irregularButton btnTitle="繼續" />
        </label>
      </div>
    </form>
  </div>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .inputEff {
    @apply transition duration-200 border-b bg-transparent w-[1000px]
        hover:border-pink-600 focus:border-pink-600 focus:outline-none focus:border-b-2;
  }
}

/* ref: https://moderncss.dev/pure-css-custom-checkbox-style/ */
.checkBoxEff {
  font-size: 1.2rem;
  line-height: 1.1;

  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;

  margin-top: 1em;
  width: 1500px;
  cursor: pointer;
}

input[type="checkbox"] {
  /* Add if not using autoprefixer */
  -webkit-appearance: none;
  appearance: none;
  /* For iOS < 15 to remove gradient background */
  background-color: transparent;
  /* Not removed via appearance */
  margin: 0;

  width: 1.15em;
  height: 1.15em;
  border: 1px solid;
  border-radius: 0.15em;
  /* transform: translateY(-0.075em); */

  display: grid;
  place-content: center;
}

input[type="checkbox"]::before {
  content: "";
  width: 0.85em;
  height: 0.85em;
  clip-path: polygon(19% 0%, 32% 0, 8% 34%, 66% 0, 95% 0, 10% 74%, 100% 23%, 100% 41%, 40% 88%, 100% 80%, 100% 90%, 14% 100%, 88% 40%, 0 88%, 0 69%, 76% 6%, 0 49%, 0 31%);
  transform: scale(0);
  /* transform-origin: bottom left; */
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em white;
  background-color: CanvasText;
}

input[type="checkbox"]:checked::before {
  transform: scale(1);
}
</style>
