<template>
  <div class="container flex box-border p-8">
    <div class="main-section w-3/4" title="Main section">
      Main page
      <nav class="flex justify-berween">
        <app-calendar></app-calendar>
        <app-search></app-search>
        <div class="w-2/5 border bg-gray-200">
          <app-filter></app-filter>
          <app-adduser></app-adduser>
        </div>
      </nav>
      <app-diagram></app-diagram>
      <main>
        <nav title="display data">Navigation main display data</nav>
        <section class="p-10" title="data">
          <!-- COMPONENTS -->
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni officia
          tenetur laborum, at dolor consequatur temporibus ut reiciendis ipsum,
          qui corrupti ratione ipsa voluptate sapiente eveniet consequuntur
          recusandae fugiat aliquam!
        </section>
      </main>
    </div>
    <section class="menu-block w-1/4 bg-gray-100">
      <h3 class="navbar-title text-2x1 font-medium">Все деньги</h3>
      <div class="px-8">
        <div class="h-64 bg-gray-200 rounded-lg">Scoreboard</div>
        <app-menu></app-menu>
      </div>
      <div class="w-full text-center border py-2 mt-4">Newage Systems</div>
    </section>
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

.main-section {
  height: 800px;
  border: 1px solid green;
}

main {
  // height: 25%;
  border: 1px solid green;
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

.navbar-title::after {
  content: url(~@/assets/img/logo.svg);
}

.menu-block {
  border: 1px solid grey;
}
// a {color: #42b983;}
</style>
