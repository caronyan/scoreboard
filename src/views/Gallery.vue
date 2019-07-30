<template>
    <div>
        <carousel>
            <carousel-item></carousel-item>
        </carousel>
    </div>
</template>

<script>
import Carousel from '@/components/Carousel'
import CarouselItem from '@/components/CarouselItem'

export default {
    name: 'gallery',
    components: {
        Carousel,
        CarouselItem
    }
}
</script>

<style lang='scss'>

</style>
