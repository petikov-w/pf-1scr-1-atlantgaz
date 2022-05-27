<template lang="pug">
.serv-box
    img(:src="services.img")
    .descr
      p {{ services.descr }}

</template>

<script>
export default {
  name: "uiServices",
  props: {
    services: {
      type: Array,
      required: true,
      // default: []
    },
  },
}
</script>

<style lang="scss" scoped>
  .serv-box {
    display: flex;
    align-items: center;
    margin-top: 50px;
    .descr {
      margin-left: 10px;
      max-width: 189px;
      //margin-right: 57px;
      font-family: 'Open Sans', sans-serif;
      font-size: 16px;
      font-weight: 600;
      line-height: 22px;
      //letter-spacing: 1.1px;
      color: #ffffff;
    }
    img {
      //height: 100%;
      //width: auto;
      height: 50px;
      width: 50px;
      margin-top: 10px;
    }

  }
</style>