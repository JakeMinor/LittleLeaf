<script setup lang="ts">
  interface Link {
    name: string,
    url: string
  }

  const links : Link[] = [
    { name: "Home", url: "" },
    { name: "Plants", url: "" },
    { name: "Pots", url: "" },
    { name: "Care Guide", url: "" },
    { name: "Checkout", url: "" },

  ]
</script>

<template>
  <div class="navbar bg-primary">
    <div class="container mx-auto">
      <img alt="LittleLeaf Logo" src="/Logo.png" width="150px" class="ms-16 mt-2 mb-0.5 cursor-pointer"/>
      <div class="ms-auto me-10">
        <a class="link link-hover font-semibold uppercase text-white lg:text-base sm:text-sm  underline-offset-4 decoration-2 lg:tracking-[0.16em] lg:ms-14 sm:tracking-wide sm:ms-8" v-for="(link, index) in links" :key="index">{{ link.name }}</a>
      </div>
    </div>
  </div>
</template>