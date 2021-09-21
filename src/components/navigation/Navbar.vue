<template>
    <div
        class="
            h-4rem
            w-full
            bg-main
            flex flex-row
            justify-content-between
            align-items-center
            p-5
        "
    >
        <img class="h-2rem" src="@/assets/images/ag.svg" />
        <div class="flex flex-row justify-content-between w-14rem quicksand">
            <!-- <router-link to="/administracion/videos">
                <span>ABOUT ME</span>
            </router-link> -->
            <router-link to="/">
                <span>HOME</span>
            </router-link>
            <router-link to="/work">
                <span>WORK</span>
            </router-link>
            <router-link to="/administracion/videos">
                <span>EXPERIENCE</span>
            </router-link>
            <!-- <router-link to="/administracion/videos">
                <span>CONTACT</span>
            </router-link> -->
        </div>
        <div>
            <img class="h-2rem" src="@/assets/images/light.svg" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'AdministrativeNavbar',
}
</script>

<style scoped>
span {
    color: white;
    text-decoration: none;
}
</style>
