<template>
  <div class="column q-pt-lg custom_contained" @keyup.enter="sendData()">
    <q-input 
      outlined 
      bottom-slots
      v-model="filter.search" 
      label="Search..."
    >
      <template v-slot:append>
        <q-icon v-if="filter.search" name="close" @click="cleanField()" class="cursor-pointer" />
        <q-icon name="search" @click="sendData()" class="cursor-pointer q-px-sm" />
      </template>
    </q-input>
    <div class="row items-center q-gutter-md">
      <div>Filter by :</div>
      <q-select 
        class="custom_select" 
        outlined 
        v-model="filter.status" 
        :options="statusList" 
        :dense="dense"  
        label="Status"
      >
        <template v-if="filter.status" v-slot:append>
          <q-icon name="close" @click.stop="filter.status = ''" class="cursor-pointer" />
        </template>
      </q-select>
      <q-select 
        class="custom_select" 
        outlined 
        v-model="filter.gender" 
        :options="genderList" 
        :dense="dense"  
        label="Gender"
      >
        <template v-if="filter.gender" v-slot:append>
          <q-icon name="close" @click.stop="filter.gender = ''" class="cursor-pointer" />
        </template>
      </q-select>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {

  data() {
    return {
      dense: true,
      error: {
        state: false,
        msg: ''
      },
      filter: {
        search: '',
        status: '',
        gender: '',
      },
      genderList: ['Female', 'Male', 'Genderless', 'Unknown'],
      statusList: ['Alive', 'Dead', 'unknown'],
      time: 1500,
    }
  },
  methods: {
    ...mapActions({
      getFilterCharacterList: 'getFilterCharacterList',
      getCharactersList: 'getCharactersList'
    }),
    async sendData() {
      if (Object.values(this.filter).some(el => el !== '')) {
        let err = await this.getFilterCharacterList(this.filter)
        if (err) {
          
        }
      } else {
        this.getCharactersList()
      }
    },
    cleanField() {
      this.filter.search = ''
      this.error.state = false
      this.error.msg = ''
      
    }
  },
}
</script>
