<script setup lang="ts">
    import { onMounted } from 'vue'
    import { usePageChange } from '@/composables/usePageChange'
    import { 
        SectionLanding,
        SectionAbout,
        SectionWork,
        SectionContact
    } from '@/components'


    const { sectionInView } = usePageChange()
    onMounted(() => {
        sectionInView()
    })
</script>

<template>
    <main class="page">
        <SectionLanding id="section-landing" />
        <SectionAbout id="section-about" />
        <SectionWork id="section-work" />
        <SectionContact id="section-contact" />
    </main>
</template>
