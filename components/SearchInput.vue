<script lang="ts" setup>
const { query } = storeToRefs(useFilterStore())

const handleSearch = (e: Event): void => {
    e.preventDefault()
    const target = e.target as HTMLInputElement
    useFilterStore().setQuery(target.value)
}
</script>

<template>
    <div class="search-container">
        <input type="text" v-model="query" @input="handleSearch" placeholder="Search..." class="search-input" />
        <button class="search-button">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </button>
    </div>
</template>

<style lang="postcss" scoped>
.search-container {
    @apply flex flex-row p-2.5 ml-[150px] md:max-w-5xl md:mx-auto md:pl-[600px] relative;
}

.search-input {
    @apply p-2 border-b border-gray-300 rounded text-sm flex-grow font-mono focus:outline-none;
}

.search-button {
    @apply px-4 py-2 text-gray-400 border-0 rounded cursor-pointer absolute right-0;
}
</style>