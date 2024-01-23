<script setup lang="ts">
import { h, ref } from 'vue'

import { Icon } from '@iconify/vue';


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
      <Button 
        variant="outline" 
        role="combobox" 
        class='w-28 font-normal bg-primary/5 backdrop-blur-sm border border-primary/10 active:scale-[0.99] hover:bg-primary/10 active:bg-primary/15 flex justify-start gap-2 relative'
      >
        {{ currentLanguage ? languages.find((lang) => lang.value === currentLanguage.value)?.label : 'Idioma' }}
        <Icon icon="fluent:chevron-up-down-16-regular" class='ml-2 h-4 w-4 absolute right-2 shrink-0 opacity-50'/>
      </Button>
    </PopoverTrigger>
    <PopoverContent class="w-[200px] p-0">
      <Command>
        <CommandList>
          <CommandGroup>
            <CommandItem
              v-for="language in languages"
              :key="language.value"
              :value="language.label"
              @select="() => {
                setLanguage(language)
              }"
            >
              <Icon icon="fluent:checkmark-12-regular" :class="cn('mr-2 h-4 w-4', language.value === currentLanguage.value ? 'opacity-100' : 'opacity-0')"/>
              {{ language.label }}
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </PopoverContent>
  </Popover>
</template>