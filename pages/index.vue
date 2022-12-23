<template>
	<div class="container">
		<div class="main">
            <start />
            <projects />
            <photos />
            <contact />
		</div>
	</div>
</template>

<script>
export default {
    mounted() {
        if (process.client && window) {
            window.history.scrollRestoration = 'auto';
        }
    },
}
</script>
