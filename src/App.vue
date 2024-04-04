<script setup>
import { RouterView, RouterLink } from 'vue-router'
import Nav from '@/components/Nav.vue'
</script>

<template>
  <div class="dark:bg-slate-800 h-screen overflowx-hidden">
    <Nav />
    <router-view />
  </div>
  
</template>

<style scoped>

</style>
