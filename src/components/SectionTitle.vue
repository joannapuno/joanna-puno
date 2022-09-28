<script setup lang="ts">
    import { Icon } from '@/components'

    const props = defineProps({
        text: {
            type: String,
            default: ''
        },
        variant: {
            type: String,
            default: 'primary',
            validator: (value: string) => {
                return [ 'primary', 'white'].includes(value)
            }
        }
    })
</script>

<template>
    <div class="section-title mb-16">
        <h1 :class="`text-${variant}`">{{ text }}</h1>
        <Icon aria-label="accent decorator line" icon="accent-line" />
    </div>
</template>