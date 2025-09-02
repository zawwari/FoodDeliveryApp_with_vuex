<template>
    <div class="p-8 pb-0">
      <h1 class="text-4xl font-bold mb-4 text-[#BB9F06]">Meals by Letter</h1>

      <div class="flex justify-center mt-3">
  <router-link :to="{name: 'byLetter', params:{data}}" v-for="data of letters" :key="data" class="gap-2 px-1 mx-0.5 text-[18px]  font-semibold">{{ data }}</router-link>
</div>
    </div>
    <div class="flex flex-wrap justify-center gap-3 px-8 mb-6">
      <router-link>
      </router-link>
    </div>
  
  </template>
  
  <script setup>
  // import { computed } from "@vue/reactivity";
  import { onMounted, watch } from "vue";
  import { useRoute } from "vue-router";
  // import store from "../store";
  // import Meals from "../components/Meals.vue";
  
  const route = useRoute();
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  
  
  </script>