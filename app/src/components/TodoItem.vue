<template>
  <li class="item" @click="handleDelete">{{ content }}</li>
</template>

<script>
export default {
  props: ['content', 'index'],
  methods: {
    handleDelete() {
      this.$emit('delete', this.index);
    }
  }
}
</script>

<style scoped> /*作用域 当前*/
.item{
  color: green;
}
</style>
