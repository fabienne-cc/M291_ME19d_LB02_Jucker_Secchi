import Vue from 'vue';
import Vuex from 'vuex';
import { getProducts } from '@/utils/products';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products : null,
        cart: [],
    },
    //berechnung der totalen Kosten & Produkten
    getters: {
        getCartTotal(state) {
            return state.cart.reduce((total, item) => {
                let product = state.products.find((product) => product.title === item.title);
                return total + product.prize * item.amount;
            }, 0);
        },
        getCartTotalProducts(state) {
            let total = 0;
            state.cart.forEach(item => {
                total += item.amount;
            });

            return total;
        },
    },
    // Mutations sind um den Store zu bearbeiten
    mutations: {
        setProducts(state, products) {
            state.products = products;
        },
        addToCart: (state, title) => {
            let index = state.cart.findIndex((p) => p.title === title);
            if (index !== -1) {
                state.cart[index].amount++;
            } else {
                state.cart.push({ title: title, amount: 1 });
            }
        },
        removeFromCart: (state, title) => {
            let index = state.cart.findIndex((p) => p.title === title);
            if (index !== -1) {
                state.cart[index].amount--;
                if (state.cart[index].amount === 0) state.cart.splice(index, 1);
            }
        },
    },
    actions: {
        fetchProducts: async (context) => {
            context.commit('setProducts', await getProducts());
        },
    },
});
