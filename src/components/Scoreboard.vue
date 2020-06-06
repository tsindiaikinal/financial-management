  <template>
  <div class=" bg-gray-200 rounded-lg">
    <div class="px-6 pt-1">
      <div class="text-3xl">{{ count_money[0] }} ₴</div>
    <div class="text-sm">
      <div>{{ count_money[1] }} ₴</div>
      <div>{{ count_money[2] }} $ <span class="text-gray-500">({{ count_money[3] }} ₴)</span></div>
    </div>
    </div>
    <hr>
    <div class="pl-5">
      <p>{{ name_bank[0] }} {{ count_money[4] }} ₴</p>
      <p>{{ name_bank[0] }}, $ {{ count_money[2] }} $ </p>
      <p>{{ name_bank[1] }} {{ count_money[5] }} ₴</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Scoreboard',
  data () {
    return {
      count_money: [
        '738 801',
        '546 568',
        '8 797',
        '237 233',
        '312 471',
        '234 097'
      ],
      name_bank: [
        'monobank',
        'Касса'
      ]
      // msg: 'Welcome to Your Vue.js my project'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .text-gray-500 {
    color: rgba(46, 46, 46, 0.5);
  }
</style>
