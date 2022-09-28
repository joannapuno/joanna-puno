<script setup lang="ts">
    import { SectionTitle, Icon, Button } from '@/components'
</script>

<template>
    <section class="section-about justify-content-center">
        
        <article class="section-content">
            <div class="section--peach flex-center flex-column">
                <Icon aria-label="seedling decoration icon" icon="seedling" class="mb-16" />
                <SectionTitle text="More about me" variant="white" />
    
                <div class="section-copy px-28 mb-40">
                    <p class="mb-16">
                        From designing mockups in Figma to falling in love with coding <span>&#9829;</span>
                    </p>
                    <p>
                        I'm currently a Front-end developer at <a class="text-white" href="https://helcim.com/" title="Helcim website">Helcim~</a>
                    </p>
                    <p>
                        But when I am not working, I love playing online games, drawing, and going for walks!
                    </p>
                </div>
                
                <div class="flex-center">
                    <Button
                        aria-label="Go to hobby page"
                        href="#"
                        variant="link"
                        class="text-white">
                        Check out my hobby~
                    </Button>
                </div>
            </div>
        </article>

        <article class="section-content mt-40">
            <SectionTitle text="My everyday tools" />

            <div class="section-stack d-flex justify-content-center gap-16">
                <Icon 
                    aria-label="icon"
                    icon="github" />
                <Icon 
                    aria-label="icon"
                    icon="github" />
                <Icon 
                    aria-label="icon"
                    icon="github" />
                <Icon 
                    aria-label="icon"
                    icon="github" />
                <Icon 
                    aria-label="icon"
                    icon="github" />
            </div>

        </article>

       
    </section>
</template>