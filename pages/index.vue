<template>
    <div class="index-page">
        <h1 class="hidden">Tercer Espai</h1>

        <div class="relative w-full h-screen overflow-hidden">
            <video autoplay muted loop class="absolute top-0 left-0 w-full h-full object-cover">
                <source src="assets/video/caballo_blanco.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>

        <div class="credits">
            Crèdit del video
        </div>

        <SearchInput />

        <PostersSection />

        <div class="arxiu-link ">
            <NuxtLink to="/arxiu">Arxiu</NuxtLink>
        </div>

    </div>
</template>

<style lang="postcss" scoped>
.credits {
    @apply text-xxs px-2 pt-1 mb-4;
}

.arxiu-link {
    @apply h-10 my-10 text-lg text-black text-center;

    a {
        @apply hover:bg-gray-600 hover:text-white;
    }
}
</style>