<template>
    <div>
        <ol class="carousel-indicator">
            <li v-for="i in indicators" @click="indicator($index)" v-bind:key="i" v-bind:class="{ active: $index === index }"></li>
        </ol>
        <div class="carousel-container">
            <slot></slot>
        </div>
        <div class="carousel-nav">
            <a href=""></a>
            <a href=""></a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            index: 0,
            indicators: [],
            isSliding: false
        }
    },
    methods: {
        indicatorHandler(index) {
            if (this.isSliding || this.index === index) {
                return false
            }
            this.isSliding = true
            this.index = index
        }
    }
}
</script>

<style>

</style>
