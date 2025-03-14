import { createClient } from '@supabase/supabase-js'
import type { PosterEvent } from '~/types/poster-event'

export const useSupabasePosters = () => {
    const config = useRuntimeConfig()
    const supabaseKey = config.public.supabaseKey
    const supabaseUrl = config.public.supabaseUrl
    const supabase = createClient(supabaseUrl, supabaseKey)

    const { setEvents } = useEventsStore()

    const fetchPosters = async (archived = false) => {
        try {
            const { data, error } = await supabase
                .from('events')
                .select('*')
                .eq('archived', archived)

            if (error) throw error

            setEvents(data as PosterEvent[])
        } catch (error) {
            console.error('Error fetching events:', error)
        }
    }

    return {
        fetchPosters
    }
}