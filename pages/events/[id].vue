<template>
    <div class="page-events-detail">
        <h2>Detalls del Event {{ route.params.id }}</h2>
        <div v-if="content">
            <img :src="content.image" :alt="content.title" class="content-image" />
            <h3>{{ content.title }}</h3>
            <p>{{ content.description }}</p>
        </div>
        <div v-else>
            <p>Carregant event...</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

const route = useRoute()
const content = ref<null | { id: number; title: string; description: string; image: string }>(null)

// Simulated data source
const mockData = [
    { id: 1, title: 'Event 1', description: 'Descripció del event 1', image: 'https://picsum.photos/300/200?random=1' },
    { id: 2, title: 'Event 2', description: 'Descripció del event 2', image: 'https://picsum.photos/300/200?random=2' },
    { id: 3, title: 'Event 3', description: 'Descripció del event 3', image: 'https://picsum.photos/300/200?random=3' },
    { id: 4, title: 'Event 4', description: 'Descripció del event 4', image: 'https://picsum.photos/300/200?random=4' }
]

onMounted(() => {
    const id = Number(route.params.id)
    content.value = mockData.find(item => item.id === id) || null
})
</script>

<style lang="postcss" scoped>
.page-events-detail {
    @apply max-w-4xl mx-auto mt-20 p-5;

    h2 {
        @apply text-2xl font-bold pb-4;
    }

    h3 {
        @apply text-xl font-normal mt-4;
    }

    p {
        @apply mt-2 text-sm;
    }

    .content-image {
        @apply w-full h-auto rounded shadow-lg object-cover mt-4;
        aspect-ratio: 3 / 2;
    }
}
</style>