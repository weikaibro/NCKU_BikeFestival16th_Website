import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMemberStore = defineStore('memberInfo', () => {

  const scrollLeft = () => {
    var scrollTo = document.getElementById('scrollTo');
    scrollTo.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  }
  const scrollRight = () => {
    var scrollTo = document.getElementById('scrollTo');
    scrollTo.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  }

  return { scrollLeft, scrollRight }
})
