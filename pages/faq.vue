<script lang="ts" setup>
import Accordion from '~/components/Accordion.vue'

const faqItems = [
    { question: 'Pregunta 1', answer: 'Resposta 1' },
    { question: 'Pregunta 2', answer: 'Resposta 2' },
    { question: 'Pregunta 3', answer: 'Resposta 3' }
]
</script>

<template>
    <div class="faq-page">
        <h2>Preguntes Freqüents (FAQ)</h2>

        <Accordion :items="faqItems" />
    </div>
</template>

<style lang="postcss" scoped>
.faq-page {
    @apply max-w-4xl mx-auto mt-20;

    h2 {
        @apply text-2xl font-bold mb-10;
    }
}
</style>