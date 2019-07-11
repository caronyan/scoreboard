<template>
    <aside class="sidebar">
        <p>
            LOGO
        </p>
        <ul class="menu">
            <li v-for="item in menus" v-bind:key="item.id">
                <router-link :to="item.path" :exact="true">
                    <span>
                        <i>icon</i>
                        {{ item.name }}
                    </span>
                </router-link>
            </li>     
        </ul>
    </aside>
</template>

<script>
export default {
    props: {
        menus: {
            type: Array,
            default: () => []
        }
    },
}
</script>

<style lang="scss">
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 20px 0 50px;
    width: 180px;
    min-width: 45px;
    max-height: 100vh;
    height: calc(100% - 50px);
    z-index: 1024 - 1;
    background: #FFF;
    box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
    overflow-y: auto;
    overflow-x: hidden;
}

.menu {
    list-style: none;
    line-height: 1.25;
    margin: 0;
    a {
        cursor: pointer;
        text-decoration: none;
        display: block;
        padding: .5em .75em;
    }
}

ul {
    margin: 0;
    padding: 0;
}

</style>

