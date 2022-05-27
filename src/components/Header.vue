<template lang="pug">
.header-wrapper
    img(:src="img_logo" alt="logo")
    .info
      Telefon(:tel="contact_telefon" class="m-top")
      span {{ link_hot_question }}

      //router-link(class="navbar-logo" to="/")
</template>

<script>
import {contentHeader} from "@/_config"
import Telefon from '@/components/UI/NumberTelefon'
export default {
  name: 'vHeader',
  components: {Telefon},
  setup() {
    const img_logo = contentHeader.listItemHeader.logo;
    const contact_telefon = contentHeader.listItemHeader.telefon;
    const link_hot_question = contentHeader.listItemHeader.subtitle;
    return {img_logo, contact_telefon, link_hot_question}

  }
}
</script>

<style lang="scss" scoped>
:deep(.telefon) {
    color: #FFFFFF;
}

.header-wrapper {
    width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    img, .m-top {
      margin-top: 25px;
    }
    span {
      font-family: 'Open Sans', sans-serif;
      font-size: 16px;
      font-weight: 700;
      line-height: 22px;
      margin-top: 5px;
      text-decoration: underline;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
  }
</style>