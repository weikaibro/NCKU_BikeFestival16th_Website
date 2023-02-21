<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Navbar from '../../../components/Navbar.vue';
import Footer from '../../../components/Footer.vue';
import irregularButton from '../../../components/irregularButton.vue';
// const grades = ([
//   "高一", "高二", "高三", "其他"
// ])
// at least one "checkbox" to be selected
function checkSelected() {
  var sets = [
    // {
    //   checkboxes: document.querySelectorAll('[name="entry.1613919912"]'),
    //   errorMessage: "請在【年級】中選擇一項"
    // },
    {
      checkboxes: document.querySelectorAll('[name="session1"]'),
      errorMessage: "請在【A梯次 - 3/4（六）上午08：10～10：00】中選擇一項"
    },
    {
      checkboxes: document.querySelectorAll('[name="session2"]'),
      errorMessage: "請在【A梯次 - 3/4（六）下午13：10～15：00】中選擇一項"
    },
    {
      checkboxes: document.querySelectorAll('[name="session3"]'),
      errorMessage: "請在【A梯次 - 3/5（日）上午08：10～10：00】中選擇一項"
    },
    {
      checkboxes: document.querySelectorAll('[name="session4"]'),
      errorMessage: "請在【B梯次 - 3/4（六）上午10：10～12：00】中選擇一項"
    },
    {
      checkboxes: document.querySelectorAll('[name="session5"]'),
      errorMessage: "請在【B梯次 - 3/4（六）下午15：10～17：00】中選擇一項"
    },
    {
      checkboxes: document.querySelectorAll('[name="session6"]'),
      errorMessage: "請在【B梯次 - 3/5（日）上午10：10～12：00】中選擇一項"
    },
  ];
  var checkedOne = [false, false, false, false, false, false];
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
  if (checkedOne[0] && checkedOne[1] && checkedOne[2] && checkedOne[3] && checkedOne[4] && checkedOne[5]) {
    isBtnDisable.value = "true";
    submitText.value = "處理中..."
    var formData = document.querySelector("form");
    // ref: https://andy-carter.com/blog/disable-multiple-form-submits-with-vanilla-javascript
    document.querySelector('input[type="submit"]').setAttribute('disabled', 'disabled');
    axios
      .post(
        "https://nckubikefestival.ncku.edu.tw/api/register/DepartmentTour",
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
  <div class="bg-black text-white">
    <Navbar />

    <div class="flex flex-col justify-center items-center gap-16 mt-10 max-md:gap-10">
      <span class="text-5xl font-bold tracking-wider max-md:text-4xl">系館導覽</span>

      <picture>
        <source class="w-[55%] mx-auto max-md:w-[90%]" srcset="../../../assets/bikeFestivalLogo2.webp" type="image/webp">
        <img class="w-[55%] mx-auto max-md:w-[90%]" src="../../../assets/bikeFestivalLogo2.png" alt="NCKUlogo">
      </picture>

    </div>

    

    <!-- <div class="h-[280px] text-lg text-center my-16 lg:hidden">
      電腦以外的裝置請點擊<a
        class="linkEff"
        href="https://docs.google.com/forms/d/e/1FAIpQLSe74_nIK-bXvBoU2X5q_J503m5bQQQ_Da9YDPsy7gtJNZ6QMA/viewform"
        target="_blank"
        rel="noreferrer noopenner"
      >此連結</a>報名
    </div> -->

    <!-- max-lg:hidden -->
    <div class="">
      <div class="flex flex-col justify-center items-center px-36 pt-16 max-md:px-4">

        <!-- <div class="my-16 border-2 border-white flex flex-col justify-center items-center h-[400px] w-[1000px] text-center">
          <div class="text-4xl font-bold mb-10 max-sm:text-2xl">系館導覽報名表單</div>
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
        </div> -->
        
        <Transition mode="out-in">
          <div
            class="border-2 border-white p-10 text-center mb-32"
            v-if="isRegistSuccess == 'success'"
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
                href="https://docs.google.com/forms/d/e/1FAIpQLSc58FN6FgKwQV8wX6QDVOdiqYs6pthcSyszbxEkbDEuuY3f8g/viewform"
                target="_blank"
                rel="noreferrer noopenner"
                >此份表單</a
              >報名
            </div>
          </div>

          <div class="" v-else>
            <div class="text-4xl font-bold mb-10 max-sm:text-2xl">
              系館導覽報名表單
            </div>
            <div class="text-lg leading-9 max-sm:text-sm">
              哈摟！你們好，我們是單車16學術部科系博覽小組～🤓
              <br /><br />
              除了『科系帳篷』的形式外，我們將在單車節活動當天舉辦 『系館導覽』 的活動，提供你們實際踏入科系系館體驗大學生活的機會～藉由親自體驗該科系的實作活動、學習該科系的內容、聆聽學長姐的介紹等等，使你們對科系有更深的體會與了解！🥰
              <br /><br />
              ❗️在填寫表單之前有些注意事項希望你們可以幫我們詳閱～
              <br>⚠️｜注意事項
              <br> 1. 填寫資料時請確認是否有誤
              <br> 2. 確認報名後我們將會寄報名成功的信件，請『務必』幫我們確認信箱內的郵件！有收到報名成功的信件才算有成功報名喔！
              <br> 3. 若心儀科系名額已滿也沒關係～在單車節當日有開放『現場候補』以及『現場報名』詳細資訊請上粉專查看！
              <br><br> 
              若有任何問題歡迎寫郵件或私訊我們～以下是我們的聯絡資訊
              <br> 谷季倫｜📫gmail：queena921104@gmail.com ｜
              <a
                class="linkEff"
                href="https://www.facebook.com/queena.ku.1"
                target="_blank"
                rel="noreferrer noopenner"
              >
                FB 連結
              </a> 
              <br> 陳俊穎｜📫gmail：e54106195@gs.ncku.edu.tw ｜
              <a
                class="linkEff"
                href="https://reurl.cc/6LoOdk"
                target="_blank"
                rel="noreferrer noopenner"
              >
                FB 連結
              </a>
              <br> 林柏毅｜📫gmail：i94114018@gs.ncku.edu.tw ｜
              <a
                class="linkEff"
                href="https://reurl.cc/GX8ydG"
                target="_blank"
                rel="noreferrer noopenner"
              >
                FB 連結
              </a>
              <br> 王逸蓁｜📫gmail：an4116097@gs.ncku.edu.tw ｜
              <a
                class="linkEff"
                href="https://reurl.cc/06A579"
                target="_blank"
                rel="noreferrer noopenner"
              >
                FB 連結
              </a>
              <br> 楊郁涵｜📫gmail：yuhany1222@gmail.com ｜
              <a
                class="linkEff"
                href="https://reurl.cc/NGvd6Q"
                target="_blank"
                rel="noreferrer noopenner"
              >
                FB 連結
              </a>
              <br> 蔡丞惟｜📫gmail：f24106018@gs.ncku.edu.tw

            </div>

            <div>
              <form
                action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSe74_nIK-bXvBoU2X5q_J503m5bQQQ_Da9YDPsy7gtJNZ6QMA/formResponse"
                method="POST"
                @submit.prevent="checkSelected"
                target="_blank"
                rel="noreferrer noopenner"
              >
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
                <div class="mt-12">
                  <p class="text-lg my-6 after:content-['*'] after:ml-0.5 after:text-red-500">你的臉書連結 </p>
                  <input
                    name="url"
                    class="inputEff"
                    type="text"
                    autocomplete="off"
                    required
                  />
                </div>
                <div class="mt-12">
                  <p class="text-lg after:content-['*'] after:ml-0.5 after:text-red-500">
                    目前就讀學校與年級
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

                <!-- <div class="customRadio mt-12">
                  <p class="text-lg my-6 after:content-['*'] after:ml-0.5 after:text-red-500">
                    年級
                  </p>
                  <div 
                    v-for="(value, index) in grades"
                    :key="index"
                    class="my-5"
                  >
                    <input
                      name="entry.1613919912"
                      :id="value"
                      type="radio"
                      :value="value"
                    />
                    <label :for="value">{{ value }}</label>
                  </div>
                </div> -->

                <div class="mt-28">
                  <div class="text-3xl mb-10">⚠️｜注意事項</div>
                  <p class="text-lg">
                    1. 請幫我們確認一下當天的行程，確定當天有辦法到場再填寫喔～
                    <br><br><strong>A梯次：</strong> 工業設計學系、法律學系、生物科技與產業科學系 、職能治療學系、化學系、機械工程學系、系統暨船舶機電工程學系、物理系 
                    <br><strong>B梯次：</strong> 都市計劃學系Ｘ建築學系、心理學系、生命科學系、歷史學系、環境工程學系、化學工程學系、工程科學系  、資訊工程學系
                    <br><br> 2. 因為表單設計關係，每個時段的時間為預估時段，請特別注意『都計Ｘ建築系』及『物理系』的時長較長，結束的時間分別為上午場 12:30 / 17:30 及下午場 10:30 / 15:30，報名時請留意自身時間是否ok哦～。
                  </p>
                </div>

                <p class="mt-16 mb-4 text-2xl after:content-['*'] after:ml-0.5 after:text-red-500">A梯次 </p>
                <div class="grid grid-cols-11 w-[880px] gap-y-6">
                  <!-- <div class="flex"> -->
                    <div class="col-span-2"></div>
                    <div class="text-center">工設系</div>
                    <div class="text-center">法律系</div>
                    <div class="text-center">生科系</div>
                    <div class="text-center">職治系</div>
                    <div class="text-center">化學系</div>
                    <div class="text-center">機械系</div>
                    <div class="text-center">系統系</div>
                    <div class="text-center">物理系</div>
                    <div class="text-center">不參加</div>
                  <!-- </div>
                  <div class="flex"> -->
                    <div class="col-span-2">3/4（六）上午08：10～10：00</div>
                    <div class="customRadio twoDimension"><input type="radio" name="session1" id="工設系" value="工業設計學系"><label for="工設系"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session1" id="法律系" value="法律學系"><label for="法律系"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session1" id="生科系" value="生物科技與產業科學系"><label for="生科系"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session1" id="職治系" value="職能治療學系"><label for="職治系"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session1" id="化學系" value="化學系"><label for="化學系"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session1" id="機械系" value="機械工程學系"><label for="機械系"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session1" id="系統系" value="系統暨船舶機電工程學"><label for="系統系"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session1" id="物理系" value="物理系"><label for="物理系"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session1" id="不參加" value="不參加"><label for="不參加"></label></div>
                  <!-- </div>
                  <div class="flex"> -->
                    <div class="col-span-2">3/4（六）下午13：10～15：00</div>
                    <div class="customRadio twoDimension"><input type="radio" name="session2" id="工設系2" value="工業設計學系"><label for="工設系2"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session2" id="法律系2" value="法律學系"><label for="法律系2"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session2" id="生科系2" value="生物科技與產業科學系"><label for="生科系2"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session2" id="職治系2" value="職能治療學系"><label for="職治系2"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session2" id="化學系2" value="化學系"><label for="化學系2"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session2" id="機械系2" value="機械工程學系"><label for="機械系2"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session2" id="系統系2" value="系統暨船舶機電工程學"><label for="系統系2"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session2" id="物理系2" value="物理系"><label for="物理系2"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session2" id="不參加2" value="不參加"><label for="不參加2"></label></div>
                  <!-- </div> -->
                  <!-- <div class="flex"> -->
                    <div class="col-span-2">3/5（日）上午08：10～10：00</div>
                    <div class="customRadio twoDimension"><input type="radio" name="session3" id="工設系3" value="工業設計學系"><label for="工設系3"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session3" id="法律系3" value="法律學系"><label for="法律系3"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session3" id="生科系3" value="生物科技與產業科學系"><label for="生科系3"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session3" id="職治系3" value="職能治療學系"><label for="職治系3"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session3" id="化學系3" value="化學系"><label for="化學系3"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session3" id="機械系3" value="機械工程學系"><label for="機械系3"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session3" id="系統系3" value="系統暨船舶機電工程學"><label for="系統系3"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session3" id="物理系3" value="物理系"><label for="物理系3"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session3" id="不參加3" value="不參加"><label for="不參加3"></label></div>
                  <!-- </div> -->
                </div>

                <p class="mt-16 mb-4 text-2xl after:content-['*'] after:ml-0.5 after:text-red-500">B梯次 </p>
                <div class="grid grid-cols-10 w-[880px] gap-y-6">
                  <!-- <div class="flex"> -->
                    <div class="col-span-2"></div>
                    <div class="text-center">都計Ｘ建築系</div>
                    <div class="text-center">生科系</div>
                    <div class="text-center">歷史系</div>
                    <div class="text-center">環工系</div>
                    <div class="text-center">化工系</div>
                    <div class="text-center">工科系</div>
                    <div class="text-center">資工系</div>
                    <div class="text-center">不參加</div>
                  <!-- </div>
                  <div class="flex"> -->
                    <div class="col-span-2">3/4（六）上午10：10～12：00</div>
                    <div class="customRadio twoDimension"><input type="radio" name="session4" id="都計Ｘ建築系4" value="都市計劃學系Ｘ建築學系"><label for="都計Ｘ建築系4"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session4" id="生科系4" value="生命科學系"><label for="生科系4"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session4" id="歷史系4" value="歷史學系"><label for="歷史系4"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session4" id="環工系4" value="環境工程學系"><label for="環工系4"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session4" id="化工系4" value="化學工程學系"><label for="化工系4"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session4" id="工科系4" value="工程科學系"><label for="工科系4"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session4" id="資工系4" value="資訊工程學系"><label for="資工系4"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session4" id="不參加4" value="不參加"><label for="不參加4"></label></div>
                  <!-- </div>
                  <div class="flex"> -->
                    <div class="col-span-2">3/4（六）下午15：10～17：00</div>
                    <div class="customRadio twoDimension"><input type="radio" name="session5" id="都計Ｘ建築系5" value="都市計劃學系Ｘ建築學系"><label for="都計Ｘ建築系5"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session5" id="生科系5" value="生命科學系"><label for="生科系5"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session5" id="歷史系5" value="歷史學系"><label for="歷史系5"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session5" id="環工系5" value="環境工程學系"><label for="環工系5"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session5" id="化工系5" value="化學工程學系"><label for="化工系5"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session5" id="工科系5" value="工程科學系"><label for="工科系5"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session5" id="資工系5" value="資訊工程學系"><label for="資工系5"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session5" id="不參加5" value="不參加"><label for="不參加5"></label></div>
                  <!-- </div>
                  <div class="flex"> -->
                    <div class="col-span-2">3/5（日）上午10：10～12：00</div>
                    <div class="customRadio twoDimension"><input type="radio" name="session6" id="都計Ｘ建築系6" value="都市計劃學系Ｘ建築學系"><label for="都計Ｘ建築系6"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session6" id="生科系6" value="生命科學系"><label for="生科系6"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session6" id="歷史系6" value="歷史學系"><label for="歷史系6"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session6" id="環工系6" value="環境工程學系"><label for="環工系6"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session6" id="化工系6" value="化學工程學系"><label for="化工系6"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session6" id="工科系6" value="工程科學系"><label for="工科系6"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session6" id="資工系6" value="資訊工程學系"><label for="資工系6"></label></div>
                    <div class="customRadio twoDimension"><input type="radio" name="session6" id="不參加6" value="不參加"><label for="不參加6"></label></div>
                  <!-- </div> -->
                </div>

                <div class="mt-12">
                  <p class="text-lg my-6">想知道的問題</p>
                  <input
                    name="question"
                    class="inputEff"
                    type="text"
                    autocomplete="off"
                  />
                </div>

                <div class="pt-12">
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
input[type=number] {
  -moz-appearance: textfield;
}
/* td {
  margin-left: 10px;
} */

/* ref: https://codepen.io/selvaraj/pen/OXoqoN */
.customRadio input[type="radio"] {
  display: none;
}
.customRadio input[type="radio"] + label{
  position: relative;
  display: inline-block;
  padding-left: 2.5em;
  cursor: pointer;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.customRadio input[type="radio"] + label:before, .customRadio input[type="radio"] + label:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 1.6em;
  height: 1.6em;
  text-align: center;
  color: white;
  font-family: Times;
  border-radius: 50%;
  -webkit-transition: all .3s ease;
  transition: all .3s ease;
}
.customRadio.twoDimension input[type="radio"] + label:before, .customRadio.twoDimension input[type="radio"] + label:after {
  left: 27px;
}
@media (max-width: 768px) {
  .customRadio.twoDimension input[type="radio"] + label:before, .customRadio.twoDimension input[type="radio"] + label:after {
    left: 10px;
    width: 1.2em;
    height: 1.2em;
  }
}
.customRadio input[type="radio"] + label:before {
  -webkit-transition: all .3s ease;
  transition: all .3s ease;
  box-shadow: inset 0 0 0 0.2em white, inset 0 0 0 1em white;
}
.customRadio input[type="radio"] + label:hover:before {
  -webkit-transition: all .3s ease;
  transition: all .3s ease;
  box-shadow: inset 0 0 0 0.3em white, inset 0 0 0 1em #c6c6c6;
}
.customRadio input[type="radio"]:checked + label:before {
  -webkit-transition: all .3s ease;
  transition: all .3s ease;
  box-shadow: inset 0 0 0 0.2em white, inset 0 0 0 1em #003cd1;
}
</style>