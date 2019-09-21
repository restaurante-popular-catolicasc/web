<template>
  <div id="app">
    <component :is="layout">
      <RouterView />
    </component>
  </div>
</template>

<script>
const defaultLayout = 'Default'

export default {
  name: 'App',
  computed: {
    layout() {
      return `${this.$route.meta.layout || defaultLayout}Layout`
    }
  }
}
</script>
