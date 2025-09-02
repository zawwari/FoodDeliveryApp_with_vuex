
<template>


</template>
<script setup>
import axiosClient from '../axiosClient.js'
import axios from 'axios';
import store from '../store/store'
import { computed, onMounted, ref } from 'vue';

  const list = 'ABCDEFGHIJKLMNOPQRSTUVXYZ'.split('');
  const menuArr = ref([])

  // onMounted(async()=>{
  //   const {data} = await axiosClient.get('list.php?i=list');
  //   menuArr.value = data.meals;
  //   console.log(menuArr);
  // })

  onMounted(async()=>{
    try{
    const {data} = await axiosClient.get('list.php?i=list');
    menuArr.value = data.meals.slice(0,6);
    }
    catch{
      console.error('no response');
    }

    finally{
loading.value = false
    }

    console.log(menuArr);
  })

</script>