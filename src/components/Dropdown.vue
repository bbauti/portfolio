<script setup>
import { h, ref, computed } from 'vue'

import { Icon } from '@iconify/vue';
import { useWindowSize } from '@vueuse/core'

import UpDown from '@/components/icons/UpDown.vue';
import Check from '@/components/icons/Check.vue';

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

const { width } = useWindowSize()

const languages = [
  { label: 'Spanish', value: 'es' },
  { label: 'English', value: 'en' },
]

const currentLanguage = ref(languages[0])

const setLanguage = (lang) => {
  currentLanguage.value = lang
}

</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button variant="outline" role="combobox"
        class='w-fit pr-7 md:w-28 md:pr-0 font-normal bg-background/40 backdrop-blur-sm border border-background/10 active:scale-[0.99] hover:bg-background/20 active:bg-background/10 flex justify-start gap-2 relative'>
        <p v-if="currentLanguage">
          {{ currentLanguage.label.slice(0, 3) }}<span class='hidden md:inline-block'>{{
            currentLanguage.label.slice(3)}}</span>
        </p>
        <p v-else>Idioma</p>
        <UpDown size="4" classes="ml-2 absolute right-2 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-fit md:w-[200px] p-0">
      <Command>
        <CommandList>
          <CommandGroup>
            <CommandItem v-for="language in languages" :key="language.value" :value="language.label" @select="() => {
                setLanguage(language)
              }">
              <Icon icon="fluent:checkmark-12-regular"
                :class="cn('mr-2 h-4 w-4', language.value === currentLanguage.value ? 'opacity-100 scale-1' : 'opacity-0 scale-0')"
                class="transition-all ease-in-out" />
              {{ width > 768 ? language.label : language.label.substr(0, 3) }}
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>