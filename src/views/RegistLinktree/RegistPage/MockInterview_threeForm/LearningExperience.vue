<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import irregularButton from "../../../../components/irregularButton.vue";
import DepartmentTour from "../DepartmentTour.vue";
const checkBoxInfo1 = ref([
  {
    speech: "3/4（六）09:20-10:30 電機系 - 賴癸江教授",
    api: "session",
  },
  {
    speech: "3/4（六）13:50-15:00 牙醫系 - 陳畊仲教授",
    api: "session",
  },
  {
    speech: "3/5（日）09:20-10:30 會計系 - 劉梧柏教授",
    api: "session",
  },
  {
    speech: "3/5（日）13:50-15:00 學習歷程特邀講座 - Yory 優歷",
    api: "session",
  },
]);
// at least one "checkbox" to be selected
const checkSelected = (e) => {
  var sets = [
    {
      checkboxes: document.querySelectorAll('[name="session"]'),
      errorMessage: "請在【想參加的場次】中至少選擇一項"
    },
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
  if (checkedOne[0]) {
    isBtnDisable.value = "true";
    submitText.value = "處理中..."
    var formData = document.querySelector("form");
    // ref: https://andy-carter.com/blog/disable-multiple-form-submits-with-vanilla-javascript
    document.querySelector('input[type="submit"]').setAttribute('disabled', 'disabled');
    axios
      .post(
        "https://nckubikefestival.ncku.edu.tw/api/register/MockInterview",
        formData
      )
      .then((res) => {
        isRegistSuccess.value = "success";
      })
      .catch((err) => {
        isRegistSuccess.value = "failure";
      });
  }
}
const isRegistSuccess = ref("closed");
const isBtnDisable = ref("")
const submitText = ref("送出")
</script>

<template>
  <div>

    <!-- <div class="lg:hidden text-lg text-center mb-16">
      電腦以外的裝置請點擊<a
        class="linkEff"
        href="https://docs.google.com/forms/d/e/1FAIpQLSfNMX05RwfODBSQPSoJDmTFCA09Ig2SzfqW9CKqrPZjrNxM9w/viewform"
        target="_blank"
        rel="noreferrer noopenner"
      >此連結</a>報名
    </div> -->
    <Transition mode="out-in">
      <div 
        class="mx-auto my-16 border-2 border-white flex flex-col justify-center items-center h-[400px] w-[1000px] text-center"
        v-if="isRegistSuccess == 'closed'"
      >
        <div class="text-4xl font-bold mb-10 max-sm:text-2xl">教授面試技巧演講/學習歷程特邀講座報名表</div>
        <div class="text-3xl max-md:text-xl">目前已截止報名，感謝你的參與</div>
        <br /><br><br>
        <div class="text-lg max-md:text-base">
          （如有問題請聯繫<a 
            class="linkEff"
            href="https://www.facebook.com/NCKUbikefestival"
            target="_blank"
            rel="noreferrer noopenner"
            >粉絲專頁</a
          >，將有專人會在第一時間給予回覆！）
        </div>
      </div>

      <div v-else-if="isRegistSuccess == 'success'">
        <div class="border-2 border-white p-10 text-center mb-32">
          <div class="text-4xl font-bold mb-10">報名成功</div>
          <div class="text-3xl max-md:text-xl">
            感謝你的填寫，期待在單車節與你相見
          </div>
          <br /><br /><br />
          <div class="text-lg max-md:text-base">
            （如有問題請聯繫<a
              class="linkEff"
              href="https://www.facebook.com/NCKUbikefestival"
              target="_blank"
              rel="noreferrer noopenner"
              >粉絲專頁</a
            >，將有專人會在第一時間給予回覆！）
          </div>
        </div>
      </div>

      <div
        class="border-2 border-white p-10 text-2xl text-center my-16"
        v-else-if="isRegistSuccess == 'failure'"
      >
        <div class="text-4xl font-bold mb-10">報名失敗！</div>
        <div>
          由於目前後台不穩，請前往<a
            class="linkEff"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfNMX05RwfODBSQPSoJDmTFCA09Ig2SzfqW9CKqrPZjrNxM9w/viewform"
            target="_blank"
            rel="noreferrer noopenner"
            >此份表單</a
          >報名
        </div>
      </div>

      <div class="" v-else>
        <div class="text-4xl font-bold mb-10">
        單車十六｜教授面試技巧演講/學習歷程特邀講座
        </div>
        <div class="text-xl leading-8 max-sm:text-base">
          各位高中生好，我們是第十六屆成功大學單車節學術部模擬面試組
          <br />我們將於 3/4(六)~3/5(日) 早上09:20-10:30 及 下午 01:50-03:00
          舉辦教授面試技巧演講及學習歷程特邀講座

          <br /><br />
          演講時間及講者： <br />
          3/4(六) 上午 09:20-10:30 電機系 - 賴癸江教授：大學甄選面試準備要領 <br />
          3/4(六) 下午 01:50-03:00 牙醫系 - 陳畊仲教授：表達無障礙，面試有未來<br />
          3/5(日) 上午 09:20-10:30 會計系 - 劉梧柏教授：不出意外的話，面試要出意外了 <br />
          3/5(日) 下午 01:50-03:00 學習歷程特邀講座 - Yory 優歷：學習歷程做對了嗎？——製作關鍵大解密

          <br /><br />
          活動地點：國立成功大學 國際會議廳第三演講室（屆時會有角標指引） <br />
          演講一場為 70 分鐘（包含 20 分鐘的 QA 時間）

          <br /><br />
          📣貼心小提醒 <br />
          若你已有報名模擬面試，或是單車節其他活動，要<strong
            >注意該活動時間是否與教授面試技巧演講重疊喔！</strong
          >
          <br />
          表單送出後就無法更動報名的場次囉～

          <br /><br />
          🏴此表單將在 2/19(日) 23:59
          截止，後續錄取通知及相關資訊皆會經由電子郵件發送，因此麻煩各位一定要填「常用」信箱～

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
        </div>
        <form
          @submit.prevent="checkSelected"
        >
          <input name="type" value="form2" hidden="true">
          <div class="mt-12">
            <p class="text-lg my-6 after:content-['*'] after:ml-0.5 after:text-red-500">電子信箱</p>
            <input
              name="emailAddress"
              class="inputEff"
              type="email"
              autocomplete="off"
              required
            />
          </div>
          <div class="mt-12">
            <p class="text-lg my-6 after:content-['*'] after:ml-0.5 after:text-red-500">你的名字</p>
            <input
              name="name"
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
              name="school"
              class="inputEff"
              type="text"
              autocomplete="off"
              required
            />
          </div>
          <div class="mt-12">
            <p class="text-lg my-6 after:content-['*'] after:ml-0.5 after:text-red-500">聯絡電話 </p>
            <input
              name="phone"
              class="inputEff"
              type="tel"
              pattern="[0-9]{10}"
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
              name="freqMail"
              class="inputEff"
              type="email"
              autocomplete="off"
              required
            />
          </div>
          <div class="mt-12">
            <p class="text-lg my-6 after:content-['*'] after:ml-0.5 after:text-red-500">你的臉書連結 </p>
            <input
              name="facebook"
              class="inputEff"
              type="text"
              autocomplete="off"
              required
            />
          </div>
          <div class="mt-12 mb-4">
            <p class="text-lg after:content-['*'] after:ml-0.5 after:text-red-500">
              想參加的場次
            </p>
            <p class="mb-6">
              一個場次為 70 分鐘
            </p>
            <label
              class="checkBoxEff"
              v-for="info in checkBoxInfo1"
              :key="checkBoxInfo1.indexOf(info)"
            >
              <input :name="info.api" type="checkbox" :value="info.speech" />{{
                info.speech
              }}
            </label>
          </div>
          <div class="mt-12">
            <p class="text-lg my-6">
              有沒有想事先詢問教授的問題？（會以匿名的形式將問題給教授，並在最後的QA時間回答，歡迎大家踴躍提問！）
            </p>
            <input
              name="question"
              class="inputEff"
              type="text"
              autocomplete="off"
            />
          </div>
          <div class="mt-12">
            <p class="text-lg my-6">有其他想問的嗎？</p>
            <input
              name="other"
              class="inputEff"
              type="text"
              autocomplete="off"
            />
          </div>
          <div class="py-20 w-[300px]">
            <input id="customBtn" type="submit" hidden />
            <label for="customBtn" class="submitBtn cursor-pointer">
              <irregularButton :btnTitle="submitText" :disable="isBtnDisable" />
            </label>
          </div>
        </form>
      </div>
    </Transition>
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
  background-color: transparent;
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
  clip-path: polygon(
    19% 0%,
    32% 0,
    8% 34%,
    66% 0,
    95% 0,
    10% 74%,
    100% 23%,
    100% 41%,
    40% 88%,
    100% 80%,
    100% 90%,
    14% 100%,
    88% 40%,
    0 88%,
    0 69%,
    76% 6%,
    0 49%,
    0 31%
  );
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
