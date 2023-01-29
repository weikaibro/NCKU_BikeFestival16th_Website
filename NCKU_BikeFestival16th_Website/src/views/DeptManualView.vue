<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import Navbar from "../components/Navbar.vue";
import irregularButton from "../components/irregularButton.vue";
const btn = ref([
  { title: "文學院", link: "/DeptManual/LiberalArts" },
  { title: "規設院", link: "/DeptManual/PlanningAndDesign" },
  { title: "醫學院", link: "/DeptManual/Medicine" },
  { title: "社會科學院", link: "/DeptManual/SocialScience" },
  { title: "工學院", link: "/DeptManual/Engineering" },
  { title: "電資學院", link: "/DeptManual/ElectricalEngineeringAndComputerScience" },
  { title: "理學院", link: "/DeptManual/Science" }, 
  { title: "生科院", link: "/DeptManual/BioscienceAndBiotechnology" }, 
  { title: "管理學院", link: "/DeptManual/Management" }, 
  { title: "不分學院", link: "/DeptManual/Undeclared" }, 
]);

</script>

<template>
  <div class="bgImg overflow-hidden h-screen">
    <Navbar />
    <div class="h-[90%] grid grid-cols-3 place-items-center">
      <RouterLink 
        v-for="header in btn" 
        :key="index"
        :to="header.link"
      >
        <irregularButton :btnTitle="header.title" />
      </RouterLink>
      
      <irregularButton class="col-span-3" btnTitle="不分學院" />
    </div>
  </div>
</template>

<style scoped>
.bgImg {
  background-image: url("../assets/background.png");
  background-size: 100% 100%;
}
</style>
