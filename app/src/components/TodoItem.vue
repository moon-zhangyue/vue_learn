<template>
  <li @click="handleDelete">{{ content }}</li>
</template>

<script>
export default {
  props: ['content', 'index'],
  methods: {
    handleDelete() {
      alert(this.index)
    }
  }
}
</script>

<style scoped>

</style>
