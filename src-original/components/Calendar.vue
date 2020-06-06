<template>
  <div class="w-48 flex justify-between">
    <button class="w-10 h-10 border border-gray-400 rounded-lg"><img class="inline-block h-3" src="~@/assets/img/angle-left.svg" alt="Angle left"></button>
    <div class="table w-24 h-10 mt-0 border border-gray-400 rounded-lg text-center">
     <div class="table-cell month align-middle">Июль</div>
    </div>
    <button class="w-10 h-10 border rounded-lg"><img class="inline-block h-3 -rotate-180" src="~@/assets/img/angle-right.svg" alt="Angle right"></button>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js my project'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .month::before {
    display: inline-block;
    content: url(~@/assets/img/calendar-icon.svg);
    margin-top: 2px;
    margin-right: 10px;
    vertical-align: middle;
  }
</style>
