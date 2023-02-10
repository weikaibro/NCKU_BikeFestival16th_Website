<script setup>
import { ref } from "vue";
import irregularButton from "../../../../components/irregularButton.vue";
const checkBoxInfo1 = ref([
  { dept: "心理系", api: "entry.837131498" },
  { dept: "法律系", api: "entry.837131498" },
  { dept: "環工系", api: "entry.837131498" },
  { dept: "醫技系", api: "entry.837131498" },
  { dept: "外文系", api: "entry.837131498" },
  { dept: "不分系（特殊選材管道）", api: "entry.837131498" },
  { dept: "不參加", api: "entry.837131498" },
]);
const checkBoxInfo2 = ref([
  { dept: "心理系", api: "entry.1152759436" },
  { dept: "藥學系", api: "entry.1152759436" },
  { dept: "環工系", api: "entry.1152759436" },
  { dept: "牙醫系", api: "entry.1152759436" },
  { dept: "法律系", api: "entry.1152759436" },
  { dept: "職治系", api: "entry.1152759436" },
  { dept: "不分系（個人申請管道）", api: "entry.1152759436" },
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
// at least one "checkbox" to be selected
function checkSelected() {
  var sets = [
    {
      checkboxes: document.querySelectorAll('[name="entry.837131498"]'),
      errorMessage: "請在【3/4（六）上午 9:00 - 12:00】中至少選擇一項"
    },
    {
      checkboxes: document.querySelectorAll('[name="entry.1152759436"]'),
      errorMessage: "請在【3/4（六）下午 13:30 - 16:30】中至少選擇一項"
    },
    {
      checkboxes: document.querySelectorAll('[name="entry.807095932"]'),
      errorMessage: "請在【3/5（日）上午 9:00 - 12:00】中至少選擇一項"
    },
    {
      checkboxes: document.querySelectorAll('[name="entry.244463617"]'),
      errorMessage: "請在【3/5（日）下午 13:30 - 16:00】中至少選擇一項"
    },
    {
      checkboxes: document.querySelectorAll('[name="entry.1780036049"]'),
      errorMessage: "請在【學長姐經驗分享報名】中至少選擇一項"
    }
  ];
  var checkedOne = [false, false, false, false];
  for (var i = 0; i < sets.length; i++) {
    var checkboxes = sets[i].checkboxes;
    var errorMessage = sets[i].errorMessage;
    
    for (var j = 0; j < checkboxes.length; j++) {
      if (checkboxes[j].checked) {
        checkedOne[i] = true;
        break;
      }
    }
    if (!checkedOne[i]) {
      alert(errorMessage);
    }
  }
  if (checkedOne[0] && checkedOne[1] && checkedOne[2] && checkedOne[3] && checkedOne[4]) {
    console.log('Welcome!')
    var form = document.querySelector('form');
    form.submit();
    form.reset();
    alert('報名成功！')
  }
}
</script>

<template>

  <div>

    <div class="lg:hidden text-lg text-center mb-16">
      電腦以外的裝置請點擊<a
        class="linkEff"
        href="https://docs.google.com/forms/d/e/1FAIpQLScDvhJuAJisZGoLG29si_UMhGmxcNYNqlGjLYmLVjJNUlXoiQ/viewform"
        target="_blank"
        rel="noreferrer noopenner"
      >此連結</a>報名
    </div>


    <div class="max-lg:hidden">
      <div class="text-4xl font-bold mb-10">
      單車十六｜模擬面試/學長姐經驗分享報名表
      </div>
      <div class="text-lg leading-9">
        各位高中生好，我們是第十六屆成功大學單車節學術部模擬面試組
        <br /><br />
        我們將於 <br />
        3/4（六） 早上 09:00－12:00 、下午 01:30－04:30 以及 3/5（日） 早上
        09:00－12:00 、下午 01:30－04:00 進行模擬面試 <br />
        3/4（六） 早上 10:45－12:00 、下午 03:15－03:45 以及 3/5（日） 早上
        10:45－12:00 、下午 03:15－03:45 進行學長姐經驗分享

        <br /><br />
        活動地點：國立成功大學 唯農大樓（屆時會有角標指引）

        <br /><br />
        🏴此表單將在 2/19（日） 23:59 截止，之後我們會以 email
        寄出錄取通知以及行前通知， 錄取生記得要在收到錄取通知後兩日內回信確認～

        <br /><br />
        有任何問題或是不明白的地方可以聯絡以下負責人： <br />
        會計115 趙蓁妤 0982826565 /
        <a
          class="linkEff"
          href="https://www.facebook.com/profile.php?id=100012231169610"
          target="_blank"
          rel="noreferrer noopenner"
        >
          Facebook
        </a>
        <br />
        會計115 張嘉純 0908393528 /
        <a
          class="linkEff"
          href="https://www.facebook.com/profile.php?id=100003523717876"
          target="_blank"
          rel="noreferrer noopenner"
        >
          Facebook
        </a>
        <br />
        交管115 張尚弘 0906333909 /
        <a
          class="linkEff"
          href="https://www.facebook.com/Shang.Hong.Chang"
          target="_blank"
          rel="noreferrer noopenner"
        >
          Facebook
        </a>
        <br />
        外文114 柯雯瑄 0956205355 /
        <a
          class="linkEff"
          href="https://www.facebook.com/profile.php?id=100006236919642"
          target="_blank"
          rel="noreferrer noopenner"
        >
          Facebook
        </a>
        <br />
        後續錄取通知及相關資訊皆會經由電子郵件發送，麻煩各位一定要填「常用」信箱～
      </div>
      <div>
        <form
          action="https://docs.google.com/forms/u/1/d/e/1FAIpQLScDvhJuAJisZGoLG29si_UMhGmxcNYNqlGjLYmLVjJNUlXoiQ/formResponse"
          method="POST"
          @submit.prevent="checkSelected"
          target="_blank"
          rel="noreferrer noopenner"
        >
          <div class="mt-12">
            <p class="text-lg my-6 after:content-['*'] after:ml-0.5 after:text-red-500">電子信箱 </p>
            <input
              name="entry.1542886366"
              class="inputEff"
              type="email"
              autocomplete="off"
              required
            />
          </div>
          <div class="mt-12">
            <p class="text-lg my-6 after:content-['*'] after:ml-0.5 after:text-red-500">你的名字 </p>
            <input
              name="entry.345686533"
              class="inputEff"
              type="text"
              autocomplete="off"
              required
            />
          </div>
          <div class="mt-12">
            <p class="text-lg after:content-['*'] after:ml-0.5 after:text-red-500">
              就讀學校及年級
            </p>
            <p class="mb-6">
              例：高雄中學高三
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
            <p class="text-lg my-6 after:content-['*'] after:ml-0.5 after:text-red-500">聯絡電話（格式: 0912-345678）</p>
            <input
              name="entry.826079181"
              class="inputEff"
              type="tel"
              pattern="[0-9]{4}-[0-9]{6}"
              autocomplete="off"
              required
            />
          </div>
          <div class="mt-12">
            <p class="text-lg after:content-['*'] after:ml-0.5 after:text-red-500">
              常用的聯絡信箱
            </p>
            <p class="mb-6">
              報名後要記得確認信箱喔～
            </p>
            <input
              name="entry.1951500596"
              class="inputEff"
              type="email"
              autocomplete="off"
              required
            />
          </div>
          <div class="mt-12">
            <p class="text-lg my-6 after:content-['*'] after:ml-0.5 after:text-red-500">你的臉書連結 </p>
            <input
              name="entry.1433765434"
              class="inputEff"
              type="url"
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
              <br><br>
              ⚠不分系面試為工作坊形式，一場 90 分鐘，名額有限。欲參加面試者可以準備相關書審資料，屆時在確認報名的信件中會附上上傳書審資料的表單。 
              <br>
              ⚠3/4（六）不分系的面試工作坊，上午場次為特殊選材相關，下午場次則為個人申請相關。由於不分系學生於兩種不同入學管道的準備方向不同，故特別做此分類，請高中生報名時再特別注意自己的場次！
              <br /><br />
              表單問題將時段分為兩日的上午下午，選項為該時段參與模擬面試的科系。
              <br />
              請依據時段及科系勾選（可在時段中勾選不參加），四個問題至多勾選五個志願，並請於第五個問題處填寫前面勾選項目的志願序。原則上以第一志願的時段及科系做安排，若其他志願仍有餘額也會安排參加兩場或三場。

              <br /><br />
              最終面試的科系及時段會再寄發確認信件，記得要確認常用信箱喔！
            </p>
          </div>

          <p class="mt-10 mb-4 text-2xl after:content-['*'] after:ml-0.5 after:text-red-500">3/4（六）上午 9:00 - 12:00 </p>
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

          <p class="mt-10 mb-4 text-2xl after:content-['*'] after:ml-0.5 after:text-red-500">3/4（六）下午 13:30 - 16:30 </p>
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

          <p class="mt-10 mb-4 text-2xl after:content-['*'] after:ml-0.5 after:text-red-500">3/5（日）上午 9:00 - 12:00 </p>
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

          <p class="mt-10 mb-4 text-2xl after:content-['*'] after:ml-0.5 after:text-red-500">3/5（日）下午 13:30 - 16:00 </p>
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
            <p class="text-lg after:content-['*'] after:ml-0.5 after:text-red-500">
              上述勾選的科系及時段的志願序？（會以此作為優先排序的依據）
            </p>
            <p class="mb-6">
              例：3/4上午 心理系、3/4下午 心理系
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

          <div class="mb-4">
            <p class="text-lg after:content-['*'] after:ml-0.5 after:text-red-500">想參加的經驗分享場次 </p>
            <label
              class="checkBoxEff"
              v-for="info in checkBoxInfo5"
              :key="checkBoxInfo5.indexOf(info)"
            >
              <input :name="info.api" type="checkbox" :value="info.speech" class="cursor-pointer" />{{
                info.speech
              }}
            </label>
          </div>

          <div class="pt-12">
            <p class="text-lg my-6">有其他想問的嗎？</p>
            <input
              name="entry.1205062714"
              class="inputEff"
              type="text"
              autocomplete="off"
            />
          </div>
          <div class="py-20 w-[300px]">
            <input id="customBtn" type="submit" hidden />
            <label for="customBtn" class="cursor-pointer">
              <irregularButton btnTitle="送出" />
            </label>
          </div>
        </form>
      </div>
    </div>

  </div>
    

  
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .inputEff {
    @apply transition duration-200 border-b bg-transparent w-[1000px]
        hover:border-myblue focus:border-myblue focus:outline-none focus:border-b-2;
  }
}

.linkEff {
  transition: color 0.5s ease, box-shadow 0.5s ease;
  -o-transition: color 0.5s ease, box-shadow 0.5s ease;
  -moz-transition: color 0.5s ease, box-shadow 0.5s ease;
  -webkit-transition: color 0.5s ease, box-shadow 0.5s ease;
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-color: #0ea5e9;
}

.linkEff:hover {
  color: #fff;
  box-shadow: inset 0 -30px 0 0 #0ea5e9;
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
