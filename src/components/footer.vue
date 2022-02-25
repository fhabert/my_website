<template>
 <v-footer
    class="footerLink"
    height="200px">
      <v-card
      class="text-xs-center flex"
      flat
      height="200px"
      >
      <v-card-text class="text-center text-size mt-3"> Thank you for reading my page ! </v-card-text>
      <v-row class="d-flex align-center">
        <a href="mailto: f.habert19@ejm.org">
          Contact me
        </a>
    </v-row>
    <v-card-text class="text-center white--text"> Felix Habert </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>
<style scoped>
.footerLink {
  margin-top: 40px;
}
.text-size {
  font-size: 20px;
}
</style>