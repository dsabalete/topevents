<script lang="ts" setup>
const { espais } = useEspaisStore()
</script>

<template>
    <div class="page-espais">
        <h2>Espais</h2>

        <div class="page-espais__container">
            <EspaiCard v-for="espai in espais" :key="espai.name" :espai="espai" />
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.page-espais {
    @apply max-w-4xl mx-auto mt-20 p-5;

    &__container {
        @apply grid grid-cols-1 md:grid-cols-2 gap-5;
    }

    h2 {
        @apply mb-8;
    }
}
</style>
