<template>
    <div class="page-contacte">
        <h2>Contacta'ns</h2>


        <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-group">
                <label for="first-name">Nom:</label>
                <input type="text" id="first-name" name="first-name" v-model="firstName" required />
            </div>
            <div class="form-group">
                <label for="last-name">Cognoms:</label>
                <input type="text" id="last-name" name="last-name" v-model="lastName" required />
            </div>
            <div class="form-group">
                <label for="email">Correu electrònic:</label>
                <input type="email" id="email" name="email" v-model="email" required />
            </div>
            <div class="form-group">
                <label for="message">Missatge:</label>
                <textarea id="message" name="message" v-model="message" required></textarea>
            </div>
            <button type="submit">Enviar</button>
        </form>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const message = ref('')

const handleSubmit = () => {
    alert(`Nom: ${firstName.value}\nCognom: ${lastName.value}\nCorreu electrònic: ${email.value}\nMissatge: ${message.value}`)
}
</script>

<style lang="postcss" scoped>
.page-contacte {
    @apply max-w-4xl mx-auto mt-20 p-5;

    h2 {
        @apply pb-5;
    }
}

.contact-form {
    @apply flex flex-col gap-4;

    .form-group {
        @apply flex flex-col;

        label {
            @apply mb-1 font-semibold;
        }

        input,
        textarea {
            @apply px-4 py-2 border border-gray-300 rounded text-sm focus:outline-none;
        }

        textarea {
            @apply resize-none h-32;
        }
    }

    button[type="submit"] {
        @apply w-32 px-4 py-2 bg-gray-600 text-white rounded cursor-pointer;
    }
}
</style>