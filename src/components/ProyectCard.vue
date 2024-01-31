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
  <section class="p-1 rounded-xl bg-accent border border-accent overflow-hidden">
    <Card class="not-prose overflow-hidden proyectCard relative border border-primary/20 shadow-md shadow-accent">
      <a :href="`/proyects/${proyect.slug}`" class="absolute top-0 w-full h-full"></a>
      <CardHeader>
        <CardTitle class='mt-0 mb-1'>{{ proyect.data.title }}</CardTitle>
        <CardDescription>{{ proyect.data.description }}</CardDescription>
      </CardHeader>
      <CardContent class="pb-0">
        <slot />
      </CardContent>
    </Card>
  </section>
</template>

<style>
.proyectCard {
  height: 20%;
  background-color: red;
  background: radial-gradient(circle at 50% 0, hsl(var(--accent-foreground) / 0.2), hsl(var(--primary) / 0.01));
  transition: all .2s ease-in-out;
}

.proyectCard:hover {
  background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, .2), rgba(0, 0, 0, 0));
}

.proyectCard:hover img {
  transform: translate3d(0px, -24px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
}

.proyectCard img {
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
}
</style>