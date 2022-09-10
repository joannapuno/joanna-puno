<script setup lang="ts">
    import { onMounted } from 'vue'
    import { 
        SectionLanding,
        SectionAbout,
        SectionWork,
        SectionContact
    } from '@/components'

    import { usePageChange } from '@/composables/usePageChange'

    const { sectionInView } = usePageChange()

    onMounted(() => {
        sectionInView()
    })
</script>

<template>
    <!-- landing -->
   <SectionLanding id="section-landing" />

    <!-- About -->
    <SectionAbout id="section-about" />

    <!-- Quack it app -->
    <SectionWork id="section-work" />

    <!-- Contact -->
    <SectionContact id="section-contact" />
</template>
