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


    <b-navbar fixed-top>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <p class="brillo">BBAUTI</p>
            </b-navbar-item>
        </template>
        <!-- <template #start>
            <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-item href="#">
                Documentation
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template> -->

        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <b-navbar-item tag="router-link" :to="{ path: '/about' }">
                        Acerca De
                    </b-navbar-item>
                    <b-navbar-item tag="router-link" :to="{ path: '/programming' }">
                        Programacion
                    </b-navbar-item>
                    <b-navbar-item tag="router-link" :to="{ path: '/design' }">
                        Arte
                    </b-navbar-item>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>
