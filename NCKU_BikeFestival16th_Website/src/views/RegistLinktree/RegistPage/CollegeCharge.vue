<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import Navbar from "../../../components/Navbar.vue";
import Footer from "../../../components/Footer.vue";
import irregularButton from "../../../components/irregularButton.vue";
const grades = ["高中", "大學/研究所", "其他"];
const session1 = [
  "3 / 4 (六)  09:00~10:25  蔡宗逸｜以後要做什麼? 這個問題太難了，我不知道。",
  "3 / 4 (六)  09:00~10:25 吳亭如｜想考上理想大學的道路好難走，害怕時怎麼辦?",
];
const session2 = [
  "3 / 4 (六)  10:35~12:00 顏劭庭｜壓力山大的大學必修課",
  "3 / 4 (六)  10:35~12:00 鐘民鈞｜設計你的大學生活",
  "3 / 4 (六)  10:35~12:00 許立蓁｜探索自己的無限可能",
];
const session3 = [
  "3 / 4 (六)  13:00~14:25 郭天妮｜設計大學生活101",
  "3 / 4 (六)  13:00~14:25 廖翊翔｜大學生的奇幻旅程",
  "3 / 4 (六)  13:00~14:25 翁歆媃｜關於那些特殊選材的兩三事",
];
const session4 = [
  "3 / 4 (六) 14:35~16:00 林成鍇｜親愛的，別傻了，你沒那麽重要",
  "3 / 4 (六) 14:35~16:00 張芊芊｜那些與你相「鬱」的日子",
];
const session5 = [
  "3/5 (日) 09:00~10:25 邱耀陞｜大學可能跟你想的很不一樣",
  "3/5 (日) 09:00~10:25 盧柏翰｜Design your college life",
];
const session6 = [
  "3/5 (日) 10:35~12:00 許聿文｜這樣做可以變得更快樂",
  "3/5 (日) 10:35~12:00 侯統溱｜斜槓的大學生活",
  "3/5 (日) 10:35~12:00 張育慈｜焦慮是你的超能力",
];
const session7 = [
  "3/5 (日) 13:00~14:25 邱耀陞｜迷茫的生涯規劃？從迷惘中探索新方向",
  "3/5 (日) 13:00~14:25 方文廷｜讓我們一起擁抱失敗",
  "3/5 (日) 13:00~14:25 林世璿｜致高中生最重要的一課",
];
const session8 = [
  "3/5 (日) 14:35~16:00 黃昭禓｜放下你的手機，玩好人生這場大遊戲",
];
const isRegistSuccess = ref("")
const isBtnDisable = ref("")
const submitText = ref("送出")
function checkSelected(event) {
  var sets = [
    {
      checkboxes: document.querySelectorAll('[name="grade"]'),
      errorMessage: "請在【你的身分】中選擇一項",
    },
  ];
  var checkedOne = false;
  for (var j = 0; j < sets[0].checkboxes.length; j++) {
    if (sets[0].checkboxes[j].checked) {
      checkedOne = true;
      break;
    }
  }
  if (!checkedOne) {
    alert(sets[0].errorMessage);
  }
  if (checkedOne) {
    isBtnDisable.value = 'true'
    submitText.value = "處理中..."
    var formData = document.querySelector("form");
    // ref: https://andy-carter.com/blog/disable-multiple-form-submits-with-vanilla-javascript
    document.querySelector('input[type="submit"]').setAttribute('disabled', 'disabled');
    axios
      .post(
        "https://nckubikefestival.ncku.edu.tw/api/register/speakers",
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
onMounted(() => {
  const radioInputs = document.querySelectorAll('input[type="radio"]');
  radioInputs.forEach((input) => {
    input.addEventListener("click", function () {
      if (input.getAttribute("data-clicked")) {
        input.removeAttribute("data-clicked");
        input.checked = false;
      } else {
        input.setAttribute("data-clicked", true);
        input.checked = true;
      }
    });
  });
});
</script>

<template>
  <!-- 2/10 -->
  <div class="bg-black text-white">
    <Navbar />

    <div
      class="flex flex-col justify-center items-center gap-16 mt-10 max-md:gap-10"
    >
      <span class="mt-20 text-5xl font-bold tracking-wider max-md:text-4xl"
        >大學充值</span
      >
      <picture>
        <source
          class="w-[55%] mx-auto max-md:w-[90%]"
          srcset="../../../assets/bikeFestivalLogo2.webp"
          type="image/webp"
        />
        <img
          class="w-[55%] mx-auto max-md:w-[90%]"
          src="../../../assets/bikeFestivalLogo2.png"
          alt="NCKUlogo"
        />
      </picture>
    </div>

    <div class="px-36 pt-16 max-md:px-4">
      <Transition mode="out-in">
        <div class="border-2 border-white p-10 text-center mb-32" v-if="isRegistSuccess == 'success'">
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
        <div
          class="border-2 border-white p-10 text-2xl text-center my-16"
          v-else-if="isRegistSuccess == 'failure'"
        >
          <div class="text-4xl font-bold mb-10">報名失敗！</div>
          <div>
            由於目前後台不穩，請前往<a
              class="linkEff"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdKDzHdwI87IP6x2tsSCRorR5AvnaoA64Gn68vqJ8UIXqyfoQ/viewform"
              target="_blank"
              rel="noreferrer noopenner"
              >此份表單</a
            >報名
          </div>
        </div>
        <div v-else>
          <div class="text-4xl font-bold mb-10 max-sm:text-2xl">
            單車十六｜校園講者 報名表單
          </div>
          <div class="text-lg leading-9 max-sm:text-sm">
            三月將至，南台炎熱的空氣中，多了一股青春血液的躁動。
            <br />
            沒錯！一年一度的成大單車節將於 3/4 和 3/5 盛大舉行！
            <br />
            成大單車節致力於弭平高中生和大學之間的資訊不對稱，而我們單車16學術部，透過邀請成大校園中的各路大神進行經驗分享，讓各位與接觸到大學最真實的樣貌。
            <br /><br />
            📣 想知道一片迷惘時該怎麼辦嗎？ 📣 想知道如何過出畢生難忘的四年嗎？
            <br />📣 想知道怎麼善用規則和資源嗎？ 📣 想知道怎麼跟教授相處嗎？
            <br /><br />
            那就來報名成大單車節的校園講者吧！
            <br />
            這裡有各式各樣的主題與講者，等著你來尋寶。 <br />
            廢話不多說，馬上點進<a
              href="https://nckubikefestival.ncku.edu.tw/"
              class="linkEff"
              target="_blank"
              rel="noreferrer noopenner"
              >成大單車節官網</a
            >看看有哪些講者和主題吧！ <br /><br />
            如果當天無法參與，也可以透過我們的podcast，一起參與成大單車節唷！
            <br />
            <a
              href="https://player.soundon.fm/p/bike16podcast?fbclid=IwAR2sPptx8eTxMgIYZuxZ1Jm-usnUXddECWI9uB7E5elmjKJWTGdxFJQ-XDk"
              class="linkEff"
              target="_blank"
              rel="noreferrer noopenner"
              ><strong>成大單車節 Podcast｜大學萬靈單</strong></a
            >
            <br /><br />
          </div>

          <!-- <div class="lg:hidden my-32 text-center text-2xl">
            電腦以外的裝置請點擊<a
              class="linkEff"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdKDzHdwI87IP6x2tsSCRorR5AvnaoA64Gn68vqJ8UIXqyfoQ/viewform"
              target="_blank"
              rel="noreferrer noopenner"
              >此連結</a
            >報名
          </div> -->

          <!-- <div class="h-[280px] text-lg text-center my-16 max-lg:hidden">
          此頁面表單維修中，暫時先請前往<a
            class="linkEff"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdKDzHdwI87IP6x2tsSCRorR5AvnaoA64Gn68vqJ8UIXqyfoQ/viewform"
            target="_blank"
            rel="noreferrer noopenner"
          >此連結</a>報名
        </div> -->

          <!-- <iframe name="formIframe" class="hidden"></iframe> -->

          <!-- target="formIframe" -->
          <div class="">
            <form
              action="https://nckubikefestival.ncku.edu.tw/api/register/speakers"
              method="POST"
              @submit.prevent="checkSelected"
            >
              <div class="mt-12">
                <p
                  class="text-lg my-6 after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  電子信箱
                </p>
                <input
                  name="email"
                  class="inputEff"
                  type="email"
                  autocomplete="off"
                  required
                />
              </div>

              <div class="mt-12 text-xl leading-9 max-sm:text-sm">
                <strong
                  >時程通知 ⏰ <br />
                  報名日期：即日起 ～ 2/28（二）
                  <br> 演講日期：3/4（六）& 3/5（日）
                  <br> 屆時將寄發錄取通知，再麻煩查收信箱📪
                </strong>
              </div>

              <div class="mt-12">
                <p
                  class="text-lg my-6 after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  你的名字
                </p>
                <input
                  name="name"
                  class="inputEff"
                  type="text"
                  autocomplete="off"
                  required
                />
              </div>
              <div class="mt-12">
                <p
                  class="text-lg my-6 after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  聯絡電話
                </p>
                <input
                  name="phone"
                  class="inputEff"
                  type="tel"
                  pattern="[0-9]{10}"
                  autocomplete="off"
                  required
                />
              </div>

              <div class="customRadio mt-12">
                <p
                  class="text-lg my-6 after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  你的身分
                </p>
                <div v-for="(grade, index) in grades" :key="index" class="my-5">
                  <input name="grade" type="radio" :value="grade" :id="grade" />
                  <label :for="grade">{{ grade }}</label>
                </div>
              </div>

              <div class="mt-12">
                <p
                  class="text-lg my-6 after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  就讀學校（格式：縣市/學校名 ，如台北市/延平高中）
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
                <p
                  class="text-lg my-6 after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  常用的電子郵件（會發送活動相關訊息!）
                </p>
                <input
                  name="freqEmail"
                  class="inputEff"
                  type="text"
                  autocomplete="off"
                  required
                />
              </div>

              <div class="mt-24 text-xl leading-9">
                📢報名場次
                <br />🪶註：演講部分會優先錄取高中生
              </div>

              <div class="customRadio mt-12">
                <p class="text-lg my-6">你報名的場次（3/4 上午場-1）</p>
                <div
                  v-for="(session, index) in session1"
                  :key="index"
                  class="my-5"
                >
                  <input
                    name="session1"
                    type="radio"
                    :value="session"
                    :id="session"
                  />
                  <label :for="session">{{ session }}</label>
                </div>
              </div>

              <div class="customRadio mt-12">
                <p class="text-lg my-6">你報名的場次（3/4 上午場-2）</p>
                <div
                  v-for="(session, index) in session2"
                  :key="index"
                  class="my-5"
                >
                  <input
                    name="session2"
                    type="radio"
                    :value="session"
                    :id="session"
                  />
                  <label :for="session">{{ session }}</label>
                </div>
              </div>

              <div class="customRadio mt-12">
                <p class="text-lg my-6">你報名的場次（3/4 下午場-1）</p>
                <div
                  v-for="(session, index) in session3"
                  :key="index"
                  class="my-5"
                >
                  <input
                    name="session3"
                    type="radio"
                    :value="session"
                    :id="session"
                  />
                  <label :for="session">{{ session }}</label>
                </div>
              </div>

              <div class="customRadio mt-12">
                <p class="text-lg my-6">你報名的場次（3/4 下午場-2）</p>
                <div
                  v-for="(session, index) in session4"
                  :key="index"
                  class="my-5"
                >
                  <input
                    name="session4"
                    type="radio"
                    :value="session"
                    :id="session"
                  />
                  <label :for="session">{{ session }}</label>
                </div>
              </div>

              <div class="customRadio mt-12">
                <p class="text-lg my-6">你報名的場次（3/5 上午場-1）</p>
                <div
                  v-for="(session, index) in session5"
                  :key="index"
                  class="my-5"
                >
                  <input
                    name="session5"
                    type="radio"
                    :value="session"
                    :id="session"
                  />
                  <label :for="session">{{ session }}</label>
                </div>
              </div>

              <div class="customRadio mt-12">
                <p class="text-lg my-6">你報名的場次（3/5 上午場-2）</p>
                <div
                  v-for="(session, index) in session6"
                  :key="index"
                  class="my-5"
                >
                  <input
                    name="session6"
                    type="radio"
                    :value="session"
                    :id="session"
                  />
                  <label :for="session">{{ session }}</label>
                </div>
              </div>

              <div class="customRadio mt-12">
                <p class="text-lg my-6">你報名的場次（3/5 下午場-1）</p>
                <div
                  v-for="(session, index) in session7"
                  :key="index"
                  class="my-5"
                >
                  <input
                    name="session7"
                    type="radio"
                    :value="session"
                    :id="session"
                  />
                  <label :for="session">{{ session }}</label>
                </div>
              </div>

              <div class="customRadio mt-12">
                <p class="text-lg my-6">你報名的場次（3/5 下午場-2）</p>
                <div
                  v-for="(session, index) in session8"
                  :key="index"
                  class="my-5"
                >
                  <input
                    name="session8"
                    type="radio"
                    :value="session"
                    :id="session"
                  />
                  <label :for="session">{{ session }}</label>
                </div>
              </div>

              <div class="mt-12">
                <p class="text-lg my-6">想對我們說的話！</p>
                <input
                  name="talk"
                  class="inputEff"
                  type="text"
                  autocomplete="off"
                />
              </div>

              <div class="py-20 w-[300px]">
                <input id="customBtn" type="submit" hidden />
                <label for="customBtn" class="cursor-pointer">
                  <irregularButton :btnTitle="submitText" :disable="isBtnDisable" />
                </label>
              </div>
            </form>
          </div>
        </div>
      </Transition>
    </div>

    <Footer />
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

/* ref: https://www.w3schools.com/howto/howto_css_hide_arrow_number.asp */
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

/* ref: https://codepen.io/selvaraj/pen/OXoqoN */
.customRadio input[type="radio"] {
  display: none;
}
.customRadio input[type="radio"] + label {
  position: relative;
  display: inline-block;
  padding-left: 2.5em;
  cursor: pointer;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.customRadio input[type="radio"] + label:before,
.customRadio input[type="radio"] + label:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 1.6em;
  height: 1.6em;
  text-align: center;
  color: white;
  font-family: Times;
  border-radius: 50%;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}
.customRadio input[type="radio"] + label:before {
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  box-shadow: inset 0 0 0 0.2em white, inset 0 0 0 1em white;
}
.customRadio input[type="radio"] + label:hover:before {
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  box-shadow: inset 0 0 0 0.3em white, inset 0 0 0 1em #c6c6c6;
}
.customRadio input[type="radio"]:checked + label:before {
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  box-shadow: inset 0 0 0 0.2em white, inset 0 0 0 1em #003cd1;
}
</style>
