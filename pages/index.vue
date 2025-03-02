<template>
    <div class="index-page">
        <aside class="index-page__sidebar">
            <nav>
                <ul class="list-none p-0 m-0">
                    <li class="mb-2">
                        <nuxt-link to="/recent" class="index-page__sidebar-link" active-class="bg-gray-300">Recent
                            Events</nuxt-link>
                    </li>
                    <li class="mb-2">
                        <nuxt-link to="/past" class="index-page__sidebar-link" active-class="bg-gray-300">Past
                            Events</nuxt-link>
                    </li>
                    <li class="mb-2">
                        <nuxt-link to="/contact" class="index-page__sidebar-link""
                            active-class=" bg-gray-300">Contact</nuxt-link>
                    </li>
                    <li class="mb-2">
                        <nuxt-link to="/cookies" class="index-page__sidebar-link""
                            active-class=" bg-gray-300">Cookies Policy</nuxt-link>
                    </li>
                    <li class="mb-2">
                        <nuxt-link to="/terms" class="index-page__sidebar-link" active-class="bg-gray-300">Terms &
                            Conditions</nuxt-link>
                    </li>
                </ul>
            </nav>
        </aside>
        <main class="flex-grow p-5 box-border">
            <nuxt />
        </main>
    </div>
</template>

<style lang="postcss" scoped>
/* Remove the custom CSS as it is replaced by Tailwind classes */
.index-page {
    @apply flex h-screen;

    &__sidebar {
        @apply w-48 bg-gray-200 p-5 box-border;

        &__link {
            @apply block text-gray-800 p-2 rounded hover:bg-gray-300;
        }
    }
}
</style>