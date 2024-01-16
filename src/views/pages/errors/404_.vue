<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center p-3">
        <p class="fw-bold f-20 ls-4 text-deep-grey mt-4 mb-0">404 Not Found</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "error-not-found",
  mounted() {
    setTimeout(() => {
      this.$router.push({ name: "home" })
    }, 5000)
  }
}
</script>

<style lang="scss" scoped>
.img-error {
  width: 450px;
}
</style>
