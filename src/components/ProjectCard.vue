<template>
    <div
        class="
            project-wrapper
            flex
            justify-content-center
            align-items-center
            w-screen
        "
    >
        <div
            class="
                project-card
                text-white
                p-8
                flex flex-row
                align-items-center
                justify-content-between
            "
        >
            <img :src="project.illustration" class="w-6 project-img" />
            <div class="w-5">
                <h2 class="text-yellow photoshoot">{{ project.name }}</h2>
                <div class="grid grid-nogutter">
                    <Tag
                        v-for="tag in project.position"
                        :key="tag"
                        :value="tag"
                        class="
                            h-2rem
                            mb-2
                            border-round
                            bg-light
                            text-gray-900
                            mr-2
                        "
                    />
                    <Tag
                        v-for="tag in project.tags"
                        :key="tag"
                        :value="tag"
                        class="
                            h-2rem
                            mb-2
                            border-round
                            bg-yellow
                            text-gray-900
                            mr-2
                        "
                    />
                </div>
                <p class="quicksand opacity-70">{{ project.description }}</p>
                <div>
                    <img
                        :src="tech.icon"
                        v-for="tech in project.technologies"
                        :key="tech"
                        v-tooltip="tech.name"
                        class="h-3rem m-2"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object,
    },
}
</script>

<style scoped>
.project-wrapper {
    height: 75vh;
}
.project-card {
    background: #00004b;
    height: 90%;
    width: 70%;
    min-width: 70%;
    min-height: 400px;
    border-radius: 20px;
}
.project-img {
    max-height: 100%;
    max-width: 50%;
    object-fit: contain;
}
</style>
<style>
.p-galleria .p-galleria-indicators .p-galleria-indicator.p-highlight button {
    background: var(--color-2);
    color: #ffffff;
}
</style>
