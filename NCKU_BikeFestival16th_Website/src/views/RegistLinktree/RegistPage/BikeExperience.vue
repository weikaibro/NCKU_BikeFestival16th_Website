<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import Navbar from "../../../components/Navbar.vue";
import Footer from "../../../components/Footer.vue";
import irregularButton from "../../../components/irregularButton.vue";
const routes = ["文學院的一天", "觀光客行程", "理工之旅"];
const Liberal = [
  "3/4(六) 13:00-13:50",
  "3/5(日) 9:00-9:50",
  "3/5(日) 13:00-13:50",
];
const Tourist = [
  "3/4(六) 10:00-10:50",
  "3/4(六) 15:00-15:50",
  "3/5(日) 11:00-11:50",
  "3/5(日) 15:00-15:50",
];
const Fragrant = [
  "3/4(六) 11:00-11:50",
  "3/4(六) 14:00-14:50",
  "3/5(日) 10:00-10:50",
  "3/5(日) 14:00-14:50",
];
const num = ref(5);
const Switch = (index) => {
  num.value = index;
};
const isRegistSuccess = ref("");
function checkSelected(event) {
  var sets = [
    {
      checkboxes: document.querySelectorAll('[name="route"]'),
      errorMessage: "請在【想參加哪條路線？】中選擇一項",
    },
    {
      checkboxes: document.querySelectorAll('[name="timing"]'),
      errorMessage: "請在【選擇想要的梯次吧！】中選擇一項",
    },
  ];
  var checkedOne = [false, false];
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
  if (checkedOne[0] && checkedOne[1]) {
    var formData = document.querySelector("form");
    axios
      .post(
        "https://nckubikefestival.ncku.edu.tw/api/register/BikeExperience",
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
</script>

<template>
  <div class="bg-black text-white">
    <Navbar />

    <div
      class="flex flex-col justify-center items-center gap-16 mt-10 max-md:gap-10"
    >
      <span class="text-5xl font-bold tracking-wider max-md:text-4xl"
        >單車體驗</span
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

    <!-- <div class="lg:hidden my-32 text-center text-2xl">
      電腦以外的裝置請點擊<a
        class="linkEff"
        href="https://docs.google.com/forms/d/e/1FAIpQLSddNzzDScYYomXWC38t8RqS51YH8I-ipxnH5Xzcl9IqN-a3kw/viewform"
        target="_blank"
        rel="noreferrer noopenner"
      >此連結</a>報名
    </div> -->

    <!-- <div class="h-[280px] text-lg text-center my-16 max-lg:hidden" >
      此頁面表單維修中，暫時先請前往<a
        class="linkEff"
        href="https://docs.google.com/forms/d/e/1FAIpQLSddNzzDScYYomXWC38t8RqS51YH8I-ipxnH5Xzcl9IqN-a3kw/viewform"
        target="_blank"
        rel="noreferrer noopenner"
      >此連結</a>報名
    </div> -->

    <!-- max-lg:hidden -->
    <div class="">
      <div class="px-36 pt-16 max-md:px-4">
        <Transition mode="out-in">
          <div
            class="border-2 border-white p-10 text-center mb-32"
            v-if="isRegistSuccess == 'success'"
          >
            <div class="text-4xl font-bold mb-10">報名成功</div>
            <div class="text-3xl max-md:text-xl">感謝你的填寫，期待在單車節與你相見</div>
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
          <div
            class="border-2 border-white p-10 text-2xl text-center my-16"
            v-else-if="isRegistSuccess == 'failure'"
          >
            <div class="text-4xl font-bold mb-10">報名失敗！</div>
            <div>
              由於報名人數眾多導致後台不堪負荷，請前往<a
                class="linkEff"
                href="https://docs.google.com/forms/d/e/1FAIpQLSddNzzDScYYomXWC38t8RqS51YH8I-ipxnH5Xzcl9IqN-a3kw/viewform"
                target="_blank"
                rel="noreferrer noopenner"
                >此份表單</a
              >報名
            </div>
          </div>
          <div v-else>
            <div class="text-4xl font-bold mb-10 max-sm:text-2xl">
              單車導覽報名表單
            </div>
            <div class="text-lg leading-9 max-sm:text-sm">
              單車體驗共分三條導覽路線
              ——「文學院的一天」、「觀光客行程」、「香香之旅」。
              <br /><br />
              <span class="text-2xl max-md:text-lg">文學院的一天 (約50分)</span>
              <br />
              中正堂 → 榕園 → 家寶醫學研究室 → 台文系 → 歷史文物館 → 小西門 →
              火車頭 → 中正堂 <br /><br />
              <span class="text-2xl max-md:text-lg">觀光客行程 (約50分)</span>
              <br />
              中正堂 → 博物館 → 格致堂 → 總圖 → 榕園 → 小西門/歷史文物館 →
              中正堂
              <br /><br />
              <span class="text-2xl max-md:text-lg">香香之旅 (約50分)</span>
              <br />
              中正堂 → 測量系 → 自強校區 → 航太系直升機 → 格致堂 → 未來館 →
              中正堂
              <br /><br />
              ＊單車體驗每團限額七人，有興趣參與者記得到報名專區報名喔！每團每時段以報名前七人優先錄取，屆時名單將公布在單車節臉書～
              <br />
              ＊如對以上內容有任何疑惑，歡迎私訊「成大單車節」臉書粉專或 IG
              官方帳號 <br />
              ＊若當日該時段遇到下雨，則該時段的單車導覽取消～ <br />
              ＊報名截止日為 2/22 23:59 <br /><br />
            </div>

            <div>
              <!-- 2/13 -->
              <iframe name="formIframe" class="hidden"></iframe>
              <!-- target="formIframe" -->
              <form

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
                <div class="mt-12">
                  <p
                    class="text-lg mt-6 after:content-['*'] after:ml-0.5 after:text-red-500"
                  >
                    身份證字號
                  </p>
                  <p class="mb-6">租借登記使用，絕對保密沒有其他用途喔~</p>
                  <input
                    name="id"
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
                    目前就讀學校
                  </p>
                  <input
                    name="school"
                    class="inputEff"
                    type="text"
                    autocomplete="off"
                    required
                  />
                </div>
                <div class="mt-12 mb-4">
                  <p
                    class="text-lg my-6 after:content-['*'] after:ml-0.5 after:text-red-500"
                  >
                    想參加哪條路線？
                  </p>
                  <div
                    v-for="(route, index) in routes"
                    :key="index"
                    @click="Switch(index)"
                    class="customRadio my-5 w-[150px]"
                  >
                    <input
                      name="route"
                      :id="route"
                      type="radio"
                      :value="route"
                    />
                    <label :for="route">{{ route }}</label>
                  </div>
                </div>

                <div class="mt-12 mb-4">
                  <Transition mode="out-in">
                    <div v-if="num == 0">
                      <div class="text-lg my-6">
                        <span class="text-2xl">文學院的一天</span>
                        <br />
                        中正堂 → 榕園 → 家寶醫學研究室 → 台文系 → 歷史文物館 →
                        小西門 → 火車頭 → 中正堂 (約50分)
                      </div>
                      <div
                        class="text-lg my-6 after:content-['*'] after:ml-0.5 after:text-red-500"
                      >
                        選擇想要的梯次吧！
                      </div>
                      <div
                        v-for="(timing, index) in Liberal"
                        :key="index"
                        class="customRadio my-5"
                      >
                        <input
                          name="timing"
                          :id="timing"
                          type="radio"
                          :value="timing"
                        />
                        <label :for="timing">{{ timing }}</label>
                      </div>
                    </div>
                    <div v-else-if="num == 1">
                      <div class="text-lg my-6">
                        <span class="text-2xl">觀光客行程</span>
                        <br />
                        中正堂 → 博物館 → 格致堂 → 總圖 → 榕園 →
                        小西門/歷史文物館 → 中正堂 (約50分)
                      </div>
                      <div
                        class="text-lg my-6 after:content-['*'] after:ml-0.5 after:text-red-500"
                      >
                        選擇想要的梯次吧！
                      </div>
                      <div
                        v-for="(timing, index) in Tourist"
                        :key="index"
                        class="customRadio my-5"
                      >
                        <input
                          name="timing"
                          :id="timing"
                          type="radio"
                          :value="timing"
                        />
                        <label :for="timing">{{ timing }}</label>
                      </div>
                    </div>
                    <div v-else-if="num == 2">
                      <div class="text-lg my-6">
                        <span class="text-2xl">理工之旅</span>
                        <br />
                        中正堂 → 測量系 → 自強校區 → 航太系直升機→格致堂 →
                        未來館 → 中正堂 (約50分)
                      </div>
                      <div
                        class="text-lg my-6 after:content-['*'] after:ml-0.5 after:text-red-500"
                      >
                        選擇想要的梯次吧！
                      </div>
                      <div
                        v-for="(timing, index) in Fragrant"
                        :key="index"
                        class="customRadio my-5"
                      >
                        <input
                          name="timing"
                          :id="timing"
                          type="radio"
                          :value="timing"
                        />
                        <label :for="timing">{{ timing }}</label>
                      </div>
                    </div>
                  </Transition>
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
        </Transition>
      </div>
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
