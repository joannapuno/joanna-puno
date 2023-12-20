<script setup lang="ts">
import { ref, onMounted } from 'vue'

const target = ref<HTMLElement | null>(null)
const observer = new IntersectionObserver(([entry]) => {
  const content = target.value
  if(entry.isIntersecting) {
    content?.classList.add('show')
  } else {
    content?.classList.remove('show')
  }
}, {
    root: null,
    threshold: [0.50]
})

onMounted(() => {
    if(!target.value) return
    observer.observe(target.value)
})
</script>

<template>
  <div ref="target" class="section px-32 py-16">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.section {
  height: 100vh;
  opacity: 0;
  transform: translate(0, 10vh);
  transition: all 0.2s ease-in;

  &.show {
    opacity: 1;
    transform: translate(0,0);
  }
}
</style>