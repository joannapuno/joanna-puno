<script setup lang="ts">
    import { SectionTitle, Icon, Button} from '@/components'
</script>

<template>
    <section class="section-work">
        <div class="section--peach">
            <div class="section-content">
                <Icon aria-label="seedling decoration icon" icon="duck" class="mb-16" />
                <SectionTitle text="My playground" variant="white" />

                <div class="section-copy px-28 mb-36">
                    <p class="mb-16">
                        A growing social media web app where I can test out JS frameworks, experiment with CSS/SCSS, and just try new things~
                    </p>
                </div>
                
                <div class="flex-center gap-16 p-36">
                   <Button 
                    aria-label="github project link"
                    variant="link"
                    icon="github"
                    href="#" />

                   <Button 
                    aria-label="view project live"
                    variant="link"
                    icon="github"
                    href="#" />
                </div>
            </div>
        </div>
        <div class="section--confetti">
            <div class="section-content">
                <SectionTitle text="Quack it" />

                <div class="quack-it-container">
                    <!-- image here -->
                </div>
                <div class="flex-center gap-16 p-36">
                   <Icon 
                    aria-label="github project link"
                    variant="link"
                    icon="github" />
                   <Icon 
                    aria-label="view project live"
                    variant="link"
                    icon="github" />
                   <Icon 
                    aria-label="view project live"
                    variant="link"
                    icon="github" />
                   <Icon 
                    aria-label="view project live"
                    variant="link"
                    icon="github" />
                   <Icon 
                    aria-label="view project live"
                    variant="link"
                    icon="github" />
                </div>
            </div>
        </div>
    </section>
</template>