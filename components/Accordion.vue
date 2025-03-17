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
    border-bottom: 1px solid #ddd;
}

.accordion-header {
    @apply w-full text-left py-2 px-4 bg-gray-100 cursor-pointer;
}

.accordion-content {
    @apply py-2 px-4;
}
</style>