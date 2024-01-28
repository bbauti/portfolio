<script setup>
import { Icon } from '@iconify/vue';
import { onMounted, ref } from 'vue'
import { Button } from '@/components/ui/button'
import { useWindowSize } from '@vueuse/core'

import Dropdown from '@/components/Dropdown.vue'

import Github from '@/components/Icons/Github.vue'

import eventBus from '@/lib/event-bus.js';

const openCommand = () => {
  eventBus.emit("openCommand");
}

let isMobile = ref(false)

onMounted(() => {
  isMobile.value = navigator.maxTouchPoints > 0 ? true : false
})
</script>

<template>
  <nav class='fixed left-[50%] translate-x-[-50%] flex gap-4 items-center' :class="isMobile ? 'bottom-5' : 'top-5'">
    <section class='flex gap-2'>
      <Button variant="outline" size="icon"
        class='bg-background/40 backdrop-blur-sm border border-background/10 active:scale-[0.99] hover:bg-background/20 active:bg-background/10'>
        <a href='https://github.com/bbauti/' class='w-full h-full flex items-center justify-center'>
          <Github size="5" />
        </a>
      </Button>
      <Button variant="outline" size="icon"
        class='bg-background/40 backdrop-blur-sm border border-background/10 active:scale-[0.99] hover:bg-background/20 active:bg-background/10'>
        <a href='https://www.linkedin.com/in/bbauti/' class='w-full h-full flex items-center justify-center'>
          <Icon icon="jam:linkedin" class='h-5 w-5 opacity-80' />
        </a>
      </Button>
    </section>
    <button
      class='w-fit md:w-60 h-9 bg-background/40 backdrop-blur-sm border border-background/10 active:scale-[0.99] hover:bg-background/20 active:bg-background/10 transition-all ease-in-out shadow-sm rounded-md flex items-center justify-between px-2'
      @click='openCommand()'>
      <div class='flex gap-2 items-center whitespace-nowrap'>
        <Icon icon="mynaui:slash-square" class='h-5 w-5 opacity-50' />
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
