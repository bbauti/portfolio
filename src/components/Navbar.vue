<script setup>
import { Icon } from '@iconify/vue';
import { Button } from '@/components/ui/button'

import Dropdown from '@/components/Dropdown.vue'

import eventBus from '@/lib/event-bus.js';

const openCommand = () => {
  eventBus.emit("openCommand");
}
</script>

<template>
  <nav class='fixed left-[50%] translate-x-[-50%] top-5 flex gap-4 items-center'>
    <section class='flex gap-2'>
      <Button variant="outline" size="icon" class='bg-primary/5 backdrop-blur-sm border border-primary/10 active:scale-[0.99] hover:bg-primary/10 active:bg-primary/15'>
        <a href='https://github.com/bbauti/' class='w-full h-full flex items-center justify-center'>
          <Icon icon="jam:github" class='h-5 w-5 opacity-80' />
        </a>
      </Button>
      <Button variant="outline" size="icon" class='bg-primary/5 backdrop-blur-sm border border-primary/10 active:scale-[0.99] hover:bg-primary/10 active:bg-primary/15'>
        <a href='https://www.linkedin.com/in/bbauti/' class='w-full h-full flex items-center justify-center'>
          <Icon icon="jam:linkedin" class='h-5 w-5 opacity-80' />
        </a>
      </Button>
    </section>
    <button 
      class='bg-primary/5 backdrop-blur-sm border border-primary/10 active:scale-[0.99] hover:bg-primary/10 active:bg-primary/15 transition-all ease-in-out shadow-sm w-60 h-9 rounded-md flex items-center justify-between px-2' 
      @click='openCommand()'
    >
    <div class='flex gap-2 items-center'>
      <Icon icon="mynaui:slash-square" class='h-5 w-5 opacity-50'/>
      Ver comandos
    </div>
    <kbd
          class="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100"
        >
        Ctrl K
        </kbd>
    </button>
    <Dropdown/>
  </nav>
</template>
