<script setup>
import { ref, computed } from "vue";
import Map from "../components/Information/Map.vue";
import Traffic from "../components/Information/Traffic.vue";
import TimeTable from "../components/Information/TimeTable.vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

let target = ref(0);

const selected = (event) => {
  let parent = event.currentTarget.parentElement.children;
  for (let i = 0; i < parent.length; i++) {
    let t = parent[i].className.split(" ");
    t.pop();
    if (parent[i] === event.currentTarget) {
      target.value = i;
      t.push("selected");
    } else t.push("notselected");
    parent[i].className = t.join(" ");
  }
  // console.log(target.value);
};

const Show = computed(() => {
  switch (target.value) {
    case 0: {
      return Map;
    }
    case 1: {
      return Traffic;
    }
    case 2: {
      return TimeTable;
    }
    default:
      break;
  }
});
</script>

<template>
  <Navbar />

  <div class="mx-20 my-40 max-sm:mx-4">

    <div class="text-4xl pb-10 font-extrabold max-sm:text-center">活動資訊</div>

    <div>
      <ul class="flex justify-end">
        <li class="border-l border-r selected" @click="selected">
          <a class="text-2xl px-10 py-2 font-extrabold max-sm:text-base max-lg:px-4" href="#">展場地圖</a>
        </li>
        <li class="notselected" @click="selected">
          <a class="text-2xl px-10 py-2 font-extrabold max-sm:text-base max-lg:px-4" href="#">交通資訊</a>
        </li>
        <li class="border-l border-r notselected" @click="selected">
          <a class="text-2xl px-10 py-2 font-extrabold max-sm:text-base max-lg:px-4" href="#">時間表</a>
        </li>
      </ul>
    </div>

    <div class="bg-black">
      <Transition mode="out-in">
        <component :is="Show" />
      </Transition>
    </div>


  </div>

  <Footer />

</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
@layer components {
  .selected {
    @apply border-t border-black flex justify-evenly items-center bg-black text-white;
  }
  .notselected {
    @apply border-t border-black flex justify-evenly items-center bg-white text-black;
  }
}
</style>
