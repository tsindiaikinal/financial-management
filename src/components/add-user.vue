 <template>
  <div class="container xl">
    <h1>{{ msg }}</h1>
    
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

</style>

