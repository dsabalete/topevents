<script lang="ts" setup>
const links = [
    { path: '/', text: 'Inici' },
    { path: '/agenda', text: 'Agenda' },
    { path: '/events/1', text: 'Esdev. Gran 1' },
    { path: '/events/2', text: 'Esdev. Gran 2' },
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

        <div v-if="isCollapsed" class="sidebar-logo">
            <img src="~/assets/img/3e_white.png" alt="logo" />
        </div>

        <button @click="toggleSidebar" class="collapse-btn"
            :class="{ 'right-2 left-unset not-collapsed': !isCollapsed }">
            <div v-if="isCollapsed" class="flex gap-2 relative">
                <IconBars class="w-10 h-10" />
            </div>
            <IconCancel v-else class="right-0 w-10 h-10" />
        </button>

        <nav v-show="!isCollapsed">
            <ul class="sidebar-list">
                <li v-for="(link, index) in links" :key="index" class="mb-2">
                    <nuxt-link :to="link.path" class="sidebar-link" active-class="active" @click="handleLinkClick">
                        {{ link.text }}
                    </nuxt-link>
                </li>
            </ul>
        </nav>
    </aside>
</template>

<style lang="postcss" scoped>
.sidebar {
    @apply fixed top-0 left-0 bg-white border-black pt-12 box-border transition-all duration-300;

    &-logo {
        @apply absolute w-40 left-12 -top-2 z-40;

        img {
            @apply w-20 h-auto mt-2 ml-4;
        }
    }

    &-link {
        @apply block text-gray-600 p-2 rounded hover:text-black hover:font-bold;

        &.active {
            @apply text-black font-bold;
        }
    }

    &-list {
        @apply list-none p-0 m-10 ml-20;
    }
}

.sidebar:not(.sidebar--collapsed) {
    width: 100%;
}

.collapse-btn {
    @apply absolute left-2 top-2 px-2 py-1 text-white hover:text-gray-400 z-10;

    &.not-collapsed {
        @apply text-black;
    }
}
</style>