<script lang="ts" setup>
const { fetchPosters } = useSupabasePosters()
const { fetchEspais } = useSupabaseEspais()

onMounted(() => {
    fetchPosters()
    fetchEspais()
})
</script>

<template>
    <div class="default-layout">
        <main class="flex-grow box-border relative">
            <SidebarNavigation class="absolute z-20" />
            <slot class="absolute" />
            <GeneralFooter />
        </main>
    </div>
</template>

<style lang="postcss" scoped>
.default-layout {
    @apply flex h-screen relative;
}
</style>