<template>
    <div class="general flex justify-content-start align-items-center w-full">
        <Galleria
            :value="projects"
            containerStyle="w-full"
            :showThumbnails="false"
            :showIndicators="true"
        >
            <template #item="slotProps">
                <project-card :project="slotProps.item" />
            </template>
        </Galleria>
    </div>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue'
import { mapState } from 'vuex'
export default {
    components: { ProjectCard },
    computed: {
        ...mapState('projects', ['projects']),
    },
    // methods: {
    //     changeScrollDirection() {
    //         var transformScroll = () => {
    //             if (!event.deltaY) {
    //                 return
    //             }
    //             event.currentTarget.scrollLeft += event.deltaY + event.deltaX
    //             event.preventDefault()
    //         }
    //         document
    //             .getElementById('general')
    //             .addEventListener('wheel', transformScroll)
    //     },
    // },
    mounted() {
        // this.changeScrollDirection()
    },
}
</script>

<style scoped>
.general {
    height: 90%;
}
</style>

<style>
.p-galleria {
    min-width: 100%;
}
</style>
