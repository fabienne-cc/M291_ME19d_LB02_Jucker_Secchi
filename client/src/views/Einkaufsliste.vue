<template>
  <div>
    <Einkaufsliste/>
  </div>
</template>

<script>
import Einkaufsliste from '../components/Einkaufsliste.vue';
export default {
  name: 'Home',
  components: {
    Einkaufsliste,
  },
};
</script>