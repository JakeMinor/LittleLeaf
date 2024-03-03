<script setup lang="ts">
  interface Link {
    name: string,
    url: string
  }

  const links : Link[] = [
    { name: "HOME", url: "" },
    { name: "PLANTS", url: "" },
    { name: "POTS", url: "" },
    { name: "CARE GUIDE", url: "" },
    { name: "CHECKOUT", url: "" },

  ]
</script>

<template>
  <div class="navbar bg-primary">
    <img alt="LittleLeaf Logo" src="/Logo.png" width="128px" class="ms-12 mt-2 mb-0.5 cursor-pointer"/>
    <div class="ms-auto me-10">
      <a class="link link-hover font-semibold text-white ms-6" v-for="(link, index) in links" :key="index">{{ link.name }}</a>
    </div>
  </div>
</template>