<template>
  <div class="container w-full px-8 py-6 flex box-border border">
    <div class="w-3/4">
     <app-navigation></app-navigation>
      <operationlist></operationlist>
    </div>
    <app-dashboard></app-dashboard>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data () {
    return {
      // msg: "Welcome to Your Vue.js my project"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.container {
  max-width: 1440px;
  margin: auto;
}

.bg-gray-200 {
  background-color: #eeeeee;
}

.bg-gray-100 {
  background-color: #f5f5f5;
}

.text-2x1 {
  font-size: 1.375rem;
}

.fixed {
  bottom: 5vh;
}

</style>
