<script setup lang="ts">
    import { SectionTitle, Icon } from '@/components'
</script>

<template>
    <section class="section-contact flex-center px-32">
        <article class="section-content">
            <Icon 
                aria-label="seedling decoration icon" 
                icon="fa-solid fa-chess"
                size="fa-3x" 
                class="mb-16" />
            <SectionTitle text="Check out my playground!" />
            <div class="section-copy px-16 mb-40">
                <p>A little sandbox where I try out new things!</p>
                <p>My goal is to create my own design system that may power up my future projects</p>
                <p>This is still a WIP, but feel free to <a href="https://sweet-duckling.vercel.app/" title="Joanna playground page" target="_blank">look around!</a> <span>&#9829;</span></p>
                <p class="mt-32">
                    The current tech stack in this playground: <span class="text-bold">ReactJs + Typescript + Vite</span>
                </p>
            </div>
        </article>
    </section>
</template>