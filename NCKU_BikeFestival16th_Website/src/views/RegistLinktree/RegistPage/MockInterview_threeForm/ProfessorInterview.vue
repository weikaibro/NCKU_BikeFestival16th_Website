<script setup>
import { ref, onMounted } from "vue";
import irregularButton from "../../../../components/irregularButton.vue";

const checkBoxInfo1 = ref([
  { time:'3/4（六）上午 9:00 - 10:30', dept:'職治系', api:'entry.665165868', style: "after:content-['*'] after:ml-2 after:text-red-500" },
  { time:'', dept:'化工系', api:'entry.665165868' },
  { time:'', dept:'材料系', api:'entry.665165868' },
  { time:'', dept:'歷史系', api:'entry.665165868' },
  { time:'', dept:'護理系', api:'entry.665165868' },
  { time:'', dept:'不參加', api:'entry.665165868' },
  { time:'3/4（六）上午 10:30 - 12:00', dept:'經濟系', api:'entry.2098168397', style: "after:content-['*'] after:ml-2 after:text-red-500" },
  { time:'', dept:'醫學系', api:'entry.2098168397' },
  { time:'', dept:'中文系', api:'entry.2098168397' },
  { time:'', dept:'不分系', api:'entry.2098168397' },
  { time:'', dept:'環工系', api:'entry.2098168397' },
  { time:'', dept:'不參加', api:'entry.2098168397' },
  { time:'3/5（日）上午 09:00 - 10:30', dept:'職治系', api:'entry.1574744861', style: "after:content-['*'] after:ml-2 after:text-red-500" },
  { time:'', dept:'化工系', api:'entry.1574744861' },
  { time:'', dept:'材料系', api:'entry.1574744861' },
  { time:'', dept:'資源系', api:'entry.1574744861' },
  { time:'', dept:'電機系', api:'entry.1574744861' },
  { time:'', dept:'不參加', api:'entry.1574744861' },
  { time:'3/5（日）上午 10:30 - 12:00', dept:'經濟系', api:'entry.935041690', style: "after:content-['*'] after:ml-2 after:text-red-500" },
  { time:'', dept:'醫學系', api:'entry.935041690' },
  { time:'', dept:'不分系', api:'entry.935041690' },
  { time:'', dept:'會計系', api:'entry.935041690' },
  { time:'', dept:'護理系', api:'entry.935041690' },
  { time:'', dept:'不參加', api:'entry.935041690' },
]);

// at least one "checkbox" to be selected
function checkSelected() {
  var sets = [
    {
      checkboxes: document.querySelectorAll('[name="entry.665165868"]'),
      errorMessage: "請在【3/4（六）上午 9:00 - 10:30】中至少選擇一項"
    },
    {
      checkboxes: document.querySelectorAll('[name="entry.2098168397"]'),
      errorMessage: "請在【3/4（六）上午 10:30 - 12:00】中至少選擇一項"
    },
    {
      checkboxes: document.querySelectorAll('[name="entry.1574744861"]'),
      errorMessage: "請在【3/5（日）上午 09:00 - 10:30】中至少選擇一項"
    },
    {
      checkboxes: document.querySelectorAll('[name="entry.935041690"]'),
      errorMessage: "請在【3/5（日）上午 10:30 - 12:00】中至少選擇一項"
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
  if (checkedOne[0] && checkedOne[1] && checkedOne[2] && checkedOne[3]) {
    console.log('Welcome!')
    document.querySelector('form').submit();
    alert('報名成功！')
  }
}
</script>

<template>
  <div>
    <div class="text-4xl font-bold mb-10">單車十六｜學習歷程加油站報名表</div>
    <div class="text-xl leading-8">
      各位高中生好，我們是第十六屆成功大學單車節學術部模擬面試組
      <br />
      我們將於 3/4(六)~3/5(日) 早上09:00-12:00 舉辦學習歷程加油站

      <br /><br />
      活動說明：請各位高中生事先上傳學習歷程檔案，會有成大的學長姐們幫忙檢閱並給予意見。檢閱內容為學習歷程自述（就讀動機、未來規劃、學習計畫），若內容沒有很完整也不用擔心，我們可以就現有的部分提供建議！

      <br /><br />
      活動地點：國立成功大學 唯農大樓（屆時會有角標指引）

      <br /><br />
      對應時段及科系： <br />
      3/4（六）09:00 - 10:30：職治系、化工系、材料系、歷史系、護理系 <br />
      3/4（六）10:30 - 12:00：經濟系、醫學系、不分系、中文系、環工系 <br />
      3/5（日）09:00 - 10:30：職治系、化工系、材料系、資源系、電機系 <br />
      3/5（日）10:30 - 12:00：經濟系、醫學系、不分系、會計系、護理系 <br />
      *
      一份歷程檔案檢閱及提供意見的時間約為10分鐘，詳細時間會在後續寄發之信件中通知

      <br /><br />
      📣貼心小提醒 <br />
      若你已有報名模擬面試，或是單車節其他活動，要注意該活動時間是否與學習歷程加油站重疊喔！
      <br />
      ❗❗ 上傳學習歷程檔案時，若是以雲端分享，記得檢查共用權限是否開啟哦！

      <br /><br />
      🏴此表單將在 2/19(日)
      23:59截止，後續錄取通知及相關資訊皆會經由電子郵件發送，因此麻煩各位一定要填「常用」信箱～

      <br /><br />
      有任何問題或是不明白的地方可以聯絡以下負責人：
      <br />
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
    </div>

    <form
      action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSdeTDSvDqKfNVG9tYo_fmpiRFLlXjS_BNjHS31T1eNjGLVZJw/formResponse"
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
          name="entry.901120360"
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
          name="entry.1491874794"
          class="inputEff"
          type="text"
          autocomplete="off"
          required
        />
      </div>
      <div class="mt-12">
        <p class="text-lg my-6 after:content-['*'] after:ml-0.5 after:text-red-500">聯絡電話（格式: 0912-345678）</p>
        <input
          name="entry.1268614972"
          class="inputEff"
          pattern="[0-9]{4}-[0-9]{6}"
          type="tel"
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
          name="entry.179244061"
          class="inputEff"
          type="email"
          autocomplete="off"
          required
        />
      </div>
      <div class="mt-12">
        <p class="text-lg my-6 after:content-['*'] after:ml-0.5 after:text-red-500">你的臉書連結 </p>
        <input
          name="entry.35071403"
          class="inputEff"
          type="url"
          autocomplete="off"
          required
        />
      </div>
      <!-- diff -->
      <div class="mt-20 mb-4">
        <p class="text-3xl"> 學習歷程加油站</p>
        <p class="text-lg">
         <br> 請依據報名對應的科系時間進行勾選並上傳學習歷程檔案
         <br> 若不止有一個科系的檔案，請附上檔案連結～
         <br> 記得將檔名更改成 姓名-科系 再上傳喔！
        </p>
        <div
          v-for="info in checkBoxInfo1"
          :key="checkBoxInfo1.indexOf(info)"
        >
          <p class="my-6 text-xl" :class="info.style">{{ info.time }}</p>
          <label class="checkBoxEff">
            <input :name="info.api" type="checkbox" :value="info.dept" class="cursor-pointer" />{{
              info.dept
            }}
          </label>
        </div>

        <!-- text -->
        <div class="mt-12">
          <p class="text-lg mt-6 after:content-['*'] after:ml-0.5 after:text-red-500">
            學習歷程上傳與檔案連結
          </p>
          <p class="mb-6">
            請把檔名改成「姓名-科系」後上傳至您的 google 雲端硬碟，操作指南請參考<a
              class="linkEff"
              href="https://support.google.com/drive/answer/2494822?hl=zh-Hant&co=GENIE.Platform%3DDesktop#zippy=%2C%E8%88%87%E7%89%B9%E5%AE%9A%E4%BD%BF%E7%94%A8%E8%80%85%E5%85%B1%E7%94%A8%E6%AA%94%E6%A1%88"
              target="_blank"
              rel="noreferrer noopenner"
            >這裡</a>，並將檔案的「共用連結」複製到下方欄位。
            <br> 請同學注意，務必將檔案的權限更改為「與所有人共用」，以利後續作業。
            <br> 若您報名多個科系，且有多個檔案，請參考<a
              class="linkEff"
              href="https://support.google.com/drive/answer/7166529"
              target="_blank"
              rel="noreferrer noopenner"
            >這裡</a>，並複製整個資料夾的「共用連結」於下方欄位中。
          </p>
          <input
            id="customUploadBtn"
            name="entry.957710852"
            class="inputEff"
            type="url"
            required
          />
        </div>
        <div class="mt-12">
          <p class="text-lg my-6">
            有其他想問的嗎？
          </p>
          <input
            name="entry.464609855"
            class="inputEff"
            type="text"
            autocomplete="off"
          />
        </div>
      </div>
      <div class="py-20 w-[300px]">
        <input id="customBtn" type="submit" hidden />
        <label for="customBtn">
          <irregularButton btnTitle="送出" />
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
        hover:border-myblue focus:border-myblue focus:outline-none focus:border-b-2;
  }
}

.linkEff {
  transition: color 0.5s ease, box-shadow 0.5s ease;
  -o-transition: color 0.5s ease, box-shadow 0.5s ease;
  -moz-transition: color 0.5s ease, box-shadow 0.5s ease;
  -webkit-transition: color 0.5s ease, box-shadow 0.5s ease;
  text-decoration: underline;
  text-underline-offset: 5px;
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
