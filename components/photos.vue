<template>
	<div id="photosSection">
		<section style="margin-top:15vh; margin-bottom: 5vh; text-align: center;" data-aos="fade-in" class="subtitulo"
			id="artist">
			Mis diseños
		</section>
		<div class="columns is-multiline">
            <div class="column is-one-quarter-desktop is-half-tablet">
                <section data-aos="zoom-in" style="z-index: 199; position: relative;">
                    <a href="https://www.behance.net/gallery/103381405/Locked" target="_blank" rel="noopener noreferrer">
                        <nuxt-picture
                            provider="twicpics"
                            src="images/cabeza2.webp"
                            style="position: relative; z-index: 199;"
                            :imgAttrs="{style:'border-radius:30px;'}"
                        />
                    </a>
			    </section>
            </div>
            <div class="column is-one-quarter-desktop is-half-tablet">
                <section data-aos="zoom-in" data-aos-delay="100" style="z-index: 199; position: relative;">
                    <a href="https://www.behance.net/gallery/102872937/Wave" target="_blank" rel="noopener noreferrer">
                        <nuxt-picture
                            provider="twicpics"
                            src="images/cuerpo1.webp"
                            :imgAttrs="{style:'border-radius:30px;'}"
                        />
                    </a>
			    </section>
            </div>
            <div class="column is-one-quarter-desktop is-half-tablet">
                <section data-aos="zoom-in" data-aos-delay="200" style="z-index: 199; position: relative;">
                    <a href="https://www.behance.net/gallery/99504329/Psico" target="_blank" rel="noopener noreferrer">
                        <nuxt-picture
                            provider="twicpics"
                            src="images/psico2.webp"
                            :imgAttrs="{style:'border-radius:30px;'}"
                        />
                    </a>
			    </section>
            </div>
            <div class="column is-one-quarter-desktop is-half-tablet">
                <section data-aos="zoom-in" data-aos-delay="300" style="z-index: 199; position: relative;">
                    <a href="https://www.behance.net/gallery/99563585/Spectre" target="_blank" rel="noopener noreferrer">
                        <nuxt-picture
                            provider="twicpics"
                            src="images/spectre1.webp"
                            :imgAttrs="{style:'border-radius:30px;'}"
                        />
                    </a>
			    </section>
            </div>
		</div>
	</div>
</template>
