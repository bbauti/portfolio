<script setup>
import VueMarkdown from '@crazydos/vue-markdown'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const { proyect } = defineProps({ proyect: Object })

</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle class='mt-0'>{{ proyect.data.title }}</CardTitle>
      <CardDescription>{{ proyect.data.description }}</CardDescription>
    </CardHeader>
    <CardContent>
      <VueMarkdown :markdown="proyect.body" />
    </CardContent>
    <CardFooter>
      <Button as-child>
        <a :href="``">
          Leer mas
        </a>
      </Button>
    </CardFooter>
  </Card>
</template>