<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Navbar from '@/components/navigation/Navbar.vue'
</script>

<template>
    <div class="flex flex-column justify-content-between h-full relative">
        <Navbar />
        <router-view />

        <div
            class="
                absolute
                bottom-0
                ml-8
                flex flex-column
                justify-content-center
                align-items-center
            "
        >
            <a
                target="_blank"
                href="https://www.linkedin.com/in/ashly-guevara-b68a39192/"
            >
                <img
                    class="mb-2"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-8bc46.appspot.com/o/icons%2Flinkedin.svg?alt=media&token=a9528352-1acc-45a3-9c49-05b55b9283cc"
            /></a>
            <a target="_blank" href="https://github.com/ashleyro06">
                <img class="mb-4" src="@/assets/images/github-line.svg"
            /></a>

            <img src="@/assets/images/vertical-line.svg" />
        </div>
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
