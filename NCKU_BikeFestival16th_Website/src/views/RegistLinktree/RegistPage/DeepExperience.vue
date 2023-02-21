<script setup>
import { ref } from 'vue';
import axios from 'axios';
import Navbar from '../../../components/Navbar.vue';
import Footer from '../../../components/Footer.vue';
import irregularButton from '../../../components/irregularButton.vue';
const checkBoxInfo1 = ref([
  { timing: "3/4（六）/0900-0940", api: "session" },
  { timing: "3/4（六）/1300-1340", api: "session" },
  { timing: "3/4（六）/1400-1440", api: "session" },
  { timing: "3/4（六）/1600-1640", api: "session" },
  { timing: "3/5（日）/0900-0940", api: "session" },
  { timing: "3/5（日）/1000-1040", api: "session" },
  { timing: "3/5（日）/1100-1140", api: "session" },
  { timing: "3/5（日）/1300-1340", api: "session" },
  { timing: "3/5（日）/1400-1440", api: "session" },
  { timing: "3/5（日）/1500-1540", api: "session" },
]);
function checkSelected() {
  var sets = [
    {
      checkboxes: document.querySelectorAll('[name="session"]'),
      errorMessage: "請在【選擇時段】中選擇一項"
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
    isBtnDisable.value = "true";
    const submitText = ref("送出")
    var formData = document.querySelector("form");
    // ref: https://andy-carter.com/blog/disable-multiple-form-submits-with-vanilla-javascript
    document.querySelector('input[type="submit"]').setAttribute('disabled', 'disabled');
    axios
      .post(
        "https://nckubikefestival.ncku.edu.tw/api/register/DeepExperience",
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
const isRegistSuccess = ref("");
const isBtnDisable = ref("")
const submitText = ref("送出")
</script>

<template>
  <!-- 2/6 -->
  <div class="bg-black text-white">
    <Navbar />

    <div class="flex flex-col justify-center items-center gap-16 mt-10 max-md:gap-10">
      <span class="text-5xl font-bold tracking-wider max-md:text-4xl">沉浸式體驗</span>

      <picture>
        <source class="w-[55%] mx-auto max-md:w-[90%]" srcset="../../../assets/bikeFestivalLogo2.webp" type="image/webp">
        <img class="w-[55%] mx-auto max-md:w-[90%]" src="../../../assets/bikeFestivalLogo2.png" alt="NCKUlogo">
      </picture>
    </div>

    <!-- <div class="h-[280px] text-lg text-center my-16 lg:hidden">
      電腦以外的裝置請點擊<a
        class="linkEff"
        href="https://docs.google.com/forms/d/e/1FAIpQLSfYl07EbI2kehVd9lFM7EAcKDKPzC7qBV8hKparTfnKLP_T_w/viewform"
        target="_blank"
        rel="noreferrer noopenner"
      >此連結</a>報名
    </div> -->
    <Transition mode="out-in">
      <div class="px-36 pt-16 max-md:px-4" v-if="isRegistSuccess == 'success'">
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
            href="https://docs.google.com/forms/d/e/1FAIpQLSfYl07EbI2kehVd9lFM7EAcKDKPzC7qBV8hKparTfnKLP_T_w/viewform"
            target="_blank"
            rel="noreferrer noopenner"
            >此份表單</a
          >報名
        </div>
      </div>
      <div class="" v-else>
        <div class="px-36 pt-16 max-md:px-4">
          <div>
            <div class="text-4xl font-bold mb-10 max-sm:text-2xl">
              沉浸式體驗報名表單
            </div>
            <div class="text-lg leading-9 max-sm:text-sm">
              遙想高中時期，總是對於大學生活充滿了嚮往與期待，但在實際經歷了大學生活後，卻發現與想像中的模樣有很大的出入。因此，我們將以最真實且多元化的劇本來還原大學日常，讓你走入互動式的劇場，沉浸於大學生活。
              <br /><br />
              〈成・鏡〉這個亦現實亦幻境的劇場，將如鏡般映射出最真實的你，讓你在探索大學課內課外生活的同時也更瞭解自己，以及你最理想中的大學生活模式。
              <br> 沉浸式劇場，也被寫作「互動式劇場」，有別於坐在台下觀賞演出，觀眾在非典型的劇場空間中，成為劇場的參與者，順著表演者的帶領，一同感受全劇的悲與喜。
              <br /><br />
              適合想了解大學日常生活的你，能讓你體會大學最真實的感受，參與絕對讓你收穫滿滿，美好的回憶，難忘的紀念品。
              <br><br>
              活動資訊｜
              <br> 地點：國際會議廳一、二、三、四會、陽台（3、4F）
              <br> 場次：一場 40 分
              <br> 名額有限，每場 10-12 人想參加者請提早報名喔！（當天亦會開放現場）
              <br><br> 
            </div>

            <div>
              <form @submit.prevent="checkSelected">
                <div class="mt-12">
                  <p class="text-lg my-6 after:content-['*'] after:ml-0.5 after:text-red-500">電子信箱 </p>
                  <input
                    name="emailAddress"
                    class="inputEff"
                    type="email"
                    autocomplete="off"
                    required
                  />
                </div>
                <div class="mt-12">
                  <p class="text-lg my-6 after:content-['*'] after:ml-0.5 after:text-red-500">你的名字 </p>
                  <input
                    name="name"
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

                <div class="mt-12 mb-4">
                  <p class="text-lg my-6 after:content-['*'] after:ml-0.5 after:text-red-500">
                    選擇時段
                  </p>
                  <label
                    class="checkBoxEff"
                    v-for="info in checkBoxInfo1"
                    :key="checkBoxInfo1.indexOf(info)"
                  >
                    <input :name="info.api" type="checkbox" :value="info.timing" />{{
                      info.timing
                    }}
                  </label>
                </div>

                <div class="mt-12">
                  <p class="text-lg my-6 after:content-['*'] after:ml-0.5 after:text-red-500">對大學的想像 </p>
                  <input
                    name="college"
                    class="inputEff"
                    type="text"
                    autocomplete="off"
                    required
                  />
                </div>

                <div class="mt-12">
                  <p class="text-lg my-6 after:content-['*'] after:ml-0.5 after:text-red-500">想讀的科系 </p>
                  <input
                    name="dept"
                    class="inputEff"
                    type="text"
                    autocomplete="off"
                    required
                  />
                </div>

                <div class="mt-12">
                  <p class="text-lg my-6">想說的話</p>
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
  gap: 1em;

  margin-top: 1.2em;
  width: 300px;
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