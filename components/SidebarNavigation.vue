<script lang="ts" setup>
const links = [
    { path: '/futurs', text: 'Futurs esdev.' },
    { path: '/agenda', text: 'Agenda' },
    { path: '/esdev1', text: 'Esdev. Gran 1' },
    { path: '/esdev2', text: 'Esdev. Gran 2' },
    { path: '/arxiu', text: 'Arxiu' },
    { path: '/tenda', text: 'Tenda' },
]

const isCollapsed = ref(true)

const toggleSidebar = () => {
    isCollapsed.value = !isCollapsed.value
}

const handleLinkClick = () => {
    isCollapsed.value = true
}
</script>

<template>
    <aside class="sidebar" :class="{ 'sidebar--collapsed': isCollapsed }">
        <button @click="toggleSidebar" class="collapse-btn" :class="{ 'right-2 left-unset': !isCollapsed }">
            <div v-if="isCollapsed" class="flex gap-2">
                <IconBars class="w-10 h-10" />
                <span class="text-3xl">LOGO</span>
            </div>
            <IconCancel v-else class="right-0" />
        </button>
        <nav v-show="!isCollapsed">
            <ul class="list-none p-0 m-0">
                <li v-for="(link, index) in links" :key="index" class="mb-2">
                    <nuxt-link :to="link.path" class="sidebar-link" active-class="bg-gray-300" @click="handleLinkClick">
                        {{ link.text }}
                    </nuxt-link>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<style lang="postcss" scoped>
.sidebar {
    @apply fixed top-0 left-0 h-full bg-gray-200 border-2 border-black pt-12 box-border transition-all duration-300;
    width: 0;
    /*overflow: hidden;*/

    &--collapsed {
        width: 0;
    }

    &-link {
        @apply block text-gray-800 p-2 rounded hover:bg-gray-300;
    }
}

.sidebar:not(.sidebar--collapsed) {
    width: 100%;
}

.collapse-btn {
    @apply absolute left-2 top-2 px-2 py-1 hover:bg-gray-400 z-10;
}
</style>