<template>
    <footer class="footer">
        <div class="footer-links">
            <ul>
                <li>
                    <NuxtLink to="/tercer-espai">Tercer Espai</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/espais">Espais</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/contingut">Contingut</NuxtLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NuxtLink to="/contacte">Contacte</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/termes">Termes</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/privacitat">Privacitat</NuxtLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NuxtLink to="/twitter">FAQ</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/llista-correu">Llista de correu</NuxtLink>
                </li>
            </ul>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2025 Pixapins Enterprises. All rights reserved.</p>
        </div>
    </footer>
</template>

<style lang="postcss" scoped>
/* Footer.css */
.footer {
    @apply max-w-5xl mx-10 md:mx-auto py-10 text-[#333];

    &-links {
        @apply flex flex-col md:flex-row justify-between mb-5;
    }
}



.footer-bottom {
    @apply text-center mt-10 pt-5 border-t border-[#ddd];
}
</style>