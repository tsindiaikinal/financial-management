 <template>
  <div class="w-1/4 max-w-xs">
  <section
      class="flex flex-col justify-between pt-6 bg-gray-100 rounded-lg"
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
  name: 'Dashboard',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js my project'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>
