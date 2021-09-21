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
                relative
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

            <div
                class="
                    absolute
                    w-full
                    bottom-0
                    flex
                    justify-content-between
                    left-0
                    px-4
                    py-4
                "
            >
                <a target="_blank" :href="project.link" v-if="project.link">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/portfolio-8bc46.appspot.com/o/icons%2Finternet.svg?alt=media&token=7bf74757-b7c2-4412-b30a-60135815d0f2"
                /></a>
                <a target="_blank" :href="project.github" v-if="project.github">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/portfolio-8bc46.appspot.com/o/icons%2Fgithub.svg?alt=media&token=f5a8e4c4-01f9-4526-9e35-79a135d771f5"
                /></a>
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
