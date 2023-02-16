<script setup>
import { ref } from "vue";
import axios from "axios";
import irregularButton from "../../../../components/irregularButton.vue";
const grades = ["國中或以下", "高中", "大學", "研究所或以上"];
const sessions = [
  "場次一 3/4（六）10：00 ~11：30（9:30開放入場）",
  "場次二 3/4（六）13：30 ~15：00（13:00開放入場）",
  "場次三 3/4（六）16：00 ~17：30（15:30開放入場）",
  "場次四 3/5（日）10：00 ~11：30（9:30開放入場）",
  "場次五 3/5（日）13：30 ~15：00（13:00開放入場）",
];
const isRegistSuccess = ref("");
// at least one "checkbox" to be selected
function checkSelected() {
  var sets = [
    {
      checkboxes: document.querySelectorAll('[name="grade"]'),
      errorMessage: "請在【目前學歷】中至少選擇一項",
    },
    {
      checkboxes: document.querySelectorAll('[name="session"]'),
      errorMessage: "請在【欲報名之場次（可複選喔）】中至少選擇一項",
    },
    {
      checkboxes: document.querySelectorAll('[name="confirm"]'),
      errorMessage: "請在【完全沒問題，肯定會來參與】中至少選擇一項",
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
  if (checkedOne[0] && checkedOne[1] && checkedOne[2]) {
    var formData = document.querySelector("form");
    axios
      .post(
        "https://nckubikefestival.ncku.edu.tw/api/register/ExploreLearning",
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
  <div class="mt-10">
    <!-- <div class="lg:hidden text-lg text-center mb-16">
      電腦以外的裝置請點擊<a
        class="linkEff"
        href="https://docs.google.com/forms/d/1a4dITdkmc0VQlpcTnM6AOCrWRfBPaFbSTP3NZ38MRHk/viewform?edit_requested=true"
        target="_blank"
        rel="noreferrer noopenner"
      >此連結</a>報名
    </div> -->

    <!-- <div class="h-[280px] text-lg text-center my-16 max-lg:hidden">
      此頁面表單維修中，暫時先請前往<a
        class="linkEff"
        href="https://docs.google.com/forms/d/1a4dITdkmc0VQlpcTnM6AOCrWRfBPaFbSTP3NZ38MRHk/viewform?edit_requested=true"
        target="_blank"
        rel="noreferrer noopenner"
      >此連結</a>報名
    </div> -->
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

            <div class="mt-12 text-lg leading-9 max-sm:text-sm">
              <div class="text-2xl mb-4">報名相關時程</div>
              <div>
                報名時間：即日起～2/24（五）23:59
                <br />
                錄取通知信將於 2/26（日）前寄送完畢 <br />
                ＊屆時請記得檢查信箱＊
              </div>
            </div>

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
                type="text"
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
              <div v-for="(grade, index) in grades" :key="index" class="my-5">
                <input name="grade" :id="grade" type="radio" :value="grade" />
                <label :for="grade">{{ grade }}</label>
              </div>
            </div>

            <div class="mt-20">
              <div class="text-3xl max-sm:text-2xl">B. ✨講座參與意願✨</div>
              <div class="text-lg">
                <div class="text-2xl mt-12 mb-2 max-sm:text-xl">
                  場次一 03／04（六）10：00 ~11：30（9:30開放入場）
                </div>
                主題：擊敗拖延｜事半功倍的高效學習法
                <br />
                講師：莊愛玲 <br />
                組織：爆學力 <br />
                地點：國際會議廳一
                <div class="text-2xl mt-12 mb-2 max-sm:text-xl">
                  場次二 03／04（六）13：30 ~15：00（13:00開放入場）
                </div>
                主題：讓服務學習時數用在真正需要的地方，志工活動也可以很有趣
                <br />
                講師：黃妍庭 <br />
                組織：善耕365公益媒合平台 <br />
                地點：國際會議廳一
                <div class="text-2xl mt-12 mb-2 max-sm:text-xl">
                  場次三 03／04（六）16：00 ~17：30（15:30開放入場）
                </div>
                主題：船到橋頭自然直－成為法律人的心理準備
                <br />
                講師：江鎬佑 <br />
                組織：法律白話文運動 <br />
                地點：國際會議廳一
                <div class="text-2xl mt-12 mb-2 max-sm:text-xl">
                  場次四 03／05（日）10：00 ~11：30（9:30開放入場）
                </div>
                主題：如何系統化探索大學科系，一起來「做中學」
                <br />
                講師：許匡毅 <br />
                組織：啟夢教育 <br />
                地點：國際會議廳一
                <div class="text-2xl mt-12 mb-2 max-sm:text-xl">
                  場次五 03／05（日）13：30 ~15：00（13:00開放入場）
                </div>
                主題：先有人，才有教育
                <br />
                講師：白承修 <br />
                組織：Teach For Taiwan為台灣而教 <br />
                地點：國際會議廳一 <br /><br />
                PS：請各位提前15~30分鐘入場，謝謝配合。
              </div>
            </div>

            <div class="mt-12">
              <p
                class="mb-4 text-2xl after:content-['*'] after:ml-0.5 after:text-red-500"
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
                class="text-lg my-6 after:content-['*'] after:ml-0.5 after:text-red-500"
              >
                確定欲報名的場次與時間是可以參與，沒有與其他活動衝突
              </p>
              <div class="my-5">
                <input
                  name="confirm"
                  id="confirm"
                  type="radio"
                  value="完全沒問題，肯定會來參與"
                />
                <label for="confirm">完全沒問題，肯定會來參與</label>
              </div>
            </div>

            <div class="mt-12 text-lg">
              <div class="text-3xl mb-4 max-sm:text-2xl">C.✨報名動機與期待內容✨</div>
              <div class="mb-6">
                為什麼會想來聽這些講座？
                <br />
                關於特定主題，有沒有什麼內容是希望講師能在分享中提到，或是有沒有問題是替你解惑的？
                <br />
                只需填寫欲報名之場次即可 <br />
                註：因為場地有人數限制，所以若報名人數過多，會依填寫內容擇優錄取
              </div>
            </div>
            <div class="mt-12 text-lg">
              <div class="text-xl">
                【場次一、擊敗拖延｜事半功倍的高效學習法】請填寫報名動機及相關疑問
              </div>
              <div class="mb-6">PS：請認真填寫喔！</div>
              <input
                name="session1"
                class="inputEff"
                type="text"
                autocomplete="off"
              />
            </div>
            <div class="mt-12 text-lg">
              <div class="text-xl">
                【場次二、
                讓服務學習時數用在真正需要的地方，志工活動也可以很有趣】請填寫報名動機及相關疑問
              </div>
              <div class="mb-6">PS：請認真填寫喔！</div>
              <input
                name="session2"
                class="inputEff"
                type="text"
                autocomplete="off"
              />
            </div>
            <div class="mt-12 text-lg">
              <div class="text-xl">
                【場次三、
                船到橋頭自然直－成為法律人的心理準備】請填寫報名動機及相關疑問
              </div>
              <div class="mb-6">PS：請認真填寫喔！</div>
              <input
                name="session3"
                class="inputEff"
                type="text"
                autocomplete="off"
              />
            </div>
            <div class="mt-12 text-lg">
              <div class="text-xl">
                【場次四、
                如何系統化探索大學科系，一起來「做中學」】請填寫報名動機及相關疑問
              </div>
              <div class="mb-6">PS：請認真填寫喔！</div>
              <input
                name="session4"
                class="inputEff"
                type="text"
                autocomplete="off"
              />
            </div>
            <div class="mt-12 text-lg">
              <div class="text-xl">
                【場次五、 先有人，才有教育】請填寫報名動機及相關疑問
              </div>
              <div class="mb-6">PS：請認真填寫喔！</div>
              <input
                name="session5"
                class="inputEff"
                type="text"
                autocomplete="off"
              />
            </div>

            <div class="mt-12 text-lg">
              <div class="text-3xl mb-4 max-sm:text-2xl">✨關於成大單車節的資訊✨</div>
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
                <irregularButton btnTitle="送出" />
              </label>
            </div>
          </form>
        </div>
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
