<template>
    <div class="flex h-screen">
        <SidebarNavigation />
        <main class="flex-grow p-5 box-border">
            <h1 class="text-3xl text-center">Topevents</h1>
            <slot />
        </main>
    </div>
</template>

<style lang="postcss" scoped></style>