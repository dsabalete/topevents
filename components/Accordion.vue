<template>
    <div class="accordion">
        <div v-for="(item, index) in items" :key="index" class="accordion-item">
            <button @click="toggle(index)" class="accordion-header">
                {{ item.question }}
            </button>
            <div v-if="activeIndex === index" class="accordion-content">
                <p>{{ item.answer }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface AccordionItem {
    question: string
    answer: string
}

const props = defineProps<{ items: AccordionItem[] }>()

const activeIndex = ref<number | null>(null)

const toggle = (index: number) => {
    activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<style lang="postcss" scoped>
.accordion-item {
    @apply border-b border-[#ddd] last:border-b-0;
}

.accordion-header {
    @apply w-full font-bold uppercase text-left p-4 bg-gray-100 cursor-pointer;
}

.accordion-content {
    @apply mx-4 mt-6 mb-8;
}
</style>