<template>
    <section class="section-landing">
        <div class="section--peach"></div>

        <div class="section--confetti d-flex flex-column">

            <!-- Content -->
            <div class="section-content">
                <SectionTitle text="Hello~ I'm Joanna" />

                <div class="section-copy mb-36">
                    <p class="mb-16">
                        A front-end developer focused on User Experience and Usability with JS and VUE
                    </p>
                    <span class="subtext">...and a duck enthusiast</span>
                </div>

                <!-- Contact links -->
                <div class="section-contact-links d-flex justify-content-center gap-16">
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

            </div>

            <!-- Arrow -->
            <div class="d-flex justify-content-center py-24">
                <Button
                    aria-label="Scroll down"
                    class="jds-button-icon" 
                    icon="chevron-down" />
            </div>
        </div>

    </section>
</template>

<script setup lang="ts">
    import { Button, SectionTitle } from '@/components'

</script>