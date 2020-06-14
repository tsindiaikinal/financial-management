 <template>
  <div class="flex justify-between items-center py-4">
      <p class="inline-block h-full">{{ nameBuyer }}</p>
      <p class="inline-block h-full">{{ nameResource }}</p>
      <p class="inline-block w-64 h-full text-sm">{{ typeService }}</p>
      <div class="status inline-block text-xs py-1 px-3 rounded-lg">{{ status }}</div>
      <div class="inline-block a-money text-base font-medium">{{ amountMoney }} ₴</div>
  </div>
</template>

<script>
export default {
  props: {
    nameBuyer: String,
    nameResource: String,
    typeService: String,
    status: String,
    amountMoney: String
  },
  name: 'OperationCard',
  data () {
    return {
      // nameBuyer: 'Den',
      // nameResource: 'VolksWagen',
      // typeService: 'Google AdWards',
      // status: 'Оплачено',
      // amountMoney: 2300
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  .a-money {
    color: #1A8D5F;
  }
  .status {
    background-color: #D7EAE3;
    color: #167951;
  }
</style>
