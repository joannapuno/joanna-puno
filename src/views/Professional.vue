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
    <main class="page">
            <!-- <div class="container"> -->
                <!-- landing -->
               <SectionLanding id="section-landing" />
            
                <!-- About -->
                <SectionAbout id="section-about" />
            
                <!-- Quack it app -->
                <SectionWork id="section-work" />
            
            <!-- </div> -->
        <!-- </div> -->

        <!-- Contact -->
        <SectionContact id="section-contact" />
    </main>


</template>
