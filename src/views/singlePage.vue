<template>
     
     <div>
        <img src="" alt=""/>
     </div>

</template>

<script>
import { ref, onMounted} from 'vue';
import { useRoute, } from 'vue-router';


const meals = ref({})
const route = useRoute();

onMounted(async()=>{
   try{
   const {data} = await axiosClient.get(`lookup.php?i=${route.params.id}`)
   meals.value = data.meals;
   }
   catch{
      console.error('nothing found')
   }
})
</script>

