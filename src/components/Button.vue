<script setup lang="ts">
    import { ref } from 'vue'
    import { Icon } from '@/components'

    const props = defineProps({
        ariaLabel: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: false
        },
        variant: {
            type: String,
            default: 'default',
            validator: (value: string) => {
                return ['default', 'link'].includes(value)
            }
        },
        href: {
            type: String,
            required: false
        }
    })

    const isLink = ref(props.variant === 'link')
</script>

<template>
    <component 
        :is="isLink ? 'a' : 'button'" 
        :href="href" 
        :title="ariaLabel"
        :class="[
            'jds-button', 
            `jds-button--${variant}`, 
            { 'jds-button-icon': icon }]">

       <Icon 
            v-if="icon"
            :aria-label="ariaLabel" 
            :icon=icon />

        <span>
            <slot></slot>
        </span>
    </component>
</template>