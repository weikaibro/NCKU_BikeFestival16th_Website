<script setup>

import { RouterLink, RouterView } from 'vue-router'
import RoundButton from './components/RoundButton.vue'
import PlayCircle from './components/PlayCircle.vue'
import Navbar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import SwitchButton from './components/SwitchButton.vue'
import formBtn from './components/formBtn.vue'

import { RouterLink, RouterView } from "vue-router";


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

  <header>
    <nav class="flex underline underline-offset-8 overflow-hidden">
      <RouterLink to="/" class="p-3">Homepage</RouterLink>
      <RouterLink to="/registration" class="p-3">Registration</RouterLink>
      <RouterLink to="/Information" class="p-3">Information</RouterLink>
      <RouterLink to="/Introduction" class="p-3">Introduction</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>


<style>
* {
  max-width: 100%;
  /* overflow-x: hidden; */
}
</style>

