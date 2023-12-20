<script setup lang="ts">
import { ref } from 'vue'
import { Section } from '@/components'
const skills = ref<string[]>([
    'Html',
    'CSS & SCSS',
    'Typescript',
    'VueJS',
    'ReactJS',
    'Pinia',
    'Golang',
    'Node',
    'Jest',
    'Figma',
    'Storybook'
])
</script> 

<template>
  <main>
    <!-- Hero -->
    <Section class="section-hero">
      <div class="hero-img"></div>
      <div>
          <h1 class="heading mb-20">Joanna Puno</h1>
          <p class="sub-heading">
              a front-end focused Software Developer passionate in transforming designs into dynamic, human-centric experiences
          </p>
      </div>
    </Section>

     <!-- About -->
    <Section class="section-about">
        <h1 class="heading mb-20">about me</h1>
        <p class="sub-heading">
            trained as a visual designer but fell in love with code &#128154;.
        </p>
        <p class="sub-heading">I love to doodle, play games, and go for walks~</p>
    </Section>

    <!-- Skills -->
    <Section class="section-skills d-flex flex-column align-items-center">
        <span v-for="skill in skills" class="sub-heading">{{ skill }}</span>
    </Section>

    <!-- Get in touch -->
    <Section class="section-contact">
        <div class="hero-img"></div>
        <div>
            <h1 class="heading text-center mb-20">get in touch~</h1>
        </div>
    </Section>
  </main>
</template>

<style lang="scss" scoped>
.section-hero,
.section-contact {
    display: grid;
    grid-template-rows: 1fr 1fr;
}
</style>