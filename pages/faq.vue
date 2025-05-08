<script lang="ts" setup>
import Accordion from '~/components/Accordion.vue'

const faqItems = [
    {
        question: 'Què és El Tercer Espai?',
        answer: `És un club de cinema i espai de trobada a la FIMA on es fan projeccions de contingut
audiovisual i activitats per compartir opinions i debats sobre cinema i cultura
audiovisual.` },
    {
        question: 'Qui pot participar a les projeccions?',
        answer: `Tothom vinculat a la FIMA pot assistir-hi: estudiants, professorat i personal. No cal
cap experiència prèvia, només ganes de veure i parlar de cinema!`
    },
    {
        question: 'Cal inscriure’s per participar?',
        answer: `Depèn de l’activitat. Algunes projeccions o col·loquis tindran entrada lliure, però si
l’aforament és limitat o l’activitat requereix preparació prèvia, es farà amb inscripció
en línia (ho indicarem clarament al web i a les xarxes).`
    },
    {
        question: 'He fet un curtmetratge o una peça audiovisual. La puc projectar?',
        answer: `Sí! Una de les missions d’El Tercer Espai és donar visibilitat a les creacions de la
comunitat FIMA. Hi haurà convocatòries obertes per enviar peces, que seran
seleccionades per votació popular o per l’equip organitzador.`
    },
    {
        question: 'On es fan les projeccions?',
        answer: `La majoria d’activitats es faran a la sala d’actes de la FIMA, però també podem fer
activitats puntuals en altres espais com el pati o aules habilitades.`
    },
    {
        question: 'Puc marxar a mitja projecció?',
        answer: `Sí, però et demanem que ho facis de manera respectuosa, per no molestar la resta
d’assistents. I, si pots, queda’t a comentar després!`
    },
    {
        question: 'Puc portar menjar o beguda?',
        answer: `Durant les projeccions, no es permet menjar calents ni menjars sorollosos. Durant els
espais d’esbarjo, sí que podràs menjar o beure de manera responsable i cívica.`
    },
    {
        question: 'Com puc col·laborar amb el projecte?',
        answer: `Si vols participar en l’organització, proposar activitats o ajudar amb la comunicació,
escriu-nos a través del formulari de contacte o vine a parlar amb nosaltres després
d’una sessió. El Tercer Espai és de tothom.`
    },
    {
        question: 'Puc reservar seient?',
        answer: `No. El sistema d’accés és per ordre d’arribada, excepte en activitats amb inscripció
prèvia. Recomanem arribar amb temps si vols un bon lloc!`
    },
]
</script>

<template>
    <div class="faq-page">
        <h2>Preguntes Freqüents (FAQ)</h2>

        <Accordion :items="faqItems" />
    </div>
</template>

<style lang="postcss" scoped>
.faq-page {
    @apply max-w-4xl mx-auto mt-20 p-5;

    h2 {
        @apply font-bold text-center mb-8;
    }
}
</style>