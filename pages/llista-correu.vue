<script lang="ts" setup>
const email = ref('')
const { subscribe, error, subscribed } = useSupabaseMailingList()

const handleSubmit = async () => {
    await subscribe(email.value)
}
</script>

<template>
    <div class="llista-correu-page">
        <h2>Llista de correu</h2>

        <template v-if="!subscribed">
            <p class="mb-10">Per estar al dia de les nostres novetats, inscriu-te a la nostra llista de correu.</p>
            <form @submit.prevent="handleSubmit" class="llista-correu-page__form">
                <label for="email">Insereix el teu correu electrònic:</label>
                <div class="flex flex-row my-1">
                    <input type="email" id="email" v-model="email" name="email" required>
                    <button type="submit">Subscriu-te</button>
                </div>
            </form>
            <p class="text-xs">*Pots donar-te de baixa de la nostra llista de correu a qualsevol moment.</p>
        </template>

        <p v-if="subscribed">T'has subscrits correctament a la nostra llista de correu.</p>

        <p v-if="error" class="error">{{ error }}</p>
    </div>
</template>

<style lang="postcss" scoped>
.llista-correu-page {
    @apply max-w-4xl mx-auto mt-20 p-5;

    h2 {
        @apply font-bold text-center mb-8;
    }

    &__form {
        @apply flex flex-col;

        input[type="email"] {
            @apply w-full px-4 py-2 border border-gray-300 rounded text-sm flex-grow font-mono focus:outline-none;
        }

        button[type="submit"] {
            @apply w-60 px-4 bg-gray-600 text-white rounded cursor-pointer;
        }
    }

    .error {
        @apply text-red-500 my-5;
    }
}
</style>
