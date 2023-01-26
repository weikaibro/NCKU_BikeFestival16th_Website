<script setup>

import { RouterLink, RouterView } from 'vue-router'
import WelcomeView from './views/WelcomeView.vue'

import RoundButton from './components/RoundButton.vue'
import PlayCircle from './components/PlayCircle.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import SwitchButton from './components/SwitchButton.vue'
import formBtn from './components/formBtn.vue'


</script>


<template>
  
  <!-- <PlayCircle link="https://www.w3schools.com/default.asp"/>
  <PlayCircle link="https://www.w3schools.com/default.asp"/>
  <PlayCircle link="https://www.w3schools.com/default.asp"/>
  <SwitchButton/>
  <formBtn/>
  <RoundButton text="Back" onclick="location.href='https://hackmd.io/WpjPOBDTR0eQuBCdSPk3ag?view'"/>
  <RoundButton text="More" onclick="location.href='https://www.w3schools.com/default.asp'"/> -->

  <header>
    <!-- <Navbar/> -->
  </header>

  <main>
    <!-- RouterView 會直接讀取 router 資料夾內的 router js 內容 -->
    <RouterView />
  </main>

  <footer>
    <!-- <Footer/> -->
  </footer>

</template>


<style>
* {
  max-width: 100%;
  /* background-color: white; */
  /* overflow-x: hidden; */
}
</style>

