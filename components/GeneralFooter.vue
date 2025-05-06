<template>
    <footer class="footer">
        <div class="footer__links">
            <ul>
                <li>
                    <NuxtLink to="/nosaltres">Nosaltres</NuxtLink>
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
                    <NuxtLink to="/faq">FAQ</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/llista-correu">Llista de correu</NuxtLink>
                </li>
            </ul>
        </div>

        <div class="footer__bottom">
            <p>&copy; 2025 Produccions Pixapins. Tots els drets reservats.</p>
        </div>
    </footer>
</template>

<style lang="postcss" scoped>
/* Footer.css */
.footer {
    @apply max-w-5xl md:mx-auto mt-20 p-5 text-[#333];

    &__links {
        @apply flex flex-row justify-between md:mb-5;

        a {
            @apply text-xs md:text-sm hover:bg-gray-600 hover:text-white;
        }
    }

    &__bottom {
        @apply text-center mt-5 md:mt-10 pt-5 border-t border-[#ddd];
    }
}
</style>