<template>
  <div id="app">
    <h1>ToDoリスト</h1>
    <label for="itemName">タスク名：</label>
    <input name="itemName" type="text" v-model="itemName" />
    <label for="itemTime">推定時間（分）：</label>
    <input name="itemTime" type="number" v-model="itemNumber" />
    <button @click="addItem">追加</button>

    <h2>タスク名:推定時間</h2>
    <div v-for="(item, index) in $store.state.cart" :key="index">
      <p>{{ item.name }}:{{ item.time }}分</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemName: "",
      itemTime: "",
    };
  },
  methods: {
    addItem() {
      this.$store.commit("addItemToList", {
        name: this.itemName,
        time: this.itemNumber,
      });
    },
  },
};
</script>
