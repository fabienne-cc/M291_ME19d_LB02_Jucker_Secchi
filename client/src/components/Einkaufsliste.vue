<template>
  <div class="container">
    <h2>Einkaufsliste</h2>
    <div class="user-input">
      <input
          placeholder="Press enter to add new item"
          v-model="input"
          @keyup.enter="addItem"
          ref="input"
      />
      <button @click="addItem">Add item</button>
    </div>

    <div v-if="shoppingList">
      <ul>
        <li v-for="(item,index) in shoppingList" :key="index" class="item">
          <span>{{ item }}</span>
          <button class="button--remove" @click="deleteItem(index)">Remove</button>
        </li>
      </ul>
    </div>
    <br />
    <button class="button--delete" @click="deleteItem()">Delete all</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input:'',
      shoppingList: []
    }
  },
  methods: {
    addItem(){
      if(!this.input) return;
      this.shoppingList.push(this.input);
      //clear the input after adding
      this.input = '';
      //Focus the input element
      this.$refs.input.focus()
    },
    deleteItem(index){
      //no parameter provided..
      if (index == null){
        //..delete all
        this.shoppingList = [];
      } else {
        this.shoppingList = this.shoppingList.filter((item,el) => el !== index);
      }
    }
  },
}
</script>

<style lang="scss">

.container {
  max-width: 600px;
  margin: 80px auto;
}

.item {
  display: flex;
  justify-content: space-between;
}

.user-input {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  input {
    width: 100%;
    padding: 10px 6px;
    margin-right: 10px;
  }
}

.item {
  display: flex;
  align-items: center;
}

button {
  appearance: none;
  padding: 10px;
  border: none;
  white-space: nowrap;

  + button {
    margin-left: 10px;
  }
}

.button--delete {
  display: block;
  margin: 0 auto;
}

.button--remove {
  background: none;
  text-transform: uppercase;
  font-size: 11px;
  align-self: flex-end;
}

ul {
  display: block;
  margin: 0 auto;
  padding: 30px;
}
</style>
