<script setup>
</script>

<template>
  <div class="bg-black text-white text-2xl inline-block px-20 py-20">

    <div class="flex">
      <div class="bgColor mr-16 relative basis-2/6 
        max-w-[200px] max-h-[200px] min-w-[200px] min-h-[200px] ">
        <span class="absolute left-[55px] top-[75px] text-4xl font-bold">
          開車
        </span> 
      </div>
      <div class="leading-9 text-2xl">
        南下：
        <br> 走中山高速公路南下 → 於永康交流道下高速公路 → 走中正南路（西向）往台南市區 → 轉中華東路 → 達小東路口右轉（西向）直走便可抵成大校區。
        <br><br> 北上：
        <br> 走中山高速公路北上 → 於仁德交流道下高速公路 → 走東門路（西向）往台南市區 → 直走遇長榮路右轉（北向）可抵自強、成功、敬業、建國校區 → 東門路過長榮路遇勝利路右轉（北向）直走可抵光復校門口。
      </div>
    </div>

    <div class="flex flex-row mt-32">
      <div class="bgColor relative basis-2/6 max-w-[200px] max-h-[200px] min-w-[200px] min-h-[200px] mr-16">
        <span class="absolute left-[60px] top-[55px] text-3xl font-bold">
          大眾
          <br> 交通
        </span> 
      </div>
      <div class="leading-9 text-2xl">
        火車：
        <br> 台南火車站下車後，往後站方向，出口正對面即為大學路，大學路直走左手邊可見光復校門口。
        <br><br> 客運： 
        <br> 搭乘客運在台南火車站前站下車者， 可經由火車站附近的地下道到後站出口，後站出口左手側即為成大光復校區。
      </div>
    </div>

    <div class="mt-32 min-w-[1000px]">
      <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3672.7388416904173!2d120.21719944646169!3d22.996629033059357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e1!4m0!4m5!1s0x346e76ed290820d3%3A0xe0ee028be207a19e!2zNzAx5Y-w5Y2X5biC5p2x5Y2A5aSn5a246LevMeiZn-Wci-eri-aIkOWKn-Wkp-WtuA!3m2!1d22.9967625!2d120.2168564!5e0!3m2!1szh-TW!2stw!4v1675007828433!5m2!1szh-TW!2stw" width="1500" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

  </div>
</template>

<style scoped>
.bgColor {
  background-color: rgb(0, 60, 210);
	box-shadow: inset -25px -15px 40px rgba(0,0,0,.3);
	background-image: linear-gradient(-45deg, rgba(0, 60, 210) 0%, transparent 100%);
  border-radius: 50%;
}
</style>
