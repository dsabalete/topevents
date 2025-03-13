<script lang="ts" setup>
const posters = usePostersStore()
posters.fetchPosters()
</script>

<template>
    <div class="grid grid-cols-2 gap-3 p-3 max-w-[1200px] mx-auto">
        <div v-for="poster in posters.filteredPosters" :key="poster.id" class="poster">
            <a :href="poster.link" target="_blank">
                <img :src="poster.image" :alt="poster.name" class="w-full h-auto" />
            </a>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.poster img {
    @apply rounded shadow-lg;
}
</style>