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
                        easing: 'ease-in-out'
                    }" class="developer">desarrollador</a>
                    y
                    <a v-scroll-to="{
                        el: '#artist',
                        duration: 500,
                        easing: 'ease-in-out'
                    }" class="artist">artista</a>
                </h1>
            </div>
            <section
                style="margin-top:15vh; margin-bottom: 1vh;"
                data-aos="fade-in"
                class="subtitulo"
                id="developer">
                Algunos de mis proyectos
            </section>
            <div class="columnas">
                <section
                data-aos="zoom-in">
                    <article class="articulo">
                        <div style="display: flex; flex-direction: column; margin: 0.5rem 1rem;">
                            <h3 class="textoArticulo">Portfolio</h3>
                        </div>
                        <div class="repo-card" data-repo="bbauti/portfolio"></div>
                    </article>
                </section>
                <section
                data-aos="zoom-in"
                data-aos-delay="50">
                    <article class="articulo">
                        <div style="display: flex; flex-direction: column; margin: 0.5rem 1rem;">
                            <h3 class="textoArticulo">Ejercicios P5</h3>
                        </div>
                        <div class="repo-card" data-repo="bbauti/ejerciciosp5"></div>
                    </article>
                </section>
            </div>
            <section
                style="margin-top:15vh; margin-bottom: 1vh;"
                data-aos="fade-in"
                class="subtitulo"
                id="artist">
                Mis diseños
            </section>
            <section
                data-aos="fade-right"
                class="img--right photo_section">
                <nuxt-picture
                    src="/portfolio/cabeza2.webp"
                    sizes="sm:100vw md:50vw lg:400px"
                    :imgAttrs="{class:'img'}"
                />
            </section>
            <section
                data-aos="fade-left"
                class="img--left photo_section">
                <nuxt-picture
                    src="/portfolio/cuerpo1.webp"
                    sizes="sm:100vw md:50vw lg:400px"
                    :imgAttrs="{class:'img'}"
                />
            </section>
            <section
                data-aos="fade-right"
                class="img--right photo_section">
                <nuxt-picture
                    src="/portfolio/pisco2.webp"
                    sizes="sm:100vw md:50vw lg:400px"
                    :imgAttrs="{class:'img'}"
                />
            </section>
            <section
                data-aos="fade-left"
                class="img--left photo_section">
                <nuxt-picture
                    src="/portfolio/spectre1.webp"
                    sizes="sm:100vw md:50vw lg:400px"
                    :imgAttrs="{class:'img'}"
                />
            </section>
		</div>
	</div>
</template>

<script>
export default {
    scrollToTop: true
}
</script>
