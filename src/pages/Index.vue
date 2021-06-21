<template>
  <q-page class="flex justify-center q-pt-xl"  v-if="show">
    <div class="column justify-between no-wrap custom_contained full-width">
      <search-form />
      <card-list class="q-mt-xl" v-show="showList" :list="results" v-if="!error"/>
      <div v-else class="flex flex-center text-h4">No characters to show</div>
      <div class="flex flex-center">
        <q-circular-progress
          v-show="!showList"
          indeterminate
          size="70px"
          :thickness="0.22"
          color="primary"
        />
      </div>
      <div class="q-pa-lg flex flex-center">
        <q-pagination
          v-model="current"
          :max="info.pages"
          :max-pages="7"
          direction-links
          active-color="teal-8"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import SearchForm from '../components/Search.vue'
import Cards from '../components/CardList.vue'
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'PageIndex',
  data() {
    return {
      current: 1,
      show: false,
      showList: true,
      baseUrl: 'https://rickandmortyapi.com/api/character/',
      customUrl: '',
      
    }
  },
  computed: {
    ...mapState({
      info: 'info',
      results: 'results',
      currentPage: 'currentPage',
      filterResults: 'filterResults',
      error: 'error'
    })
  },
  watch: {
    current(val) {
      if (this.filterResults) {
        this.getFilterCharacterList(val)
      } else {
        this.getData()
        this.setCurrentPage(val)
      }
    }
  },
  components: {
    'search-form': SearchForm,
    'card-list': Cards,
    // 'loader': Loader
  },
  beforeMount() {
    this.show = false
    if (!this.results.length || this.filterResults) {
      this.getData()
    } else {
      this.current = this.currentPage
    }
    this.show = true
  },
  methods: {
    ...mapActions({
      getCharactersList: 'getCharactersList',
      getFilterCharacterList: 'getFilterCharacterList'
    }),
    ...mapMutations({
      setCurrentPage: 'SETCURRENTPAGE'
    }),
    getData() {
      this.showList = false
      let start = new Promise ((resolve, reject) => {
        this.getCharactersList(this.current).then(() => resolve())
      })
      .then(() => {
        this.showList = true
      })
    },
  }
}
</script>