<script setup>
import irregularButton from './irregularButton.vue';
// var submitted=false
</script>

<template>
  <div>
    <!-- <iframe onload="if(submitted) {window.location='https://twitter.com';}" id="hidden_iframe" style="display:none"></iframe> -->
    <form
      action="https://docs.google.com/forms/u/1/d/e/1FAIpQLScDvhJuAJisZGoLG29si_UMhGmxcNYNqlGjLYmLVjJNUlXoiQ/formResponse"
      method="POST"
      onsubmit="submitted=true"
      target="hidden_iframe"
    >
      <div class="pt-12">
        <p class="text-lg my-6" id="test">電子信箱</p>
        <input name="entry.1542886366" class="inputEff" type="text" autocomplete="off" required>
      </div>
      <div class="pt-12">
        <p class="text-lg my-6">你的名字</p>
        <input name="entry.345686533" class="inputEff" type="text" autocomplete="off" required>
      </div>
      <div class="pt-12">
        <p class="text-lg my-6">
          就讀學校及年級
          <br>例：高雄中學高三
        </p>
        <input name="entry.1279699445" class="inputEff" type="text" autocomplete="off" required>
      </div>
      <div class="pt-12">
        <p class="text-lg my-6">聯絡電話</p>
        <input name="entry.826079181" class="inputEff" type="text" autocomplete="off" required>
      </div>
      <div class="pt-12">
        <p class="text-lg my-6">
          常用的聯絡信箱
          <br> 報名後要記得確認信箱喔～
        </p>
        <input name="entry.1951500596" class="inputEff" type="text" autocomplete="off" required>
      </div>
      <div class="pt-12">
        <p class="text-lg my-6">你的臉書連結</p>
        <input name="entry.1433765434" class="inputEff" type="text" autocomplete="off" required>
      </div>
      <div>
        <input name="entry.226656449" type="checkbox" id="choice1" value="1">
        <label for="choice1">1</label>
      </div>
      <div>
        <input name="entry.226656449" type="checkbox" id="choice1" value="2">
        <label for="choice1">2</label>
      </div>
      <div>
        <input name="entry.226656449" type="checkbox" id="choice1" value="3">
        <label for="choice1">3</label>
      </div>

      <p>3/4（六）上午9:00 - 12:00</p>
      <div>
        <input name="entry.872914904" type="checkbox" id="choice1" value="心理系">
        <label for="choice1">心理系</label>
      </div>
      <div>
        <input name="entry.872914904" type="checkbox" id="choice2" value="法律系">
        <label for="choice2">法律系</label>
      </div>
      <div>
        <input name="entry.872914904" type="checkbox" id="choice2" value="環工系">
        <label for="choice2">環工系</label>
      </div>
      <div>
        <input name="entry.872914904" type="checkbox" id="choice3" value="醫技系">
        <label for="choice3">醫技系</label>
      </div>
      <div>
        <input name="entry.872914904" type="checkbox" id="choice4" value="外文系">
        <label for="choice4">外文系</label>
      </div>
      <div>
        <input name="entry.872914904" type="checkbox" id="choice5" value="不分系">
        <label for="choice5">不分系</label>
      </div>
      <div>
        <input name="entry.872914904" type="checkbox" id="choice6" value="不參加">
        <label for="choice6">不參加</label>
      </div>


      <!-- page2 -->
      <div>
        <p>3/4（六）上午9:00 - 12:00</p>
        <div>
          <input name="entry.837131498" type="checkbox" id="choice1" value="心理系">
          <label for="choice1">心理系</label>
        </div>
        <div>
          <input name="entry.837131498" type="checkbox" id="choice2" value="法律系">
          <label for="choice2">法律系</label>
        </div>
        <div>
          <input name="entry.837131498" type="checkbox" id="choice2" value="環工系">
          <label for="choice2">環工系</label>
        </div>
        <div>
          <input name="entry.837131498" type="checkbox" id="choice3" value="醫技系">
          <label for="choice3">醫技系</label>
        </div>
        <div>
          <input name="entry.837131498" type="checkbox" id="choice4" value="外文系">
          <label for="choice4">外文系</label>
        </div>
        <div>
          <input name="entry.837131498" type="checkbox" id="choice5" value="不分系">
          <label for="choice5">不分系</label>
        </div>
        <div>
          <input name="entry.837131498" type="checkbox" id="choice6" value="不參加">
          <label for="choice6">不參加</label>
        </div>
      </div>

      <!-- <div>
        <p>3/4（六）下午13:30 - 16:30</p>
        <div>
          <input name="entry.1152759436" type="checkbox" id="choice1" value="心理系">
          <label for="choice1">心理系</label>
        </div>
        <div>
          <input name="entry.1152759436" type="checkbox" id="choice3" value="藥學系">
          <label for="choice3">藥學系</label>
        </div>
        <div>
          <input name="entry.1152759436" type="checkbox" id="choice2" value="環工系">
          <label for="choice2">環工系</label>
        </div>
        <div>
          <input name="entry.1152759436" type="checkbox" id="choice4" value="牙醫系">
          <label for="choice4">牙醫系</label>
        </div>
        <div>
          <input name="entry.1152759436" type="checkbox" id="choice5" value="法律系">
          <label for="choice5">法律系</label>
        </div>
        <div>
          <input name="entry.1152759436" type="checkbox" id="choice5" value="職治系">
          <label for="choice5">職治系</label>
        </div>
        <div>
          <input name="entry.1152759436" type="checkbox" id="choice5" value="不分系">
          <label for="choice5">不分系</label>
        </div>
        <div>
          <input name="entry.1152759436" type="checkbox" id="choice5" value="水利系">
          <label for="choice5">水利系</label>
        </div>
        <div>
          <input name="entry.1152759436" type="checkbox" id="choice6" value="不參加">
          <label for="choice6">不參加</label>
        </div>
      </div>

      <div> 
        <p>3/5（日）上午9:00 - 12:00</p>
        <div>
          <input name="entry.807095932" type="checkbox" id="choice1" value="醫學系">
          <label for="choice1">醫學系</label>
        </div>
        <div>
          <input name="entry.807095932" type="checkbox" id="choice1" value="心理系">
          <label for="choice1">心理系</label>
        </div>
        <div>
          <input name="entry.807095932" type="checkbox" id="choice2" value="環工系">
          <label for="choice2">環工系</label>
        </div>
        <div>
          <input name="entry.807095932" type="checkbox" id="choice3" value="醫技系">
          <label for="choice3">醫技系</label>
        </div>
        <div>
          <input name="entry.807095932" type="checkbox" id="choice5" value="法律系">
          <label for="choice5">法律系</label>
        </div>
        <div>
          <input name="entry.807095932" type="checkbox" id="choice5" value="外文系">
          <label for="choice5">外文系</label>
        </div>
        <div>
          <input name="entry.807095932" type="checkbox" id="choice5" value="不分系">
          <label for="choice5">不分系</label>
        </div>
        <div>
          <input name="entry.807095932" type="checkbox" id="choice5" value="歷史系">
          <label for="choice5">歷史系</label>
        </div>
        <div>
          <input name="entry.807095932" type="checkbox" id="choice6" value="不參加">
          <label for="choice6">不參加</label>
        </div>
      </div>

      <div> 
        <p>3/5（日）下午13:30 - 16:00</p>
        <div>
          <input name="entry.244463617" type="checkbox" id="choice1" value="心理系">
          <label for="choice1">心理系</label>
        </div>
        <div>
          <input name="entry.244463617" type="checkbox" id="choice3" value="藥學系">
          <label for="choice3">藥學系</label>
        </div>
        <div>
          <input name="entry.244463617" type="checkbox" id="choice5" value="法律系">
          <label for="choice5">法律系</label>
        </div>
        <div>
          <input name="entry.244463617" type="checkbox" id="choice5" value="交管系">
          <label for="choice5">交管系</label>
        </div>
        <div>
          <input name="entry.244463617" type="checkbox" id="choice5" value="環工系">
          <label for="choice5">環工系</label>
        </div>
        <div>
          <input name="entry.244463617" type="checkbox" id="choice5" value="職治系">
          <label for="choice5">職治系</label>
        </div>
        <div>
          <input name="entry.244463617" type="checkbox" id="choice5" value="不分系">
          <label for="choice5">不分系</label>
        </div>
        <div>
          <input name="entry.244463617" type="checkbox" id="choice6" value="不參加">
          <label for="choice6">不參加</label>
        </div>
      </div>

      <div class="pt-12">
        <p class="text-lg my-6">上述勾選的科系及時段的志願序？（會以此作為優先排序的依據）
          例：3/4上午 心理系、3/4下午 心理系</p>
        <input name="entry.2013155686" class="inputEff" type="text" autocomplete="off" required>
      </div>
      <div class="pt-12">
        <p class="text-lg my-6">有其他想問的嗎？</p>
        <input name="entry.567554739" class="inputEff" type="text" autocomplete="off" required>
      </div>

      page3
      <div> 
        <p>想參加的經驗分享場次</p>
        <div>
          <input name="entry.1780036049" type="checkbox" id="choice1" value="3/4（六）10:45-11:15 醫學系 - 陳柏宇（從零開始備醫學—醫學系需要從小立志嗎？）">
          <label for="choice1">3/4（六）10:45-11:15 醫學系 - 陳柏宇（從零開始備醫學—醫學系需要從小立志嗎？）</label>
        </div>
        <div>
          <input name="entry.1780036049" type="checkbox" id="choice3" value="3/4（六）11:30-12:00 藥學系 - 傅芊雯、吳姿蓉（關於申請面試你「藥」知道的事）">
          <label for="choice3">3/4（六）11:30-12:00 藥學系 - 傅芊雯、吳姿蓉（關於申請面試你「藥」知道的事）</label>
        </div>
        <div>
          <input name="entry.1780036049" type="checkbox" id="choice5" value="3/4（六）15:15-15:45 不分系 - 邱耀陞（面試等於演戲？面試官到底想要什麼？）">
          <label for="choice5">3/4（六）15:15-15:45 不分系 - 邱耀陞（面試等於演戲？面試官到底想要什麼？）</label>
        </div>
        <div>
          <input name="entry.1780036049" type="checkbox" id="choice5" value="3/5（日）10:45-11:15 牙醫系 - 張方慈、王嘉榆（關於牙醫面試你必須要知道的幾件事）">
          <label for="choice5">3/5（日）10:45-11:15 牙醫系 - 張方慈、王嘉榆（關於牙醫面試你必須要知道的幾件事）</label>
        </div>
        <div>
          <input name="entry.1780036049" type="checkbox" id="choice5" value="3/5（日）11:30-12:00 藥學系 - 傅芊雯、蕭怡得（關於申請面試你「藥」知道的事—藥學與醫技面試經驗分享）">
          <label for="choice5">3/5（日）11:30-12:00 藥學系 - 傅芊雯、蕭怡得（關於申請面試你「藥」知道的事—藥學與醫技面試經驗分享）</label>
        </div>
        <div>
          <input name="entry.1780036049" type="checkbox" id="choice5" value="3/5（日）15:15-15:45 醫學系 - 蔡宜貞 （備審二階經驗分享）">
          <label for="choice5">3/5（日）15:15-15:45 醫學系 - 蔡宜貞 （備審二階經驗分享）</label>
        </div>
        <div>
          <input name="entry.1780036049" type="checkbox" id="choice5" value="不參加">
          <label for="choice5">不參加</label>
        </div>
      </div>

      <div class="pt-12">
        <p class="text-lg my-6">有其他想問的嗎？</p>
        <input name="entry.1205062714" class="inputEff" type="text" autocomplete="off" required>
      </div> -->

      <div class="py-20 w-[300px]">
        <input id="customBtn" type="submit">
        <label for="customBtn">
          <irregularButton btnTitle="繼續" />
        </label>
      </div>

    </form>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .inputEff {
    @apply transition duration-200 border-b bg-transparent w-[1000px]
        hover:border-pink-600 focus:border-pink-600 focus:outline-none focus:border-b-2;
  }
}

#test {
  animation: spin 1s step-start infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>