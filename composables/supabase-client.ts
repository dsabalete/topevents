import { createClient } from '@supabase/supabase-js'

export const useSupabaseClient = () => {
    const config = useRuntimeConfig()
    const supabaseKey = config.public.supabaseKey
    const supabaseUrl = config.public.supabaseUrl
    const supabase = createClient(supabaseUrl, supabaseKey)

    return { supabase }
}