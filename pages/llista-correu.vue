<script lang="ts" setup>
const email = ref('')

const handleSubmit = (e: Event) => {
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
    })
        .then(() => {
            alert('Gracies per la teva subscripció!\n' + email.value)
            email.value = ''
        })
        .catch(error => alert(error))
}
</script>

<template>
    <div class="llista-correu-page">

        <h2>Llista de correu</h2>

        <p class="mb-10">Per estar al dia de les nostres novetats, inscriu-te a la nostra llista de correu.</p>

        <!-- Formulari de subscripció       
        example:
        https://andrewstiefel.com/netlify-functions-email-subscription/ 
        @submit.prevent="subscribe"
        -->
        <form @submit.prevent="handleSubmit" method="POST" class="llista-correu-page__form" name="mailing-list"
            data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="mailing-list" />
            <p class="hidden">
                <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
            </p>
            <label for="email">Insereix el teu correu electrònic:</label>
            <div class="flex flex-row my-1">
                <input type="email" id="email" v-model="email" name="email" required>
                <button type="submit">Subscriu-te</button>
            </div>
        </form>
        <p class="text-xs">*Pots donar-te de baixa de la nostra llista de correu a qualsevol moment.</p>
    </div>
</template>

<style lang="postcss" scoped>
.llista-correu-page {
    @apply max-w-4xl mx-auto mt-20 p-5 h-3/5;

    h2 {
        @apply pb-2;
    }

    &__form {
        @apply flex flex-col;

        input[type="email"] {
            @apply w-full px-4 py-2 border border-gray-300 rounded text-sm flex-grow font-courier focus:outline-none;
        }

        button[type="submit"] {
            @apply w-60 px-4 bg-gray-600 text-white rounded cursor-pointer;
        }
    }
}
</style>
