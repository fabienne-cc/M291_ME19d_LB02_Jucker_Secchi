<template>

    <div id="app">
        <div id="header">
           <router-link to="/">
                <div id="logo">
                    <img src="https://cdn-icons-png.flaticon.com/128/7960/7960132.png" />
                </div>
            </router-link>
            <div id="nav">
                <router-link to="/">Home</router-link> | <router-link to="/warenkorb">Warenkorb</router-link> |
                <router-link to="/formular">Formular</router-link> | <router-link to="/einkaufsliste">Einkaufsliste</router-link>
            </div>
        </div>

        <router-view />
        <CustomFooter />
    </div>
</template>

<script>
import CustomFooter from './components/Footer.vue';
export default {
    components: { CustomFooter },
};
</script>

<style lang="scss">
//Import of global-style
@import 'styles/global';
</style>
