<template>
	<!-- <nav class="navbar" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<nuxt-link class="navbar-item delete_style" to="/">
				<p class="brillo">BBAUTI</p>
			</nuxt-link>
		</div>

		<div id="navbarBasicExample" class="navbar-menu">

			<div class="navbar-end">
				<nuxt-link class="navbar-item delete_style" to="/about">
					<p class="brillo">Acerca De</p>
				</nuxt-link>
        <nuxt-link class="navbar-item delete_style" to="/programming">
					<p class="brillo">Programacion</p>
				</nuxt-link>
        <nuxt-link class="navbar-item delete_style" to="/design">
					<p class="brillo">Arte</p>
				</nuxt-link>
			</div>
		</div>
	</nav> -->


    <b-navbar fixed-top style="z-index:200;">
        <template #brand>
            <b-navbar-item v-scroll-to="{
                        el: '#header',
                        duration: 500,
                        easing: 'ease-in-out'
                    }">
                <p class="brillo">BBAUTI</p>
            </b-navbar-item>
        </template>
        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <b-navbar-item v-scroll-to="{
                        el: '#developer',
                        duration: 500,
                        easing: 'ease-in-out'
                    }">
                        Programacion
                    </b-navbar-item>
                    <b-navbar-item v-scroll-to="{
                        el: '#artist',
                        duration: 500,
                        easing: 'ease-in-out'
                    }">
                        Arte
                    </b-navbar-item>
                    <b-navbar-item v-scroll-to="{
                        el: '#contact',
                        duration: 500,
                        easing: 'ease-in-out'
                    }">
                        Contactame
                    </b-navbar-item>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>
