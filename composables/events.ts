
import { createClient } from '@supabase/supabase-js'
import { ref } from 'vue'
import type { Poster } from '~/types/poster'

export const useSupabasePosters = () => {
    const config = useRuntimeConfig()
    const supabaseKey = config.public.supabaseKey
    const supabaseUrl = config.public.supabaseUrl
    const supabase = createClient(supabaseUrl, supabaseKey)

    const posters = ref<Poster[]>([])

    const fetchPosters = async () => {
        try {
            const { data, error } = await supabase
                .from('events')
                .select('*')

            if (error) throw error

            posters.value = data
        } catch (error) {
            console.error('Error fetching events:', error)
        }
    }

    return {
        posters,
        fetchPosters
    }
}