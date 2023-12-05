<template>
  <div>
    <input type="text" v-model.lazy="selected" v-focus="isFocused" />
    <component v-bind:is="selected"></component>
  </div>
</template>
<script>
import PropsCom from './components/PropsComponent.vue';
import SlotCom from './components/TestModal.vue';
import Composition from './components/CompositionInterface.vue';
import StoreCom from './components/ScoreComponent.vue';

export default {
  name: 'app',
  data() {
    return {
      selected: 'PropsCom',
      isFocused: false,
    };
  },
  components: {
    PropsCom,
    SlotCom,
    Composition,
    StoreCom,
  },
};
</script>
