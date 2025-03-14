import { defineStore } from 'pinia'
import type { PosterEvent } from '~/types/poster-event'

export const useEventsStore = defineStore('events', () => {

    const { query } = storeToRefs(useFilterStore())

    const events = ref<PosterEvent[]>([])

    const filteredPosters = computed(() => {
        return events.value.filter(poster =>
            poster.name.toLowerCase().includes(query.value.toLowerCase())
        )
    })

    const setEvents = (newEvents: PosterEvent[]) => {
        events.value = newEvents
    }

    return {
        events,
        filteredPosters,
        setEvents
    }
})
