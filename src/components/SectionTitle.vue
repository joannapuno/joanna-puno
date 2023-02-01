<script setup lang="ts">

    defineProps({
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
        <span aria-label="zigzag accent line"
            class="jds-icon jds-icon--accent-line accent decorator line mx-auto"
            aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.4 9.5"><path d="M40.7 8.1L34 1.4l-6.6 6.7-6.7-6.7L14 8.1 7.4 1.4.7 8.1" class="st0"></path></svg>
        </span>
    </div>
</template>