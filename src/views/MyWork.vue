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
