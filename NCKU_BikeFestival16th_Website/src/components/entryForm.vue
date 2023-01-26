<script setup>

</script>

<template>
  <div class="">

    <p class="text-4xl my-8">表單名稱</p>

    <form>
      <div class="p-2">
        <p class="text-lg my-2" id="test">電子信箱</p>
        <input class="inputEff" type="text" autocomplete="off" required>
      </div>
      <div class="p-2">
        <p class="text-lg my-2">你的名字</p>
        <input class="inputEff" type="email" autocomplete="off" required>
      </div>
      <div class="p-2">
        <p class="text-lg my-2">
          就讀學校及年級
          <br>例：高雄中學高三
        </p>
        <input class="inputEff" type="tel" autocomplete="off" pattern="[0-9]{10}" required>
      </div>
      <div class="p-2">
        <p class="text-lg my-2">聯絡電話</p>
        <input class="inputEff" type="email" autocomplete="off" required>
      </div>
      <div class="p-2">
        <p class="text-lg my-2">
          常用的聯絡信箱
          <br> 報名後要記得確認信箱喔～
        </p>
        <input class="inputEff" type="email" autocomplete="off" required>
      </div>
      <div class="p-2">
        <p class="text-lg my-2">你的臉書連結</p>
        <input class="inputEff" type="email" autocomplete="off" required>
      </div>
      <div class="p-2">
        <p class="text-lg my-2">
          想參加的演講場次
          <br> 一個場次為70分鐘
        </p>
        ...

      </div>
      <div class="p-2">
        <p class="text-lg my-2">有沒有想事先詢問教授的問題？
          （會以匿名的形式將問題給教授，並在最後的QA時間回答，歡迎大家踴躍提問！）</p>
        <input class="inputEff" type="email" autocomplete="off" required>
      </div>
      <div class="p-2">
        <p class="text-lg my-2">有其他想問的嗎？</p>
        <input class="inputEff" type="email" autocomplete="off" required>
      </div>

      <input type="submit">

    </form>

  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .inputEff {
    @apply transition duration-200 border-b 
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