import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNumStore = defineStore('num0', () => {
  const num = ref(0)
  function increment() {
    num.value++
  }
  return { num, increment }
})