<script setup>
import Navbar from '../../../components/Navbar.vue';
import Footer from '../../../components/Footer.vue';
import irregularButton from '../../../components/irregularButton.vue';
const checkBoxInfo1 = ([
  "第一場", "第二場", "第三場"
])
const dates = ([
  "3/4", "3/5"
])
</script>

<template>
  <div class="bg-black text-white">
    <Navbar />

    <div class="px-36 pt-20 h-[1500px]">
      This is a private page for debugging.
      <form action="/api/debug/check" method="post">

        <div class="mt-12">
          <p class="text-lg after:content-['*'] after:ml-0.5 after:text-red-500">
            年級
          </p>
          <input
            class="text-black"
            name="grade"
            type="text"
            autocomplete="off"
            required
          />
        </div>

        <p class="mt-10 mb-4 text-2xl after:content-['*'] after:ml-0.5 after:text-red-500">參與場次 </p>
        <label
          v-for="(info, index) in checkBoxInfo1"
          :key="index"
        >
          <input
            name="session"
            type="checkbox"
            :value="info"
            class="cursor-pointer"
          />
          {{ info }}
          <br>
        </label>

        <div class="customRadio mt-12 mb-32">
          <p class="text-lg my-6 after:content-['*'] after:ml-0.5 after:text-red-500">
            參與日期？
          </p>
          <div 
            v-for="(date, index) in dates"
            :key="index"
            class="my-5"
          >
            <input
              name="date"
              :id="date"
              type="radio"
              :value="date"
            />
            <label :for="date">{{ date }}</label>
          </div>
        </div>

        <div class="py-20 w-[300px]">
          <input id="customBtn" type="submit" hidden />
          <label for="customBtn" class="cursor-pointer">
            <irregularButton btnTitle="送出" />
          </label>
        </div>
        
      </form>
    </div>

    <Footer />
  </div>
</template>