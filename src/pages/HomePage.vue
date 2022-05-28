<template lang="pug">
.wrapper-home
  .left-col
    .title Заправка баллонов техническим газом
    .subtitle Бесплатная доставка по Москве <br> и Московской области
    img(src="@/assets/images/btn_zakaz_gaz.png")
    .services-box
      div(v-for="(serv, index) in listServices" :key="index")
        services(:services="serv" v-if="isEven(index)" style="margin-right: 57px" )
        services(:services="serv" v-if="!isEven(index)")
  .middle-col
    .title Все виды технических газов
    img(src="@/assets/images/baloon_gaz.png")
  .right-col

</template>

<script>
import Services from "@/components/UI/Services";
import {contentServices} from "@/_config";

export default {
  name: "HomePage",
  components: {Services},
  setup() {
    const listServices = contentServices
    const isEven = number => number % 2 === 0
    return {listServices, isEven}
  }
}
</script>

<style lang="scss" scoped>
.wrapper-home {
  width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .left-col {
    max-width: 617px;
    //max-width: 50vw;
    font-family: Russo One;
    font-weight: 400;
    text-align: left;
    margin-top: 15px;
    .title {
      font-size: 48px;
      font-weight: 400;
      line-height: 58px;
      //border: 1px solid white;
    }
    .subtitle {
      font-family: Russo One;
      font-size: 24px;
      line-height: 29px;
      color: #ffffff;
      margin: 15px 0 27px;
    }
    img:hover {
      opacity: 0.8;
    }
    .services-box {
      display: flex;
      flex-wrap: wrap;
      //margin-top: 50px;
    }
  }

  .middle-col {
    max-width: 358px;
    //max-width: 30vw;
    font-family: Russo One;
    font-weight: 400;
    margin-top: 15px;
    margin-left: -100px;
    .title {
      @include set-font(24px, 400, 29px, #ffffff);
    }
    img {
      text-align: left;
      margin-left: -50px;
      margin-top: 40px;
      height: 696px;
      width: 445px;
      object-fit: cover;
    }
  }
  .right-col {
    max-width: 100px;
  }
}
</style>