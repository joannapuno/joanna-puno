<script setup lang="ts">
    import { Button } from '@/components'
</script>

<template>
    <div class="section-contact-links d-flex justify-content-center gap-16">
        <Button
            aria-label="Go to my Github profile"
            class="jds-button-icon" 
            icon="github"
            variant="link"
            href="https://github.com/joannapuno"
            target="_blank" />
        <Button 
            aria-label="Go to my Linkedin profile"
            class="jds-button-icon" 
            icon="linkedin"
            variant="link"
            href="https://www.linkedin.com/in/joanna-puno-785402137/"
            target="_blank" />
    </div>
</template>