import { defineStore } from 'pinia'
import type { PosterEvent } from '~/types/poster-event'

export const useEventsStore = defineStore('events', () => {

    const { query } = storeToRefs(useFilterStore())

    const events = ref<PosterEvent[]>([])

    const publishedPosters = computed(() => {
        return events.value.filter(poster => !poster.archived)
    })

    const filteredPosters = computed(() => {
        return publishedPosters.value.filter(poster =>
            poster.name.toLowerCase().includes(query.value.toLowerCase())
        )
    })

    const archivedPosters = computed(() => {
        return events.value.filter(poster => poster.archived)
    })

    const setEvents = (newEvents: PosterEvent[]) => {
        events.value = newEvents
    }

    return {
        events,
        filteredPosters,
        archivedPosters,
        setEvents
    }
})
