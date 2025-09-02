<template>

<header class="bg-[#095256] items-center shadow-lg justify-between py-5 px-6 fixed w-full top-0 left-0 mb-10 flex">
<div class="container mx-auto px-7">
  <div class="inner flex justify-between items-center">
  <div class="left-div flex items-center">
<router-link :to = "{name:'home'}" class="text-[#BB9F06] font-bold text-[24px] ">
YumDash

</router-link>

</div>

<div class="nav">
<ul class="flex gap-6 text-white items-center font-semibold text-upp text-[16px]">
  <li>
    <router-link  :to ="{name:'byName'}" class="h-full ">Search by name</router-link>
  </li>
  <li>
    <router-link :to ="{name:'byLetter'}" class="h-full">Seach by letter</router-link>
  </li>
  <li>
    <router-link :to="{name:'byIngredient'}" class="h-full">search by ingredients</router-link>
  </li>
</ul>

</div>
</div>
</div>

</header>
</template>

<script></script>

<style></style>