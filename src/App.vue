<script setup lang="ts">
import { ref } from 'vue'
import { Section, ContactLink} from '@/components'
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
    <div ref="wrapper" class="wrapper">
      <!-- Hero -->
      <Section class="section-hero show justify-content-center pb-52">
        <div class="round-img fade-in-up">
          <img src="/assets/catoh.png" alt="Illustration of a cat">
        </div>
        <div class="grid-row-start-2">
            <h1 class="heading mb-20">Joanna Puno</h1>
            <p class="sub-heading">
                Front-end focused Software Developer passionate in transforming designs into dynamic, human-centric experiences
            </p>
        </div>
      </Section>
  
      <!-- About -->
      <Section class="section-about">
        <div class="d-flex flex-column flex-center mb-20">
          <h1 class="heading mb-20">about me</h1>
          <p class="sub-heading text-center">
            Trained as a visual designer but fell in love with code &#x1F90D;.
          </p>
          <p class="sub-heading text-center py-8">
            I enjoy going for long walks, filling out my sketchbook, and playing online games on my free time~
          </p>
        </div>
        <div class="d-flex justify-content-center flex-wrap border-top gap-12 py-36">
          <span v-for="skill in skills" class="sub-heading mb-8">{{ skill }}</span>
        </div>

      </Section>
  
      <!-- Get in touch -->
      <Section class="section-contact">
        <div class="round-img fade-in-up justify-self-center align-self-center">
          <img src="/assets/catoh.png" alt="Illustration of a cat">
        </div>
        <div>
            <h1 class="heading text-center mb-24">get in touch~</h1>
            <div class="d-flex justify-content-center gap-16">
              <ContactLink 
                href="https://www.linkedin.com/in/joanna-puno-785402137/" 
                label="Go to my Linkedin profile" 
                icon="fa-brands fa-linkedin-in"
                target="_blank" />
              <ContactLink 
                href="https://github.com/joannapuno" 
                label="Go to my Github profile" 
                icon="fa-brands fa-github"
                target="_blank" />
            </div>
        </div>
      </Section>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.round-img {
  height: 20rem;
  width: 20rem;
  border-radius: 100%;
  overflow: hidden;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
}
</style>