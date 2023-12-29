<script setup lang="ts">
    defineProps<{
        href: string
        label: string
        icon: string
    }>()
</script>
<template>
    <a :href="href" :title="label" class="contact-link flex-center">
     <span :class="icon"></span>
    </a>
</template>

<style lang="scss" scoped>
.contact-link {
    padding: 0.8rem;
    height: 5rem;
    width: 5rem;
    background-color: #FFFF;
    color: #000;
    fill: #000;
    border-radius: 100%;

    svg {
        height: 100%;
        width: 100%;
        font-size: 1em;
    }
}
</style>