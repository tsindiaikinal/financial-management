  <template>
  <div >
    <ul>
      <li class="filters w-full h-10 pt-2 border rounded-lg bg-white text-center cursor-pointer text-sm">Фильтер
      <ul class="hidden">
        <li>Фильтер 1</li>
        <li>Фильтер 2</li>
        <li>Фильтер 3</li>
      </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FilterData',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js my project'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  .filters {
    width: 120px;
  }
  .filters::before {
    content: url(~@/assets/img/filter-icon.svg);
    display: inline-block;
    margin-right: 5px;
  }
  .filters::after {
    content: url(~@/assets/img/angle-left.svg);
    display: inline-block;
    margin-left: 5px;
    transform: rotate(-90deg);
  }
</style>
