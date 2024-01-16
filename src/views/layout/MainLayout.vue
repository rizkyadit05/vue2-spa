<template>
  <div>
    <!-- header -->
    this is header
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>

    <!-- content -->
    <router-view />

    <!-- footer -->
    this is footer
  </div>
</template>

<script lang="ts">
export default {
  name: "main-layut"
}
</script>
