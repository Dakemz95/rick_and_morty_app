<template>
  <div class="flex items-center q-mb-md custom_contained overflow-hidden">
    <div class="content scroll-x">
      <q-list class="flex items-center no-wrap q-gutter-sm full-height">
        <q-card 
          class="card"
          v-for="ep in episodes" 
          :key="ep"
          bordered
          flat
        >
          <q-card-section>
            <div class="text-bold">{{ep.name}}</div>
            <div class="">{{ep.air_date}}</div>
          </q-card-section>
        </q-card>
      </q-list>
    </div>
  </div>
</template>

<script>
export default {
  name: "episodes",
  props: ['episodes'],
}
</script>

<style lang="scss" scoped>
 .content {
    height: 140px;
 }
 .card {
   height: 100px;
   min-width: 250px;
   padding: .5em;
 }
</style>