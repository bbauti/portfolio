<script setup>
import { Button } from '@/components/ui/button'

import Dropdown from '@/components/Dropdown.vue'

import ReadCv from '@/components/icons/ReadCv.vue'
import Linkedin from '@/components/icons/Linkedin.vue'
import Command from '@/components/icons/Command.vue'
import LeftArrow from '@/components/icons/LeftArrow.vue'

import eventBus from '@/lib/event-bus.js';

const { isProyect } = defineProps({
  isProyect: {
    type: Boolean,
    default: false,
  },
});

const openCommand = () => {
  eventBus.emit("openCommand");
};
</script>

<template>
  <nav class='fixed left-[50%] translate-x-[-50%] z-50 flex gap-4 items-center print:hidden'>
    <section v-if="isProyect" class='flex gap-2'>
      <Button variant="outline" class='btn-nav !px-2'>
        <a href='/' class='w-full h-full flex items-center justify-between gap-[0.6rem]'>
          <LeftArrow />
          <p class="font-normal">Volver</p>
        </a>
      </Button>
    </section>
    <section v-else class='flex gap-2'>
      <Button variant="outline" size="icon" class='btn-nav'>
        <a href='https://read.cv/bbauti' class='w-full h-full flex items-center justify-center'>
          <ReadCv size="5" classes="opacity-80" />
        </a>
      </Button>
      <Button variant="outline" size="icon" class='btn-nav'>
        <a href='https://www.linkedin.com/in/bbauti/' class='w-full h-full flex items-center justify-center'>
          <Linkedin size="5" classes="opacity-80" />
        </a>
      </Button>
    </section>
    <button
      class='w-fit md:w-60 h-9 btn-nav transition-all ease-in-out shadow-sm rounded-md flex items-center justify-between px-2'
      @click='openCommand()'>
      <div class='flex gap-2 items-center whitespace-nowrap'>
        <Command size="5" classes="opacity-80" />
        Ver comandos
      </div>
      <kbd
        class="hidden md:inline-flex pointer-events-none h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
        Ctrl K
      </kbd>
    </button>
    <Dropdown />
  </nav>
</template>

<style scoped>
nav {
  top: 1.25rem;
  bottom: unset;
}

@media (pointer: coarse) {
  nav {
    top: unset;
    bottom: 1.25rem;
  }
}
</style>