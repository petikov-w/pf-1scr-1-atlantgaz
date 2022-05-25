<template lang="pug">
footer.footer
  .footer-wrapper
    span Политика конфиденциальности
    span Согласие на обработку персональных данных

</template>

<script>

export default {
  name: 'Footer-m',
  setup() {

    return { }
  }
}
</script>

<style lang="scss" scoped>
.footer-wrapper {
  width: 1100px;
  margin: 0 auto;
  display: flex;
  span {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 19px;
    color: #F1F1F1;
    text-decoration: underline;
    margin-right: 30px;
  }
}
</style>