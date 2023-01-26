<script setup>
import { RouterLink, RouterView } from 'vue-router'
import RoundButton from './components/RoundButton.vue'
import PlayCircle from './components/PlayCircle.vue'
import Navbar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import SwitchButton from './components/SwitchButton.vue'
import formBtn from './components/formBtn.vue'
</script>

<template>
  <Navbar/>
  <PlayCircle link="https://www.w3schools.com/default.asp"/>
  <PlayCircle link="https://www.w3schools.com/default.asp"/>
  <PlayCircle link="https://www.w3schools.com/default.asp"/>
  <SwitchButton/>
  <formBtn/>
  <RoundButton text="Back" onclick="location.href='https://hackmd.io/WpjPOBDTR0eQuBCdSPk3ag?view'"/>
  <RoundButton text="More" onclick="location.href='https://www.w3schools.com/default.asp'"/>
  <Footer/>
</template>
<script>

</script>
<style>
</style>

