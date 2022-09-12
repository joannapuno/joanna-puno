<script setup lang="ts">
    import { SectionTitle, Button } from '@/components'
</script>

<template>
    <section class="section-contact flex-center">
        <div class="section--confetti vh-100">
            <div class="section-content">
                <div class="site-illustration mb-32">

                </div>
                <SectionTitle text="Find me at" />

                <div class="section-stack d-flex justify-content-center gap-16">
                    <Button
                        aria-label="icon"
                        icon="github"
                        href="#"
                        variant="link" />
                    <Button 
                        aria-label="icon"
                        icon="github"
                        href="#"
                        variant="link" />
                </div>

                <div class="flex-center px-32 py-48">
                    <Button aria-label="Click to go back to top" class="text-primary">
                        back to top
                    </Button>
                </div>
            </div>

        </div>
    </section>
</template>