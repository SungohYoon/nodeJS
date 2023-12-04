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
    <input type="checkbox" v-model="chData" true-value="남자" false-value="여자" />
    <p>{{ chData }}</p>
    <div>
      <input type="checkbox" value="서울" v-model="city" />서울
      <input type="checkbox" value="구미" v-model="city" />대구
      <p>{{ city }}</p>
    </div>
    <div>
      <input type="radio" value="독서" v-model="hobby" />독서 <input type="radio" value="영화" v-model="hobby" />영화
      <input type="radio" value="운동" v-model="hobby" />운동
      <p>{{ hobby }}</p>
    </div>
    <hr />
    <img v-bind:style="styleData" v-bind:src="imgUrl" />
    <div class="container" v-bind:class="{ active: isActive, 'text-red': isRed }">Class Binding First</div>
    <div class="container" v-bind:class="myClass">Class Binding Second</div>
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
      selectModel: 'jjaJang',
      textModel: '택견불여일타쌍피',
      chData: '',
      city: [],
      hobby: '독서',
      imgUrl: 'https://kr.vuejs.org/images/logo.png',
      styleData: {
        backgroundColor: 'pink',
        width: '200px',
        border: 'solid 3px skyblue',
      },
      // backSetting: 'background-color:pink; width:200px; border: solid 3px skyblue',
      isActive: false,
      myClass: 'active',
    };
  },
  computed: {
    hasError() {
      return !this.isActive;
    },
  },
};
</script>
<style scoped>
.container {
  width: 100%;
  height: 200px;
}
.active {
  background-color: aquamarine;
  font-weight: bold;
}
.text-red {
  color: red;
}
</style>
