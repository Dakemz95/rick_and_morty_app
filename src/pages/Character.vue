<template>
  <q-page class="flex justify-center" padding>
    <q-btn @click="$router.back()" class="back-btn" icon="arrow_back" round color="primary"></q-btn>
    <div class="column justify-between custom_contained full-width">
      <details-card :char="character" />

      <chapter-list :episodes="episodes" />
        
      <card-list 
        :list="characters"
      />
    </div>
  </q-page>
</template>

<script>
import Cards from '../components/CardList.vue'
import Details from '../components/Details.vue'
import Chapters from '../components/Chapters.vue'

export default {
  name: 'character',
  data() {
    return {
      show: false,
      baseURL: 'https://rickandmortyapi.com/api/character/',
      character: {},
      characters: [],
      episodes: [],
    }
  },
  props: ['id'],
  components: {
    'chapter-list': Chapters,
    'card-list': Cards,
    'details-card': Details
  },
  
  beforeRouteUpdate(to, from, next) {
    this.getCharacter(to.params.id)
    this.getRamdonCharacters(3)
  },
  beforeMount() {
    this.getCharacter()
    this.getRamdonCharacters(3)
  },
  methods: {
    async getCharacter(id = this.id) {
      let res = await this.$axios.get(`${this.baseURL}${id}`)
      this.character = res.data
      if (res.data.episode.length > 0) {
        this.getCharacterEpisodes(res.data.episode)
      }
    },
    async getCharacterEpisodes(episodes) {
      const promises = await episodes.map(url => this.$axios.get(url) )
      const results = await Promise.all(promises);
      this.episodes = results.map(el => el.data)
    },
    async getRamdonCharacters(number) {
      let ids = []
      for( let i = 1; i <= number;  ) {
        let num = Math.ceil( Math.random() * (100 + 1) )
        if (!ids.some(n => n === num)) {
          ids.push(num)
          i++
        }
      }
      console.log(ids);
      let res = await this.$axios.get(`${this.baseURL}/${ids.toString()}`)
      this.characters = res.data
    },
  },

}
</script>
