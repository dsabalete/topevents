<script lang="ts" setup>
const { posters, fetchPosters } = useSupabasePosters()
const { query } = storeToRefs(useFilterStore())

const filteredPosters = computed(() => {
    return posters.value.filter(poster =>
        poster.name.toLowerCase().includes(query.value.toLowerCase())
    )
})

onMounted(() => {
    fetchPosters()
})
</script>

<template>
    <div class="grid grid-cols-2 gap-3 p-3 max-w-[1200px] mx-auto">
        <div v-for="event in filteredPosters" :key="event.id" class="event">
            <a :href="event.link" target="_blank">
                <img :src="event.image" :alt="event.name" class="w-full h-auto" />
            </a>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.poster img {
    @apply rounded shadow-lg;
}
</style>