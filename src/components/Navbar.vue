<script setup>
import { Button } from '@/components/ui/button'

import Dropdown from '@/components/Dropdown.vue'

import Github from '@/components/icons/Github.vue'
import Linkedin from '@/components/icons/Linkedin.vue'
import Command from '@/components/icons/Command.vue'

import eventBus from '@/lib/event-bus.js';

const openCommand = () => {
  eventBus.emit("openCommand");
}
</script>

<template>
  <nav class='fixed left-[50%] translate-x-[-50%] flex gap-4 items-center'>
    <section class='flex gap-2'>
      <Button variant="outline" size="icon"
        class='bg-background/40 backdrop-blur-sm border border-background/10 active:scale-[0.99] hover:bg-background/20 active:bg-background/10'>
        <a href='https://github.com/bbauti/' class='w-full h-full flex items-center justify-center'>
          <Github size="5" classes="opacity-80" />
        </a>
      </Button>
      <Button variant="outline" size="icon"
        class='bg-background/40 backdrop-blur-sm border border-background/10 active:scale-[0.99] hover:bg-background/20 active:bg-background/10'>
        <a href='https://www.linkedin.com/in/bbauti/' class='w-full h-full flex items-center justify-center'>
          <Linkedin size="5" classes="opacity-80" />
        </a>
      </Button>
    </section>
    <button
      class='w-fit md:w-60 h-9 bg-background/40 backdrop-blur-sm border border-background/10 active:scale-[0.99] hover:bg-background/20 active:bg-background/10 transition-all ease-in-out shadow-sm rounded-md flex items-center justify-between px-2'
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