<script setup>
import { ref } from 'vue'
import axios from 'axios'
const groupList = ref([]); // 用于存储接口返回的列表数据

// 使用 axios 请求接口
axios.get('https://nativeapi.yuxiangwang0525.com/sekaimovieguide/getGroupList')
    .then(response => {
      groupList.value = response.data; // 将接口返回的数据赋值给 groupList
    })
    .catch(error => {
    });

</script>

<template>
  <div>
    <h2>分组列表</h2>
    <table border="1">
      <thead>
      <tr>
        <th>序号</th>
        <th>名称</th>
        <th>群号</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="group in groupList" :key="group.gid">
        <td>{{ group.gid }}</td>
        <td>{{ group.name }}</td>
        <td><a :href="group.group_link">{{ group.group_number }}</a></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>


<style scoped>

</style>