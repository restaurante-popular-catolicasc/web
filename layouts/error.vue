<template>
  <v-app>
    <v-container>
      <h1 v-if="error.statusCode === 404">
        {{ pageNotFound }}
      </h1>
      <h1 v-else>
        {{ otherError }}
      </h1>
      <nuxt-link to="/">
        Página inicial
      </nuxt-link>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  data() {
    return {
      pageNotFound: '404 - Página não encontrada',
      otherError: 'Um erro foi encontrado'
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
