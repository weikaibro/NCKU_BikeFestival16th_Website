<script setup>
import { ref, onMounted, computed } from "vue";
import { RouterLink, RouterView } from "vue-router";
import axios from "axios";
import Navbar from "../../../components/Navbar.vue";
import Footer from "../../../components/Footer.vue";
import irregularButton from "../../../components/irregularButton.vue";
const buttonName = [
  { name: "講座", path: "/Registration/Linktree/ExploreLearning" },
  {
    name: "討論會",
    path: "/Registration/Linktree/ExploreLearning2",
  },
];
const grades = ["國中或以下", "高中", "大學", "研究所或以上"];
const sessions = [
  "場次一 03／04（六）13：30 ~15：00（12:45開放入場）",
  "場次二 03／04（六）16：00 ~17：30（15:30開放入場）",
  "場次三 03／05（日）13：30 ~15：00（13:00開放入場）",
];
const isRegistSuccess = ref("");
const isBtnDisable = ref("")
const submitText = ref("送出")
function checkSelected() {
  var sets = [
    {
      checkboxes: document.querySelectorAll('[name="grade"]'),
      errorMessage: "請在【目前學歷】中選擇一項",
    },
    {
      checkboxes: document.querySelectorAll('[name="session"]'),
      errorMessage: "請在【欲報名之場次（可複選喔）】中至少選擇一項",
    },
    {
      checkboxes: document.querySelectorAll('[name="confirm"]'),
      errorMessage:"請在【確定欲報名的場次與時間是可以參與，沒有與其他活動衝突】中選擇一項",
    },
  ];
  var checkedOne = [false, false, false];
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
  if (checkedOne[0] && checkedOne[1] && checkedOne[2]) {
    isBtnDisable.value = "true"
    submitText.value = "處理中..."
    var formData = document.querySelector("form");
    // ref: https://andy-carter.com/blog/disable-multiple-form-submits-with-vanilla-javascript
    document.querySelector('input[type="submit"]').setAttribute('disabled', 'disabled');
    axios
      .post("https://nckubikefestival.ncku.edu.tw/api/register/ExploreLearning2", formData)
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
      <span class="mt-20 text-5xl font-bold tracking-wider max-md:text-4xl"
        >探索學習</span
      >
      <div class="flex max-md:flex-col max-md:my-6">
        <RouterLink
          v-for="value in buttonName"
          :key="buttonName.indexOf(value)"
          :to="value.path"
        >
          <button
            class="transition furatioduration-100 font-semibold bg-transparent text-white text-lg border-2 border-white w-[250px] h-[45px] mx-8 px-5 py-1 rounded-full hover:scale-105 active:scale-95 max-md:text-base max-md:my-4"
            :class="{ change: buttonName.indexOf(value) === 1 }"
          >
            {{ value.name }}
          </button>
        </RouterLink>
      </div>
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

    <div class="">
      <div class="px-36 pt-16 max-md:px-4">
        <div class="flex text-4xl font-bold mb-10 max-sm:text-2xl">
          <div>單車十六｜探索學習｜討論會報名</div>
        </div>
        <div class="text-lg leading-9 max-sm:text-sm">
          負責人聯絡資訊：
          <br />
          學術部｜部長｜劉世瑜｜
          <a
            class="linkEff"
            href="https://www.facebook.com/liucinnamoroll"
            target="_blank"
            rel="noreferrer noopenner"
            >Facebook</a
          >
          <br />
          學術部｜部員｜陳采欣｜
          <a
            class="linkEff"
            href="https://www.facebook.com/profile.php?id=100082289293575"
            target="_blank"
            rel="noreferrer noopenner"
            >Facebook</a
          >
          <br />
          學術部｜部員｜梁祐晨｜
          <a
            class="linkEff"
            href="https://www.facebook.com/profile.php?id=100001349479942"
            target="_blank"
            rel="noreferrer noopenner"
            >Facebook</a
          >
          <br />
          學術部｜部員｜陳俊安｜
          <a
            class="linkEff"
            href="https://www.facebook.com/ColtenOuO/"
            target="_blank"
            rel="noreferrer noopenner"
            >Facebook</a
          >
          <br />
          學術部｜部員｜黃奎臻｜
          <a
            class="linkEff"
            href="https://www.facebook.com/profile.php?id=100022321603586"
            target="_blank"
            rel="noreferrer noopenner"
            >Facebook</a
          >
          <br />
          學術部｜部員｜姚瀚晴｜
          <a
            class="linkEff"
            href="https://www.facebook.com/hanna.yao.77"
            target="_blank"
            rel="noreferrer noopenner"
            >Facebook</a
          >
          <br />
          學術部｜部員｜蕭翔駿｜
          <a
            class="linkEff"
            href="https://www.facebook.com/profile.php?id=100003734715197"
            target="_blank"
            rel="noreferrer noopenner"
            >Facebook</a
          >
          <br />
          我們收集您的資訊，以方便我們更準確地進行統計，祝福您開心地參與活動。
        </div>

        <div class="mt-10">
          <Transition mode="out-in">
            <div 
              class="mx-auto my-16 border-2 border-white flex flex-col justify-center items-center h-[400px] w-[1000px] text-center"
              v-if="isRegistSuccess == 'closed'"
            >
              <div class="text-4xl font-bold mb-10 max-sm:text-2xl">探索學習｜討論會報名</div>
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
            <div
              class="border-2 border-white p-10 text-center mb-32"
              v-else-if="isRegistSuccess == 'success'"
            >
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
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfHwXFwSNmVmXpWYmV1Mdf2Q4kFZs0vD87s4InzE7DmbsqFMQ/viewform"
                  target="_blank"
                  rel="noreferrer noopenner"
                  >此份表單</a
                >報名
              </div>
            </div>

            <div v-else>
              <div>
                <form @submit.prevent="checkSelected">
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

                  <!-- <div class="mt-12 text-lg leading-9 max-sm:text-sm">
                    <div class="text-2xl mb-4 max-sm:text-lg">
                      報名時間：即日起～2/26（日）23:59
                      <br />
                      錄取通知信將於 2/28（二）前寄送完畢
                    </div>
                    <div>＊屆時請記得檢查信箱＊</div>
                  </div> -->

                  <div class="mt-20 text-lg leading-9 max-sm:text-sm">
                    <div class="text-2xl mb-4">A. ✨基本資料✨</div>
                    <div>
                      我們需要收集您的基本資料，以方便跟您進行有效的報名確認和聯絡。
                    </div>
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
                      連絡電話
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
                  <div class="customRadio mt-12 mb-32">
                    <p
                      class="text-lg my-6 after:content-['*'] after:ml-0.5 after:text-red-500"
                    >
                      目前學歷
                    </p>
                    <div
                      v-for="(grade, index) in grades"
                      :key="index"
                      class="my-5"
                    >
                      <input
                        name="grade"
                        :id="grade"
                        type="radio"
                        :value="grade"
                      />
                      <label :for="grade">{{ grade }}</label>
                    </div>
                  </div>

                  <div class="mt-20">
                    <div class="text-3xl max-sm:text-2xl">
                      B. ✨講座參與意願✨
                    </div>
                    <div class="text-lg max-sm:text-base">
                      <div class="text-2xl mt-12 mb-2 max-sm:text-xl">
                        場次一 03／04（六）13：30 ~15：00（13：00開放入場）
                      </div>
                      主題：108課綱下的各社會角色
                      <br />
                      地點：多功能廳(學生第一活動中心旁邊) <br />
                      組織：法律白話文運動
                      <div class="text-2xl mt-12 mb-2 max-sm:text-xl">
                        場次二 03／04（六）16：00 ~17：30（15：30 開放入場）
                      </div>
                      主題：學習的意義
                      <br />
                      地點：多功能廳(學生第一活動中心旁邊) <br />
                      組織：爆學力
                      <div class="text-2xl mt-12 mb-2 max-sm:text-xl">
                        場次三 03／05（日）13：30 ~15：00（13：00 開放入場）
                      </div>
                      主題：選錯科系的原因為何？要怎麼避免呢？
                      <br />
                      地點：多功能廳(學生第一活動中心旁邊) <br />
                      組織：啟夢教育
                    </div>
                  </div>

                  <div class="mt-20">
                    <p
                      class="mb-4 text-2xl after:content-['*'] after:ml-0.5 after:text-red-500 max-sm:text-lg"
                    >
                      欲報名之場次（可複選喔）
                    </p>
                    <label
                      class="checkBoxEff"
                      v-for="(session, index) in sessions"
                      :key="index"
                    >
                      <input
                        name="session"
                        type="checkbox"
                        :value="session"
                        class="cursor-pointer"
                      />
                      {{ session }}
                    </label>
                  </div>

                  <div class="customRadio mt-12 mb-32">
                    <p
                      class="text-2xl my-6 after:content-['*'] after:ml-0.5 after:text-red-500 max-sm:text-xl"
                    >
                      確定欲報名的場次與時間是可以參與，沒有與其他活動衝突
                    </p>
                    <div class="my-5 text-lg">
                      <input
                        name="confirm"
                        id="confirm"
                        type="radio"
                        value="完全沒問題，肯定會來參與"
                      />
                      <label for="confirm">完全沒問題，肯定會來參與</label>
                    </div>
                  </div>

                  <div class="mt-12 text-lg max-sm:text-base">
                    <div class="text-3xl mb-4 max-sm:text-2xl">
                      B. 討論會形式說明與會前問題調查
                    </div>
                    <div class="mb-6">
                      本次討論坊相較一般工作坊，時間較短。
                      <br />
                      因此我們希望每個報名的人，都可以是帶著疑問和好奇前來。
                      <br />
                      這樣相信你們在活動當下可以有更深刻的體會與收穫，同時我們活動流程也能較為順暢。
                      <br />
                      因此下方希望你們可以針對你們報名的場次，能夠提出你們現有的想法、困惑。
                      <br />
                      以利我們初步掌握學員的狀況，進一步設計更完善、更貼合每個學員的內容。
                      <br /><br />
                      註：只需填寫欲報名之場次即可 <br />
                      註：建議先將內容打在記事本上，不然跳掉需要全部重打，會瘋掉
                    </div>
                  </div>
                  <div class="mt-12 text-lg">
                    <div class="text-xl mb-6">針對特定議題有沒有什麼想說的</div>
                    <input
                      name="issue"
                      class="inputEff"
                      type="text"
                      autocomplete="off"
                    />
                  </div>

                  <div class="mt-20 text-lg">
                    <div class="text-3xl mb-4 max-sm:text-2xl">
                      ✨關於成大單車節的資訊✨
                    </div>
                    <div class="mb-6">
                      單車節粉專：<a
                        class="linkEff"
                        href="https://www.facebook.com/NCKUbikefestival"
                        target="_blank"
                        rel="noreferrer noopenner"
                        >Facebook</a
                      >
                      <br />
                      單車節 IG - 小單單：<a
                        class="linkEff"
                        href="https://www.instagram.com/nckubike_official/"
                        target="_blank"
                        rel="noreferrer noopenner"
                        >Instagram</a
                      >
                      <br />
                      單車節 YouTube：<a
                        class="linkEff"
                        href="https://www.youtube.com/@user-ss2sl8nu8l"
                        target="_blank"
                        rel="noreferrer noopenner"
                        >Youtube</a
                      >
                    </div>
                  </div>

                  <div class="mt-12 text-lg">
                    <div class="text-xl my-6">
                      感謝你/妳填寫這份表單，有任何想說的話都可以在這邊跟我們說！
                    </div>
                    <input
                      name="anything"
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
.change {
  background-color: #003cd1;
  border-color: #003cd1;
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
  font-size: 1.1rem;
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

  width: 1.1em;
  height: 1.1em;
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
