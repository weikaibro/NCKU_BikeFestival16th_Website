<script setup>
import { ref } from 'vue';
import { useMemberStore } from '../../../stores/memberInfo.js'
import homepage_totalMemberSlider from '../../../components/homepage_totalMemberSlider.vue';
const store = useMemberStore();  // pinia: all members
const members = ref([
  { memberPic: "https://picsum.photos/200", memberName: "姜昕", memberTitle: "總籌", 
      memberGrade: "療癒系 112 級", memberSaid: "牙空灰機牙空灰機牙空灰機牙空灰機牙空灰機" },
])
</script>

<template>
  <div class="">
    <!-- <homepage_totalMemberSlider /> -->
    <iframe src="https://archive.org/details/hamonshuyv1mori/page/11/mode/2up" width="1200" height="384" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen></iframe>
  </div>
</template>