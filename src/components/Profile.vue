<template>
  <div class="profile flex justify-between items-center w-full h-20 text-center px-8 mt-4 rounded-lg">
        <img class="w-10 h-10 mr-4 rounded-full" src="~@/assets/img/face.png" alt="Face">
      <div class="text-left text-sm">
        <p class="inline-block w-2/3">Сергей Василенко</p>
        <p class="inline-block w-2/3">Newage Systems</p>
      </div>
    <div>
        <img class="mb-2" src="~@/assets/img/settings-icon.svg" alt="Settings icon">
        <img class="mt-2" src="~@/assets/img/help-icon.svg" alt="Help icon">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js my project'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .profile {
    background-color: #eeeeee;
  }
</style>
