import { defineStore } from 'pinia'

export const useFilterStore = defineStore('filter', () => {
    const query = ref<string>('')

    const setQuery = (newQuery: string) => {
        query.value = newQuery
    }

    return {
        query,
        setQuery
    }
})
