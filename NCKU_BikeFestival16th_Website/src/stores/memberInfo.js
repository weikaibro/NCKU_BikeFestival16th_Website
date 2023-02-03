import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMemberStore = defineStore('memberInfo', () => {

  const scrollLeft = () => {
    var scrollTo = document.getElementById('scrollTo');
    scrollTo.scrollBy({
      left: -250,
      behavior: 'smooth'
    });
  }
  const scrollRight = () => {
    var scrollTo = document.getElementById('scrollTo');
    scrollTo.scrollBy({
      left: 250,
      behavior: 'smooth'
    });
  }

  return { scrollLeft, scrollRight }
})
