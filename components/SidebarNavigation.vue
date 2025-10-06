<script lang="ts" setup>
import logoWhite from '~/assets/img/3e_white.png'
import logoBlack from '~/assets/img/3e_black.png'

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

// Determine which logo to show depending on the current route
const route = useRoute()
const isHomeRoute = computed(() => route.path === '/')
const heroInView = ref(true)
const isHomeWithVideo = computed(() => isHomeRoute.value && heroInView.value)

onMounted(() => {
    if (!isHomeRoute.value) return

    const heroEl = document.getElementById('home-hero')
    if (!heroEl) return

    const observer = new IntersectionObserver(([entry]) => {
        heroInView.value = entry.isIntersecting
    }, { threshold: 0.1 })

    observer.observe(heroEl)

    onBeforeUnmount(() => {
        observer.disconnect()
    })
})
</script>

<template>
    <aside class="sidebar" :class="{ 'sidebar--collapsed': isCollapsed }">

        <div v-if="isCollapsed" class="sidebar-logo">
            <img :src="isHomeWithVideo ? logoWhite : logoBlack" alt="logo" />
        </div>

        <button @click="toggleSidebar" class="collapse-btn" :class="{ 'right-2 left-unset': !isCollapsed }">
            <div v-if="isCollapsed" class="flex gap-2 relative">
                <IconBars class="w-10 h-10"
                    :class="{ 'text-white': isHomeWithVideo, 'text-black': !isHomeWithVideo }" />
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
        @apply absolute w-20 left-12 -top-2 z-40;

        img {
            @apply h-auto ml-4 mt-2 w-20;
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
    @apply absolute left-2 top-2 px-2 py-1 text-black z-10;
}
</style>