<template>
    <div class="page-events">
        <h2>Events</h2>
        <div class="grid-container">
            <div v-for="(item, index) in items" :key="index" class="grid-item">
                <a :href="`/events/${item.id}`">
                    <img :src="item.image" :alt="item.title" class="cover-image" />
                    <p class="title">{{ item.title }}</p>
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const items = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    title: `Caràtula ${i + 1}`,
    image: `https://picsum.photos/300/200?random=${i + 1}`
}))
</script>

<style lang="postcss" scoped>
.page-events {
    @apply max-w-4xl mx-auto mt-20 p-5;

    h2 {
        @apply font-bold text-center mb-8;
    }
}

.grid-container {
    @apply grid grid-cols-2 md:grid-cols-4 gap-4;
}

.grid-item {
    @apply relative;

    a {
        @apply block text-center;
    }

    .cover-image {
        @apply w-full h-auto object-cover;
        aspect-ratio: 3 / 2;
    }

    .title {
        @apply mt-2 text-sm font-bold;
    }
}
</style>