<template>
  <div class="container mx-auto py-10 pt-0">

    <div class="p-8 pb-0">
      <h1 class="text-4xl font-bold mb-4 text-[#BB9F06]">Search Meals by Name</h1>
    </div>

    <div class="px-8 pb-8">
      <input
        type="text"
        class="rounded  border-1    rounded-sm w-80 px-3 py-2  outline-0 bg-white border-[#5AAA95]  w-full"
        placeholder="Search for Meals"
        @change='searchMeals()'
        v-model="keyword"
      />
    </div>
    <div class="grid  grid-cols-3 gap-x-7 gap-y-6 px-8 ">
    
<div v-for="loo in meals" :key='loo.idMeal'  class=" rounded-xl  overflow-hidden shadow-lg bg-white">
<div class="image-wrapper h-[240px]">
  <img :src='loo.strMealThumb' alt="" srcset="" class="h-full w-full object-cover"/>
</div>
  <div class="px-6 py-4">
<h2 class="font-bold text-xl mb-2 text-[#095256]">{{ loo?.strMeal }}</h2>
<p class="text-gray-700 text-base">
All these meals are fake think before you order and so Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique consequatur 
</p>
</div>
<div class="px-6 pt pb-6">
<span class="inline-block bg-[#86A873] rounded-full px-3 py-1 text-xs font-semibold text-white mr-2">{{loo.strCategory}}</span>
<span class="inline-block bg-[#86A873] rounded-full px-3 py-1 text-xs font-semibold text-white mr-2">{{loo.strArea}}</span>
</div>
</div>
    </div>
  </div>

  </template>
  
  <script setup>
  
  import store from '../store/store'
  import axiosClient from '../axiosClient'
  import { ref , onMounted, computed} from 'vue';
  import {useRoute} from 'vue-router';

  const menuArr = ref([])
  const loading = ref(true)
  const keyword = ref('');
  const router = useRoute();

  const meals  = computed(()=>store.state.mealsList);
  



  function searchMeals(){
    store.dispatch('searchData', keyword.value);

  }

  onMounted(()=>{
    keyword.value = router.params.name;
    if(keyword.value){
      searchMeals(); 
    }})
  </script>