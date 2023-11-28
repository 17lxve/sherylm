import { defineStore } from 'pinia'
import axios from 'axios'

export const useAll = defineStore('generalStorage', {
  state: () => ({
    glasses: [],
    urls: {
      baseUrl: 'https://sherylm-server-production.up.railway.app/',
      localUrl: 'http://127.0.0.1:3000/'
    },
    loading: false
  }),
  getters: {
    isLoading() {
      return this.loading
    }
  },
  actions: {
    async getGlasses() {
      this.loading = true
      await axios
        .get(this.urls.baseUrl + this.num())
        .then((data) => {
          this.glasses = data.data
          console.error(this.glasses)
        })
        .catch((err) => console.log(err))
      this.loading = false
    },
    num() {
      let w = window.innerWidth / window.innerHeight
      if (w < 1) {
        //phone
        return 16
      } else if (w < 1.6) {
        //tablet
        return 12
      } else return 8 //desktop
    }
  }
})
