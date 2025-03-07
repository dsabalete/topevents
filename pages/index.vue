<template>
    <div class="index-page">
        <div class="relative w-full h-screen overflow-hidden">
            <video autoplay muted loop class="absolute top-0 left-0 w-full h-full object-cover">
                <source src="assets/video/mockup.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <!-- <div class="relative z-10 flex items-center justify-center w-full h-full">
                <h1 class="text-white text-4xl font-bold">Your Content Here</h1>
            </div> -->
        </div>

        <div class="credits">
            Crèdit del video
        </div>

        <SearchInput />

        <PostersSection />

        <div class="arxiu-link h-60">
            <NuxtLink to="/arxiu">Arxiu</NuxtLink>
        </div>

    </div>
</template>

<style lang="postcss" scoped>
.index-page {
    @apply font-courier;
}

.credits {
    @apply text-xxs px-2 pt-1 mb-4;
}

.arxiu-link {
    @apply text-lg text-black text-center my-10;
}
</style>