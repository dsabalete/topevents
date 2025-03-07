<script lang="ts" setup>
interface Poster {
    id: number;
    name: string;
    image: string;
    link: string;
}

const posters: Poster[] = [
    {
        id: 1,
        name: 'Poster 1',
        image: 'https://i.pinimg.com/736x/24/77/7c/24777cfc49b52bbca66d31d02a33febb.jpg',
        link: 'https://example.com/poster1'
    },
    {
        id: 2,
        name: 'Poster 2',
        image: 'https://i.pinimg.com/736x/35/34/35/35343511452bd9924040c20884330a07.jpg',
        link: 'https://example.com/poster2'
    },
    {
        id: 3,
        name: 'Poster 3',
        image: 'https://i.pinimg.com/736x/3e/83/61/3e83618c60fcb48a2e0d69b7e3f6d65a.jpg',
        link: 'https://example.com/poster3'
    },
    {
        id: 4,
        name: 'Poster 4',
        image: 'https://i.pinimg.com/736x/28/ef/a0/28efa0b5a03dc06c611c7954f3ffa6c9.jpg',
        link: 'https://example.com/poster4'
    },
    {
        id: 5,
        name: 'Poster 5',
        image: 'https://placehold.co/150x250',
        link: 'https://example.com/poster5'
    },
    {
        id: 6,
        name: 'Poster 6',
        image: 'https://placehold.co/150x250',
        link: 'https://example.com/poster6'
    }
];
</script>

<template>
    <div class="grid grid-cols-2 gap-3 p-3">
        <a v-for="poster in posters" :key="poster.id" :href="poster.link" class="block">
            <img :src="poster.image" :alt="`Poster ${poster.id}`" class="w-full">
        </a>
    </div>
</template>
