 <template>
  <div class="">
    <ul class="mt-6">
          <li class=""><a class="icon-1 inline-block w-full h-10 pt-2 pl-3 mb-3 rounded-lg text-lg text-black-700 bg-gray-200" href="#">{{ menu_text1 }}</a></li>
          <li><a class="icon-2 inline-block w-full h-10 pt-2 pl-3 mb-3 rounded-lg text-lg text-gray-700" href="#">{{ menu_text2 }}</a></li>
          <li><a class="icon-3 inline-block w-full h-10 pt-2 pl-3 mb-3 rounded-lg text-lg text-gray-700" href="#">{{ menu_text3}}</a></li>
          <li><a class="icon-4 inline-block w-full h-10 pt-2 pl-3 mb-3 rounded-lg text-lg text-gray-700" href="#">{{ menu_text4 }}</a></li>
          <li><a class="icon-5 inline-block w-full h-10 pt-2 pl-3 mb-3 rounded-lg text-lg text-gray-700" href="#">{{ menu_text5 }}</a></li>
          <li><a class="icon-6 inline-block w-full h-10 pt-2 pl-3 mb-3 rounded-lg text-lg text-gray-700" href="#">{{ menu_text6 }}</a></li>
        </ul>
  </div>
</template>

<script>
export default {
  name: 'RightMenu',
  data () {
    return {
      menu_text1: 'Операции',
      menu_text2: 'Отчеты',
      menu_text3: 'Контрагенты',
      menu_text4: 'Проекты',
      menu_text5: 'Статьи расходов',
      menu_text6: 'Сотрудники'
      // msg: 'Welcome to Your Vue.js my project'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .icon-1::before,
  .icon-2::before,
  .icon-3::before,
  .icon-4::before,
  .icon-5::before,
  .icon-6::before {
    width: 1rem;
    height: 1rem;
    margin-right: 8px;
    vertical-align: middle;
  }
  .icon-1::before {
    content: url(~@/assets/img/operation-icon.svg);
  }
  .icon-2::before {
    content: url(~@/assets/img/reports-icon.svg);
  }
  .icon-3::before {
    content: url(~@/assets/img/contragents-icon.svg);
  }
  .icon-4::before {
    content: url(~@/assets/img/union-icon.svg);
  }
  .icon-5::before {
    content: url(~@/assets/img/accounts-icon.svg);
  }
  .icon-6::before {
    content: url(~@/assets/img/person-icon.svg);
  }
</style>
