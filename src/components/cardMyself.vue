<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end image"
      height="350px"
      :src="image_url"
    >
      <!-- <v-card-title>Top 10 Australian beaches</v-card-title> -->
    </v-img>
    <v-card-text class="text--primary">
      <div> <h4>{{ titre }} </h4>
        </div>

      <div><h5> {{ description }}</h5> </div>
    </v-card-text>

    <v-card-actions v-if="hasLink == 'true'">
      <v-btn
        depressed
        color="primary"
      >
      <a :href="link_a" class="link" target="blank">Go</a>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props:
    ['image_url', 'titre', 'description', "link_a", "hasLink"]
}
</script>

<style scoped>
.link {
  text-decoration: none;
  color: black; 
}
.image {
  object-fit: contain;
}
</style>


