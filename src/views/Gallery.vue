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
.agile {
    &__actions {
        margin-top: 20px;
    }

	&__nav-button {
        background: transparent;
		border: none;
		color: #ccc;
		cursor: pointer;
		font-size: 24px;
		transition-duration: .3s;

		&:hover {
            color: #888;
        }
    }
		
	&__dot {
        margin: 0 10px;

		button {
            background-color: #eee;
			border: none;
			border-radius: 50%;
			cursor: pointer;
			display: block;
			height: 10px;
			font-size: 0;
			line-height: 0;
			margin: 0;
			padding: 0;
			transition-duration: .3s;
			width: 10px;
        }
			
		&--current,
		&:hover {
            button {
                background-color: #888;
            }
        }
    }
		
}
	

// Slides styles	
.slide {
    align-items: center;
	color: #fff;
	display: flex;
	height: 300px;
	justify-content: center;

	h3 {
        font-size: 32px;
		font-weight: 300;
    }
}
	
</style>
