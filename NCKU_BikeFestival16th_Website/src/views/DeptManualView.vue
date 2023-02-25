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
]);

</script>

<template>
  <div class="bgImg overflow-hidden h-screen">
    <Navbar />
    <div class="h-[85%] mt-20 grid grid-cols-3 place-items-center max-lg:grid-cols-2 max-sm:grid-cols-1">
      <RouterLink 
        v-for="header in btn" 
        :key="btn.indexOf(header)"
        :to="header.link"
      >
        <irregularButton :btnTitle="header.title" />
      </RouterLink>
      <div class="max-lg:hidden"></div>

      <RouterLink to="/DeptManual/Undeclared">
        <irregularButton class="col-span-3" btnTitle="非屬學院" />
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
/* 
.webp .bgImg {
  background-image: url("../assets/background.webp");
  background-size: 100% 100%;
}
.np-webp .bgImg {
  background-image: url("../assets/background.png");
  background-size: 100% 100%;
} */
.bgImg {
  background-image: url("../assets/background.png");
  background-size: 100% 100%;
}
.bgImg::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
}
@media (max-width: 640px) {
  .bgImg {
    background-image: none;
    background-color: black;
  }
}
</style>
