<template>
  <div>
    <TopNav></TopNav>
    <RouterView />
  </div>
</template>

<script setup>
import TopNav from '@/layout/TopNav.vue'
import { RouterLink, RouterView } from 'vue-router'

</script>

<style scoped>
</style>
