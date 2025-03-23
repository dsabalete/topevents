

export const useSupabaseContacts = () => {
    const { supabase } = useSupabaseClient()
    const error = ref<string | null>(null)
    const messageSent = ref(false)

    const send = async (firstName: string, lastName: string, email: string, message: string) => {
        error.value = null
        messageSent.value = false

        try {
            const { error: supabaseError } = await supabase
                .from('contacts')
                .insert({ 'first_name': firstName, 'last_name': lastName, email, message })

            if (supabaseError) {
                error.value = "Hi ha hagut un error al intentar enviar el missatge"
                console.error('Error:', supabaseError)
                return
            }

            messageSent.value = true
            console.log('Message sent:', firstName, lastName, email, message)
        } catch (err) {
            error.value = "Error desconegut. Si us plau, torna a intentar-ho més tard."
            console.error('Unexpected Error:', err)
        }
    }

    return {
        send,
        error,
        messageSent
    }
}