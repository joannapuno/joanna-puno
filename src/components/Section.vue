<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const target = ref<Element | null>()
const observer = new IntersectionObserver(([entry]) => {
  const content = target.value
  content?.classList.toggle('show', entry.isIntersecting)
}, {
    root: null,
    threshold: [0.50]
})

onMounted(() => {
  if(!target.value) return
  observer.observe(target.value)
})

onUnmounted(() => {
  if(!target.value) return
  observer.unobserve(target.value)
})
</script>

<template>
  <div ref="target" class="section px-64 py-16">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.section {
  height: 100vh;
  opacity: 0;
  transition: all 0.2s ease-in;
  &:not(:first-child) {
    transform: translate(0, 5rem);
  }
  &.show {
    opacity: 1;
    transform: translate(0,0);
  }
}
</style>