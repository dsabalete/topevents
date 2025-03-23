import { defineStore } from 'pinia'
import type { Espai } from '~/types/espai'

export const useEspaisStore = defineStore('espais', () => {
    const espais = ref<Espai[]>([])

    const setEspais = (newEspais: Espai[]) => {
        espais.value = newEspais
    }

    return {
        espais,
        setEspais
    }
})
