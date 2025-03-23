export const useSupabaseEspais = () => {
    const { supabase } = useSupabaseClient()

    const fetchEspais = async () => {
        try {
            const { data, error } = await supabase
                .from('espais')
                .select('*')

            if (error) throw error

            useEspaisStore().setEspais(data)
        } catch (error) {
            console.error('Error fetching espais:', error)
        }
    }

    return {
        fetchEspais
    }
}