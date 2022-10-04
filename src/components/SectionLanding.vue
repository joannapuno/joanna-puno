<script setup lang="ts">
    import { SectionTitle, ContactLinks } from '@/components'
    import { hanging_items as illustration } from '@/assets/svgs/icon-constants'
</script>

<template>
    <section class="section-landing">
        <div class="section-landing--illustration py-32 pl-32">
            <div class="section-peach"></div>
            <div class="illustration" v-html="illustration"></div>
        </div>

        <div class="section-landing--main d-flex flex-column justify-content-center p-32">

            <!-- Content -->
            <article class="section-content">
                <SectionTitle text="Hello~ I'm Joanna" />

                <div class="section-copy mb-36">
                    <p class="mb-16">
                        A front-end developer focused on <span class="text-primary">User Experience</span> and <span class="text-primary">Usability</span> with HTML, SCSS, JavaScript and Vue.js
                    </p>
                    <span class="subtext">...and a duck admirer</span>
                </div>

                <ContactLinks />
            </article>
        </div>
    </section>
</template>