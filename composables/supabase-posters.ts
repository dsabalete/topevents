import type { PosterEvent } from '~/types/poster-event'

export const useSupabasePosters = () => {
    const { supabase } = useSupabaseClient()

    const fetchPosters = async () => {
        try {
            const { data, error } = await supabase
                .from('events')
                .select('*')

            if (error) throw error

            useEventsStore().setEvents(data as PosterEvent[])
        } catch (error) {
            console.error('Error fetching events:', error)
        }
    }

    return {
        fetchPosters
    }
}