<template>
    <b-navbar fixed-top :class="{change_color: scrollPosition > 50}" :mobile-burger="false" centered>
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
                        easing: 'ease-in-out',
                        offset: -100
                    }">
                        Programacion
                    </b-navbar-item>
                    <b-navbar-item v-scroll-to="{
                        el: '#artist',
                        duration: 500,
                        easing: 'ease-in-out',
                        offset: -100
                    }">
                        Arte
                    </b-navbar-item>
                    <b-navbar-item v-scroll-to="{
                        el: '#contact',
                        duration: 500,
                        easing: 'ease-in-out',
                        offset: -100
                    }">
                        Contactame
                    </b-navbar-item>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
    data() {
        return {
        scrollPosition:null,
        };
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    },
    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY
        }
    }
}
</script>
