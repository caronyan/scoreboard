<template>
    <div>
        <agile>
            <div class="slide">
                slide 1
            </div>
            <div class="slide">slide 2</div>
            <div class="slide">slide 3</div>    
        </agile>  
    </div>
</template>

<script>
import { VueAgile } from 'vue-agile'

export default {
    name: 'gallery',
    components: {
        agile: VueAgile
    }
}
</script>