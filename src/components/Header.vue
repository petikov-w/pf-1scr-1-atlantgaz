<template lang="pug">
header
  .container
      router-link(class="navbar-logo" to="/")

</template>

<script>
import {site} from "@/_config"
export default {
  name: 'Header-m',
  data() {
    return {
        logo: site.title
    }
  }
}
</script>

<style lang="scss" scoped>

</style>