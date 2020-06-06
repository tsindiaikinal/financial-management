<template>
  <div class="container flex box-border p-8 border">
    <div class="main-section relative w-3/4" title="Main section">
      <nav class="flex justify-berween">
        <app-calendar></app-calendar>
        <app-search></app-search>
        <div class="w-2/5 border bg-gray-200">
          <app-filter></app-filter>
          <app-adduser></app-adduser>
        </div>
      </nav>
      <app-diagram></app-diagram>
      <main class="">
        <nav title="display data">
          <div>
            <label for="sortbydate">Группировать:</label
            ><select name="sort_by_date" id="sortbydate">
              <option value="bydate">По дате</option>
              <option value="bytime">По времени</option>
              <option value="byname">По имени</option>
              <option value="bypay">По оплате</option>
            </select>
          </div>
          <div>
            <span>Вид: </span>
            <div>VIEW</div>
            <div>CALEDAR</div>
          </div>
          <div>
            <div>ALL OPERATION</div>
            <div>FUTURE</div>
            <div>PAST</div>
          </div>
        </nav>
        <div>
          <app-add></app-add>
        </div>
        <section class="pt-10 pl-10 pb-12" title="data">
          <!-- COMPONENTS -->
          <app-opercard></app-opercard>
          <app-copy></app-copy>
          <app-add></app-add>
        </section>
        <div class="absolute bottom-0 flex justify-between w-3/4 ml-8 pr-2 pb-2">
          <app-operation></app-operation>
          <app-delete></app-delete>
        </div>
      </main>
    </div>
    <section
      class="flex flex-col justify-between menu-block w-1/4 pt-6 bg-gray-100 rounded-lg"
    >
      <div class="px-8">
        <div class="flex justify-between pb-3">
          <h3 class="navbar-title text-2x1 font-medium">Все деньги</h3>
          <img class="w-8 h-8" src="~@/assets/img/logo.svg" alt="Logo" />
        </div>
        <app-scoreboard></app-scoreboard>
        <app-menu></app-menu>
      </div>
      <app-profile></app-profile>
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
  // border: 1px solid green;
}

main {
  // height: 25%;
  // border: 1px solid green;
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

.menu-block {
  // border: 1px solid grey;
}
.fixed {
  bottom: 5vh;
}

</style>
