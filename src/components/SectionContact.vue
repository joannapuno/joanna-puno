<script setup lang="ts">
    import { SectionTitle, Button } from '@/components'
</script>

<template>
    <section class="section-contact flex-center">
        <article class="section-content">
            <div class="site-illustration mb-32">

            </div>
            <SectionTitle text="Find me at" />

            <div class="section-stack d-flex justify-content-center gap-16 mb-40">
                <Button
                    aria-label="Go to my Github profile"
                    class="jds-button-icon" 
                    icon="github"
                    variant="link"
                    href="#"
                    target="_blank" />
                <Button 
                    aria-label="Go to my Linkedin profile"
                    class="jds-button-icon" 
                    icon="linkedin"
                    variant="link"
                    href="#"
                    target="_blank" />
            </div>

            <div class="flex-center">
                <Button aria-label="Click to go back to top" class="text-primary">
                    back to top
                </Button>
            </div>
        </article>
    </section>
</template>