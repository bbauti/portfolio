<script setup>
import { ref } from 'vue'
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

import RightArrow from '@/components/icons/RightArrow.vue'

const { proyect } = defineProps({ proyect: Object });

const isHover = ref(false);

const handleMouse = (type) => {
  isHover.value = type === 'over' ? true : false;
};
</script>

<template>
  <section class="p-1 rounded-xl bg-secondary/60 border border-accent overflow-hidden">
    <Card class="not-prose overflow-hidden proyectCard relative border border-primary/20 shadow-md shadow-accent">
      <a @mouseover="handleMouse('over')" @mouseleave="handleMouse('leave')" :href="`/proyects/${proyect.slug}`"
        class="absolute top-0 w-full h-full"></a>
      <CardHeader>
        <CardTitle class='mt-0 mb-1'>{{ proyect.data.title }}</CardTitle>
        <CardDescription>{{ proyect.data.description }}</CardDescription>
        <p class="hiddenText opacity-0 absolute top-6 right-5 pointer-events-none flex gap-2 items-center text-sm">
          Leer mas
          <RightArrow />
        </p>
      </CardHeader>
      <CardContent class="content">
        <slot />
        <div class="blob"></div>
        <div class="blob2"></div>
      </CardContent>
    </Card>
  </section>
</template>

<style>
.hiddenText,
.hiddenText>svg {
  transition: all 0.3s ease-in-out;
}

.proyectCard {
  transition: all 0.3s ease-in-out;
  background: linear-gradient(18deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 75%, v-bind(`${proyect.data.color}30`) 100%);
  background-position-y: -200px;
  background-repeat: no-repeat;
}

.proyectCard:hover {
  transition: all 0.3s ease-in-out;
  background-position-y: 0;
}

.proyectCard:hover .hiddenText {
  opacity: 1;
  transform: translate3d(0px, -2px, 0px);
}

.proyectCard:hover .hiddenText>svg {
  animation: rotateSvg 0.3s ease-in-out both;
}

.proyectCard:not(:hover) .hiddenText>svg {
  animation: rotateSvgReverse 0.3s ease-in-out both;
}

@keyframes rotateSvg {
  0% {
    transform: rotate(0deg);
  }

  70% {
    transform: rotate(-55deg);
  }

  100% {
    transform: rotate(-45deg);
  }
}

@keyframes rotateSvgReverse {
  0% {
    transform: rotate(-45deg);
  }

  30% {
    transform: rotate(-55deg);
  }

  100% {
    transform: rotate(0deg);
  }
}
</style>