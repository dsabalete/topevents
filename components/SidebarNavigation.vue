<script lang="ts" setup>
const links = [
    { path: '/', text: 'Recent Events' },
    { path: '/past', text: 'Past Events' },
    { path: '/contact', text: 'Contact' },
    { path: '/cookies', text: 'Cookies Policy' }
]

const isCollapsed = ref(true)

const toggleSidebar = () => {
    isCollapsed.value = !isCollapsed.value
}
</script>

<template>
    <aside class="sidebar" :class="{ 'sidebar--collapsed': isCollapsed }">
        <button @click="toggleSidebar" class="collapse-btn">
            <span v-if="isCollapsed">›</span>
            <span v-else>‹</span>
        </button>
        <nav v-show="!isCollapsed">
            <ul class="list-none p-0 m-0">
                <li v-for="(link, index) in links" :key="index" class="mb-2">
                    <nuxt-link :to="link.path" class="sidebar-link" active-class="bg-gray-300">
                        {{ link.text }}
                    </nuxt-link>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<style lang="postcss" scoped>
.sidebar {
    @apply w-48 bg-gray-200 pt-12 box-border relative transition-all duration-300;

    &--collapsed {
        @apply w-0;
    }

    &-link {
        @apply block text-gray-800 p-2 rounded hover:bg-gray-300;
    }
}

.collapse-btn {
    @apply absolute left-2 top-2 px-2 py-1 hover:bg-gray-400 z-10;
}
</style>