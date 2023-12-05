<template>
  <div>
    <input type="text" v-model="selected" />
    <component v-bind:is="selected"></component>
  </div>
</template>
<script>
import PropsCom from './components/PropsComponent.vue'

export default {
  name: 'app',
  data() {
    return {
      selected: 'PropsCom',
    }
  },
  components: {
    PropsCom,
  },
}
</script>
