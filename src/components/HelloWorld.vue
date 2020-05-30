<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <div title="main page">
      <nav></nav>
      <div title="diagram"></div>
      <main>
        <nav title="display data"></nav>
        <section title="data">
        </section>
      </main>
    </div>
    <div>
      <h3>Все деньги</h3>
      <span><img src="assets/logo.svg" alt=""></span>
      <div>
        <ul>
          <li><a href="#">Операции</a></li>
          <li><a href="#">Отчеты</a></li>
          <li><a href="#">Контрагенты</a></li>
          <li><a href="#">Проекты</a></li>
          <li><a href="#">Статьи расходов</a></li>
          <li><a href="#">Сотрудники</a></li>
        </ul>
        <div>Newage Systems</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js my project'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  li {
  display: inline-block;
  margin: 0 10px;
  }
}
a {
  color: #42b983;
}
</style>
