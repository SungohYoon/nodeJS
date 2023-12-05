<template>
  <div class="container">
    <table class="table">
      <caption>
        Total:{{
          count
        }}
      </caption>
      <thead>
        <tr>
          <th>No.</th>
          <th>ID</th>
          <th>이름</th>
          <th>성별</th>
          <th>가입날짜</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="idx" v-for="(user, idx) in userList" @click="goToUserInfo(user.user_id)">
          <td>{{ user.user_no }}</td>
          <td>{{ user.user_id }}</td>
          <td>{{ user.user_name }}</td>
          <td>{{ user.user_gender }}</td>
          <td>{{ dateFormat(user.join_date, 'yyyy년MM월dd일') }}</td>
        </tr>
      </tbody>
    </table>
    <div class="row">
      <router-link to="/userInsert" class="btn btn-secondary">등록</router-link>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      userList: [],
    }
  },
  computed: {
    count() {
      return this.userList.length
    },
  },
  created() {
    // 컴포넌트가 초기화할 데이터관련 진행
    this.getUserList()
  },
  methods: {
    async getUserList() {
      let result = await axios.get('/api/tusers').catch((err) => {
        console.log(err)
      })
      let list = result.data
      this.userList = list
    },
    goToUserInfo(id) {
      console.log(id)
      this.$router.push({ path: '/userInfo', query: { userId: id } })
    },
    dateFormat(value, format) {
      let date = new Date(value)
      let year = date.getFullYear()
      let month = ('0' + (date.getMonth() + 1)).slice(-2)
      let day = ('0' + date.getDate()).slice(-2)
      let result = format.replace('yyyy', year).replace('MM', month).replace('dd', day)
      return result
    },
  },
}
</script>
