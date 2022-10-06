<script setup lang="ts">
    import { SectionTitle, Button, ContactLinks } from '@/components'
</script>

<template>
    <section class="section-contact flex-center">
        <article class="section-content">
            <div class="illustration mb-32">
                <img src="@/assets/portrait.png" alt="illustration portrait">
            </div>
            <SectionTitle text="Find me at" />

            <ContactLinks />

            <div class="flex-center mt-32">
                <Button 
                    aria-label="Click to go back to top" 
                    class="text-primary"
                    href="#section-landing">
                    back to top
                </Button>
            </div>
        </article>
    </section>
</template>