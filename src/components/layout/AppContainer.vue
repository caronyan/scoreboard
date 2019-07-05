<template>
    <section class="main-container" :style="[hideSidebar]">
        <div class="main-content">
            <transition 
                mode="out-in"
                enter-active-class="fadeIn"
                leave-active-class="fadeOut"
                appear>
                <router-view></router-view>
            </transition>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            sidebar: 'sidebar'
        }),
        hideSidebar() {
            return this.sidebar.opened ? null : { 'margin-left': 0 }
        }
    }    
}
</script>

<style lang="scss">
.main-container {
    padding-top: 50px;
    margin-left: 180px;
    transform: translate3d(0, 0, 0);
}

.main-content {
    padding: 20px;
}
</style>
