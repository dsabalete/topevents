<script lang="ts" setup>
const { archivedPosters } = storeToRefs(useEventsStore())
</script>

<template>
    <div class="arxiu-page">

        <h1>Arxiu</h1>

        <div class="grid grid-cols-3 gap-10 p-3 max-w-[800px] mx-auto">
            <div v-for="event in archivedPosters" :key="event.id" class="event">
                <a :href="event.link" target="_blank">
                    <img :src="event.image" :alt="event.name" class="w-full h-auto" />
                    <p>link: {{ event.link }}</p>
                    <p>name: {{ event.name }}</p>
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.arxiu-page {
    @apply max-w-4xl mx-auto mt-20;

    h1 {
        @apply text-4xl font-bold text-center mb-8;
    }

    .event {
        @apply mb-8 text-xxs;

        img {
            @apply w-full h-auto;
        }
    }
}
</style>