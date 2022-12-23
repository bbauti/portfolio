<template>
	<div id="photosSection">
		<section style="margin-top:15vh; margin-bottom: 5vh; text-align: center;" data-aos="fade-in" class="subtitulo"
			id="artist">
			{{ $t('art') }}
		</section>
		<div class="columns is-multiline">
            <div class="column is-one-quarter-desktop is-half-tablet">
                <section data-aos="zoom-in" style="z-index: 199; position: relative;">
                    <a href="https://www.behance.net/gallery/103381405/Locked" aria-label="Locked" target="_blank" rel="noopener noreferrer">
                        <nuxt-picture
                            provider="gumlet"
                            src="/images/cabeza2.webp"
                            loading="lazy"
                            style="position: relative; z-index: 199;"
                            :imgAttrs="{style:'border-radius:30px;', alt:'Locked'}"
                            :modifiers="{ format: 'auto', compress: 'true' }"
                        />
                    </a>
			    </section>
            </div>
            <div class="column is-one-quarter-desktop is-half-tablet">
                <section data-aos="zoom-in" data-aos-delay="100" style="z-index: 199; position: relative;">
                    <a href="https://www.behance.net/gallery/102872937/Wave" aria-label="Wave" target="_blank" rel="noopener noreferrer">
                        <nuxt-picture
                            provider="gumlet"
                            src="/images/cuerpo1.webp"
                            loading="lazy"
                            :imgAttrs="{style:'border-radius:30px;', alt:'Wave'}"
                            :modifiers="{ format: 'auto', compress: 'true' }"
                        />
                    </a>
			    </section>
            </div>
            <div class="column is-one-quarter-desktop is-half-tablet">
                <section data-aos="zoom-in" data-aos-delay="200" style="z-index: 199; position: relative;">
                    <a href="https://www.behance.net/gallery/99504329/Psico" aria-label="Psico" target="_blank" rel="noopener noreferrer">
                        <nuxt-picture
                            provider="gumlet"
                            src="/images/psico2.webp"
                            loading="lazy"
                            :imgAttrs="{style:'border-radius:30px;', alt:'Psico'}"
                            :modifiers="{ format: 'auto', compress: 'true' }"
                        />
                    </a>
			    </section>
            </div>
            <div class="column is-one-quarter-desktop is-half-tablet">
                <section data-aos="zoom-in" data-aos-delay="300" style="z-index: 199; position: relative;">
                    <a href="https://www.behance.net/gallery/99563585/Spectre" aria-label="Spectre" target="_blank" rel="noopener noreferrer">
                        <nuxt-picture
                            provider="gumlet"
                            src="/images/spectre1.webp"
                            loading="lazy"
                            :imgAttrs="{style:'border-radius:30px;', alt:'Spectre'}"
                            :modifiers="{ format: 'auto', compress: 'true' }"
                        />
                    </a>
			    </section>
            </div>
		</div>
	</div>
</template>
