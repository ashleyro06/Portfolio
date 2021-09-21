<template>
    <div
        class="
            flex flex-column
            md:flex-row
            justify-content-center
            align-items-center
            m-8
            text-white
            quicksand
            h-full
        "
    >
        <div class="w-8 px-8">
            <div class="grid">
                <Tag
                    v-for="tag in tags"
                    :key="tag"
                    :value="tag"
                    class="h-2rem border-round bg-yellow text-gray-900 mr-2"
                />
            </div>
            <h1 class="font-bold text-5xl">{{ name }}</h1>
            <p class="opacity-70 line-height-4">{{ message }}</p>
        </div>
        <img src="@/assets/images/home.svg" class="w-6" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            tags: [
                'Front-End Developer',
                'Mobile Developer',
                'Systems engineer',
            ],
            name: 'Ashly Guevara',
            message:
                "I'm a developer who's also interested in design. I started this journey by mistake, however, it turned out to be the best thing that could've happened in my life!",
        }
    },
}
</script>

<style></style>
