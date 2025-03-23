<script lang="ts" setup>
const espais = [
    {
        name: 'FIMA BARCELONA',
        address: 'Carrer de Melcior de Palau, 140, Sants - Montjuïc, 08014 Barcelona',
        timetable: [
            'Obert 8 - 21 (DL - DV)',
            'Tancat (DS - DG)'
        ],
        phone: '93403577',
        picture: 'https://www.ub.edu/portal/c/document_library/get_file?groupId=5181723&uuid=7c6ddcae-a84b-810b-b44b-9c5d3be94853',
    },
    {
        name: 'ESPAI 2',
        address: 'Pendent de confirmar',
        timetable: [
            'Obert 8 - 21 (DL - DV)',
            'Tancat (DS - DG)'
        ],
        phone: '999999999',
        picture: 'https://placehold.co/200',
    },
    {
        name: 'ESPAI 3',
        address: 'Pendent de confirmar',
        timetable: [
            'Obert 8 - 21 (DL - DV)',
            'Tancat (DS - DG)'
        ],
        phone: '999999999',
        picture: 'https://placehold.co/200',
    },
    {
        name: 'ESPAI 4',
        address: 'Pendent de confirmar',
        timetable: [
            'Obert 8 - 21 (DL - DV)',
            'Tancat (DS - DG)'
        ],
        phone: '999999999',
        picture: 'https://placehold.co/200',
    }
]
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
