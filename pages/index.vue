<template>
	<div class="container">
		<div class="main">
            <start :critical="true" />
            <projects />
            <photos />
            <contact />
		</div>
	</div>
</template>

<script>
import speedkitHydrate from 'nuxt-speedkit/hydrate';

export default {

    components: {
        start: speedkitHydrate(() => import('@/components/start')),
        projects: speedkitHydrate(() => import('@/components/projects')),
        photos: speedkitHydrate(() => import('@/components/photos')),
        contact: speedkitHydrate(() => import('@/components/contact')),
    },
    mounted() {
        if (process.client && window) {
            window.history.scrollRestoration = 'auto';
        }
    },
}
</script>
