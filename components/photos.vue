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
                            src="/portfolio/cabeza2.webp"
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
                            src="/portfolio/cuerpo1.webp"
                            :imgAttrs="{style:'border-radius:30px;'}"
                        />
                    </a>
			    </section>
            </div>
            <div class="column is-one-quarter-desktop is-half-tablet">
                <section data-aos="zoom-in" data-aos-delay="200" style="z-index: 199; position: relative;">
                    <a href="https://www.behance.net/gallery/99504329/Psico" target="_blank" rel="noopener noreferrer">
                        <nuxt-picture
                            src="/portfolio/psico2.webp"
                            :imgAttrs="{style:'border-radius:30px;'}"
                        />
                    </a>
			    </section>
            </div>
            <div class="column is-one-quarter-desktop is-half-tablet">
                <section data-aos="zoom-in" data-aos-delay="300" style="z-index: 199; position: relative;">
                    <a href="https://www.behance.net/gallery/99563585/Spectre" target="_blank" rel="noopener noreferrer">
                        <nuxt-picture
                            src="/portfolio/spectre1.webp"
                            :imgAttrs="{style:'border-radius:30px;'}"
                        />
                    </a>
			    </section>
            </div>
		</div>
        <!-- <section
                data-aos="fade-right"
                class="img--right photo_section">
                <div class="columns is-mobile">
                    <div class="column">
                        <nuxt-picture
                            src="/portfolio/cabeza2.webp"
                            sizes="sm:100vw md:50vw lg:400px"
                            :imgAttrs="{class:'img'}"
                        />
                    </div>
                    <div class="column">
                        <p>Hola! Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex obcaecati doloremque magni, assumenda nam nostrum autem incidunt nesciunt quod vero asperiores numquam ducimus harum eos saepe suscipit iusto. Modi?</p>
                    </div>
                </div>
            </section>
            <section
                data-aos="fade-left"
                class="img--left photo_section">
                <div class="columns">
                    <div class="column">
                        <p style="text-align:left;">Hola! Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex obcaecati doloremque magni, assumenda nam nostrum autem incidunt nesciunt quod vero asperiores numquam ducimus harum eos saepe suscipit iusto. Modi?</p>
                    </div>
                    <div class="column">
                        <nuxt-picture
                            src="/portfolio/cuerpo1.webp"
                            sizes="sm:100vw md:50vw lg:400px"
                            :imgAttrs="{class:'img'}"
                        />
                    </div>
                </div>
            </section>
            <section
                data-aos="fade-right"
                class="img--right photo_section">
                <div class="columns is-mobile is-centered is-vcentered">
                    <div class="column">
                        <nuxt-picture
                            src="/portfolio/psico2.webp"
                            sizes="sm:100vw md:50vw lg:400px"
                            :imgAttrs="{class:'img'}"
                        />
                    </div>
                    <div class="column">
                        <p>Hola! Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex obcaecati doloremque magni, assumenda nam nostrum autem incidunt nesciunt quod vero asperiores numquam ducimus harum eos saepe suscipit iusto. Modi?</p>
                    </div>
                </div>
            </section>
            <section
                data-aos="fade-left"
                class="img--left photo_section">
                <div class="columns is-mobile is-centered is-vcentered">
                    <div class="column">
                        <p style="text-align:left;">Hola! Lorem ipsum dolor sit amet consectetur adipisicing elit. A ex obcaecati doloremque magni, assumenda nam nostrum autem incidunt nesciunt quod vero asperiores numquam ducimus harum eos saepe suscipit iusto. Modi?</p>
                    </div>
                    <div class="column">
                        <nuxt-picture
                            src="/portfolio/spectre1.webp"
                            sizes="sm:100vw md:50vw lg:400px"
                            :imgAttrs="{class:'img'}"
                        />
                    </div>
                </div>
            </section> -->
	</div>
</template>
