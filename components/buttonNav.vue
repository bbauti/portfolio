<script>
import { defineComponent, useContext, watch } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    // Context.
    const context = useContext()

    // Viewport module.
    const viewport = context.$viewport

    // Watch breakpoint for updates.
    watch(() => viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
      console.log('Breakpoint updated:', oldBreakpoint, '->', newBreakpoint)
    })
  },
});
</script>

<template>
    <div id="buttons" class="langbuttons" v-if="$viewport.isLessThan('desktop')">

        <nuxt-link
            v-if="$i18n.locale !== 'en'"
            :to="switchLocalePath('en')"
            id="lang"
            class="noSelect"
        >
            <span style="color: white;">E</span><span style="color: #3c3b6e;">N</span><span style="color: #b22234;">G</span>
        </nuxt-link>

        <nuxt-link
            v-if="$i18n.locale !== 'es'"
            :to="switchLocalePath('es')"
            id="lang"
            class="noSelect"
        >
            <span style="color: #75aadb;">E</span><span style="color: #ffffff;">S</span><span style="color: #75aadb;">P</span>
        </nuxt-link>
    </div>
</template>
