<template>
  <div class="custom_container full-width q-py-lg">
    <div class="custom_details column flex-center full-width">
      <p class="text-h3 self-start q-ml-sm">{{char.name}}</p>
      <div class="flex  q-gutter-sm full-width">
        <q-img
          class="custom_details-img"
          :src="char.image"
          fit="contain"
        />
        <q-card class="column justify-evenly custom_details-card" flat>
          <q-card-section>
            <span class="text-h5 full-width">Status: </span><span>{{char.status}}</span>
          </q-card-section>
          <q-card-section>
            <span class="text-h5">Gender: </span><span>{{char.gender}}</span>
          </q-card-section>
          <q-card-section>
            <span class="text-h5">Origin: </span><span>{{char.origin.name}}</span>
          </q-card-section>
          <q-card-section>
            <span class="text-h5">Species: </span><span>{{char.species}}</span>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "details",
  props: {
    char: Object
  }

}
</script>