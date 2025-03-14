<script lang="ts" setup>
const { filteredPosters } = storeToRefs(useEventsStore())
</script>

<template>
    <div class="poster-section">
        <div v-for="event in filteredPosters" :key="event.id" class="event">
            <a :href="event.link" target="_blank">
                <img :src="event.image" :alt="event.name" class="w-full h-auto" />
            </a>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.poster-section {
    @apply grid grid-cols-2 gap-3 p-3 max-w-5xl mx-auto;

    .event img {
        @apply rounded shadow-lg;
    }
}
</style>