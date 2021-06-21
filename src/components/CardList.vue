<template>
  <div class="flex flex-center q-pt-lg custom_contained q-py-none">
    <div class="flex justify-center q-gutter-xs-md q-gutter-lg full-width">
      <q-card v-for="char in list" :key="char.id" class="custom_card shadow-4">
        <router-link :to="`/character/${char.id}`" >
          <q-img 
            class="custom_card-img bg-secundary " 
            :src="char.image" 
            spinner-color="primary"
          />
          <q-card-section class="q-py-sm text-h6 custom_card-text">
            {{ char.name }}
          </q-card-section>
          <q-card-section class="q-pt-none custom_card-text">
            <div><span class="text-bold">Status: </span>{{char.status}}</div>
            <div><span icon="favorite" class="text-bold">Origin: </span>{{char.origin.name}}</div>
          </q-card-section>
      
        </router-link>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: ['list'],
}
</script>