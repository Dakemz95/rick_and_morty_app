<template>
  <q-layout view="hhh lpR fFf">

    <q-header reveal bordered class="text-white flex justify-center">
      <q-toolbar class="custom_contained q-px-lg"> 
        <router-link to="/">
          <q-avatar class=" q-mr-sm">
            <img src="~assets/logo.svg">
          </q-avatar>
        </router-link>
        <q-toolbar-title class=" text-bold">
          Rick and Morty
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <keep-alive include="list">
            <component :is="Component" ></component>
          </keep-alive>
        </transition>
      </router-view>
    </q-page-container>

  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
    }
  },
}
</script>
