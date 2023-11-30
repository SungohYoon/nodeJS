<template>
  <div>
    <h1>{{ title + ' !!!' }}</h1>
    <h2 v-bind:name="'sample'" v-text="title"></h2>
    <p v-html="tagList" />
    <p v-text="tagList" />
    <hr />
    <input type="text" v-model="valueModel" />
    <p>{{ typeof valueModel }}</p>
    <input type="number" v-model.lazy="numberModel" />
    <p>{{ 10000 + numberModel }}</p>
    <select v-model="selectModel">
      <option value="jjaJang">간짜장</option>
      <option value="jjamBbong">짬뽕</option>
    </select>
    <p>{{ selectModel }}</p>
    <textarea v-model="textModel"></textarea>
    <hr />
    <input type="checkbox" v-model="cnData" true-value="남자" false-value="여자" />
    <p>{{ cnData }}</p>
    <div>
      <input type="checkbox" value="서울" v-model="city" />
      <input type="checkbox" value="구미" v-model="city" />
      <p>{{ city }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: 'Hello, Vue.js',
      tagList: '<strong>Today is ... </strong>',
      valueModel: 'korea',
      numberModel: 0,
      selectModel: '',
      textModel: '택견불여일타쌍피',
      cnData: '',
      city: '',
    };
  },
};
</script>
