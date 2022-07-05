<template>
  <div class="container">
    <span v-html="htmlTitel"></span>

    <div v-if="!products">
      <h1>Keine Daten gefunden...</h1>
    </div>
    <div v-else>
      <h3>Warenkorb: (Artikel: {{getCartTotalProducts}}) {{ getCartTotal}}</h3>
      <div class="even-columns" v-for="item in products" :key="item">
        <!--Produktbezeichnung anzeigen-->
        <div class="colum">Produkt {{item.title}}</div>
        <!--Produkt in den Basket hinzufügen-->
        <div class="colum">
          <a href="#" @click="addProductToCart(item)">
            Add {{ formatPrize(item.currency, item.prize) }}
          </a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {mapState, mapGetters} from "vuex";

export default {
  data() {
    return {
      htmlTitel: '<h1>Warenkorb</h1>'
    }
  }, computed: {
    ...mapState({
      products: 'products',
    }),
    ...mapGetters({
      getCartTotal: 'getCartTotal',
      getCartTotalProducts: 'getCartTotalProducts',
    }),
  },
  methods: {
    addProductToCart(item) {
      this.$store.commit('addToCart', item.title);
    },
    //währung angeben damit nicht nur in CHF bezahlt werden kann (mit currency)
    formatPrize(currency, val){
      return `${currency} ${val.toFixed(2)}`
    }
  },
  created() {
    this.$store.dispatch('fetchProducts');
  }
}
</script>

<style lang="scss" scoped>
#content {
  padding-left: 20px;
}

ul {
  padding-left: 20px;
}
li {
  display: block;
  list-style: none;

  + li {
    margin-top: 10px;
  }
}

a {
  display: inline-block;
  background: #fb6e52;
  border-radius: 10px;
  font-size: 10px;
  color: white;
  padding: 5px 10px;
  text-decoration: none;
}

.even-columns{
  margin-top: 20px;
}
</style>
