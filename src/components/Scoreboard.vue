  <template>
  <div class="bg-gray-200 pt-1 pb-3 rounded-lg">
    <div class="px-5">
      <div class="h-10 pl-2 text-3xl">{{ amount_money[0] }} ₴</div>
    <div class="flex">
      <img class="w-3 mb-3" src="~@/assets/img/vector-icon.svg" alt="Vector icon">
      <div class="pl-1 text-sm">
        <p class="inline-block transform translate-y-1">{{ amount_money[1] }} ₴</p>
        <br>
        <p class="inline-block">{{ amount_money[2] }} $ <span class="text-gray-500">({{ amount_money[3] }} ₴)</span></p>
      </div>
    </div>
    </div>
    <hr class="my-2">
    <div class="px-5 text-xs">
      <p class="flex justify-between"><span>{{ name_bank[0] }}</span> <span>{{ amount_money[4] }} ₴</span></p>
      <p class="flex justify-between"><span>{{ name_bank[0] }}, $</span><span>{{ amount_money[2] }} $</span></p>
      <p class="flex justify-between"><span>{{ name_bank[1] }} </span><span>{{ amount_money[5] }} ₴</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Scoreboard',
  data () {
    return {
      amount_money: [
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
  hr {
    border-color: #dcdcdc;
}
  .text-gray-500 {
    color: rgba(46, 46, 46, 0.5);
  }
</style>
