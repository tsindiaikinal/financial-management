 <template>
  <div class="w-full my-4 flex justify-between items-center">
    <hr class="w-2/5" />
    <span class="text-color w-1/3 text-center pb-0 font-medium">
      Копировать операцию
      <span class="copy-item inline-block w-8 h-8 -mt-2 p-2 rounded-full bg-gray-300">
      </span>
    </span>
    <hr class="w-2/5" />
  </div>
</template>

<script>
export default {
  name: 'CopyOperation',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

  .text-color {
    color: rgba($color: #2e2e2e, $alpha: .6);
  }
  .bg-gray-300 {
    background-color: #eaeaea;
  }
  .copy-item::after {
    content: url(~@/assets/img/copy-icon.svg);
  }
</style>
