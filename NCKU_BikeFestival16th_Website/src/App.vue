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

  <main>
    <RouterView />
  </main>

</template>


<style>
* {
  max-width: 100%;
  /* background-color: white; */
  /* overflow-x: hidden; */
}
</style>

