<script setup>
import { ref } from "vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import irregularButton from "../components/irregularButton.vue";
const dates = ["3/4（六）", "3/5（日）", "兩天都參加"];
// at least one "checkbox" to be selected
function checkSelected() {
  var sets = [
    {
      checkboxes: document.querySelectorAll('[name="entry.1323600111"]'),
      errorMessage: "請在【請問您參加單車節的日期？】中選擇一項",
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
    console.log("Welcome!");
    var form = document.querySelector("form");
    form.submit();
    isSuccess.value = "true";
    // form.reset();
    // alert('報名成功！')
  }
}
const isSuccess = ref("");
</script>

<template>
  <div class="bg-black text-white">
    <Navbar />

    <!-- header -->
    <div class="flex flex-col justify-center items-center gap-16 mt-20">
      <span class="mt-10 text-5xl font-bold tracking-wider">團體報名</span>
      <picture>
        <source
          class="w-[55%] mx-auto max-md:w-[90%]"
          srcset="../assets/bikeFestivalLogo2.webp"
          type="image/webp"
        />
        <img
          class="w-[55%] mx-auto max-md:w-[90%]"
          src="../assets/bikeFestivalLogo2.png"
          alt="NCKU"
        />
      </picture>
    </div>

    <!-- <div class="h-[280px] text-lg text-center my-20 lg:hidden">
      電腦以外的裝置請點擊<a
        class="linkEff"
        href="https://docs.google.com/forms/d/e/1FAIpQLScfsThqpVnv30auskKR9KkzQjfBegp36giluyw0BaLIjTnR2A/viewform"
        target="_blank"
        rel="noreferrer noopenner"
      >此連結</a>報名
    </div> -->
    <Transition mode="out-in">
      <div class="px-36 pt-20 max-md:px-4" v-if="isSuccess == 'true'">
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
      <div class="" v-else>
        <div class="px-36 pt-20 max-md:px-4">
          <!-- intro -->
          <div class="text-xl leading-8 max-sm:text-base">
            <div>2023 成大單車節｜遊覽車團體登記表單</div>
            <div>
              ｜第十六屆成大單車節活動時間：2023/3/4-2023/3/5 09:00 - 16:00
              <br />
              活動地點：台南市東區 國立成功大學 <br /><br />
              ｜說 明 <br />
              * 本表單僅供交通工具為遊覽車需求之學校、組織、班級之登記，
              尤其若貴單位欲租遊覽車往返，請務必填寫，以利活動當日追蹤安排。
              <br />
              *
              若為個人或朋友揪團共襄盛舉、想要得到單車節限量紀念品，再請持續鎖定官網，我們將推出預購。
              <br />
              * 關於遊覽車入場停靠方式會在日後以電子郵件告知，請務必留意信箱！
              <br /><br />
              ｜備 註 <br />
              * 此團體登記完全免費。 <br />
              *
              對於成大單車節有任何問題，皆可以私訊粉專或聯絡人，我們會盡快回答您的問題。
              <br /><br />
              ｜聯絡人 姜昕｜
              <a
                class="linkEff"
                href="https://www.facebook.com/jessie01081910/"
                target="_blank"
                rel="noreferrer noopenner"
              >
                Facebook
              </a>
              <br />
              ｜聯絡人 劉子綾｜
              <a
                class="linkEff"
                href="https://www.facebook.com/profile.php?id=100002291378285"
                target="_blank"
                rel="noreferrer noopenner"
              >
                Facebook
              </a>
              <br />
              ｜粉絲專頁 成大單車節｜
              <a
                class="linkEff"
                href="https://www.facebook.com/NCKUbikefestival/"
                target="_blank"
                rel="noreferrer noopenner"
              >
                Facebook
              </a>
            </div>
          </div>
          <!-- form -->
          <div>
            <form
              action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScfsThqpVnv30auskKR9KkzQjfBegp36giluyw0BaLIjTnR2A/formResponse"
              method="POST"
              @submit.prevent="checkSelected"
              target="_blank"
              rel="noreferrer noopenner"
            >
              <div class="mt-12">
                <p
                  class="text-lg my-6 after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  電子郵件
                </p>
                <input
                  name="emailAddress"
                  class="inputEff"
                  type="email"
                  autocomplete="off"
                  required
                />
              </div>
              <div class="mt-12">
                <div class="text-lg my-6">
                  遊覽車路線說明（由自強校區之長榮路校門口進出）
                </div>
                <img class="w-[800px]" src="../assets/map.png" alt="map" />
                <div class="text-lg my-6">
                  遊覽車團體登記
                  <br />
                  適用於交通方式為遊覽車之學校、組織或班級
                </div>
              </div>
              <div class="mt-12">
                <p
                  class="text-lg mt-6 after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  請問您代表的團體是？
                </p>
                <p class="mb-6">例如：OO高中O班、OO高中輔導室、OO補習班</p>

                <input
                  name="entry.445642084"
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
                  請問您的名字？（全名）
                </p>
                <input
                  name="entry.1719992985"
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
                  請問您的聯絡電話？
                </p>
                <input
                  name="entry.1881290345"
                  class="inputEff"
                  type="tel"
                  pattern="[0-9]{10}"
                  autocomplete="off"
                  required
                />
              </div>
              <div class="mt-12">
                <p
                  class="text-lg mt-6 after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  請附上您的臉書個人頁面「網址」
                </p>
                <p class="mb-6">
                  進入個人頁面複製網址列的網址即可（如有需要我們會使用臉書與您聯絡）
                </p>
                <input
                  name="entry.1369900865"
                  class="inputEff"
                  type="url"
                  autocomplete="off"
                  required
                />
              </div>
              <div class="mt-12">
                <p
                  class="text-lg my-6 after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  請問您團體的人數（包含您自己）
                </p>
                <input
                  name="entry.1053001367"
                  class="inputEff"
                  type="number"
                  autocomplete="off"
                  required
                />
              </div>

              <div class="customRadio mt-12">
                <p
                  class="text-lg my-6 after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  請問您參加單車節的日期？
                </p>
                <div v-for="(date, index) in dates" :key="index" class="my-5">
                  <input
                    name="entry.1323600111"
                    :id="date"
                    type="radio"
                    :value="date"
                  />
                  <label :for="date">{{ date }}</label>
                </div>
              </div>

              <div class="mt-12">
                <p
                  class="text-lg my-6 after:content-['*'] after:ml-0.5 after:text-red-500"
                >
                  預計抵達時間？（請填寫 24 小時制，例如 9:01, 17:00）
                </p>
                <input
                  name="entry.785417167"
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
                  請問遊覽車的車牌號碼為？
                </p>
                <input
                  name="entry.2025588403"
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
                  請問遊覽車司機姓名？
                </p>
                <input
                  name="entry.1859522470"
                  class="inputEff"
                  type="text"
                  autocomplete="off"
                  required
                />
              </div>
              <div class="mt-12">
                <p class="text-lg my-6">
                  備註
                  <br />
                  任何關於單車節交通的疑問，我們會盡力在 Email
                  線上或單車節當日為您解答！
                </p>
                <input
                  name="entry.1000205050"
                  class="inputEff"
                  type="text"
                  autocomplete="off"
                />
              </div>
              <!-- submit -->
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
    </Transition>

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
  -webkit-transition: color 0.5s ease, box-shadow 0.5s ease;
  -moz-transition: color 0.5s ease, box-shadow 0.5s ease;
  -o-transition: color 0.5s ease, box-shadow 0.5s ease;
  transition: color 0.5s ease, box-shadow 0.5s ease;
  text-decoration: underline;
  text-underline-offset: 5px;
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
