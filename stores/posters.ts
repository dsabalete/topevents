import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'
import type { Poster } from '~/types/poster'


export const usePostersStore = defineStore('posters', () => {
    const posters = ref<Poster[]>([])
    const searchQuery = ref('')

    const fetchPosters = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/posters')
            posters.value = response.data

            console.log('Fetched posters:', posters.value)

        } catch (error) {
            console.error('Error fetching posters:', error)
        }
    }

    const setSearchQuery = (query: string) => {
        searchQuery.value = query
    }

    const filteredPosters = computed(() => {
        return posters.value.filter(poster =>
            poster.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        )
    })

    return {
        posters,
        searchQuery,
        fetchPosters,
        setSearchQuery,
        filteredPosters,
    }
})