<template>
<button class="btn">
  <slot></slot>
</button>
</template>

<script>
export default {
  name: "ui-button"
}
</script>

<style lang="scss" scoped>
.btn {
  padding: 10px 15px;
  background-color: #d0cccc;
  border: 0;
  &:hover {
    background-color: grey;
    color: white;
  }
}
</style>