<template>
  <div class="">
      <nav class="flex justify-between">
        <app-calendar></app-calendar>
        <app-search></app-search>
        <div class="w-2/5 ml-8 pl-6">
          <div class="flex border bg-gray-200 rounded-lg">
            <app-filter></app-filter>
            <div class="w-40 ml-4 flex justify-between items-center">
              <app-users></app-users>
              <app-users></app-users>
              <app-users></app-users>
              <app-users></app-users>
              <app-adduser></app-adduser>
            </div>
          </div>
        </div>
      </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

</style>
