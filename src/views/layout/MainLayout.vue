<template>
  <div>
    <!-- header -->
    <header>
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <div class="collapse navbar-collapse">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
          </div>
        </div>
      </nav>
    </header>

    <!-- content -->
    <router-view class="mt-5 py-5" />

    <!-- footer -->
    <footer>this is footer</footer>
  </div>
</template>

<script lang="ts">
export default {
  name: "main-layut"
}
</script>

<style scoped lang="scss">
header {
  padding: 0;
  position: absolute;
  width: 100%;
  top: 0;
  background-color: gray;
  border-bottom: 1px solid black;

  nav {
    line-height: 1.5;
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin: 0 0 1rem 0;

    .nav-item {
      text-decoration: none;
      font-size: 15px;
    }

    a.router-link-exact-active {
      color: var(--color-text);

      :hover {
        background-color: transparent;
      }
    }

    a {
      display: inline-block;
      padding: 0 1rem;
      border-left: 1px solid var(--color-border);

      :first-of-type {
        border: 0;
      }
    }
  }
}

footer {
  border-top: 1px solid black;
}
</style>
