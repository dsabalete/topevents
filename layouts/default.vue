<script lang="ts" setup>
const { fetchPosters } = useSupabasePosters()

onMounted(() => {
    fetchPosters()
})
</script>

<template>
    <div class="flex h-screen relative">
        <main class="flex-grow box-border relative">
            <SidebarNavigation class="absolute z-20" />
            <slot class="absolute" />
            <GeneralFooter />
        </main>
    </div>
</template>

<style lang="postcss" scoped>
.title {
    @apply text-black text-3xl text-center left-1/3 top-10 absolute z-20;
}
</style>