<script setup lang="ts">
    import { computed } from 'vue'
    import * as icons from '@/assets/svgs/icon-constants'

    const props = defineProps({
        ariaLabel: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true,
            validator: (value: string) =>  {
                return [
                    'github',
                    'linkedin',
                    'chevron-down',

                    'html',
                    'javascript',
                    'vue',
                    'typescript',
                    'sass',
                    'figma',

                    'seedling',
                    'duck',

                    'react',
                    'accent-line'

                ].includes(value)
            }
        }
    })

    const iconSVG = computed(() => {
        const cleanName = props.icon.replace('-', '_')
        const selectedIcon = icons[cleanName]
        return selectedIcon
    })
    
</script>

<template>
    <span 
        :aria-label="ariaLabel"
        :class="['jds-icon', `jds-icon--${icon}`]"
        v-html="iconSVG">

    </span>
</template>