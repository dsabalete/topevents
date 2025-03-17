<script lang="ts" setup>
const subscribe = (e) => {
    e.preventDefault()
    const email = e.target.elements.email.value
    alert('Gracies per la teva subscripció!\n' + email)
}
</script>

<template>
    <div class="llista-correu-page">
        <p class="mb-10">Per estar al dia de les nostres novetats, inscriu-te a la nostra llista de correu.</p>

        <!-- Formulari de subscripció       
        example:
        https://andrewstiefel.com/netlify-functions-email-subscription/ 
        -->
        <form @submit="subscribe" class="llista-correu-page__form">
            <label for="email">Insereix el teu correu electrònic:</label>
            <div class="flex flex-row">
                <input type="email" id="email" name="email" required>
                <button type="submit">Subscriu-te</button>
            </div>
        </form>
    </div>
</template>

<style lang="postcss" scoped>
.llista-correu-page {
    @apply max-w-[800px] mx-auto pt-10 md:pt-20;

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
