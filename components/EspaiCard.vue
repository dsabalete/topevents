<script lang="ts" setup>
const { espai } = defineProps(['espai'])
</script>

<template>
    <div class="espai-card">
        <img :src="espai.picture" :alt="espai.name" class="w-full h-48" />
        <div class="flex flex-col">
            <h3 class="text-lg font-bold mb-3">{{ espai.name }}</h3>
            <p class="text-sm mb-2">{{ espai.address }}</p>
            <p class="text-sm mb-2">{{ espai.phone }}</p>
            <p class="text-sm">{{ espai.timetable }}</p>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.espai-card {
    @apply grid grid-cols-2 gap-4;
}
</style>