<template>
  <div>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from './layouts/Header.vue'

export default {
  components: {
    Header,
  },
}
</script>
