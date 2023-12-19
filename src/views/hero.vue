<script lang="ts" setup>
    const skills = [
        'Html',
        'CSS & SCSS',
        'Typescript',
        'VueJS',
        'ReactJS',
        'Pinia',
        'Golang',
        'Node',
        'Jest',
        'Figma',
        'Storybook'
    ]
</script>
<template>
    <!-- Hero -->
    <div class="section-hero h-100 px-32 py-16">
        <div class="hero-img"></div>
        <div>
            <h1 class="heading mb-20">Joanna Puno</h1>
            <p class="sub-heading">
                a front-end focused Software Developer passionate in transforming designs into dynamic, human-centric experiences
            </p>
        </div>
    </div>

    <!-- About -->
    <div class="section-about h-100 px-32 py-16">
        <h1 class="heading mb-20">about me</h1>
        <p class="sub-heading">
            trained as a visual designer but fell in love with code &#128154;.
        </p>
        <p class="sub-heading">I love to doodle, play games, and go for walks~</p>
    </div>

    <!-- Skills -->
    <div class="section-skills d-flex flex-column align-items-center h-100 px-32 py-16">
        <span v-for="skill in skills" class="sub-heading">{{ skill }}</span>
    </div>

    <!-- Get in touch -->
    <div class="section-contact h-100 px-32 py-16">
        <div class="hero-img"></div>
        <div>
            <h1 class="heading text-center mb-20">get in touch~</h1>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .section-hero {
        display: grid;
        grid-template-rows: 1fr 1fr;
    }

    //WIP
    // .hero-img {
    //    background: url("https://images.unsplash.com/photo-1663183539627-adbe2c8ef43d?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjM5Mzk5ODc&ixlib=rb-1.2.1&q=80");
    //     background-size: cover;
    //     background-position: center;
    //     background-attachment: fixed; /* Parallax Effect for DIV 3 */
    //     min-height: 600px;
    // }
</style>