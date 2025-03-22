

export const useSupabaseMailingList = () => {
    const { supabase } = useSupabaseClient()
    const error = ref<string | null>(null)
    const subscribed = ref(false)

    const subscribe = async (email: string) => {
        error.value = null
        subscribed.value = false

        try {
            const { error: supabaseError } = await supabase
                .from('newsletter')
                .insert({ email })

            if (supabaseError) {
                error.value = "Hi ha hagut un error al intentar subscribe'te"
                console.error('Error:', supabaseError)
                return
            }

            subscribed.value = true
            console.log('Subscribed:', email)
        } catch (err) {
            error.value = "Error desconegut. Si us plau, torna a intentar-ho més tard."
            console.error('Unexpected Error:', err)
        }
    }

    return {
        subscribe,
        error,
        subscribed
    }
}