<script setup>
import { ref, watch } from 'vue'
import { useMagicKeys } from '@vueuse/core'
import { Icon } from '@iconify/vue';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'

import eventBus from '@/lib/event-bus.js';
import { changeTheme } from '@/lib/helpers.js';

const { proyects } = defineProps(['proyects'])

const open = ref(false)

const { Ctrl_K } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.key === 'k' && e.ctrlKey)
      e.preventDefault()
  },
})

const { Escape } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.key === 'Escape') {
      e.preventDefault()
    }
  },
})

watch([Ctrl_K], (v) => {
  if (v[0] || v[1])
    handleOpenChange()
})

watch([Escape], (v) => {
  if (v[0] || v[1])
    open.value = false
})

function handleOpenChange() {
  open.value = !open.value
}

const redirect = (url) => {
  window.location.href = url
}

eventBus.on("openCommand", () => {
  open.value = true
});

const test = () => {
  console.log('focus')
}
</script>

<template>
  <section>
    <div 
      :data-state="open ? 'open' : 'closed'" 
      class="fixed inset-0 z-50 bg-background/80 backdrop-blur-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" 
      style="pointer-events: auto;" 
      :class="{'!pointer-events-none': !open}"
      data-aria-hidden="true" 
      aria-hidden="true"
      v-if="open"
    ></div>
    <CommandDialog v-model:open="open">
      <CommandInput placeholder="Busca un proyecto..." />
      <CommandList>
        <CommandEmpty>No se encontraron resultados.</CommandEmpty>
        <CommandGroup heading="Paginas">
          <CommandItem class='gap-2 cursor-pointer active:scale-[0.99] transition-all ease-in-out' value="inicio" @click="redirect('/')">
            <Icon icon="fluent:home-12-filled" class='h-4 w-4' />
            Inicio
          </CommandItem>
          <CommandItem class='gap-2 cursor-pointer active:scale-[0.99] transition-all ease-in-out' value="sobre mi" @click="redirect('/')">
            <Icon icon="fluent:person-12-filled" class='h-4 w-4' />
            Sobre mi
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Proyectos">
          <CommandItem class='gap-2 cursor-pointer active:scale-[0.99] transition-all ease-in-out' v-for="proyect in proyects" :value="proyect.slug" @click="redirect(`/proyects/${proyect.slug}/`)">
            <Icon icon='fluent:arrow-turn-down-right-20-filled' class='h-[1.2rem] w-[1.2rem]'/>
            {{ proyect.data.title }}
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Ajustes">
          <CommandItem class='gap-2 cursor-pointer active:scale-[0.99] transition-all ease-in-out' value="tema oscuro" @click="changeTheme('dark')">
            <Icon icon='fluent:weather-moon-16-filled' class='h-5 w-5'/>
            Tema oscuro
          </CommandItem>
          <CommandItem class='gap-2 cursor-pointer active:scale-[0.99] transition-all ease-in-out' value="tema claro" @click="changeTheme('light')">
            <Icon icon='fluent:weather-sunny-16-filled' class='h-5 w-5'/>
            Tema claro
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  </section>
</template>