<script lang="ts" setup>
const { archivedPosters } = storeToRefs(useEventsStore())
</script>

<template>
    <div class="arxiu-page">

        <h2>Arxiu</h2>

        <div class="arxiu-page__grid">
            <div v-for="event in archivedPosters" :key="event.id" class="event">
                <a :href="event.link" target="_blank">
                    <img :src="event.image" :alt="event.name" class="w-full h-auto" />
                    <p>{{ event.name }} 🔗</p>
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.arxiu-page {
    @apply max-w-4xl mx-auto mt-20;

    h2 {
        @apply font-bold text-center mb-8;
    }

    &__grid {
        @apply grid grid-cols-3 gap-10 p-3 mx-auto;

        .event {
            @apply mb-8 text-xxs;

            img {
                @apply w-full h-auto;
            }
        }
    }

}
</style>