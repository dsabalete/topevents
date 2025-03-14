import { createClient } from '@supabase/supabase-js'
import type { PosterEvent } from '~/types/poster-event'

export const useSupabasePosters = () => {
    const config = useRuntimeConfig()
    const supabaseKey = config.public.supabaseKey
    const supabaseUrl = config.public.supabaseUrl
    const supabase = createClient(supabaseUrl, supabaseKey)

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