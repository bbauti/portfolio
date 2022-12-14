<template>
	<div class="container">
		<div class="main">
            <div class="header" id="header">
                <h1 class="titulo">
                    Hola! Soy <span class="borde">Bautista Igarzabal</span>
                </h1>
                <h1 class="subtitulo">
                    Un
                    <a v-scroll-to="{
                        el: '#developer',
                        duration: 500,
                        easing: 'ease-in-out',
                        offset: -100
                    }" class="developer">desarrollador</a>
                    y
                    <a v-scroll-to="{
                        el: '#artist',
                        duration: 500,
                        easing: 'ease-in-out',
                        offset: -100
                    }" class="artist">artista</a>
                </h1>
            </div>
            <projects />
            <photos />
            <contact />
		</div>
	</div>
</template>

<script>
</script>
