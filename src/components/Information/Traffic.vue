<script setup>
</script>

<template>
  <div class="bg-black text-white text-2xl inline-block px-20 py-20 max-lg:px-2">

    <div class="flex">
      <div class="bgColor mr-16
        max-w-[200px] max-h-[200px] min-w-[200px] min-h-[200px] 
        flex justify-center items-center text-4xl font-bold
        max-lg:max-w-[100px] max-lg:max-h-[100px] max-lg:min-w-[100px] max-lg:min-h-[100px] max-lg:mr-4 max-lg:text-lg"
      >
        開車
      </div>
      <div class="leading-9 text-2xl max-lg:text-base">
        南下：
        <br> 走中山高速公路南下 → 於大灣交流道下高速公路 → 走高速二街（南向） → 右轉復興路（西向） → 繼續直行小東路2.4公里左轉便可抵成大光復校區
        <br><br> 北上：
        <br> 走中山高速公路北上 → 於仁德交流道下高速公路 → 走東門路（西向）往台南市區 → 直走遇長榮路右轉（北向）可抵自強、成功、敬業校區 → 東門路過長榮路遇勝利路右轉（北向）直走可抵光復校門口。
      </div>
    </div>

    <div class="flex mt-32 max-lg:mt-16">
      <div class="bgColor mr-16 basis-2/6 
        max-w-[200px] max-h-[200px] min-w-[200px] min-h-[200px] 
        flex justify-center items-center text-4xl font-bold 
        max-lg:max-w-[100px] max-lg:max-h-[100px] max-lg:min-w-[100px] max-lg:min-h-[100px] max-lg:mr-4 max-lg:text-lg"
      >
        大眾
        <br> 交通
      </div>
      <div class="leading-9 text-2xl max-lg:text-base">
        火車：
        <br> 台南火車站下車後，往後站方向，出口正對面即為大學路，大學路直走左手邊可見光復校門口。
        <br><br> 客運： 
        <br> 搭乘客運在台南火車站前站下車者， 可經由火車站內的人行天橋到後站出口，後站出口左手側即為成大光復校區。
      </div>
    </div>

    <div class="mt-32 w-full">
      <iframe class="w-screen h-[800px] max-sm:h-[500px]" src="https://www.google.com/maps/d/embed?mid=1Vga0aGXdv9V-_rxXj1kB_nr8-IFem2I&ehbc=2E312F"></iframe>
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
