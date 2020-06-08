<template>
  <div class="relative">
    <main>
      <app-diagram></app-diagram>
        <nav>
          <div>
            <label for="sortbydate">Группировать:</label
            ><select name="sort_by_date" id="sortbydate">
              <option value="bydate">По дате</option>
              <option value="bytime">По времени</option>
              <option value="byname">По имени</option>
              <option value="bypay">По оплате</option>
            </select>
          </div>
          <div>
            <span>Вид: </span>
            <div>VIEW</div>
            <div>CALEDAR</div>
          </div>
          <div>
            <div>ALL OPERATION</div>
            <div>FUTURE</div>
            <div>PAST</div>
          </div>
        </nav>
        <div>
          <app-add></app-add>
        </div>
        <section class="pt-10 pl-10 pb-12" title="data">
          <!-- COMPONENTS -->
          <app-opercard></app-opercard>
          <app-copy></app-copy>
          <app-add></app-add>
        </section>
        <div class="absolute bottom-0 flex justify-between w-3/4 ml-8 pr-2 pb-2">
          <app-operation></app-operation>
          <app-delete></app-delete>
        </div>
      </main>
  </div>
</template>
<script>
export default {

}
</script>

<style lang="scss"></style>
