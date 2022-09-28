<script setup lang="ts">
    import { Button, SectionTitle } from '@/components'
    import { hanging_items as illustration } from '@/assets/svgs/icon-constants'
</script>

<template>
    <section class="section-landing">
        <div class="section-landing--illustration py-32 pl-32">
            <div class="section--peach"></div>
            <div class="illustration" v-html="illustration"></div>
        </div>

        <div class="section-landing--main d-flex flex-column justify-content-center p-32">

            <!-- Content -->
            <article class="section-content">
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
            </article>

            <!-- Arrow -->
            <!-- <div class="section-links d-flex justify-content-center gap-20 py-24">
                <a href="#section-about">about me</a>
                <a href="#section-work">quack it app</a>
                <a href="#section-contact">find me</a>
                <Button
                    aria-label="Scroll down"
                    class="jds-button-icon" 
                    icon="chevron-down" />
            </div> -->
        </div>
    </section>
</template>