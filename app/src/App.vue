<template>
  <div>
    <div>
      <input v-model="inputValue">
      <button @click="handleSubmit">提交</button>
    </div>
    <ul>

    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
      list: []
    }
  },
  methods: {
    handleSubmit() {
      this.list.push(this.inputValue)
    }
  }
  // name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
