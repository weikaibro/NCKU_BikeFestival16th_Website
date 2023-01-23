<script setup>
import { ref } from 'vue';
import homepage_backgroundSlider from '../components/homepage_backgroundSlider.vue'
import homepage_leftRightArrow from '../components/homepage_leftRightArrow.vue'
import homepage_dialogBox from '../components/homepage_dialogBox.vue'

import homepage_lineHeader from '../components/homepage_lineHeader.vue'
import homepage5_memberSlider from '../components/homepage5_memberSlider.vue'
</script>

<template>
  <div>
    <homepage_backgroundSlider />

    <homepage_leftRightArrow>
      <homepage_dialogBox />
    </homepage_leftRightArrow>

    <homepage_lineHeader />
    <homepage5_memberSlider />
  </div>
</template>
