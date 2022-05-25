<template>
    <div>
      <a :href="`tel:${PhoneNumberLink(tel)}`" class="telefon">{{ PhoneNumberFormat(tel) }}</a>
    </div>
</template>

<script>
export default {
  name: "NumberTelefon",
  props: {tel: String},
  methods: {
    PhoneNumberFormat(number) {
      let temp_number;
      let pref;
      temp_number = `${number}`;
      if (temp_number[0] == '8') {
        pref = temp_number.substr(0, 1)
      }
      console.log(temp_number);
      if (temp_number[0] == '7') {
        pref = '+' + temp_number.substr(0, 1)
      }
      temp_number = temp_number.substr(-10);
      return `${pref} (${temp_number.substr(0, 3)}) ${temp_number.substr(3, 3)}-${temp_number.substr(6, 2)}-${temp_number.substr(8, 2)}`;
    },
    PhoneNumberLink(number) {
      let temp_number;
      let pref;
      temp_number = `${number}`;
      if (temp_number[0] == '8') {
        pref = temp_number.substr(0, 1)
      }
      if (temp_number[0] == '7') {
        pref = '+' + temp_number.substr(0, 1)
      }
      // temp_number = temp_number.substr(-10);
      return `${pref}${temp_number.substr(-10)}`;

    }
  }
}
</script>

<style lang="scss" scoped>
.telefon {
  //@include font(15px, 500, 20px);
  font-size: 24px;
  font-weight: 400;
  line-height: 29px;
  text-decoration: none;
}
</style>