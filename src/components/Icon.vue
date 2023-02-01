<script setup lang="ts">
    defineProps({
        ariaLabel: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        size: {
            type: String,
            required: false,
            default: 'fa-2x'
        }
    })
</script>

<template>
    <span 
        :aria-label="ariaLabel"
        :class="['jds-icon', icon, size]">
    </span>
</template>