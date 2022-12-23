<template>
    <div class="header" id="header">

        <h1 class="titulo">
            {{ $t('welcome') }} <span class="borde">Bautista Igarzabal</span>
        </h1>
        <h1 class="subtitulo">
            {{ $t('a') }}
            <a v-scroll-to="{
                container: 'html',
                el: '#developer',
                duration: 500,
                easing: 'ease-in-out',
                offset: -100
            }" class="developer">{{ $t('developer') }}</a>
            {{ $t('and') }}
            <a v-scroll-to="{
                container: 'html',
                el: '#artist',
                duration: 500,
                easing: 'ease-in-out',
                offset: -100
            }" class="artist">{{ $t('artist') }}</a>
        </h1>
        <div id="stackSection">
            <h1 class="subtitulo" style="margin-bottom: 1vw">tech stack</h1>
            <div class="techContainer">
                <Icon icon="vscode-icons:file-type-vue" class="icons" />
                <Icon icon="vscode-icons:file-type-nuxt" class="icons"  />
                <Icon icon="vscode-icons:file-type-node" class="icons"  />
                <Icon icon="vscode-icons:file-type-python" class="icons"  />
                <Icon icon="vscode-icons:file-type-html" class="icons"  />
                <Icon icon="vscode-icons:file-type-css" class="icons"  />
                <Icon icon="logos:javascript" class="icons"  />
                <Icon icon="vscode-icons:file-type-scss" class="icons"  />
                <Icon icon="logos:bulma" class="icons"  />
                <Icon icon="logos:postgresql" class="icons"  />
                <Icon icon="logos:docker-icon" class="icons"  />
                <Icon icon="logos:bash-icon" class="icons"  />
                <Icon icon="logos:apache" class="icons"  />
            </div>
        </div>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue2';
</script>
