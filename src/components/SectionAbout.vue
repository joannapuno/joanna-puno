<script setup lang="ts">
    import { SectionTitle, Icon, Button } from '@/components'
</script>

<template>
    <section class="section-about justify-content-center">
        
        <article class="section-content">
            <div class="section-peach flex-center flex-column">
                <Icon 
                    aria-label="seedling decoration icon" 
                    icon="seedling" 
                    class="mb-16" />
                <SectionTitle text="More about me" variant="white" />
    
                <div class="section-copy px-32 mb-40">
                    <p>
                        From designing mockups in Figma to falling in love with coding <span>&#9829;</span>
                    </p>
                    <p>
                        I'm currently a Front-end developer at <a class="text-white" href="https://helcim.com/" title="Helcim website" target="_blank">Helcim~</a>
                    </p>
                    <p>
                        But when I am not working, I'm usually playing online games, filling out my sketchbook, or going for walks!
                    </p>
                </div>
                
                <!-- TODO: -->
                <!-- <div class="flex-center">
                    <Button
                        aria-label="Go to hobby page"
                        href="#"
                        variant="link"
                        class="text-white">
                        Check out my hobby~
                    </Button>
                </div> -->
            </div>
        </article>
    </section>
</template>