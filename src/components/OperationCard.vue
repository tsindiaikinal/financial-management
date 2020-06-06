 <template>
  <div class="">
      <p class="inline-block">{{ nameBuyer }}</p>
      <p class="inline-block">{{ nameResource }}</p>
      <p class="inline-block">{{ typeService }}</p>
      <div class="inline-block">{{ status }}</div>
      <div class="inline-block">{{ countMoney }}</div>
  </div>
</template>

<script>
export default {
  name: 'OperationCard',
  data () {
    return {
      nameBuyer: 'Den',
      nameResource: 'VolksWagen',
      typeService: 'Google AdWards',
      status: 'PAYED',
      countMoney: 2300
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>
