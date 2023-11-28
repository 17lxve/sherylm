<script>
import ProductDisplay from '../components/ProductDisplay.vue'
import { useAll } from '../stores/GeneralStore'
import { ref } from 'vue'
export default {
  data() {
    return {
      prevExists: false,
      nextExists: false,
      glasses: [],
      dynamic: true
    }
  },
  setup(){
      const genStore = useAll()
      genStore.getGlasses()
      const fil = ref('all')
      return { genStore, fil }
    },
  methods:{
    async getGlasses(){
      const genStore = useAll()
      genStore.getGlasses()
      const fil = ref('all')
      return { genStore, fil }
    }
  },
  components: {
    ProductDisplay
  },
  computed: {
    num() {
      let w = window.innerWidth / window.innerHeight
      if (w < 1) {
        //phone
        return 16
      } else if (w < 1.6) {
        //tablet
        return 12
      } else return 8 //desktop
    },
    n_active() {
      return this.nextExists ? 'active' : 'nope'
    },
    p_active() {
      return this.prevExists ? 'active' : 'nope'
    }
  }
}
</script>
<template>
  <main>
    <div v-if="!dynamic">
      <label for="glass-type">Type de Lunettes: </label>
      <select name="glass-type" id="glass-type">
        <option value="1" selected>Lunettes De Soleil</option>
        <option value="2">Lunettes De Vue</option>
      </select>
    </div>
    <div class="showroom" v-if="!dynamic">
      <ProductDisplay
        :name="'Past'"
        :colors="['yellow', 'gold', 'blue', 'red', 'green', 'purple']"
        :picture="'21.jpg'"
      />
      <ProductDisplay
        :name="'Present'"
        :colors="['purple', 'indigo', 'blue', 'lightgreen', 'yellow', 'orange', 'red']"
        :picture="'22.jpg'"
      />
      <ProductDisplay
        :name="'Future'"
        :colors="['pink', 'blue', 'red', 'whitesmoke', 'purple']"
        :picture="'23.jpg'"
      />
      <ProductDisplay
        :name="'Tupac'"
        :colors="['silver', 'brown', 'burlywood']"
        :picture="'24.jpg'"
      />
      <ProductDisplay
        :name="'Drake'"
        :colors="['black', 'grey', 'salmon', 'orangered', 'lightgreen']"
        :picture="'25.jpg'"
      />
      <ProductDisplay
        :name="'Yachty'"
        :colors="['gold', 'skyblue', 'darkorchid', 'darkred', 'aqua']"
        :picture="'26.jpg'"
      />
      <ProductDisplay
        :name="'Petrol'"
        :colors="['yellow', 'gold', 'blue', 'red', 'green', 'purple']"
        :picture="'27.jpg'"
      />
      <ProductDisplay
        :name="'EV'"
        :colors="['gold', 'goldenrod', 'darkgoldenrod']"
        :picture="'28.jpg'"
      />
    </div>
    <div class="showroom" v-if="dynamic">
      <ProductDisplay
        v-for="glass in genStore.glasses"
        :key="glass._id"
        :name="glass.name"
        :colors="glass.colors"
        :picture="glass.picture"
      />
    </div>
    <footer>
      <div class="page">
        <div @click="getGlasses()" class="sw material-icons active">
        refresh
      </div>
      </div>
      
    </footer>
  </main>
</template>
<style>
.showroom {
  display: flex;
  flex-direction: row;
  overflow: hidden;
  flex-shrink: 0;
  flex-wrap: wrap;
}
.page {
  margin-left: 45%;
  bottom: 5%;
  display: flex;
  flex-direction: row;
  gap: 20%;
  width: 10%;
}
.sw.active{
  cursor: pointer;
  color: brown;
}
.page .sw.active {
  cursor: pointer;
  color: brown;
}
.page .sw.nope {
  color: dimgrey;
  cursor: not-allowed;
}

#glass-type {
  background-color: transparent;
  background-image: linear-gradient(to top, #e9e9e9, #fff 33%);
  border: none;
  border-radius: 0.5em;
  padding: 0.25 0.5em;
  outline: none;
  padding: 0 1em 0 0;
  margin: 0;
  min-width: 15ch;
  max-width: 30ch;
  font-family: Outfit;
  font-size: 2vw;
  cursor: pointer;
  line-height: 1.1;
  display: block;
}
#glass-type::-ms-expand {
  display: none;
}
#glass-type option {
  background-color: brown;
  color: white;
}
#glass-type.selected {
  background-color: red;
  color: white;
}
</style>
