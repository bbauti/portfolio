<template>
    <b-navbar fixed-top :class="{change_color: scrollPosition > 50}" :mobile-burger="false" centered>
        <template #brand>
            <b-navbar-item v-scroll-to="{
                container: 'html',
                el: '#header',
                duration: 500,
                easing: 'ease-in-out'

            }">
                <p class="brillo">BBAUTI</p>
            </b-navbar-item>
            <buttonNav />
        </template>
        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <b-navbar-item v-scroll-to="{
                        container: 'html',
                        el: '#developer',
                        duration: 500,
                        easing: 'ease-in-out',
                        offset: -100
                    }">
                        {{ $t('programming') }}
                    </b-navbar-item>
                    <b-navbar-item v-scroll-to="{
                        container: 'html',
                        el: '#artist',
                        duration: 500,
                        easing: 'ease-in-out',

                        offset: -100
                    }">
                        {{ $t('design') }}
                    </b-navbar-item>
                    <b-navbar-item v-scroll-to="{
                        container: 'html',
                        el: '#contact',
                        duration: 500,
                        easing: 'ease-in-out',
                        offset: -100
                    }">
                        {{ $t('contact') }}
                    </b-navbar-item>
                    <nuxt-link
                    v-if="$i18n.locale !== 'en'"
                    :to="switchLocalePath('en')"
                    >
                    <span style="color: white;">E</span><span style="color: #3c3b6e;">N</span><span style="color: #b22234;">G</span>
                    </nuxt-link>

                    <nuxt-link
                    v-if="$i18n.locale !== 'es'"
                    :to="switchLocalePath('es')"
                    >
                    <span style="color: #75aadb;">E</span><span style="color: #ffffff;">S</span><span style="color: #75aadb;">P</span>
                    </nuxt-link>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'
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
    },
    computed: {
        fas () {
            return fas // NOT RECOMMENDED
        },
    },
}
</script>
