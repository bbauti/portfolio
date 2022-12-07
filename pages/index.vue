<template>
	<div class="container">
		<div>
            <div class="header">
                <h1 class="titulo">
                    Hola! Soy <span class="borde">Bautista Igarzabal</span>
                </h1>
                <h1 class="subtitulo">
                    Un <NuxtLink to="/programming">desarrollador web</NuxtLink> y <NuxtLink to="/design">artista</NuxtLink>
                </h1>
            </div>
            <section
                style="margin-top:1vh;"
                data-aos="fade-in"
                class="subtitulo">
                Algunos de mis proyectos
            </section>
            <section
                style="margin-top:5em;"
                data-aos="fade-right"
                class="img--right">
                <nuxt-picture
                    src="/images/image1.jpg"
                    sizes="sm:100vw md:50vw lg:400px"
                    :imgAttrs="{class:'img'}"
                />
            </section>
            <section
                style="margin-top:5em;"
                data-aos="fade-left"
                class="img--left">
                <nuxt-picture
                    src="/images/image2.jpg"
                    sizes="sm:100vw md:50vw lg:400px"
                    :imgAttrs="{class:'img'}"
                />
            </section>
			<!-- <photos /> -->
		</div>
	</div>
</template>
