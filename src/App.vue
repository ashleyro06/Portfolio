<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Navbar from '@/components/navigation/Navbar.vue'
</script>

<template>
    <div class="flex flex-column justify-content-between h-full">
        <Navbar />
        <router-view />
    </div>
</template>

<style>
html,
body,
#app {
    height: 100%;
    width: 100%;
    min-height: 100%;
    min-width: 320px;
    padding: 0;
    margin: 0;
    background: var(--color-1);
}
</style>
